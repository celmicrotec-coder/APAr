const STORAGE_KEY = "atlas-journal-data";
const SESSION_KEY = "atlas-journal-session";
const DATA_VERSION = 4;

const seedData = {
  version: DATA_VERSION,
  settings: {
    siteName: "Atlas Press Argentina",
    tagline: "Buenas noticias, campañas humanitarias y encuentros interreligiosos con foco en Scientology Argentina."
  },
  users: [
    { username: "admin", password: "admin123", role: "editor" }
  ],
  categories: ["Interreligioso", "Derechos Humanos", "Prevención", "Comunidad", "Libertad Religiosa", "Salud y Derechos", "Historias"],
  ads: [
    {
      id: "ad-1",
      label: "Publicidad",
      title: "Espacio para sponsor institucional",
      description: "Difundí una campaña, evento o servicio alineado con buenas noticias y comunidad.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=500&q=80",
      url: "https://example.com"
    }
  ],
  stories: [
    {
      id: "story-1",
      title: "Buenos Aires suma una señal concreta de armonía interreligiosa con presencia de Scientology Argentina",
      excerpt: "Un encuentro por la Semana Mundial de la Armonía Interconfesional reunió en Buenos Aires a referentes judíos, musulmanes, mormones, católicos y de Scientology.",
      category: "Interreligioso",
      author: "Redacción",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
      featured: true,
      editorsPick: true,
      publishedAt: "2026-04-15",
      sourceLabel: "UPF",
      sourceUrl: "https://www.upf.org/post/argentine-gathering-embodies-interfaith-harmony-and-fraternity",
      content: "La mejor prueba local para esta portada apareció en Buenos Aires. La Universal Peace Federation reportó un encuentro por la Semana Mundial de la Armonía Interconfesional y el Día Internacional de la Fraternidad Humana realizado el 22 de febrero de 2024.\n\nSegún esa publicación, participaron referentes de distintas comunidades de fe y Gustavo Libardi, presidente de Scientology Argentina, compartió reflexiones junto a representantes judíos, musulmanes, mormones y católicos. La nota destaca un clima de amistad, oración, poesía y compromiso con la paz.\n\nPara la identidad del sitio, este tipo de cobertura es ideal: muestra convivencia real, buenos vínculos entre credos y una agenda pública positiva que puede convertirse en uno de los ejes centrales de la portada."
    },
    {
      id: "story-2",
      title: "Buenos Aires y La Plata: voluntarios difunden La Verdad sobre las Drogas en espacios públicos",
      excerpt: "Una nota oficial de Scientology News describe acciones de verano en Argentina con entrega de miles de folletos informativos para jóvenes.",
      category: "Prevención",
      author: "Redacción",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1519996521430-1214985df35f?auto=format&fit=crop&w=1200&q=80",
      featured: true,
      editorsPick: true,
      publishedAt: "2026-04-14",
      sourceLabel: "Scientology News",
      sourceUrl: "https://www.scientologynews.org/press-releases/buenos-aires-volunteers-spread-the-truth-about-drugs.html",
      content: "Entre los ejemplos más concretos para una web centrada en buenas noticias en Argentina aparece una acción de prevención vinculada a La Verdad sobre las Drogas. Scientology News informó sobre voluntarios en Buenos Aires y La Plata que distribuyeron material educativo a jóvenes durante actividades de verano.\n\nSegún la publicación, durante un concierto en Plaza Moreno se entregaron alrededor de 3.000 folletos para acercar información sobre efectos y riesgos de distintas drogas. El valor periodístico de este tipo de cobertura está en mostrar acciones de base, presencia territorial y mensajes preventivos dirigidos a la comunidad.\n\nPara el sitio, este tipo de nota puede funcionar muy bien en portada porque combina agenda local, foco social y una narrativa claramente positiva."
    },
    {
      id: "story-3",
      title: "Jóvenes por los Derechos Humanos aporta un formato claro para escuelas, talleres y acciones juveniles",
      excerpt: "El sitio oficial organiza la enseñanza de los 30 derechos en piezas breves, material visual y recursos listos para jornadas educativas.",
      category: "Derechos Humanos",
      author: "Redacción",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      editorsPick: true,
      publishedAt: "2026-04-13",
      sourceLabel: "Youth for Human Rights",
      sourceUrl: "https://es.youthforhumanrights.org/es/about-us.html",
      content: "Jóvenes por los Derechos Humanos Internacional se presenta como una organización educativa sin fines de lucro orientada a enseñar a los jóvenes la Declaración Universal de los Derechos Humanos y a inspirarlos a convertirse en defensores de la tolerancia y la paz.\n\nEn su sitio oficial se describen recursos muy visuales y útiles para cobertura periodística: anuncios de servicio público sobre los 30 artículos, materiales para educadores, talleres, campañas artísticas y acciones con grupos juveniles.\n\nPara una web como esta, este contenido permite construir notas de servicio, agendas de eventos, entrevistas y cobertura de actividades educativas con una línea editorial optimista y formativa."
    },
    {
      id: "story-4",
      title: "Unidos por los Derechos Humanos impulsa formación cívica con cursos, guías y material gratuito",
      excerpt: "El programa internacional propone acercar la Declaración Universal a educadores, organizaciones y comunidades de manera práctica.",
      category: "Derechos Humanos",
      author: "Redacción",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      editorsPick: false,
      publishedAt: "2026-04-12",
      sourceLabel: "United for Human Rights",
      sourceUrl: "https://www.humanrights.com/about-us/what-is-united-for-human-rights.html",
      content: "Unidos por los Derechos Humanos se define oficialmente como una organización internacional sin fines de lucro dedicada a implementar la Declaración Universal de los Derechos Humanos a nivel local, regional, nacional e internacional.\n\nSu sitio destaca que ofrece recursos para informar, asistir y unir a individuos, educadores, organizaciones y organismos públicos en torno a la difusión de los derechos humanos. También muestra paquetes educativos, guías docentes, documentales y materiales descargables.\n\nEste tipo de enfoque puede sostener una sección estable dentro del sitio: campañas, recursos, testimonios y convocatorias vinculadas con formación cívica y convivencia."
    },
    {
      id: "story-5",
      title: "El Camino a la Felicidad se presenta como herramienta educativa y de valores para distintos entornos",
      excerpt: "La propuesta reúne 21 preceptos de sentido común y cuenta con materiales para escuelas, familias y programas comunitarios.",
      category: "Comunidad",
      author: "Redacción",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      editorsPick: false,
      publishedAt: "2026-04-11",
      sourceLabel: "The Way to Happiness",
      sourceUrl: "https://es.education.thewaytohappiness.org/",
      content: "El sitio oficial de El Camino a la Felicidad presenta esta iniciativa como una guía de sentido común para vivir mejor, con amplia difusión internacional y desarrollo de materiales educativos complementarios.\n\nAdemás del libro y sus 21 preceptos, la plataforma muestra academias online, planes de lecciones, afiches, folletos y contenidos de apoyo para programas de formación. Esa combinación hace que la campaña pueda cubrirse desde distintos ángulos: educación, comunidad, valores, prevención y servicio.\n\nEditorialmente, esta línea puede traducirse en historias sobre talleres, jornadas solidarias, experiencias escolares y testimonios de aplicación concreta."
    },
    {
      id: "story-6",
      title: "Voces para la Humanidad ayuda a convertir campañas sociales en historias periodísticas cercanas",
      excerpt: "La serie de Scientology Network funciona como referencia para un periodismo de impacto humano, con protagonistas, testimonios y resultados visibles.",
      category: "Interreligioso",
      author: "Redacción",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      editorsPick: false,
      publishedAt: "2026-04-10",
      sourceLabel: "Scientology Network",
      sourceUrl: "https://www.scientology.tv/es/series/voices-for-humanity/",
      content: "Voces para la Humanidad ofrece una estructura narrativa muy útil para este proyecto: una persona, una comunidad, un problema concreto y una acción positiva que genera resultados visibles.\n\nTomado como inspiración editorial, ese modelo encaja perfectamente con campañas como La Verdad sobre las Drogas, El Camino a la Felicidad, Jóvenes por los Derechos Humanos o actividades de diálogo interreligioso. Cada nota puede pasar de la agenda al testimonio y del testimonio al impacto.\n\nEso ayuda a diferenciar el sitio de un portal de noticias tradicional: no solo informa que hubo un evento, sino que muestra para qué sirvió y a quién benefició."
    },
    {
      id: "story-7",
      title: "CCHR suma otra línea editorial posible: denuncias, prevención y derechos del paciente",
      excerpt: "La Comisión de Ciudadanos por los Derechos Humanos presenta recursos informativos, campañas y documentales sobre abusos en salud mental.",
      category: "Salud y Derechos",
      author: "Redacción",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      editorsPick: false,
      publishedAt: "2026-04-09",
      sourceLabel: "CCHR",
      sourceUrl: "https://www.cchr.org/about-us/what-is-cchr.html",
      content: "Para incorporar CCHR a la prueba, tomamos como base su presentación institucional y sus materiales públicos. La organización se describe como una entidad sin fines de lucro dedicada a investigar y exponer abusos o prácticas coercitivas en el campo de la salud mental.\n\nMás allá de la postura crítica de sus campañas, desde el punto de vista editorial abre una línea concreta de cobertura: derechos del paciente, consentimiento informado, conferencias, campañas públicas, materiales educativos y documentales.\n\nSi querés, en la siguiente iteración esta sección puede separarse mejor del bloque interreligioso para darle una identidad propia dentro del menú y la portada."
    },
    {
      id: "story-test-atlas",
      title: "Publicacion de prueba: jornada solidaria y dialogo comunitario en Buenos Aires",
      excerpt: "Esta nota de prueba sirve para verificar que el flujo editorial funcione bien en portada, en categorias y en la vista individual del articulo.",
      category: "Comunidad",
      author: "Redaccion Atlas Press",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      editorsPick: true,
      publishedAt: "2026-04-17",
      sourceLabel: "Prueba interna",
      sourceUrl: "",
      content: "Esta publicacion de prueba fue creada para validar el funcionamiento del sitio antes de publicarlo en internet. La idea es comprobar que el contenido aparezca correctamente en la portada, en la grilla de noticias, en la seccion destacada y en la pagina individual del articulo.\n\nTambien sirve para revisar tipografia, imagen, jerarquia visual y consistencia del panel de administracion. En una siguiente etapa, este mismo flujo sera reemplazado por una base de datos real con autenticacion segura.\n\nSi esta nota se ve bien y se puede editar sin problemas, significa que la demo ya esta bastante madura para seguir afinando detalles sin depender de intervenciones innecesarias."
    }
  ]
};

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function getSiteData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
    return deepClone(seedData);
  }

  try {
    const parsed = JSON.parse(raw);
    const data = {
      version: parsed.version || 1,
      settings: parsed.settings || deepClone(seedData.settings),
      users: parsed.users || deepClone(seedData.users),
      categories: parsed.categories || deepClone(seedData.categories),
      ads: Array.isArray(parsed.ads) ? parsed.ads : deepClone(seedData.ads),
      stories: Array.isArray(parsed.stories) ? parsed.stories : deepClone(seedData.stories)
    };

    if (data.version < DATA_VERSION) {
      const migrated = migrateSiteData(data);
      setSiteData(migrated);
      return migrated;
    }

    return data;
  } catch (error) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
    return deepClone(seedData);
  }
}

