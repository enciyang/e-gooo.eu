const localCatalogues = {
  s120Door: "assets/catalogues/ege-s120-door-screen-manual.pdf",
  jiran150: "assets/catalogues/ege-jingran150-sliding-door-manual.pdf",
  s105hi: "assets/catalogues/ege-s105hi-passive-window-manual.pdf",
  s120Window: "assets/catalogues/ege-s120-window-screen-manual.pdf",
  e85Inward: "assets/catalogues/ege-e85-inward-window-manual.pdf",
  e85Outward: "assets/catalogues/ege-e85-outward-window-manual.pdf",
  e105n: "assets/catalogues/ege-e105n-passive-window-manual.pdf",
  e120n: "assets/catalogues/ege-e120n-window-screen-manual.pdf",
  s76: "assets/catalogues/ege-s76-three-in-one-manual.pdf",
  s96hi: "assets/catalogues/ege-s96hi-passive-window-manual.pdf"
};

// Replace with the confirmed overseas sales mailbox before launch if needed.
const inquiryRecipient = "export@e-ge.cn";

const products = [
  {
    id: "s76",
    title: "Guanyan S76 Three-in-One System",
    tag: "S Series / Window + Door",
    summary: "A standard residential platform covering inward windows, outward windows, inward swing doors and outward swing doors.",
    image: "assets/clean/clean-s76-system.jpg",
    categories: ["window", "door"],
    catalogue: localCatalogues.s76,
    features: ["6060-T66 aluminum profiles", "Patented RT thermal strips", "Injected corner joint process"],
    details: [
      ["Opening types", "Inward window, outward window, inward door and outward door"],
      ["Positioning", "Standard S-series platform for complete residential packages"],
      ["Best for", "Projects that need one consistent profile language across windows and doors"]
    ],
    specs: [
      ["System depth", "76 mm class"],
      ["Opening mode", "Inward / outward window and door"],
      ["Application", "Complete residential packages"]
    ],
    hardware: ["Inward and outward swing hardware", "Optional multipoint door locking", "Drainage and corner sealing details"],
    colors: ["Textured black", "Warm grey", "Wood-grain finish", "Custom powder coating"]
  },
  {
    id: "s96hi",
    title: "Guanyan S96Hi Passive Inward-Opening Window",
    tag: "S Series / Passive",
    summary: "A passive inward-opening window with a flush frame-and-sash expression and quiet thermal comfort.",
    image: "assets/clean/clean-s96hi-passive-window.jpg",
    categories: ["window", "passive"],
    catalogue: localCatalogues.s96hi,
    features: ["Flush frame and sash", "Four-seal inward-opening structure", "XPS glass-edge insulation"],
    details: [
      ["Opening type", "Passive inward-opening window"],
      ["Profile note", "Flush visual relationship between frame and sash"],
      ["Best for", "Passive-house, high-comfort residential and cold-climate projects"]
    ],
    specs: [
      ["System depth", "96 mm class"],
      ["Profile expression", "Frame and sash flush"],
      ["Thermal strategy", "RT thermal strip and XPS glass-edge insulation"]
    ],
    hardware: ["Inward tilt-and-turn hardware", "Multi-point locking", "Four-sided sealing structure"],
    colors: ["Matte black", "Alpine white", "Graphite grey", "Project-specific coating"]
  },
  {
    id: "s105hi",
    title: "Guanyan S105Hi Passive Inward-Opening Window",
    tag: "S Series / Passive",
    summary: "A deeper passive inward-opening platform for projects that prioritize envelope performance and acoustic comfort.",
    image: "assets/clean/clean-s105hi-passive-window.jpg",
    categories: ["window", "passive"],
    catalogue: localCatalogues.s105hi,
    features: ["Aluminum load-bearing glass blocks", "Multi-chamber thermal breaks", "Welded gasket details"],
    details: [
      ["Opening type", "Passive inward-opening window"],
      ["Profile note", "Non-flush frame and sash structure"],
      ["Best for", "Premium residences and passive-house upgrade packages"]
    ],
    specs: [
      ["System depth", "105 mm class"],
      ["Glass support", "Composite load-bearing glass blocks"],
      ["Thermal strategy", "Multi-chamber thermal breaks and edge insulation"]
    ],
    hardware: ["Inward tilt-and-turn hardware", "Welded gasket package", "Reinforced glass support blocks"],
    colors: ["Matte black", "Warm white", "Stone grey", "Project-specific coating"]
  },
  {
    id: "s120-window",
    title: "Guanyan S120 Outward-Opening Window with Screen",
    tag: "S Series / Screen Integrated",
    summary: "An outward-opening window and screen integrated system for broad residential use and strong everyday ventilation.",
    image: "assets/clean/clean-s120-window-screen.jpg",
    categories: ["window", "screen"],
    catalogue: localCatalogues.s120Window,
    features: ["Integrated screen structure", "Safety stay and limiter options", "Negative-pressure sealing points"],
    details: [
      ["Opening type", "Outward-opening window with integrated screen"],
      ["Performance focus", "Safety, ventilation, sealing and insect protection in one system"],
      ["Best for", "Villas, apartments and markets that prefer outward-opening windows"]
    ],
    specs: [
      ["System depth", "120 mm class"],
      ["Screen", "Integrated outward screen configuration"],
      ["Safety", "Anti-drop rope and opening limiter options"]
    ],
    hardware: ["Negative-pressure lock points", "Safety rope", "Adjustable opening limiter"],
    colors: ["Textured black", "Champagne grey", "Warm white", "Custom powder coating"]
  },
  {
    id: "s120-door",
    title: "Guanyan S120 Outward-Opening Door with Screen",
    tag: "S Series / Door + Screen",
    summary: "A door and screen integrated product for residential balconies, terraces and garden-facing openings.",
    image: "assets/clean/clean-s120-door-screen.jpg",
    categories: ["door", "screen"],
    catalogue: localCatalogues.s120Door,
    features: ["Multi-seal door structure", "4SG warm-edge glazing option", "RT insulation strip design"],
    details: [
      ["Opening type", "Outward-opening door with integrated screen"],
      ["Performance focus", "Door sealing, thermal comfort and insect protection"],
      ["Best for", "Balcony, terrace and private-home transition spaces"]
    ],
    specs: [
      ["System depth", "120 mm class"],
      ["Glass option", "Warm-edge 4SG glazing support"],
      ["Application", "Balcony, terrace and courtyard door openings"]
    ],
    hardware: ["Outward door hardware", "Multi-seal bottom detail", "Optional multipoint locking"],
    colors: ["Textured black", "Bronze grey", "Warm white", "Custom powder coating"]
  },
  {
    id: "e85-inward",
    title: "Guanyan E85 Inward-Opening Window",
    tag: "E Series / Slimline",
    summary: "A slimline inward-opening window for modern residences that need clearer views with refined profile proportions.",
    image: "assets/clean/clean-e85-inward-window.jpg",
    categories: ["window"],
    catalogue: localCatalogues.e85Inward,
    features: ["Slimline mullion connection", "Four-seal inward sash", "XPS glass-edge thermal padding"],
    details: [
      ["Opening type", "Inward-opening window"],
      ["Series options", "Narrow-frame and wide-frame variants in the E85 family"],
      ["Best for", "Modern residential facades and interiors that prioritize daylight"]
    ],
    specs: [
      ["System depth", "85 mm class"],
      ["Variant", "Narrow-frame and wide-frame planning options"],
      ["Visual focus", "Slimline mullion and larger daylight area"]
    ],
    hardware: ["Tilt-and-turn hardware", "Four-seal inward sash", "Reinforced slim T-connection"],
    colors: ["Black", "Silver grey", "Warm white", "Wood-grain finish"]
  },
  {
    id: "e85-outward",
    title: "Guanyan E85 Outward-Opening Window",
    tag: "E Series / Slimline",
    summary: "A slimline outward-opening window with reinforced sealing and safety details for exposed elevations.",
    image: "assets/clean/clean-e85-outward-window.jpg",
    categories: ["window"],
    catalogue: localCatalogues.e85Outward,
    features: ["Negative-pressure lock points", "Anti-drop safety rope", "Adjustable opening limiter"],
    details: [
      ["Opening type", "Outward-opening window"],
      ["Series options", "Narrow-frame and wide-frame variants in the E85 family"],
      ["Best for", "High-rise or exterior-facing openings where outward operation is preferred"]
    ],
    specs: [
      ["System depth", "85 mm class"],
      ["Variant", "Narrow-frame and wide-frame planning options"],
      ["Safety", "Opening limiter and safety rope package"]
    ],
    hardware: ["Negative-pressure lock points", "Anti-drop safety rope", "Adjustable opening limiter"],
    colors: ["Black", "Silver grey", "Champagne", "Custom powder coating"]
  },
  {
    id: "e105n",
    title: "Guanyan E105N Passive Inward-Opening Window",
    tag: "E Series / Passive",
    summary: "A narrow-frame passive inward-opening window balancing thermal comfort with the E-series slim visual language.",
    image: "assets/clean/clean-e105n-passive-window.jpg",
    categories: ["window", "passive"],
    catalogue: localCatalogues.e105n,
    features: ["RT saw-tooth thermal strip engagement", "Quiet luxury positioning", "Premium inward-opening hardware"],
    details: [
      ["Opening type", "Passive inward-opening window"],
      ["Profile note", "E105N narrow-frame passive platform"],
      ["Best for", "High-end homes that need passive performance with a lighter profile expression"]
    ],
    specs: [
      ["System depth", "105 mm class"],
      ["Variant", "Narrow-frame E105N"],
      ["Comfort focus", "Thermal and acoustic performance for premium homes"]
    ],
    hardware: ["Premium inward-opening hardware", "Multi-point locking", "Thermal strip and sealing package"],
    colors: ["Matte black", "Stone grey", "Warm white", "Project-specific coating"]
  },
  {
    id: "e120n",
    title: "Guanyan E120N Outward-Opening Window with Screen",
    tag: "E Series / Screen Integrated",
    summary: "A narrow-frame outward-opening window and screen integrated system for stronger ventilation without visual heaviness.",
    image: "assets/clean/clean-e120n-window-screen.jpg",
    categories: ["window", "screen"],
    catalogue: localCatalogues.e120n,
    features: ["Integrated outward screen system", "Slimline frame language", "Stainless steel T-connection reinforcement"],
    details: [
      ["Opening type", "Outward-opening window with integrated screen"],
      ["Series options", "E120N narrow-frame and E120W wide-frame planning variants"],
      ["Best for", "Projects seeking screen integration with a slim E-series appearance"]
    ],
    specs: [
      ["System depth", "120 mm class"],
      ["Variant", "E120N narrow-frame with E120W planning option"],
      ["Screen", "Integrated outward-opening screen package"]
    ],
    hardware: ["Outward-opening hardware", "Safety stay package", "Reinforced slim T-connection"],
    colors: ["Black", "Graphite grey", "Warm white", "Project-specific coating"]
  },
  {
    id: "jiran150",
    title: "Jingran 150 Full-View Sliding Door",
    tag: "Jingran / Panoramic Sliding",
    summary: "A full-view sliding door system for broad openings, quiet movement and a panoramic indoor-outdoor experience.",
    image: "assets/clean/clean-jiran150-sliding-door.jpg",
    categories: ["door", "sliding"],
    catalogue: localCatalogues.jiran150,
    features: ["20 mm central hook edge", "Up to 700 kg opening load", "32 mm or 44 mm glass options"],
    details: [
      ["Opening type", "Full-view sliding door"],
      ["Structure", "Full-wrap sliding structure with dual drainage channels"],
      ["Best for", "Large villas, terrace openings and panoramic living spaces"]
    ],
    specs: [
      ["System depth", "150 mm class"],
      ["Glass thickness", "32 mm / 44 mm options"],
      ["Opening load", "Up to 700 kg planning load"]
    ],
    hardware: ["V-shaped silent rollers", "Multi-point locking mechanism", "Dual drainage lower frame"],
    colors: ["Black", "Bronze grey", "Stone grey", "Custom decorative lower cover"]
  }
];

