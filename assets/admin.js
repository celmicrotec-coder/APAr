function fillCategoryOptions(categories) {
  const select = document.querySelector('select[name="category"]');
  if (!select) return;

  select.innerHTML = categories.map((category) => `<option value="${category}">${category}</option>`).join("");
}

function getField(form, name) {
  return form.elements.namedItem(name);
}

const ADS_PAGE_SIZE = 8;
const adsViewState = {
  query: "",
  sort: "recent",
  page: 1
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function bindImagePickerToField(form, fileFieldName, targetFieldName) {
  const fileInput = getField(form, fileFieldName);
  const imageInput = getField(form, targetFieldName);
  if (!fileInput || !imageInput) return;

  fileInput.addEventListener("change", () => {
    const file = fileInput.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      window.alert("Elegi un archivo de imagen valido.");
      fileInput.value = "";
      return;
    }

    const maxSize = 900 * 1024;
    if (file.size > maxSize) {
      window.alert("Para esta demo, usa una imagen menor a 900 KB. En produccion la subiremos a Supabase Storage.");
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

function bindImagePicker(form) {
  bindImagePickerToField(form, "imageFile", "image");
}

function renderImpactSettingsPreview(url = "") {
  const frame = document.getElementById("impactPreviewFrame");
  if (!frame) return;

  if (isDirectImageUrl(url)) {
    frame.innerHTML = "";
    frame.style.backgroundImage = `linear-gradient(180deg, rgba(255,252,247,0.34), rgba(255,252,247,0.56)), url("${url}")`;
    frame.style.backgroundSize = "cover";
    frame.style.backgroundPosition = "center";
    frame.style.backgroundRepeat = "no-repeat";
    return;
  }

  frame.style.backgroundImage = "none";
  frame.innerHTML = `<span class="impact-preview__empty">Todavia no hay imagen cargada.</span>`;
}

function renderStoriesTable() {
  const data = getSiteData();
  const target = document.getElementById("storiesTable");
  if (!target) return;

  const stories = getSortedStories(data);
  if (!stories.length) {
    target.innerHTML = `<div class="empty-state">Todavia no hay notas cargadas.</div>`;
    return;
  }

  target.innerHTML = stories.map((story) => `
    <article class="story-row">
      <div>
        <strong>${escapeHtml(story.title)}</strong>
        <p class="meta-line">${escapeHtml(story.excerpt)}</p>
      </div>
      <div>${escapeHtml(story.category)}</div>
      <div>${formatDate(story.publishedAt)}</div>
      <div class="story-row__actions">
        <a class="button button--ghost" href="${createStoryLink(story)}">Ver</a>
        <button type="button" class="button button--ghost" data-duplicate-id="${story.id}">Duplicar</button>
        <button type="button" class="button button--ghost" data-edit-id="${story.id}">Editar</button>
        <button type="button" class="button button--ghost" data-delete-id="${story.id}">Borrar</button>
      </div>
    </article>
  `).join("");
}

function renderAdsTable() {
  const data = getSiteData();
  const target = document.getElementById("adsTable");
  const countLabel = document.getElementById("adsCountLabel");
  const pageLabel = document.getElementById("adsPageLabel");
  const prevButton = document.getElementById("adsPrevButton");
  const nextButton = document.getElementById("adsNextButton");
  if (!target) return;

  const ads = Array.isArray(data.ads) ? [...data.ads] : [];
  if (!ads.length) {
    target.innerHTML = `<div class="empty-state">Todavia no hay publicidades cargadas.</div>`;
    if (countLabel) countLabel.textContent = "0 piezas";
    if (pageLabel) pageLabel.textContent = "Pagina 1 de 1";
    if (prevButton) prevButton.disabled = true;
    if (nextButton) nextButton.disabled = true;
    return;
  }

  const normalizedQuery = adsViewState.query.trim().toLowerCase();
  const filteredAds = ads.filter((ad) => {
    if (!normalizedQuery) return true;
    return [ad.title, ad.description, ad.label]
      .filter(Boolean)
      .some((value) => String(value).toLowerCase().includes(normalizedQuery));
  });

  const sortedAds = filteredAds.sort((a, b) => {
    if (adsViewState.sort === "oldest") {
      return Number(String(a.id).split("-").pop()) - Number(String(b.id).split("-").pop());
    }

    if (adsViewState.sort === "title-asc") {
      return String(a.title || "").localeCompare(String(b.title || ""), "es");
    }

    if (adsViewState.sort === "title-desc") {
      return String(b.title || "").localeCompare(String(a.title || ""), "es");
    }

    return Number(String(b.id).split("-").pop()) - Number(String(a.id).split("-").pop());
  });

  const totalPages = Math.max(1, Math.ceil(sortedAds.length / ADS_PAGE_SIZE));
  adsViewState.page = Math.min(adsViewState.page, totalPages);
  const pageStart = (adsViewState.page - 1) * ADS_PAGE_SIZE;
  const pagedAds = sortedAds.slice(pageStart, pageStart + ADS_PAGE_SIZE);

  target.innerHTML = pagedAds.map((ad) => `
    <article class="story-row ad-row">
      <div>
        <strong>${escapeHtml(ad.title)}</strong>
        <p class="meta-line">${escapeHtml(ad.description)}</p>
      </div>
      <div>${escapeHtml(ad.label || "Publicidad")}</div>
      <div class="story-row__actions">
        <a class="button button--ghost" href="${ad.url}" target="_blank" rel="noopener noreferrer">Ver link</a>
        <button type="button" class="button button--ghost" data-duplicate-ad-id="${ad.id}">Duplicar</button>
        <button type="button" class="button button--ghost" data-edit-ad-id="${ad.id}">Editar</button>
        <button type="button" class="button button--ghost" data-delete-ad-id="${ad.id}">Borrar</button>
      </div>
    </article>
  `).join("");

  if (!pagedAds.length) {
    target.innerHTML = `<div class="empty-state">No hay publicidades que coincidan con la busqueda.</div>`;
  }

  if (countLabel) {
    countLabel.textContent = `${filteredAds.length} ${filteredAds.length === 1 ? "pieza" : "piezas"}`;
  }

  if (pageLabel) {
    pageLabel.textContent = `Pagina ${adsViewState.page} de ${totalPages}`;
  }

  if (prevButton) prevButton.disabled = adsViewState.page <= 1;
  if (nextButton) nextButton.disabled = adsViewState.page >= totalPages;
}

function renderAdPreview() {
  const data = getSiteData();
  const target = document.getElementById("adPreview");
  if (!target) return;

  const ad = data.ads?.[0];
  if (!ad) {
    target.innerHTML = `<div class="empty-state">La publicidad activa se previsualiza aca.</div>`;
    return;
  }

  target.innerHTML = `
    <p class="eyebrow">Vista previa</p>
    <a class="sponsor-card" href="${ad.url}" target="_blank" rel="noopener noreferrer">
      <span class="sponsor-card__label">${escapeHtml(ad.label || "Publicidad")}</span>
      ${isDirectImageUrl(ad.image)
        ? `<span class="sponsor-card__image" style="background-image:url('${ad.image}')"></span>`
        : `<span class="sponsor-card__image sponsor-card__image--link">Foto</span>`}
      <span class="sponsor-card__body">
        <strong>${escapeHtml(ad.title)}</strong>
        <small>${escapeHtml(ad.description)}</small>
      </span>
      <span class="sponsor-card__cta">Abrir</span>
    </a>
  `;
}

function populateSettingsForm() {
  const data = getSiteData();
  const form = document.getElementById("settingsForm");
  if (!form) return;
  const impactStrip = getImpactStripConfig(data);
  getField(form, "siteName").value = data.settings.siteName;
  getField(form, "tagline").value = data.settings.tagline;
  getField(form, "impactBackgroundImage").value = impactStrip.backgroundImage || "";
  renderImpactSettingsPreview(impactStrip.backgroundImage || "");
  impactStrip.cards.forEach((card, index) => {
    const cardIndex = index + 1;
    getField(form, `impactLabel${cardIndex}`).value = card.label || "";
    getField(form, `impactTitle${cardIndex}`).value = card.title || "";
    getField(form, `impactText${cardIndex}`).value = card.text || "";
  });
}

function resetStoryForm() {
  const data = getSiteData();
  const form = document.getElementById("storyForm");
  if (!form) return;

  form.reset();
  getField(form, "id").value = "";
  fillCategoryOptions(data.categories);
  getField(form, "featuredTextPosition").value = "auto";
  getField(form, "publishedAt").value = toDateTimeLocalValue(new Date().toISOString());
  getField(form, "featuredOrder").value = "";
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
  getField(form, "publishedAt").value = toDateTimeLocalValue(story.publishedAt);
  getField(form, "featuredOrder").value = story.featuredOrder || "";
  getField(form, "image").value = story.image;
  getField(form, "videoUrl").value = story.videoUrl || "";
  getField(form, "featured").checked = story.featured;
  getField(form, "editorsPick").checked = story.editorsPick;
  getField(form, "featuredTextPosition").value = story.featuredTextPosition || "auto";
  getField(form, "content").value = story.content;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function saveStory(form) {
  const data = getSiteData();
  const now = toDateTimeLocalValue(new Date().toISOString());
  const id = getField(form, "id").value || `story-${Date.now()}`;
  const existingStory = data.stories.find((item) => item.id === id);
  const story = {
    id,
    title: getField(form, "title").value.trim(),
    excerpt: getField(form, "excerpt").value.trim(),
    category: getField(form, "category").value,
    author: getField(form, "author").value.trim(),
    image: getField(form, "image").value.trim(),
    videoUrl: getField(form, "videoUrl").value.trim(),
    featured: getField(form, "featured").checked,
    editorsPick: getField(form, "editorsPick").checked,
    featuredTextPosition: getField(form, "featuredTextPosition").value || "auto",
    publishedAt: getField(form, "publishedAt").value || now,
    featuredOrder: getField(form, "featuredOrder").value ? Number(getField(form, "featuredOrder").value) : null,
    content: getField(form, "content").value.trim(),
    sourceLabel: existingStory?.sourceLabel || "",
    sourceUrl: existingStory?.sourceUrl || ""
  };

  const existingIndex = data.stories.findIndex((item) => item.id === id);
  if (existingIndex >= 0) {
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
    ? " Como esta marcada como destacada, puede aparecer en la portada principal."
    : " Si queres que aparezca como imagen principal de portada, marcala como destacada.";

  target.classList.remove("hidden");
  target.innerHTML = `
    <strong>Nota guardada.</strong>
    ${featuredMessage}
    Ya podes verla en <a href="${createStoryLink(story)}">su pagina</a> o volver a <a href="index.html?v=${Date.now()}">la portada actualizada</a>.
  `;
}

function removeStory(id) {
  const data = getSiteData();
  data.stories = data.stories.filter((story) => story.id !== id);
  setSiteData(data);
}

function duplicateStory(id) {
  const data = getSiteData();
  const sourceStory = data.stories.find((story) => story.id === id);
  if (!sourceStory) return null;

  const duplicate = {
    ...sourceStory,
    id: `story-${Date.now()}`,
    title: `${sourceStory.title} (Copia)`,
    publishedAt: toDateTimeLocalValue(new Date().toISOString())
  };

  data.stories.unshift(duplicate);
  setSiteData(data);
  return duplicate;
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
    Ya aparece en <a href="index.html?v=${Date.now()}">la portada actualizada</a>.
  `;
}

function removeAd(id) {
  const data = getSiteData();
  data.ads = (data.ads || []).filter((ad) => ad.id !== id);
  setSiteData(data);
}

function duplicateAd(id) {
  const data = getSiteData();
  const sourceAd = (data.ads || []).find((ad) => ad.id === id);
  if (!sourceAd) return null;

  const duplicate = {
    ...sourceAd,
    id: `ad-${Date.now()}`,
    title: `${sourceAd.title} (Copia)`
  };

  data.ads = [duplicate, ...(data.ads || [])];
  setSiteData(data);
  return duplicate;
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
  const adsSearchInput = document.getElementById("adsSearchInput");
  const adsSortSelect = document.getElementById("adsSortSelect");
  const adsPrevButton = document.getElementById("adsPrevButton");
  const adsNextButton = document.getElementById("adsNextButton");

  if (storyForm) bindImagePicker(storyForm);
  if (adForm) bindImagePicker(adForm);
  if (settingsForm) bindImagePickerToField(settingsForm, "impactBackgroundFile", "impactBackgroundImage");
  if (adsSearchInput) adsSearchInput.value = adsViewState.query;
  if (adsSortSelect) adsSortSelect.value = adsViewState.sort;

  getField(settingsForm, "impactBackgroundImage")?.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    renderImpactSettingsPreview(target.value.trim());
  });

  loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = getSiteData();
    const username = getField(loginForm, "username").value.trim();
    const password = getField(loginForm, "password").value;
    const user = data.users.find((item) => item.username === username && item.password === password);

    if (!user) {
      window.alert("Usuario o contrasena incorrectos.");
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
    const imageValue = getField(storyForm, "image").value.trim();
    const videoValue = getField(storyForm, "videoUrl").value.trim();
    if (!imageValue && !videoValue) {
      window.alert("Agrega una imagen o una URL de video para la publicacion.");
      return;
    }
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
    data.settings.impactStrip = {
      backgroundImage: getField(settingsForm, "impactBackgroundImage").value.trim(),
      cards: [1, 2, 3].map((index) => ({
        label: getField(settingsForm, `impactLabel${index}`).value.trim(),
        title: getField(settingsForm, `impactTitle${index}`).value.trim(),
        text: getField(settingsForm, `impactText${index}`).value.trim()
      }))
    };
    setSiteData(data);
    renderImpactSettingsPreview(data.settings.impactStrip.backgroundImage);
    window.alert("Ajustes guardados.");
  });

  adForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const ad = saveAd(adForm);
    adsViewState.page = 1;
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

  adsSearchInput?.addEventListener("input", () => {
    adsViewState.query = adsSearchInput.value;
    adsViewState.page = 1;
    renderAdsTable();
  });

  adsSortSelect?.addEventListener("change", () => {
    adsViewState.sort = adsSortSelect.value;
    adsViewState.page = 1;
    renderAdsTable();
  });

  adsPrevButton?.addEventListener("click", () => {
    adsViewState.page = Math.max(1, adsViewState.page - 1);
    renderAdsTable();
  });

  adsNextButton?.addEventListener("click", () => {
    adsViewState.page += 1;
    renderAdsTable();
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
    const duplicateId = target.dataset.duplicateId;
    const deleteId = target.dataset.deleteId;

    if (editId) {
      fillStoryForm(editId);
    }

    if (duplicateId) {
      const duplicatedStory = duplicateStory(duplicateId);
      renderStoriesTable();
      if (duplicatedStory) {
        showPublishFeedback(duplicatedStory);
      }
    }

    if (deleteId) {
      const confirmed = window.confirm("¿Queres borrar esta nota?");
      if (!confirmed) return;
      removeStory(deleteId);
      renderStoriesTable();
    }
  });

  adsTable?.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const editId = target.dataset.editAdId;
    const duplicateId = target.dataset.duplicateAdId;
    const deleteId = target.dataset.deleteAdId;

    if (editId) {
      fillAdForm(editId);
    }

    if (duplicateId) {
      const duplicatedAd = duplicateAd(duplicateId);
      adsViewState.page = 1;
      renderAdsTable();
      renderAdPreview();
      if (duplicatedAd) {
        showAdFeedback(duplicatedAd);
      }
    }

    if (deleteId) {
      const confirmed = window.confirm("¿Queres borrar esta publicidad?");
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