function setSiteData(data) {
  data.version = DATA_VERSION;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function resetSiteData() {
  setSiteData(deepClone(seedData));
}

function migrateSiteData(data) {
  const migrated = {
    version: DATA_VERSION,
    settings: {
      ...deepClone(seedData.settings),
      ...(data.settings || {})
    },
    users: Array.isArray(data.users) && data.users.length ? data.users : deepClone(seedData.users),
    categories: Array.isArray(data.categories) && data.categories.length ? data.categories : deepClone(seedData.categories),
    ads: Array.isArray(data.ads) && data.ads.length ? data.ads : deepClone(seedData.ads),
    stories: Array.isArray(data.stories) && data.stories.length ? data.stories : deepClone(seedData.stories)
  };

  const legacyNames = ["Puentes de Esperanza", "Atlas Journal", "Atlas Argentino"];
  const shouldRefreshSeedContent =
    legacyNames.includes(migrated.settings.siteName) &&
    (!Array.isArray(data.stories) || data.stories.length <= seedData.stories.length);

  if (shouldRefreshSeedContent) {
    migrated.settings = deepClone(seedData.settings);
    migrated.categories = deepClone(seedData.categories);
    migrated.ads = deepClone(seedData.ads);
    migrated.stories = deepClone(seedData.stories);
  }

  if (!migrated.settings.siteName || !migrated.settings.siteName.trim()) {
    migrated.settings.siteName = seedData.settings.siteName;
  }

  if (!migrated.settings.tagline || !migrated.settings.tagline.trim()) {
    migrated.settings.tagline = seedData.settings.tagline;
  }

  return migrated;
}

function getSession() {
  const raw = localStorage.getItem(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}

function setSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatDate(value) {
  const date = value ? new Date(`${value}T12:00:00`) : new Date();
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(date);
}

function getSortedStories(data) {
  return [...data.stories].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

function setCurrentDate() {
  const target = document.getElementById("currentDate");
  if (target) {
    target.textContent = formatDate(new Date().toISOString().slice(0, 10));
  }
}

function renderSectionNav(data) {
  const nav = document.getElementById("sectionNav");
  if (!nav) return;
  const basePage = document.body.dataset.page === "home" ? "" : "index.html";

  nav.innerHTML = data.categories
    .map((category) => `<a href="${basePage}#${slugify(category)}">${category}</a>`)
    .join("");
}

function createStoryLink(story) {
  return `article.html?id=${encodeURIComponent(story.id)}`;
}

function isDirectImageUrl(url = "") {
  return url.startsWith("data:image/") || /\.(jpg|jpeg|png|gif|webp|avif)(\?.*)?$/i.test(url) || url.includes("images.unsplash.com");
}

function getImageStyle(url) {
  return isDirectImageUrl(url) ? `background-image:url('${url}')` : "";
}

function withCacheBust(url = "") {
  if (!url || url.startsWith("data:image/") || !isDirectImageUrl(url)) return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}v=${encodeURIComponent(url.length + "-" + Date.now())}`;
}

function getFreshImageStyle(url) {
  return isDirectImageUrl(url) ? `background-image:url('${withCacheBust(url)}')` : "";
}

function renderImageSlot(url, label = "Imagen") {
  if (isDirectImageUrl(url)) {
    return `<span class="image-slot" style="${getFreshImageStyle(url)}"></span>`;
  }

  return `<span class="image-slot image-slot--empty"><span>${label}</span><strong>Imagen no embebible</strong></span>`;
}

function renderImpactStrip() {
  const target = document.getElementById("impactStrip");
  if (!target) return;

  target.innerHTML = `
    <article class="impact-card">
      <p class="eyebrow">Prevención</p>
      <strong>3.000 folletos</strong>
      <p>Distribuidos en Plaza Moreno, La Plata, en una acción reportada por Scientology News sobre La Verdad sobre las Drogas.</p>
    </article>
    <article class="impact-card">
      <p class="eyebrow">Derechos</p>
      <strong>30 derechos</strong>
      <p>Base educativa visible en las plataformas de Youth for Human Rights y United for Human Rights.</p>
    </article>
    <article class="impact-card">
      <p class="eyebrow">Diálogo</p>
      <strong>Buenos Aires 2024</strong>
      <p>Encuentro interreligioso con participación de Scientology Argentina durante la Semana Mundial de la Armonía Interconfesional.</p>
    </article>
  `;
}

function renderSponsorStrip(data) {
  const target = document.getElementById("sponsorStrip");
  if (!target) return;

  const ad = data.ads?.[0];
  if (!ad) {
    target.remove();
    return;
  }

  target.innerHTML = `
    <a class="sponsor-card" href="${ad.url}" target="_blank" rel="noopener noreferrer">
      <span class="sponsor-card__label">${ad.label || "Publicidad"}</span>
      ${isDirectImageUrl(ad.image)
        ? `<span class="sponsor-card__image" style="${getFreshImageStyle(ad.image)}"></span>`
        : `<span class="sponsor-card__image sponsor-card__image--link">Foto</span>`}
      <span class="sponsor-card__body">
        <strong>${ad.title}</strong>
        <small>${ad.description}</small>
      </span>
      <span class="sponsor-card__cta">Abrir</span>
    </a>
  `;
}

function renderHomePage() {
  const data = getSiteData();
  document.title = data.settings.siteName;
  setCurrentDate();
  renderSectionNav(data);

  const brand = document.querySelector(".brand");
  const brandCopy = document.querySelector(".brand-copy");
  if (brand) brand.textContent = data.settings.siteName;
  if (brandCopy) brandCopy.textContent = data.settings.tagline;

  const stories = getSortedStories(data);
  const featuredStories = stories.filter((story) => story.featured);
  const heroStory = featuredStories[0] || stories[0];
  const sideStories = featuredStories.slice(1, 4).length ? featuredStories.slice(1, 4) : stories.slice(1, 4);
  const editorStories = stories.filter((story) => story.editorsPick).slice(0, 4);
  renderImpactStrip();
  renderSponsorStrip(data);

  const heroTarget = document.getElementById("heroStory");
  if (heroTarget && heroStory) {
    heroTarget.setAttribute("style", getFreshImageStyle(heroStory.image));
    heroTarget.classList.toggle("hero-card--linked-image", !isDirectImageUrl(heroStory.image));
    heroTarget.innerHTML = `
      <div>
        <p class="eyebrow">${heroStory.category}</p>
        <a href="${createStoryLink(heroStory)}"><h1 class="hero-title">${heroStory.title}</h1></a>
        <p class="hero-copy">${heroStory.excerpt}</p>
        <p class="meta-line">${heroStory.author} · ${formatDate(heroStory.publishedAt)}</p>
      </div>
    `;
  }

  const sideTarget = document.getElementById("heroSide");
  if (sideTarget) {
    sideTarget.innerHTML = sideStories.map((story) => `
      <article class="mini-story">
        <p class="eyebrow">${story.category}</p>
        <a href="${createStoryLink(story)}"><h4>${story.title}</h4></a>
        <p class="story-excerpt">${story.excerpt}</p>
        <p class="meta-line">${formatDate(story.publishedAt)}</p>
      </article>
    `).join("");
  }

  const latestTarget = document.getElementById("latestStories");
  if (latestTarget) {
    latestTarget.innerHTML = stories.slice(0, 9).map((story) => `
      <article class="story-card">
        ${renderImageSlot(story.image, story.title)}
        <div class="story-card__body">
          <p class="eyebrow">${story.category}</p>
          <a href="${createStoryLink(story)}"><h3>${story.title}</h3></a>
          <p class="story-excerpt">${story.excerpt}</p>
          <p class="meta-line">${story.author} · ${formatDate(story.publishedAt)}</p>
          ${story.sourceLabel ? `<span class="source-pill">${story.sourceLabel}</span>` : ""}
        </div>
      </article>
    `).join("");
  }

  const picksTarget = document.getElementById("editorPicks");
  if (picksTarget) {
    const picks = editorStories.length ? editorStories : stories.slice(0, 2);
    picksTarget.innerHTML = picks.map((story) => `
      <article class="story-card">
        ${renderImageSlot(story.image, story.title)}
        <div class="story-card__body">
          <p class="eyebrow">Selección · ${story.category}</p>
          <a href="${createStoryLink(story)}"><h3>${story.title}</h3></a>
          <p class="story-excerpt">${story.excerpt}</p>
          ${story.sourceLabel ? `<span class="source-pill">${story.sourceLabel}</span>` : ""}
        </div>
      </article>
    `).join("");
  }

  const columnsTarget = document.getElementById("categoryColumns");
  if (columnsTarget) {
    columnsTarget.innerHTML = data.categories.map((category) => {
      const categoryStories = stories.filter((story) => story.category === category).slice(0, 3);
      const items = categoryStories.length
        ? categoryStories.map((story) => `
            <article class="column-card__item">
              <a href="${createStoryLink(story)}"><strong>${story.title}</strong></a>
              <p class="meta-line">${formatDate(story.publishedAt)}</p>
            </article>
          `).join("")
        : `<p class="empty-state">Todavía no hay notas para esta categoría.</p>`;

      return `
        <section class="column-card" id="${slugify(category)}">
          <div class="column-card__body">
            <p class="eyebrow">${category}</p>
            <h3>${category}</h3>
            <div class="column-card__list">${items}</div>
          </div>
        </section>
      `;
    }).join("");
  }
}

function renderArticlePage() {
  const data = getSiteData();
  setCurrentDate();
  renderSectionNav(data);

  const brand = document.querySelector(".brand");
  const brandCopy = document.querySelector(".brand-copy");
  if (brand) brand.textContent = data.settings.siteName;
  if (brandCopy) brandCopy.textContent = data.settings.tagline;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const story = data.stories.find((item) => item.id === id) || getSortedStories(data)[0];
  const target = document.getElementById("articleView");
  if (!target || !story) return;

  document.title = `${story.title} | ${data.settings.siteName}`;

  const paragraphs = story.content
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${paragraph.trim()}</p>`)
    .join("");

  target.innerHTML = `
    <section class="article-hero">
      <div>
        <p class="eyebrow">${story.category}</p>
        <h1 class="article-title">${story.title}</h1>
        <p class="story-excerpt">${story.excerpt}</p>
        <div class="story-meta meta-line">
          <span>${story.author}</span>
          <span>${formatDate(story.publishedAt)}</span>
        </div>
        ${story.sourceUrl ? `<p class="meta-line">Fuente base: <a href="${story.sourceUrl}" target="_blank" rel="noopener noreferrer">${story.sourceLabel || "Ver fuente"}</a></p>` : ""}
      </div>
      ${isDirectImageUrl(story.image)
        ? `<div class="article-cover" style="${getFreshImageStyle(story.image)}"></div>`
        : `<div class="article-cover article-cover--link">${renderImageSlot(story.image, story.title)}</div>`}
    </section>
    <section class="article-body">${paragraphs}</section>
  `;
}

if (document.body.dataset.page === "home") {
  renderHomePage();
}

if (document.body.dataset.page === "article") {
  renderArticlePage();
}