const mediaContent = {
  "brand-film": {
    label: "Brand Video",
    title: "E-GE brand film area",
    image: "assets/clean/clean-sea-view-window.jpg",
    copy: "A dedicated brand film can introduce E-GE's quiet-living positioning, product systems, design service and premium residential applications."
  },
  "process-film": {
    label: "Process Video",
    title: "Product craft and system explanation",
    image: "assets/clean/clean-mansion-facade.jpg",
    copy: "Use this area for profile sections, hardware, sealing, corner injection, glazing and installation process videos for distributors and project buyers."
  }
};

const grid = document.querySelector("[data-product-grid]");
const comparisonPanel = document.querySelector("[data-comparison-table]");
const filterButtons = document.querySelectorAll("[data-filter]");
const familyLinks = document.querySelectorAll("[data-family-filter]");
const dialog = document.querySelector("[data-product-dialog]");
const dialogBody = document.querySelector("[data-dialog-body]");
const dialogClose = document.querySelector("[data-dialog-close]");
const mediaDialog = document.querySelector("[data-media-dialog]");
const mediaBody = document.querySelector("[data-media-body]");
const mediaClose = document.querySelector("[data-media-close]");
const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const siteNav = document.querySelector("[data-site-nav]");
const leadForms = document.querySelectorAll("[data-lead-form]");
const heroSlides = Array.from(document.querySelectorAll("[data-hero-slide]"));
const heroControls = document.querySelector("[data-hero-controls]");
let activeHeroIndex = 0;

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function createFeatureList(items) {
  const list = createElement("ul", "feature-list");
  items.forEach((item) => {
    const li = createElement("li", "", item);
    list.append(li);
  });
  return list;
}

