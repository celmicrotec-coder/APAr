function fillCategoryOptions(categories) {
  const select = document.querySelector('select[name="category"]');
  if (!select) return;

  select.innerHTML = categories.map((category) => `<option value="${category}">${category}</option>`).join("");
}

function getField(form, name) {
  return form.elements.namedItem(name);
}

function bindImagePicker(form) {
  const fileInput = getField(form, "imageFile");
  const imageInput = getField(form, "image");
  if (!fileInput || !imageInput) return;

  fileInput.addEventListener("change", () => {
    const file = fileInput.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      window.alert("Elegí un archivo de imagen válido.");
      fileInput.value = "";
      return;
    }

    const maxSize = 900 * 1024;
    if (file.size > maxSize) {
      window.alert("Para esta demo, usá una imagen menor a 900 KB. En producción la subiremos a Supabase Storage.");
      fileInput.value = "";
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      imageInput.value = String(reader.result);
    });
    reader.readAsDataURL(file);
  });
}

function renderStoriesTable() {
  const data = getSiteData();
  const target = document.getElementById("storiesTable");
  if (!target) return;

  const stories = getSortedStories(data);
  if (!stories.length) {
    target.innerHTML = `<div class="empty-state">Todavía no hay notas cargadas.</div>`;
    return;
  }

  target.innerHTML = stories.map((story) => `
    <article class="story-row">
      <div>
        <strong>${story.title}</strong>
        <p class="meta-line">${story.excerpt}</p>
      </div>
      <div>${story.category}</div>
      <div>${formatDate(story.publishedAt)}</div>
      <div class="story-row__actions">
        <a class="button button--ghost" href="${createStoryLink(story)}">Ver</a>
        <button type="button" class="button button--ghost" data-edit-id="${story.id}">Editar</button>
        <button type="button" class="button button--ghost" data-delete-id="${story.id}">Borrar</button>
      </div>
    </article>
  `).join("");
}

function renderAdsTable() {
  const data = getSiteData();
  const target = document.getElementById("adsTable");
  if (!target) return;

  if (!data.ads?.length) {
    target.innerHTML = `<div class="empty-state">Todavía no hay publicidades cargadas.</div>`;
    return;
  }

  target.innerHTML = data.ads.map((ad) => `
    <article class="story-row ad-row">
      <div>
        <strong>${ad.title}</strong>
        <p class="meta-line">${ad.description}</p>
      </div>
      <div>${ad.label || "Publicidad"}</div>
      <div class="story-row__actions">
        <a class="button button--ghost" href="${ad.url}" target="_blank" rel="noopener noreferrer">Ver link</a>
        <button type="button" class="button button--ghost" data-edit-ad-id="${ad.id}">Editar</button>
        <button type="button" class="button button--ghost" data-delete-ad-id="${ad.id}">Borrar</button>
      </div>
    </article>
  `).join("");
}

function renderAdPreview() {
  const data = getSiteData();
  const target = document.getElementById("adPreview");
  if (!target) return;

  const ad = data.ads?.[0];
  if (!ad) {
    target.innerHTML = `<div class="empty-state">La publicidad activa se previsualiza acá.</div>`;
    return;
  }

  target.innerHTML = `
    <p class="eyebrow">Vista previa</p>
    <a class="sponsor-card" href="${ad.url}" target="_blank" rel="noopener noreferrer">
      <span class="sponsor-card__label">${ad.label || "Publicidad"}</span>
      ${isDirectImageUrl(ad.image)
        ? `<span class="sponsor-card__image" style="background-image:url('${ad.image}')"></span>`
        : `<span class="sponsor-card__image sponsor-card__image--link">Foto</span>`}
      <span class="sponsor-card__body">
        <strong>${ad.title}</strong>
        <small>${ad.description}</small>
      </span>
      <span class="sponsor-card__cta">Abrir</span>
    </a>
  `;
}

function populateSettingsForm() {
  const data = getSiteData();
  const form = document.getElementById("settingsForm");
  if (!form) return;
  getField(form, "siteName").value = data.settings.siteName;
  getField(form, "tagline").value = data.settings.tagline;
}

function resetStoryForm() {
  const data = getSiteData();
  const form = document.getElementById("storyForm");
  if (!form) return;

  form.reset();
  getField(form, "id").value = "";
  fillCategoryOptions(data.categories);
}

