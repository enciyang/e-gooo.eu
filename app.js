// Replace with the confirmed overseas sales mailbox before launch if needed.
const inquiryRecipient = "export@e-ge.cn";

const products = [
  {
    id: "e-ultra-96-inward-window",
    title: "E-ultra 96 Inward-Opening Window",
    tag: "E Ultra 96 / Window",
    summary: "A 96 mm inward-opening window system with strong air tightness, wind-load resistance and verified sample-corner detailing.",
    image: "assets/product-samples/e-ultra-96-inward-window.webp",
    categories: ["window"],
    catalogue: null,
    features: ["38 dB acoustic index under GB/T 8485-2008", "Class 8 air permeability under GB/T 7106-2019", "Class 9 wind-load resistance under GB/T 7106-2019"],
    details: [
      ["Opening type", "Inward-opening window"],
      ["Sample corner", "E-ultra 96 inward window section sample"],
      ["Best for", "Premium residences that need quiet rooms, strong sealing and large operable sash planning"]
    ],
    specs: [
      ["System depth", "96 mm"],
      ["Sash depth", "105 mm"],
      ["Maximum sash weight", "E-GE custom hardware: 100 kg / Sobinco hardware: 200 kg"],
      ["Sash height range", "E-GE custom hardware: 780-1800 mm / Sobinco: 520-3000 mm depending on sash width"],
      ["Sash width range", "E-GE custom hardware: 440-1000 mm / Sobinco: 440-1700 mm"],
      ["Frame face width", "55 mm"],
      ["Sash face width", "72 mm"],
      ["Watertightness", "Class 6 under GB/T 7106-2019"]
    ],
    hardware: ["E-GE custom hardware or Sobinco hardware", "Concealed fitting system with hidden hinges", "Shear-bonded corner injection"],
    colors: ["Powder coating", "Project-specific coating"]
  },
  {
    id: "e-ultra-96-hinged-door",
    title: "E-ultra 96 Hinged Door",
    tag: "E Ultra 96 / Door",
    summary: "A 96 mm hinged door system for balcony and terrace openings, supported by inward and outward sample-corner images.",
    image: "assets/product-samples/e-ultra-96-inward-door.webp",
    categories: ["door"],
    catalogue: null,
    samples: [
      {
        label: "Outward-opening sample",
        image: "assets/product-samples/e-ultra-96-outward-door.webp"
      }
    ],
    features: ["96 mm system depth", "Up to 150 kg sash with E-GE custom hardware", "Balcony and terrace door application"],
    details: [
      ["Opening type", "Hinged door"],
      ["Sample corner", "E-ultra 96 inward and outward hinged door samples"],
      ["Best for", "Balcony, terrace and courtyard-facing residential door openings"]
    ],
    specs: [
      ["System depth", "96 mm"],
      ["Sash depth", "106 mm"],
      ["Maximum sash weight", "E-GE custom hardware: 150 kg / Sobinco hardware: 160 kg"],
      ["Sash height range", "E-GE custom hardware: 650-3000 mm / Sobinco: 1800-3000 mm"],
      ["Sash width range", "E-GE custom hardware: 650-1000 mm / Sobinco: 600-1200 mm"],
      ["Frame face width", "55 mm"],
      ["Sash face width", "107 mm"],
      ["Application", "Balcony / terrace door"]
    ],
    hardware: ["E-GE custom hardware or Sobinco hardware", "C-groove exposed hinge configuration", "Shear-bonded corner injection"],
    colors: ["Powder coating", "Project-specific coating"]
  },
  {
    id: "jingran-125-lift-slide",
    title: "Jingran 125 Lift-Slide Door",
    tag: "Jingran 125 / Sliding",
    summary: "A 125 mm lift-slide door system for large residential openings with high air tightness and heavy sash capacity.",
    image: "assets/product-samples/jingran-125-lift-slide-door.webp",
    categories: ["sliding"],
    catalogue: null,
    features: ["Class 8 air permeability under GB/T 31433-2015", "Class 9 wind-load resistance under GB/T 31433-2015", "Up to 440 kg single sash with Sobinco hardware"],
    details: [
      ["Opening type", "Lift-slide door"],
      ["Sample corner", "Jingran 125 lift-slide door section sample"],
      ["Best for", "Wide panoramic openings, villas, terraces and indoor-outdoor residential spaces"]
    ],
    specs: [
      ["System depth", "125 mm"],
      ["Sash depth", "55 mm"],
      ["Maximum sash weight", "E-GE custom hardware: 400 kg single sash / Sobinco hardware: 440 kg single sash"],
      ["Sash height range", "E-GE custom hardware: 1600-3500 mm / Sobinco: 1200-3500 mm"],
      ["Sash width range", "E-GE custom hardware: 730-3000 mm single sash / Sobinco: 750-3700 mm single sash"],
      ["Frame face width", "51.5 mm"],
      ["Sash face width", "99 mm"],
      ["Watertightness", "Class 5 under GB/T 31433-2015"]
    ],
    hardware: ["E-GE custom lift-slide hardware or Sobinco hardware", "Concealed fitting system", "Shear-bonded corner injection"],
    colors: ["Powder coating", "Anodizing", "Project-specific coating"]
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

function createSampleGallery(samples = []) {
  if (!samples.length) return null;

  const gallery = createElement("div", "sample-gallery");
  samples.forEach((sample) => {
    const figure = document.createElement("figure");
    const sampleImage = document.createElement("img");
    sampleImage.src = sample.image;
    sampleImage.alt = `${sample.label} for ${sample.title || "E-GE product"}`;
    sampleImage.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.textContent = sample.label;
    figure.append(sampleImage, caption);
    gallery.append(figure);
  });

  return gallery;
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

  const media = createElement("div", "dialog-media");
  const image = document.createElement("img");
  image.src = product.image;
  image.alt = `${product.title} product image`;
  const sampleGallery = createSampleGallery(product.samples);
  media.append(image);
  if (sampleGallery) media.append(sampleGallery);

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

  const quote = createElement("a", "button primary", "Request quotation");
  quote.href = "#contact";
  quote.addEventListener("click", () => closeDialog(dialog));

  const actions = createElement("div", "dialog-actions");
  actions.append(quote);
  if (product.catalogue) {
    const catalogue = createElement("a", "button secondary dark-text", "Download technical PDF");
    catalogue.href = product.catalogue;
    catalogue.target = "_blank";
    catalogue.rel = "noopener";
    actions.append(catalogue);
  }

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
  dialogBody.replaceChildren(media, copy);

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