function createSpecTable(rows) {
  const table = createElement("table", "spec-table");
  const tbody = document.createElement("tbody");
  rows.forEach(([label, value]) => {
    const row = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = label;
    const td = document.createElement("td");
    td.textContent = value;
    row.append(th, td);
    tbody.append(row);
  });
  table.append(tbody);
  return table;
}

function createColorSwatches(colors) {
  const wrap = createElement("div", "color-list");
  colors.forEach((color) => {
    const swatch = createElement("span", "color-swatch", color);
    swatch.dataset.color = color.toLowerCase();
    wrap.append(swatch);
  });
  return wrap;
}

function findRowValue(rows, labels) {
  const match = rows.find(([label]) => labels.includes(label));
  return match ? match[1] : "";
}

function createProductCard(product) {
  const card = createElement("article", "product-card");
  card.dataset.productId = product.id;
  const image = document.createElement("img");
  image.src = product.image;
  image.alt = `${product.title} catalogue scene`;
  image.loading = "lazy";

  const body = createElement("div", "product-body");
  body.append(
    createElement("span", "product-tag", product.tag),
    createElement("h3", "", product.title),
    createElement("p", "", product.summary),
    createFeatureList(product.features)
  );

  const actions = createElement("div", "product-actions");
  const detailsButton = createElement("button", "text-button", "View details");
  detailsButton.type = "button";
  detailsButton.dataset.productDetails = product.id;
  detailsButton.addEventListener("click", () => openProductDialog(product.id));
  const inquiry = createElement("a", "text-button", "Request quotation");
  inquiry.href = "#contact";
  actions.append(detailsButton, inquiry);
  body.append(actions);
  card.append(image, body);
  return card;
}