function resetAdForm() {
  const form = document.getElementById("adForm");
  if (!form) return;

  form.reset();
  getField(form, "id").value = "";
  getField(form, "label").value = "Publicidad";
}

function fillStoryForm(storyId) {
  const data = getSiteData();
  const story = data.stories.find((item) => item.id === storyId);
  const form = document.getElementById("storyForm");
  if (!story || !form) return;

  getField(form, "id").value = story.id;
  getField(form, "title").value = story.title;
  getField(form, "excerpt").value = story.excerpt;
  getField(form, "category").value = story.category;
  getField(form, "author").value = story.author;
  getField(form, "image").value = story.image;
  getField(form, "featured").checked = story.featured;
  getField(form, "editorsPick").checked = story.editorsPick;
  getField(form, "content").value = story.content;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function saveStory(form) {
  const data = getSiteData();
  const now = new Date().toISOString().slice(0, 10);
  const id = getField(form, "id").value || `story-${Date.now()}`;
  const existingStory = data.stories.find((item) => item.id === id);
  const story = {
    id,
    title: getField(form, "title").value.trim(),
    excerpt: getField(form, "excerpt").value.trim(),
    category: getField(form, "category").value,
    author: getField(form, "author").value.trim(),
    image: getField(form, "image").value.trim(),
    featured: getField(form, "featured").checked,
    editorsPick: getField(form, "editorsPick").checked,
    publishedAt: now,
    content: getField(form, "content").value.trim(),
    sourceLabel: existingStory?.sourceLabel || "",
    sourceUrl: existingStory?.sourceUrl || ""
  };

  const existingIndex = data.stories.findIndex((item) => item.id === id);
  if (existingIndex >= 0) {
    story.publishedAt = data.stories[existingIndex].publishedAt;
    data.stories[existingIndex] = story;
  } else {
    data.stories.unshift(story);
  }

  setSiteData(data);
  return story;
}

function showPublishFeedback(story) {
  const target = document.getElementById("publishFeedback");
  if (!target) return;

  const featuredMessage = story.featured
    ? " Como está marcada como destacada, puede aparecer en la portada principal."
    : " Si querés que aparezca como imagen principal de portada, marcala como destacada.";

  target.classList.remove("hidden");
  target.innerHTML = `
    <strong>Nota guardada.</strong>
    ${featuredMessage}
    Ya podés verla en <a href="${createStoryLink(story)}">su página</a> o volver a <a href="index.html?v=${Date.now()}">la portada actualizada</a>.
  `;
}

function removeStory(id) {
  const data = getSiteData();
  data.stories = data.stories.filter((story) => story.id !== id);
  setSiteData(data);
}

function fillAdForm(adId) {
  const data = getSiteData();
  const ad = data.ads?.find((item) => item.id === adId);
  const form = document.getElementById("adForm");
  if (!ad || !form) return;

  getField(form, "id").value = ad.id;
  getField(form, "label").value = ad.label || "Publicidad";
  getField(form, "title").value = ad.title;
  getField(form, "description").value = ad.description;
  getField(form, "image").value = ad.image;
  getField(form, "url").value = ad.url;
}

function saveAd(form) {
  const data = getSiteData();
  const id = getField(form, "id").value || `ad-${Date.now()}`;
  const ad = {
    id,
    label: getField(form, "label").value.trim() || "Publicidad",
    title: getField(form, "title").value.trim(),
    description: getField(form, "description").value.trim(),
    image: getField(form, "image").value.trim(),
    url: getField(form, "url").value.trim()
  };

  const ads = Array.isArray(data.ads) ? data.ads : [];
  const existingIndex = ads.findIndex((item) => item.id === id);
  if (existingIndex >= 0) {
    ads[existingIndex] = ad;
    data.ads = [ad, ...ads.filter((item) => item.id !== id)];
  } else {
    data.ads = [ad, ...ads];
  }

  setSiteData(data);
  return ad;
}

function showAdFeedback(ad) {
  const target = document.getElementById("adFeedback");
  if (!target) return;

  target.classList.remove("hidden");
  target.innerHTML = `
    <strong>Publicidad guardada.</strong>
    Ya aparece como aviso principal en <a href="index.html?v=${Date.now()}#sponsorStrip">la portada actualizada</a>.
  `;
}

function removeAd(id) {
  const data = getSiteData();
  data.ads = (data.ads || []).filter((ad) => ad.id !== id);
  setSiteData(data);
}

function togglePanels() {
  const session = getSession();
  const loginPanel = document.getElementById("loginPanel");
  const dashboardPanel = document.getElementById("dashboardPanel");
  if (!loginPanel || !dashboardPanel) return;

  loginPanel.classList.toggle("hidden", Boolean(session));
  dashboardPanel.classList.toggle("hidden", !session);

  if (session) {
    const data = getSiteData();
    fillCategoryOptions(data.categories);
    populateSettingsForm();
    renderStoriesTable();
    renderAdsTable();
    renderAdPreview();
    resetStoryForm();
    resetAdForm();
  }
}

function bindAdminEvents() {
  const loginForm = document.getElementById("loginForm");
  const logoutButton = document.getElementById("logoutButton");
  const storyForm = document.getElementById("storyForm");
  const resetFormButton = document.getElementById("resetFormButton");
  const settingsForm = document.getElementById("settingsForm");
  const restoreSeedButton = document.getElementById("restoreSeedButton");
  const storiesTable = document.getElementById("storiesTable");
  const adForm = document.getElementById("adForm");
  const resetAdButton = document.getElementById("resetAdButton");
  const adsTable = document.getElementById("adsTable");

  if (storyForm) bindImagePicker(storyForm);
  if (adForm) bindImagePicker(adForm);

  loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = getSiteData();
    const username = getField(loginForm, "username").value.trim();
    const password = getField(loginForm, "password").value;
    const user = data.users.find((item) => item.username === username && item.password === password);

    if (!user) {
      window.alert("Usuario o contraseña incorrectos.");
      return;
    }

    setSession({ username: user.username, role: user.role });
    togglePanels();
  });

  logoutButton?.addEventListener("click", () => {
    clearSession();
    togglePanels();
  });

  storyForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const story = saveStory(storyForm);
    resetStoryForm();
    renderStoriesTable();
    showPublishFeedback(story);
  });

  resetFormButton?.addEventListener("click", () => {
    resetStoryForm();
    const feedback = document.getElementById("publishFeedback");
    feedback?.classList.add("hidden");
  });

  settingsForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = getSiteData();
    data.settings.siteName = getField(settingsForm, "siteName").value.trim();
    data.settings.tagline = getField(settingsForm, "tagline").value.trim();
    setSiteData(data);
    window.alert("Ajustes guardados.");
  });

  adForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const ad = saveAd(adForm);
    resetAdForm();
    renderAdsTable();
    renderAdPreview();
    showAdFeedback(ad);
  });

  resetAdButton?.addEventListener("click", () => {
    resetAdForm();
    const feedback = document.getElementById("adFeedback");
    feedback?.classList.add("hidden");
  });

  restoreSeedButton?.addEventListener("click", () => {
    resetSiteData();
    populateSettingsForm();
    resetStoryForm();
    renderStoriesTable();
    renderAdsTable();
    renderAdPreview();
    const adFeedback = document.getElementById("adFeedback");
    adFeedback?.classList.add("hidden");
    const feedback = document.getElementById("publishFeedback");
    feedback?.classList.add("hidden");
    window.alert("Contenido demo restaurado.");
  });

  storiesTable?.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const editId = target.dataset.editId;
    const deleteId = target.dataset.deleteId;

    if (editId) {
      fillStoryForm(editId);
    }

    if (deleteId) {
      const confirmed = window.confirm("¿Querés borrar esta nota?");
      if (!confirmed) return;
      removeStory(deleteId);
      renderStoriesTable();
    }
  });

  adsTable?.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const editId = target.dataset.editAdId;
    const deleteId = target.dataset.deleteAdId;

    if (editId) {
      fillAdForm(editId);
    }

    if (deleteId) {
      const confirmed = window.confirm("¿Querés borrar esta publicidad?");
      if (!confirmed) return;
      removeAd(deleteId);
      renderAdsTable();
      renderAdPreview();
    }
  });
}

if (document.body.dataset.page === "admin") {
  togglePanels();
  bindAdminEvents();
}
