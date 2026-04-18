const STORAGE_KEY = "atlas-journal-data";
const SESSION_KEY = "atlas-journal-session";
const DATA_VERSION = 7;

const seedData = {
  version: DATA_VERSION,
  settings: {
    siteName: "Atlas Press Argentina",
    tagline: "Buenas noticias, campaÃ±as humanitarias y encuentros interreligiosos con foco en Scientology Argentina.",
    impactStrip: {
      backgroundImage: "",
      cards: [
        {
          label: "Prevencion",
          title: "3.000 folletos",
          text: "Distribuidos en Plaza Moreno, La Plata, en una accion reportada por Scientology News sobre La Verdad sobre las Drogas."
        },
        {
          label: "Derechos",
          title: "30 derechos",
          text: "Base educativa visible en las plataformas de Youth for Human Rights y United for Human Rights."
        },
        {
          label: "Dialogo",
          title: "Buenos Aires 2024",
          text: "Encuentro interreligioso con participacion de Scientology Argentina durante la Semana Mundial de la Armonia Interconfesional."
        }
      ]
    }
  },
  users: [
    { username: "admin", password: "admin123", role: "editor" }
  ],
  categories: ["Interreligioso", "Derechos Humanos", "PrevenciÃ³n", "Comunidad", "Libertad Religiosa", "Salud y Derechos", "Historias"],
  ads: [
    {
      id: "ad-1",
      label: "Publicidad",
      title: "Espacio para sponsor institucional",
      description: "DifundÃ­ una campaÃ±a, evento o servicio alineado con buenas noticias y comunidad.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=500&q=80",
      url: "https://example.com"
    }
  ],
  stories: [
    {
      id: "story-1",
      title: "Buenos Aires suma una seÃ±al concreta de armonÃ­a interreligiosa con presencia de Scientology Argentina",
      excerpt: "Un encuentro por la Semana Mundial de la ArmonÃ­a Interconfesional reuniÃ³ en Buenos Aires a referentes judÃ­os, musulmanes, mormones, catÃ³licos y de Scientology.",
      category: "Interreligioso",
      author: "RedacciÃ³n",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
      featured: true,
      editorsPick: true,
      publishedAt: "2026-04-15",
      sourceLabel: "UPF",
      sourceUrl: "https://www.upf.org/post/argentine-gathering-embodies-interfaith-harmony-and-fraternity",
      content: "La mejor prueba local para esta portada apareciÃ³ en Buenos Aires. La Universal Peace Federation reportÃ³ un encuentro por la Semana Mundial de la ArmonÃ­a Interconfesional y el DÃ­a Internacional de la Fraternidad Humana realizado el 22 de febrero de 2024.\n\nSegÃºn esa publicaciÃ³n, participaron referentes de distintas comunidades de fe y Gustavo Libardi, presidente de Scientology Argentina, compartiÃ³ reflexiones junto a representantes judÃ­os, musulmanes, mormones y catÃ³licos. La nota destaca un clima de amistad, oraciÃ³n, poesÃ­a y compromiso con la paz.\n\nPara la identidad del sitio, este tipo de cobertura es ideal: muestra convivencia real, buenos vÃ­nculos entre credos y una agenda pÃºblica positiva que puede convertirse en uno de los ejes centrales de la portada."
    },
    {
      id: "story-2",
      title: "Buenos Aires y La Plata: voluntarios difunden La Verdad sobre las Drogas en espacios pÃºblicos",
      excerpt: "Una nota oficial de Scientology News describe acciones de verano en Argentina con entrega de miles de folletos informativos para jÃ³venes.",
      category: "PrevenciÃ³n",
      author: "RedacciÃ³n",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1519996521430-1214985df35f?auto=format&fit=crop&w=1200&q=80",
      featured: true,
      editorsPick: true,
      publishedAt: "2026-04-14",
      sourceLabel: "Scientology News",
      sourceUrl: "https://www.scientologynews.org/press-releases/buenos-aires-volunteers-spread-the-truth-about-drugs.html",
      content: "Entre los ejemplos mÃ¡s concretos para una web centrada en buenas noticias en Argentina aparece una acciÃ³n de prevenciÃ³n vinculada a La Verdad sobre las Drogas. Scientology News informÃ³ sobre voluntarios en Buenos Aires y La Plata que distribuyeron material educativo a jÃ³venes durante actividades de verano.\n\nSegÃºn la publicaciÃ³n, durante un concierto en Plaza Moreno se entregaron alrededor de 3.000 folletos para acercar informaciÃ³n sobre efectos y riesgos de distintas drogas. El valor periodÃ­stico de este tipo de cobertura estÃ¡ en mostrar acciones de base, presencia territorial y mensajes preventivos dirigidos a la comunidad.\n\nPara el sitio, este tipo de nota puede funcionar muy bien en portada porque combina agenda local, foco social y una narrativa claramente positiva."
    },
    {
      id: "story-3",
      title: "JÃ³venes por los Derechos Humanos aporta un formato claro para escuelas, talleres y acciones juveniles",
      excerpt: "El sitio oficial organiza la enseÃ±anza de los 30 derechos en piezas breves, material visual y recursos listos para jornadas educativas.",
      category: "Derechos Humanos",
      author: "RedacciÃ³n",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      editorsPick: true,
      publishedAt: "2026-04-13",
      sourceLabel: "Youth for Human Rights",
      sourceUrl: "https://es.youthforhumanrights.org/es/about-us.html",
      content: "JÃ³venes por los Derechos Humanos Internacional se presenta como una organizaciÃ³n educativa sin fines de lucro orientada a enseÃ±ar a los jÃ³venes la DeclaraciÃ³n Universal de los Derechos Humanos y a inspirarlos a convertirse en defensores de la tolerancia y la paz.\n\nEn su sitio oficial se describen recursos muy visuales y Ãºtiles para cobertura periodÃ­stica: anuncios de servicio pÃºblico sobre los 30 artÃ­culos, materiales para educadores, talleres, campaÃ±as artÃ­sticas y acciones con grupos juveniles.\n\nPara una web como esta, este contenido permite construir notas de servicio, agendas de eventos, entrevistas y cobertura de actividades educativas con una lÃ­nea editorial optimista y formativa."
    },
    {
      id: "story-4",
      title: "Unidos por los Derechos Humanos impulsa formaciÃ³n cÃ­vica con cursos, guÃ­as y material gratuito",
      excerpt: "El programa internacional propone acercar la DeclaraciÃ³n Universal a educadores, organizaciones y comunidades de manera prÃ¡ctica.",
      category: "Derechos Humanos",
      author: "RedacciÃ³n",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      editorsPick: false,
      publishedAt: "2026-04-12",
      sourceLabel: "United for Human Rights",
      sourceUrl: "https://www.humanrights.com/about-us/what-is-united-for-human-rights.html",
      content: "Unidos por los Derechos Humanos se define oficialmente como una organizaciÃ³n internacional sin fines de lucro dedicada a implementar la DeclaraciÃ³n Universal de los Derechos Humanos a nivel local, regional, nacional e internacional.\n\nSu sitio destaca que ofrece recursos para informar, asistir y unir a individuos, educadores, organizaciones y organismos pÃºblicos en torno a la difusiÃ³n de los derechos humanos. TambiÃ©n muestra paquetes educativos, guÃ­as docentes, documentales y materiales descargables.\n\nEste tipo de enfoque puede sostener una secciÃ³n estable dentro del sitio: campaÃ±as, recursos, testimonios y convocatorias vinculadas con formaciÃ³n cÃ­vica y convivencia."
    },
    {
      id: "story-5",
      title: "El Camino a la Felicidad se presenta como herramienta educativa y de valores para distintos entornos",
      excerpt: "La propuesta reÃºne 21 preceptos de sentido comÃºn y cuenta con materiales para escuelas, familias y programas comunitarios.",
      category: "Comunidad",
      author: "RedacciÃ³n",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      editorsPick: false,
      publishedAt: "2026-04-11",
      sourceLabel: "The Way to Happiness",
      sourceUrl: "https://es.education.thewaytohappiness.org/",
      content: "El sitio oficial de El Camino a la Felicidad presenta esta iniciativa como una guÃ­a de sentido comÃºn para vivir mejor, con amplia difusiÃ³n internacional y desarrollo de materiales educativos complementarios.\n\nAdemÃ¡s del libro y sus 21 preceptos, la plataforma muestra academias online, planes de lecciones, afiches, folletos y contenidos de apoyo para programas de formaciÃ³n. Esa combinaciÃ³n hace que la campaÃ±a pueda cubrirse desde distintos Ã¡ngulos: educaciÃ³n, comunidad, valores, prevenciÃ³n y servicio.\n\nEditorialmente, esta lÃ­nea puede traducirse en historias sobre talleres, jornadas solidarias, experiencias escolares y testimonios de aplicaciÃ³n concreta."
    },
    {
      id: "story-6",
      title: "Voces para la Humanidad ayuda a convertir campaÃ±as sociales en historias periodÃ­sticas cercanas",
      excerpt: "La serie de Scientology Network funciona como referencia para un periodismo de impacto humano, con protagonistas, testimonios y resultados visibles.",
      category: "Interreligioso",
      author: "RedacciÃ³n",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      editorsPick: false,
      publishedAt: "2026-04-10",
      sourceLabel: "Scientology Network",
      sourceUrl: "https://www.scientology.tv/es/series/voices-for-humanity/",
      content: "Voces para la Humanidad ofrece una estructura narrativa muy Ãºtil para este proyecto: una persona, una comunidad, un problema concreto y una acciÃ³n positiva que genera resultados visibles.\n\nTomado como inspiraciÃ³n editorial, ese modelo encaja perfectamente con campaÃ±as como La Verdad sobre las Drogas, El Camino a la Felicidad, JÃ³venes por los Derechos Humanos o actividades de diÃ¡logo interreligioso. Cada nota puede pasar de la agenda al testimonio y del testimonio al impacto.\n\nEso ayuda a diferenciar el sitio de un portal de noticias tradicional: no solo informa que hubo un evento, sino que muestra para quÃ© sirviÃ³ y a quiÃ©n beneficiÃ³."
    },
    {
      id: "story-7",
      title: "CCHR suma otra lÃ­nea editorial posible: denuncias, prevenciÃ³n y derechos del paciente",
      excerpt: "La ComisiÃ³n de Ciudadanos por los Derechos Humanos presenta recursos informativos, campaÃ±as y documentales sobre abusos en salud mental.",
      category: "Salud y Derechos",
      author: "RedacciÃ³n",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      editorsPick: false,
      publishedAt: "2026-04-09",
      sourceLabel: "CCHR",
      sourceUrl: "https://www.cchr.org/about-us/what-is-cchr.html",
      content: "Para incorporar CCHR a la prueba, tomamos como base su presentaciÃ³n institucional y sus materiales pÃºblicos. La organizaciÃ³n se describe como una entidad sin fines de lucro dedicada a investigar y exponer abusos o prÃ¡cticas coercitivas en el campo de la salud mental.\n\nMÃ¡s allÃ¡ de la postura crÃ­tica de sus campaÃ±as, desde el punto de vista editorial abre una lÃ­nea concreta de cobertura: derechos del paciente, consentimiento informado, conferencias, campaÃ±as pÃºblicas, materiales educativos y documentales.\n\nSi querÃ©s, en la siguiente iteraciÃ³n esta secciÃ³n puede separarse mejor del bloque interreligioso para darle una identidad propia dentro del menÃº y la portada."
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

function repairText(value) {
  if (typeof value !== "string") return value;

  return value
    .replaceAll("Ã¡", "á")
    .replaceAll("Ã©", "é")
    .replaceAll("Ã­", "í")
    .replaceAll("Ã³", "ó")
    .replaceAll("Ãº", "ú")
    .replaceAll("Ã", "Á")
    .replaceAll("Ã‰", "É")
    .replaceAll("Ã", "Í")
    .replaceAll("Ã“", "Ó")
    .replaceAll("Ãš", "Ú")
    .replaceAll("Ã±", "ñ")
    .replaceAll("Ã‘", "Ñ")
    .replaceAll("â", "'")
    .replaceAll("â", "\"")
    .replaceAll("â", "\"")
    .replaceAll("â", "-")
    .replaceAll("â", "-")
    .replaceAll("Â·", "·")
    .replaceAll("Â¿", "¿")
    .replaceAll("Â¡", "¡")
    .replaceAll("ÃƒÂ¡", "a")
    .replaceAll("ÃƒÂ©", "e")
    .replaceAll("ÃƒÂ­", "i")
    .replaceAll("ÃƒÂ³", "o")
    .replaceAll("ÃƒÂº", "u")
    .replaceAll("ÃƒÂ", "A")
    .replaceAll("Ãƒâ€°", "E")
    .replaceAll("ÃƒÂ", "I")
    .replaceAll("Ãƒâ€œ", "O")
    .replaceAll("ÃƒÅ¡", "U")
    .replaceAll("ÃƒÂ±", "n")
    .replaceAll("Ãƒâ€˜", "N")
    .replaceAll("Ã‚Â·", "Â·")
    .replaceAll("Ã¢Â€Â™", "'")
    .replaceAll("Ã¢Â€Âœ", "\"")
    .replaceAll("Ã¢Â€Â", "\"");
}

function normalizeSiteData(value) {
  if (Array.isArray(value)) {
    return value.map(normalizeSiteData);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, normalizeSiteData(entry)]));
  }

  return repairText(value);
}