function productMatchesFilter(product, filter) {
  if (filter === "all") return true;
  if (filter === "other") {
    return product.categories.includes("passive") || product.categories.includes("screen");
  }
  return product.categories.includes(filter);
}

function setActiveFilter(filter) {
  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });
  familyLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.familyFilter === filter);
  });
}

function renderProducts(filter = "all") {
  if (!grid) return;

  const filtered = products.filter((product) => productMatchesFilter(product, filter));

  grid.replaceChildren(...filtered.map(createProductCard));
}

function renderComparisonTable() {
  if (!comparisonPanel) return;

  const intro = createElement("div", "comparison-intro");
  intro.append(
    createElement("h3", "", "Product family comparison"),
    createElement("p", "", "Use this table to choose a starting system before opening the detailed product information.")
  );

  const tableWrap = createElement("div", "comparison-table-wrap");
  const table = createElement("table", "comparison-table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["Product", "Opening / Type", "System Depth", "Best Application", "Performance Focus", "Details"].forEach((label) => {
    const th = document.createElement("th");
    th.textContent = label;
    headerRow.append(th);
  });
  thead.append(headerRow);

  const tbody = document.createElement("tbody");
  products.forEach((product) => {
    const row = document.createElement("tr");
    const opening = findRowValue(product.details, ["Opening type", "Opening types"]) || product.tag;
    const depth = findRowValue(product.specs, ["System depth"]) || findRowValue(product.specs, ["Opening load"]);
    const bestFor = findRowValue(product.details, ["Best for"]) || findRowValue(product.specs, ["Application"]);
    const focus = product.features.slice(0, 2).join(" / ");

    [product.title, opening, depth, bestFor, focus].forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value;
      row.append(td);
    });

    const actionCell = document.createElement("td");
    const action = createElement("button", "table-action", "View");
    action.type = "button";
    action.addEventListener("click", () => openProductDialog(product.id));
    actionCell.append(action);
    row.append(actionCell);
    tbody.append(row);
  });
  table.append(thead, tbody);
  tableWrap.append(table);
  comparisonPanel.replaceChildren(intro, tableWrap);
}

function openProductDialog(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product || !dialog || !dialogBody) return;

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = `${product.title} product image`;

  const copy = createElement("div", "dialog-copy");
  copy.append(
    createElement("span", "product-tag", product.tag),
    createElement("h2", "", product.title),
    createElement("p", "", product.summary)
  );

  const detailList = createElement("ul", "detail-list info-cards");
  product.details.forEach(([label, value]) => {
    const item = createElement("li");
    item.append(createElement("strong", "", label), createElement("p", "", value));
    detailList.append(item);
  });

  const catalogue = createElement("a", "button secondary dark-text", "Download technical PDF");
  catalogue.href = product.catalogue;
  catalogue.target = "_blank";
  catalogue.rel = "noopener";

  const quote = createElement("a", "button primary", "Request quotation");
  quote.href = "#contact";
  quote.addEventListener("click", () => closeDialog(dialog));

  const actions = createElement("div", "dialog-actions");
  actions.append(quote, catalogue);

  copy.append(
    createElement("h3", "", "Applications"),
    detailList,
    createElement("h3", "", "Performance highlights"),
    createFeatureList(product.features),
    createElement("h3", "", "Technical specifications"),
    createSpecTable(product.specs),
    createElement("h3", "", "Hardware and operation"),
    createFeatureList(product.hardware),
    createElement("h3", "", "Color and finish options"),
    createColorSwatches(product.colors),
    actions
  );
  dialogBody.replaceChildren(image, copy);

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeDialog(targetDialog) {
  if (!targetDialog) return;

  if (targetDialog.open && typeof targetDialog.close === "function") {
    targetDialog.close();
  } else {
    targetDialog.removeAttribute("open");
  }
}

function openMediaDialog(key) {
  const item = mediaContent[key];
  if (!item || !mediaDialog || !mediaBody) return;

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = `${item.title} poster`;

  const content = createElement("div", "media-copy");
  content.append(
    createElement("span", "product-tag", item.label),
    createElement("h2", "", item.title),
    createElement("p", "", item.copy),
    createElement("p", "media-note", "Connect the final MP4 or hosted video link here when the English media asset is ready.")
  );

  const poster = createElement("div", "media-poster");
  poster.append(image, createElement("span", "poster-play", "Play"));
  mediaBody.replaceChildren(poster, content);

  if (typeof mediaDialog.showModal === "function") {
    mediaDialog.showModal();
  } else {
    mediaDialog.setAttribute("open", "");
  }
}

function setHeroSlide(index) {
  if (!heroSlides.length) return;
  activeHeroIndex = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeHeroIndex);
  });
  if (!heroControls) return;
  heroControls.querySelectorAll("button").forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === activeHeroIndex);
    button.setAttribute("aria-pressed", String(buttonIndex === activeHeroIndex));
  });
}

function initHeroCarousel() {
  if (!heroControls || heroSlides.length <= 1) return;
  heroSlides.forEach((_, index) => {
    const button = createElement("button", "", `Slide ${index + 1}`);
    button.type = "button";
    button.setAttribute("aria-pressed", String(index === 0));
    button.addEventListener("click", () => setHeroSlide(index));
    heroControls.append(button);
  });
  setInterval(() => setHeroSlide(activeHeroIndex + 1), 6500);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    setActiveFilter(filter);
    renderProducts(filter);
  });
});

familyLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const filter = link.dataset.familyFilter || "all";
    setActiveFilter(filter);
    renderProducts(filter);
  });
});

if (dialogClose && dialog) {
  dialogClose.addEventListener("click", () => closeDialog(dialog));
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog(dialog);
  });
}

if (mediaClose && mediaDialog) {
  mediaClose.addEventListener("click", () => closeDialog(mediaDialog));
  mediaDialog.addEventListener("click", (event) => {
    if (event.target === mediaDialog) closeDialog(mediaDialog);
  });
}

document.querySelectorAll("[data-media-open]").forEach((button) => {
  button.addEventListener("click", () => openMediaDialog(button.dataset.mediaOpen));
});

window.addEventListener("scroll", () => {
  if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
}, { passive: true });

if (menuButton && header) {
  menuButton.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

if (siteNav && header && menuButton) {
  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      header.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

leadForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const lead = Object.fromEntries(formData.entries());
    lead.type = form.dataset.formType || "Inquiry";
    lead.createdAt = new Date().toISOString();
    const leads = JSON.parse(localStorage.getItem("ege-leads-v2") || "[]");
    leads.push(lead);
    localStorage.setItem("ege-leads-v2", JSON.stringify(leads));

    const subject = `${lead.type} from E-GE English website`;
    const body = Object.entries(lead)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    window.location.href = `mailto:${inquiryRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    form.reset();
    const status = form.querySelector("[data-form-status]");
    if (status) status.textContent = "Your email app is opening with the inquiry. A backup was saved in this browser.";
  });
});

renderProducts();
renderComparisonTable();
initHeroCarousel();