function getSiteData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const initialData = normalizeSiteData(deepClone(seedData));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
    return initialData;
  }

  try {
    const parsed = JSON.parse(raw);
    const data = normalizeSiteData({
      version: parsed.version || 1,
      settings: parsed.settings || deepClone(seedData.settings),
      users: parsed.users || deepClone(seedData.users),
      categories: parsed.categories || deepClone(seedData.categories),
      ads: Array.isArray(parsed.ads) ? parsed.ads : deepClone(seedData.ads),
      stories: Array.isArray(parsed.stories) ? parsed.stories : deepClone(seedData.stories)
    });

    if (data.version < DATA_VERSION) {
      const migrated = migrateSiteData(data);
      setSiteData(migrated);
      return migrated;
    }

    if (JSON.stringify(parsed) !== JSON.stringify(data)) {
      setSiteData(data);
    }

    return data;
  } catch (error) {
    const fallbackData = normalizeSiteData(deepClone(seedData));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fallbackData));
    return fallbackData;
  }
}

function setSiteData(data) {
  const normalizedData = normalizeSiteData(data);
  normalizedData.version = DATA_VERSION;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizedData));
}

function resetSiteData() {
  setSiteData(deepClone(seedData));
}

function migrateSiteData(data) {
  const migrated = {
    version: DATA_VERSION,
    settings: {
      ...deepClone(seedData.settings),
      ...(data.settings || {}),
      impactStrip: {
        ...deepClone(seedData.settings.impactStrip),
        ...((data.settings || {}).impactStrip || {}),
        cards: deepClone(seedData.settings.impactStrip.cards).map((card, index) => ({
          ...card,
          ...((((data.settings || {}).impactStrip || {}).cards || [])[index] || {})
        }))
      }
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
  const date = parseStoryDate(value);
  const includeTime = typeof value === "string" && value.includes("T");
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    ...(includeTime
      ? {
          hour: "2-digit",
          minute: "2-digit"
        }
      : {})
  }).format(date);
}

function getSortedStories(data) {
  return [...data.stories].sort((a, b) => parseStoryDate(b.publishedAt) - parseStoryDate(a.publishedAt));
}

function parseStoryDate(value) {
  if (!value) return new Date();
  if (value.includes("T")) return new Date(value);
  return new Date(`${value}T12:00:00`);
}

function toDateTimeLocalValue(value) {
  const date = parseStoryDate(value);
  const pad = (number) => String(number).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function setCurrentDate() {
  const target = document.getElementById("currentDate");
  if (target) {
    target.textContent = formatDate(new Date().toISOString().slice(0, 10));
  }
}

function getImpactStripConfig(data) {
  const source = data || getSiteData();
  const defaultImpact = deepClone(seedData.settings.impactStrip);
  const currentImpact = source?.settings?.impactStrip || {};
  const currentCards = Array.isArray(currentImpact.cards) ? currentImpact.cards : [];

  return {
    ...defaultImpact,
    ...currentImpact,
    cards: defaultImpact.cards.map((card, index) => ({
      ...card,
      ...(currentCards[index] || {})
    }))
  };
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

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderBrandName(target, siteName) {
  if (!target) return;

  const cleanName = (siteName || "").trim();
  if (!cleanName) {
    target.textContent = "";
    return;
  }

  const argentinaSuffix = /\s+Argentina$/i;
  if (argentinaSuffix.test(cleanName)) {
    const mainName = cleanName.replace(argentinaSuffix, "").trim();
    target.innerHTML = `
      <span class="brand__main">${escapeHtml(mainName)}</span>
      <span class="brand__sub">Argentina</span>
    `;
    return;
  }

  target.innerHTML = `<span class="brand__main">${escapeHtml(cleanName)}</span>`;
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

function renderImageTag(url, label = "Imagen", className = "media-image") {
  return `<img class="${className}" src="${withCacheBust(url)}" alt="${label.replace(/"/g, "&quot;")}">`;
}

function renderImageSlot(url, label = "Imagen") {
  if (isDirectImageUrl(url)) {
    return `<span class="image-slot">${renderImageTag(url, label, "image-slot__img")}</span>`;
  }

  return `<span class="image-slot image-slot--empty"><span>${label}</span><strong>Imagen no embebible</strong></span>`;
}

function getVideoEmbedUrl(url = "") {
  if (!url) return "";

  const youtubeWatchMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/i);
  if (youtubeWatchMatch?.[1]) {
    return `https://www.youtube.com/embed/${youtubeWatchMatch[1]}`;
  }

  const youtubeEmbedMatch = url.match(/youtube\.com\/embed\/([^&?/]+)/i);
  if (youtubeEmbedMatch?.[1]) {
    return `https://www.youtube.com/embed/${youtubeEmbedMatch[1]}`;
  }

  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  if (vimeoMatch?.[1]) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }

  return "";
}

function hasEmbeddableVideo(story) {
  return Boolean(getVideoEmbedUrl(story.videoUrl || ""));
}

function renderVideoEmbed(url, className = "video-embed") {
  const embedUrl = getVideoEmbedUrl(url);
  if (!embedUrl) return "";

  return `
    <span class="${className}">
      <iframe
        src="${embedUrl}"
        title="Video"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </span>
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
        ? `<span class="sponsor-card__image">${renderImageTag(ad.image, ad.title, "sponsor-card__img")}</span>`
        : `<span class="sponsor-card__image sponsor-card__image--link">Foto</span>`}
      <span class="sponsor-card__body">
        <strong>${ad.title}</strong>
        <small>${ad.description}</small>
      </span>
      <span class="sponsor-card__cta">Abrir</span>
    </a>
  `;
}

function renderImpactStrip(data) {
  const target = document.getElementById("impactStrip");
  if (!target) return;

  const impactStrip = getImpactStripConfig(data);
  const hasImage = isDirectImageUrl(impactStrip.backgroundImage);

  target.classList.toggle("impact-strip--with-image", hasImage);
  if (hasImage) {
    const backgroundSource = withCacheBust(impactStrip.backgroundImage);
    target.style.backgroundImage = `var(--impact-overlay), url("${backgroundSource}")`;
    target.style.backgroundSize = "cover, cover";
    target.style.backgroundPosition = "center, center";
    target.style.backgroundRepeat = "no-repeat, no-repeat";
  } else {
    target.style.backgroundImage = "var(--impact-bg)";
    target.style.removeProperty("background-size");
    target.style.removeProperty("background-position");
    target.style.removeProperty("background-repeat");
  }

  const cards = impactStrip.cards
    .map((card, index) => ({
      label: (card.label || "").trim() || seedData.settings.impactStrip.cards[index]?.label || "",
      title: (card.title || "").trim() || seedData.settings.impactStrip.cards[index]?.title || "",
      text: (card.text || "").trim() || seedData.settings.impactStrip.cards[index]?.text || ""
    }))
    .filter((card) => card.label || card.title || card.text);

  target.innerHTML = cards
    .map((card) => `
      <article class="impact-card">
        <p class="eyebrow">${escapeHtml(card.label)}</p>
        <strong>${escapeHtml(card.title)}</strong>
        <p>${escapeHtml(card.text)}</p>
      </article>
    `)
    .join("");
}

function renderLeftStory(story) {
  return `
    <article class="brief-card">
      <p class="eyebrow">${escapeHtml(story.category)}</p>
      <h3>${escapeHtml(story.title)}</h3>
      <p class="story-excerpt">${escapeHtml(story.excerpt)}</p>
      <a class="read-more-link" href="${createStoryLink(story)}">Leer mas</a>
    </article>
  `;
}

function getFeatureTextSideClass(story, index = 0) {
  if (story.featuredTextPosition === "left") return "feature-story--text-left";
  if (story.featuredTextPosition === "right") return "feature-story--text-right";
  return index % 2 === 0 ? "feature-story--text-right" : "feature-story--text-left";
}

function renderCenterStory(story, index = 0) {
  const portraitSideClass = getFeatureTextSideClass(story, index);
  const hasVideo = hasEmbeddableVideo(story);
  const mediaClass = hasVideo ? " feature-story--video feature-story--landscape" : "";
  const introMarkup = `
    <div class="feature-story__intro">
      <h2><a href="${createStoryLink(story)}">${escapeHtml(story.title)}</a></h2>
      <p class="meta-line">${escapeHtml(story.author)} · ${formatDate(story.publishedAt)}</p>
    </div>
  `;
  const mediaMarkup = `
    <a class="feature-story__media" href="${createStoryLink(story)}">
      ${hasVideo
        ? renderVideoEmbed(story.videoUrl, "feature-story__video")
        : isDirectImageUrl(story.image)
        ? renderImageTag(story.image, story.title, "feature-story__img")
        : `<span class="feature-story__fallback">Imagen no disponible</span>`}
    </a>
  `;
  return `
    <article class="feature-story ${portraitSideClass}${mediaClass}">
      <p class="eyebrow feature-story__kicker">${escapeHtml(story.category)}</p>
      ${hasVideo ? introMarkup : ""}
      ${mediaMarkup}
      <div class="feature-story__body">
        ${hasVideo ? "" : introMarkup}
        <div class="feature-story__flow">
          <p class="story-excerpt">${escapeHtml(story.excerpt)}</p>
          <a class="read-more-link" href="${createStoryLink(story)}">Leer mas</a>
        </div>
      </div>
    </article>
  `;
}

function renderRightStory(story) {
  const videoClass = hasEmbeddableVideo(story) ? " compact-story--video" : "";
  return `
    <article class="compact-story${videoClass}">
      <p class="eyebrow compact-story__kicker">${escapeHtml(story.category)}</p>
      <a class="compact-story__thumb" href="${createStoryLink(story)}">
        ${hasEmbeddableVideo(story)
          ? renderVideoEmbed(story.videoUrl, "compact-story__video")
          : isDirectImageUrl(story.image)
          ? renderImageTag(story.image, story.title, "compact-story__img")
          : `<span class="compact-story__fallback">Foto</span>`}
      </a>
      <div class="compact-story__body">
        <h3><a href="${createStoryLink(story)}">${escapeHtml(story.title)}</a></h3>
        <p class="story-excerpt">${escapeHtml(story.excerpt)}</p>
        <a class="read-more-link" href="${createStoryLink(story)}">Leer mas</a>
      </div>
    </article>
  `;
}

function renderRightAd(ad) {
  return `
    <article class="compact-ad">
      <p class="eyebrow compact-ad__kicker">${escapeHtml(ad.label || "Publicidad")}</p>
      <a class="compact-ad__thumb" href="${ad.url}" target="_blank" rel="noopener noreferrer">
        ${isDirectImageUrl(ad.image)
          ? renderImageTag(ad.image, ad.title, "compact-ad__img")
          : `<span class="compact-ad__fallback">Ad</span>`}
      </a>
      <div class="compact-ad__body">
        <h3><a href="${ad.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(ad.title)}</a></h3>
        <p class="story-excerpt">${escapeHtml(ad.description)}</p>
        <a class="read-more-link" href="${ad.url}" target="_blank" rel="noopener noreferrer">Abrir enlace</a>
      </div>
    </article>
  `;
}

function applyFeatureImageOrientation() {
  const images = document.querySelectorAll(".feature-story__img");
  images.forEach((img) => {
    if (!(img instanceof HTMLImageElement)) return;

    const applyClass = () => {
      const story = img.closest(".feature-story");
      if (!story) return;
      const portrait = img.naturalHeight > img.naturalWidth;
      story.classList.toggle("feature-story--portrait", portrait);
      story.classList.toggle("feature-story--landscape", !portrait);

      if (!portrait) {
        const body = story.querySelector(".feature-story__body");
        const intro = story.querySelector(".feature-story__intro");
        const flow = story.querySelector(".feature-story__flow");

        if (body && intro && body.contains(intro)) {
          story.insertBefore(intro, img.closest(".feature-story__media"));
        }

        if (body && flow && !body.contains(flow)) {
          body.appendChild(flow);
        }
      }
    };

    if (img.complete) {
      applyClass();
    } else {
      img.addEventListener("load", applyClass, { once: true });
    }
  });
}

function applyCompactImageOrientation() {
  const images = document.querySelectorAll(".compact-story__img, .compact-ad__img");
  images.forEach((img) => {
    if (!(img instanceof HTMLImageElement)) return;

    const applyClass = () => {
      const portrait = img.naturalHeight > img.naturalWidth;
      img.closest(".compact-story")?.classList.toggle("compact-story--portrait", portrait);
      img.closest(".compact-ad")?.classList.toggle("compact-ad--portrait", portrait);
    };

    if (img.complete) {
      applyClass();
    } else {
      img.addEventListener("load", applyClass, { once: true });
    }
  });
}

function renderHomePage() {
  const data = getSiteData();
  document.title = data.settings.siteName;
  setCurrentDate();
  renderSectionNav(data);

  const brand = document.querySelector(".brand");
  const brandCopy = document.querySelector(".brand-copy");
  renderBrandName(brand, data.settings.siteName);
  if (brandCopy) brandCopy.textContent = data.settings.tagline;

  const stories = getSortedStories(data);
  const featuredStories = stories
    .filter((story) => story.featured)
    .sort((a, b) => {
      const rankA = Number.isFinite(Number(a.featuredOrder)) ? Number(a.featuredOrder) : Number.POSITIVE_INFINITY;
      const rankB = Number.isFinite(Number(b.featuredOrder)) ? Number(b.featuredOrder) : Number.POSITIVE_INFINITY;
      if (rankA !== rankB) return rankA - rankB;
      return parseStoryDate(b.publishedAt) - parseStoryDate(a.publishedAt);
    });
  const mainStories = (featuredStories.length ? featuredStories : stories).slice(0, 4);
  const remainingStories = stories.filter((story) => !mainStories.some((item) => item.id === story.id));
  const leftStories = remainingStories.filter((_, index) => index % 2 === 0);
  const rightStories = remainingStories.filter((_, index) => index % 2 === 1);
  renderImpactStrip(data);
  const leftTarget = document.getElementById("leftColumn");
  if (leftTarget) {
    leftTarget.innerHTML = leftStories.map(renderLeftStory).join("");
  }

  const centerTarget = document.getElementById("centerColumn");
  if (centerTarget) {
    centerTarget.innerHTML = mainStories.map((story, index) => renderCenterStory(story, index)).join("");
  }

  const rightTarget = document.getElementById("rightColumn");
  if (rightTarget) {
    const ads = data.ads?.length ? data.ads : [];
    const rightItems = [];
    rightStories.forEach((story, index) => {
      rightItems.push(renderRightStory(story));
      if ((index + 1) % 2 === 0 && ads.length) {
        const ad = ads[(Math.floor(index / 2)) % ads.length];
        rightItems.push(renderRightAd(ad));
      }
    });
    if (!rightItems.length && ads.length) {
      rightItems.push(renderRightAd(ads[0]));
    }
    rightTarget.innerHTML = rightItems.join("");
  }

  applyFeatureImageOrientation();
  applyCompactImageOrientation();
}

function renderArticlePage() {
  const data = getSiteData();
  setCurrentDate();
  renderSectionNav(data);

  const brand = document.querySelector(".brand");
  const brandCopy = document.querySelector(".brand-copy");
  renderBrandName(brand, data.settings.siteName);
  if (brandCopy) brandCopy.textContent = data.settings.tagline;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const story = data.stories.find((item) => item.id === id) || getSortedStories(data)[0];
  const target = document.getElementById("articleView");
  if (!target || !story) return;

  document.title = `${story.title} | ${data.settings.siteName}`;

  const paragraphs = story.content
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${escapeHtml(paragraph.trim())}</p>`)
    .join("");

  target.innerHTML = `
    <section class="article-hero">
      <div>
        <p class="eyebrow">${escapeHtml(story.category)}</p>
        <h1 class="article-title">${escapeHtml(story.title)}</h1>
        <p class="story-excerpt">${escapeHtml(story.excerpt)}</p>
        <div class="story-meta meta-line">
          <span>${escapeHtml(story.author)}</span>
          <span>${formatDate(story.publishedAt)}</span>
        </div>
        ${story.sourceUrl ? `<p class="meta-line">Fuente base: <a href="${story.sourceUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(story.sourceLabel || "Ver fuente")}</a></p>` : ""}
      </div>
      ${hasEmbeddableVideo(story)
        ? `<div class="article-cover article-cover--video">${renderVideoEmbed(story.videoUrl, "article-cover__video")}</div>`
        : isDirectImageUrl(story.image)
        ? `<div class="article-cover">${renderImageTag(story.image, story.title, "article-cover__img")}</div>`
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


