// Replace with the confirmed overseas sales mailbox before launch if needed.
const inquiryRecipient = "export@e-ge.cn";
const whatsappContactUrl = "https://wa.me/447751524710";
const whatsappContactLabel = "Contact via WhatsApp";
const productToneCycle = ["blue", "white", "deep"];

const products = [
  {
    id: "guanyan-s76-three-in-one-system",
    title: "Guanyan S76 Three-in-One System",
    tag: "Window + Door + Sliding / S76",
    summary: "A standard residential platform covering inward windows, outward windows, inward swing doors, outward swing doors and sliding applications.",
    image: "assets/clean/clean-s76-system.jpg",
    categories: ["window", "door", "sliding"],
    features: ["Three-in-one residential system", "Window, swing-door and sliding applications", "Project support for system comparison"],
    details: [
      ["Opening types", "Window, hinged door and sliding"],
      ["System family", "Guanyan S76"],
      ["Best for", "Residential projects requiring one coordinated window, door and sliding platform"]
    ],
    specs: [
      ["System family", "Guanyan S76"],
      ["Application", "Window + door + sliding"],
      ["Documentation", "Contact us via WhatsApp for project details"]
    ],
    hardware: ["Project-specific hardware configuration", "Technical support available via WhatsApp"],
    colors: ["Powder coating", "Project-specific coating"]
  },
  {
    id: "e-ultra-96-inward-window",
    title: "E-ultra 96 Inward-Opening Window",
    tag: "E Ultra 96 / Window",
    summary: "A 96 mm inward-opening window system with strong air tightness, wind-load resistance and verified sample-corner detailing.",
    image: "assets/product-samples/e85-product-transparent.png",
    categories: ["window"],
    features: ["38 dB acoustic index under GB/T 8485-2008", "Class 8 air permeability under GB/T 7106-2019", "Class 9 wind-load resistance under GB/T 7106-2019"],
    details: [
      ["Opening type", "Inward-opening window"],
      ["Sample corner", "E-ultra 96 inward window section sample"],
      ["Best for", "Premium residences that need quiet rooms, strong sealing and large operable sash planning"]
    ],
    specs: [
      ["System depth", "96 mm"],
      ["Sash depth", "105 mm"],
      ["Maximum sash weight", "e-gooo custom hardware: 100 kg / Sobinco hardware: 200 kg"],
      ["Frame face width", "55 mm"],
      ["Sash face width", "72 mm"],
      ["Watertightness", "Class 6 under GB/T 7106-2019"]
    ],
    hardware: ["e-gooo custom hardware or Sobinco hardware", "Concealed fitting system with hidden hinges", "Shear-bonded corner injection"],
    colors: ["Powder coating", "Project-specific coating"]
  },
  {
    id: "e-ultra-96-hinged-door",
    title: "E-ultra 96 Hinged Door",
    tag: "E Ultra 96 / Door",
    summary: "A 96 mm hinged door system for balcony and terrace openings, supported by inward and outward sample-corner images.",
    image: "assets/product-samples/e-ultra-96-inward-door-transparent.png",
    categories: ["door"],
    samples: [
      {
        label: "Outward-opening sample",
        image: "assets/product-samples/e-ultra-96-outward-door-transparent.png"
      }
    ],
    features: ["96 mm system depth", "Up to 150 kg sash with e-gooo custom hardware", "Balcony and terrace door application"],
    details: [
      ["Opening type", "Hinged door"],
      ["Sample corner", "E-ultra 96 inward and outward hinged door samples"],
      ["Best for", "Balcony, terrace and courtyard-facing residential door openings"]
    ],
    specs: [
      ["System depth", "96 mm"],
      ["Sash depth", "106 mm"],
      ["Maximum sash weight", "e-gooo custom hardware: 150 kg / Sobinco hardware: 160 kg"],
      ["Frame face width", "55 mm"],
      ["Sash face width", "107 mm"],
      ["Application", "Balcony / terrace door"]
    ],
    hardware: ["e-gooo custom hardware or Sobinco hardware", "C-groove exposed hinge configuration", "Shear-bonded corner injection"],
    colors: ["Powder coating", "Project-specific coating"]
  },
  {
    id: "jingran-125-lift-slide",
    title: "Jingran 125 Lift-Slide Door",
    tag: "Jingran 125 / Sliding",
    summary: "A 125 mm lift-slide door system for large residential openings with high air tightness and heavy sash capacity.",
    image: "assets/product-samples/jingran-125-lift-slide-door-transparent.png",
    categories: ["sliding"],
    features: ["Class 8 air permeability under GB/T 31433-2015", "Class 9 wind-load resistance under GB/T 31433-2015", "Up to 440 kg single sash with Sobinco hardware"],
    details: [
      ["Opening type", "Lift-slide door"],
      ["Sample corner", "Jingran 125 lift-slide door section sample"],
      ["Best for", "Wide panoramic openings, villas, terraces and indoor-outdoor residential spaces"]
    ],
    specs: [
      ["System depth", "125 mm"],
      ["Sash depth", "55 mm"],
      ["Maximum sash weight", "e-gooo custom hardware: 400 kg single sash / Sobinco hardware: 440 kg single sash"],
      ["Frame face width", "51.5 mm"],
      ["Sash face width", "99 mm"],
      ["Watertightness", "Class 5 under GB/T 31433-2015"]
    ],
    hardware: ["e-gooo custom lift-slide hardware or Sobinco hardware", "Concealed fitting system", "Shear-bonded corner injection"],
    colors: ["Powder coating", "Anodizing", "Project-specific coating"]
  },
  {
    id: "guanyan-e85-inward-window",
    title: "Guanyan E85 Inward-Opening Window",
    tag: "Window / E85",
    summary: "Compact inward-opening window system sample and project information for review.",
    image: "assets/product-samples/guanyan-e85-inward-window-transparent.png",
    categories: ["window"],
    features: ["Compact inward-opening configuration", "Sample-corner image for technical review", "Project information available via WhatsApp"],
    details: [
      ["Opening type", "Inward-opening window"],
      ["Sample corner", "Guanyan E85 inward-opening window sample"],
      ["Best for", "Residential projects, renovation work and compact high-performance openings"]
    ],
    specs: [
      ["System family", "Guanyan E85"],
      ["Opening type", "Inward-opening"],
      ["Documentation", "Project details available via WhatsApp"]
    ],
    hardware: ["Project-specific hardware configuration", "Technical support available via WhatsApp"],
    colors: ["Powder coating", "Project-specific coating"]
  },
  {
    id: "guanyan-e85-outward-window",
    title: "Guanyan E85 Outward-Opening Window",
    tag: "Window / E85",
    summary: "Outward-opening window system sample and project information for residential applications.",
    image: "assets/product-samples/guanyan-e85-outward-window-transparent.png",
    categories: ["window"],
    features: ["Outward-opening window configuration", "Sample-corner image for technical review", "Project information available via WhatsApp"],
    details: [
      ["Opening type", "Outward-opening window"],
      ["Sample corner", "Guanyan E85 outward-opening window sample"],
      ["Best for", "Residential projects that require outward-opening operation"]
    ],
    specs: [
      ["System family", "Guanyan E85"],
      ["Opening type", "Outward-opening"],
      ["Documentation", "Project details available via WhatsApp"]
    ],
    hardware: ["Project-specific hardware configuration", "Technical support available via WhatsApp"],
    colors: ["Powder coating", "Project-specific coating"]
  },
  {
    id: "guanyan-96-passive-window",
    title: "Guanyan 96 Passive Window",
    tag: "Window / Passive",
    summary: "Passive window information for low-energy residential and project envelope design.",
    image: "assets/product-samples/e85-product-transparent.png",
    categories: ["window"],
    features: ["Passive window system family", "Low-energy building applications", "Sample-corner detailing for project comparison"],
    details: [
      ["Opening type", "Passive inward-opening window"],
      ["Sample corner", "Guanyan 96 passive window sample"],
      ["Best for", "Low-energy residential developments and project envelope design"]
    ],
    specs: [
      ["System family", "Guanyan 96"],
      ["Application", "Passive and low-energy projects"],
      ["Documentation", "Project details available via WhatsApp"]
    ],
    hardware: ["Project-specific hardware configuration", "Technical support available via WhatsApp"],
    colors: ["Powder coating", "Project-specific coating"]
  },
  {
    id: "guanyan-e105-passive-inward-window",
    title: "Guanyan E105 Passive Inward-Opening Window",
    tag: "Window / Passive",
    summary: "High-performance passive window system with sample image and project information.",
    image: "assets/product-samples/guanyan-e105-inward-window-transparent.png",
    categories: ["window"],
    features: ["Passive inward-opening window", "High-performance residential envelope applications", "Project information available via WhatsApp"],
    details: [
      ["Opening type", "Passive inward-opening window"],
      ["Sample corner", "Guanyan E105 passive inward-opening window sample"],
      ["Best for", "Projects that prioritize envelope performance and acoustic comfort"]
    ],
    specs: [
      ["System family", "Guanyan E105"],
      ["Application", "Passive and low-energy projects"],
      ["Documentation", "Project details available via WhatsApp"]
    ],
    hardware: ["Project-specific hardware configuration", "Technical support available via WhatsApp"],
    colors: ["Powder coating", "Project-specific coating"]
  },
  {
    id: "guanyan-s105-passive-inward-window",
    title: "Guanyan S105 Passive Inward-Opening Window",
    tag: "Window / Passive",
    summary: "S105 passive inward-opening window sample and project information for comparison.",
    image: "assets/product-samples/guanyan-s105-passive-inward-window-transparent.png",
    categories: ["window"],
    features: ["S105 passive inward-opening window", "Sample image for system comparison", "Project information available via WhatsApp"],
    details: [
      ["Opening type", "Passive inward-opening window"],
      ["Sample corner", "Guanyan S105 passive inward-opening window sample"],
      ["Best for", "Passive and low-energy residential envelope projects"]
    ],
    specs: [
      ["System family", "Guanyan S105"],
      ["Application", "Passive and low-energy projects"],
      ["Documentation", "Project details available via WhatsApp"]
    ],
    hardware: ["Project-specific hardware configuration", "Technical support available via WhatsApp"],
    colors: ["Powder coating", "Project-specific coating"]
  },
  {
    id: "guanyan-e120-outward-window-screen",
    title: "Guanyan E120 Outward Window with Screen",
    tag: "Window / Screen",
    summary: "Integrated outward-opening window and screen system with project information.",
    image: "assets/product-samples/guanyan-e120-outward-window-screen-transparent.png",
    categories: ["window"],
    features: ["Outward-opening window with integrated screen", "Project information available via WhatsApp", "Sample image for review"],
    details: [
      ["Opening type", "Outward-opening window with screen"],
      ["Sample corner", "Guanyan E120 outward window with screen sample"],
      ["Best for", "Residential projects requiring window-and-screen integration"]
    ],
    specs: [
      ["System family", "Guanyan E120"],
      ["Application", "Window and screen integration"],
      ["Documentation", "Project details available via WhatsApp"]
    ],
    hardware: ["Project-specific hardware configuration", "Technical support available via WhatsApp"],
    colors: ["Powder coating", "Project-specific coating"]
  },
  {
    id: "guanyan-s120-outward-window-screen",
    title: "Guanyan S120 Outward Window with Screen",
    tag: "Window / Screen",
    summary: "S120 outward-opening window and screen sample image for system comparison.",
    image: "assets/product-samples/guanyan-s120-outward-window-screen-transparent.png",
    categories: ["window"],
    features: ["Outward-opening window with integrated screen", "S120 system family", "Project information available via WhatsApp"],
    details: [
      ["Opening type", "Outward-opening window with screen"],
      ["Sample corner", "Guanyan S120 outward window with screen sample"],
      ["Best for", "Residential openings that need integrated screen functionality"]
    ],
    specs: [
      ["System family", "Guanyan S120"],
      ["Application", "Window and screen integration"],
      ["Documentation", "Project details available via WhatsApp"]
    ],
    hardware: ["Project-specific hardware configuration", "Technical support available via WhatsApp"],
    colors: ["Powder coating", "Project-specific coating"]
  },
  {
    id: "guanyan-s120-outward-door-screen",
    title: "Guanyan S120 Outward Door with Screen",
    tag: "Door / Screen",
    summary: "Integrated outward-opening door and screen product system for balcony and terrace use.",
    image: "assets/product-samples/guanyan-s120-outward-door-screen-transparent.png",
    categories: ["door"],
    features: ["Outward-opening door and screen system", "Balcony and terrace applications", "Project information available via WhatsApp"],
    details: [
      ["Opening type", "Outward-opening door with screen"],
      ["Sample corner", "Guanyan S120 outward door with screen sample"],
      ["Best for", "Balconies, terraces and private residential openings"]
    ],
    specs: [
      ["System family", "Guanyan S120"],
      ["Application", "Door and screen integration"],
      ["Documentation", "Project details available via WhatsApp"]
    ],
    hardware: ["Project-specific hardware configuration", "Technical support available via WhatsApp"],
    colors: ["Powder coating", "Project-specific coating"]
  },
  {
    id: "guanyan-150-panoramic-sliding-window",
    title: "Guanyan 150 Panoramic Sliding Window",
    tag: "Sliding / 150",
    summary: "Panoramic sliding system information for wide openings and view-focused projects.",
    image: "assets/product-samples/jingyan-150-panoramic-sliding-transparent.png",
    categories: ["sliding"],
    features: ["Panoramic sliding window system", "Wide-opening project applications", "Project information available via WhatsApp"],
    details: [
      ["Opening type", "Panoramic sliding window"],
      ["Sample corner", "Guanyan 150 panoramic sliding sample"],
      ["Best for", "Large openings and view-focused residential projects"]
    ],
    specs: [
      ["System family", "Guanyan 150"],
      ["Application", "Panoramic sliding openings"],
      ["Documentation", "Project details available via WhatsApp"]
    ],
    hardware: ["Project-specific sliding hardware configuration", "Technical support available via WhatsApp"],
    colors: ["Powder coating", "Project-specific coating"]
  },
  {
    id: "jingran-150-panoramic-sliding-window",
    title: "Jingran 150 Panoramic Sliding Window",
    tag: "Sliding / 150",
    summary: "Jingran panoramic sliding system information and sample image for large residential openings.",
    image: "assets/product-samples/jingyan-150-panoramic-sliding-transparent.png",
    categories: ["sliding"],
    features: ["Panoramic sliding system", "Wide-opening residential applications", "Project information available via WhatsApp"],
    details: [
      ["Opening type", "Panoramic sliding window"],
      ["Sample corner", "Jingran 150 panoramic sliding sample"],
      ["Best for", "Large residential openings, terraces and view-focused projects"]
    ],
    specs: [
      ["System family", "Jingran 150"],
      ["Application", "Panoramic sliding openings"],
      ["Documentation", "Project details available via WhatsApp"]
    ],
    hardware: ["Project-specific sliding hardware configuration", "Technical support available via WhatsApp"],
    colors: ["Powder coating", "Project-specific coating"]
  }
];

const portfolioProductOrder = [
  "e-ultra-96-inward-window",
  "guanyan-s76-three-in-one-system",
  "e-ultra-96-hinged-door",
  "jingran-125-lift-slide",
  "guanyan-e85-inward-window",
  "guanyan-e85-outward-window",
  "guanyan-96-passive-window",
  "guanyan-e105-passive-inward-window",
  "guanyan-s105-passive-inward-window",
  "guanyan-e120-outward-window-screen",
  "guanyan-s120-outward-window-screen",
  "guanyan-s120-outward-door-screen",
  "guanyan-150-panoramic-sliding-window",
  "jingran-150-panoramic-sliding-window"
];

const portfolioShowcaseProducts = portfolioProductOrder
  .map((id) => products.find((product) => product.id === id))
  .filter(Boolean)
  .map((product, index) => ({
    ...product,
    tag: `${index === 0 ? "Flagship | " : ""}${product.tag.replace(/\s*\/\s*/g, " | ")}`
  }));

const mediaContent = {
  "brand-film": {
    label: "Brand Video",
    title: "e-gooo brand film area",
    image: "assets/clean/clean-sea-view-window.jpg",
    copy: "A dedicated brand film can introduce e-gooo's quiet-living positioning, product systems, design service and premium residential applications."
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
const showcaseFilterLinks = document.querySelectorAll("[data-showcase-filter]");
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
const validFilters = new Set(["all", "window", "door", "sliding"]);
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
    sampleImage.alt = `${sample.label} for ${sample.title || "e-gooo product"}`;
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

function createProductVisual(product, className = "product-sheet-image") {
  if (!product.image) {
    const placeholder = createElement("div", `${className} product-sheet-placeholder`);
    placeholder.setAttribute("role", "img");
    placeholder.setAttribute("aria-label", `${product.title} engineering visual pending`);
    placeholder.append(
      createElement("span", "", "e-gooo"),
      createElement("strong", "", "SYSTEM SECTION")
    );
    return placeholder;
  }

  const image = document.createElement("img");
  image.className = className;
  image.src = product.image;
  image.alt = `${product.title} product system visual`;
  image.loading = "lazy";
  return image;
}

function getProductOpening(product) {
  return findRowValue(product.details, ["Opening type", "Opening types"])
    || findRowValue(product.specs, ["Opening type", "Application"])
    || product.tag;
}

function getProductSystemDepth(product) {
  return findRowValue(product.specs, ["System depth"])
    || findRowValue(product.specs, ["System family"])
    || product.title.split(" ").slice(0, 2).join(" ");
}

function getProductVisibleWidth(product) {
  return findRowValue(product.specs, ["Frame face width"])
    || findRowValue(product.specs, ["Sash face width"])
    || "Project-specific";
}

function getProductLoad(product) {
  const raw = findRowValue(product.specs, ["Maximum sash weight"]) || "";
  const matches = [...raw.matchAll(/(\d+)\s*kg/gi)].map((match) => Number(match[1]));
  if (matches.length) return `≤ ${Math.max(...matches)} kg`;
  if (product.categories.includes("sliding")) return "Project-specific";
  return "By configuration";
}

function getProductOpeningRange(product) {
  if (product.categories.includes("sliding")) return "Lift-slide";
  const opening = getProductOpening(product).toLowerCase();
  if (opening.includes("fixed")) return "Fixed";
  return "90° / 180°";
}

function getConfigurationTags(product) {
  if (product.categories.includes("sliding")) {
    return ["LIFT-SLIDE", "LARGE OPENINGS", "PANORAMIC GLAZING"];
  }
  if (product.categories.includes("door")) {
    return ["HINGED OPENING", "TERRACE ACCESS", "PROJECT HARDWARE"];
  }
  if (product.title.toLowerCase().includes("screen")) {
    return ["OPENING WINDOW", "INTEGRATED SCREEN", "RESIDENTIAL USE"];
  }
  return ["INWARD-OPENING", "FIXED GLAZING", "LOW-ENERGY ENVELOPE"];
}

function createMetricStrip(product) {
  const systemDepth = findRowValue(product.specs, ["System depth"]);
  const systemFamily = findRowValue(product.specs, ["System family"]) || product.title.split(" ").slice(0, 2).join(" ");
  const openingLabel = product.categories.includes("sliding") ? "OPENING MODE" : "OPENING ANGLES";
  const metrics = [
    [systemDepth ? "SYSTEM DEPTH" : "SYSTEM FAMILY", systemDepth || systemFamily],
    ["VISIBLE WIDTH", getProductVisibleWidth(product)],
    [openingLabel, getProductOpeningRange(product)],
    ["SASH LOAD CAPACITY", getProductLoad(product)]
  ];

  const strip = createElement("div", "product-sheet-spec-strip");
  metrics.forEach(([label, value]) => {
    const item = createElement("div", "product-sheet-spec");
    item.append(createElement("span", "", label), createElement("strong", "", value));
    strip.append(item);
  });
  return strip;
}

function createTechnicalCards(product) {
  const visibleWidth = getProductVisibleWidth(product);
  const opening = getProductOpening(product);
  const primaryImage = product.image;
  const secondaryImage = product.samples?.[0]?.image || product.image;
  const cards = [
    {
      kicker: "PROFILE ENGINEERING",
      image: primaryImage,
      title: "Multi-cavity profile logic",
      copy: product.hardware?.[0] || "System profiles are configured around project-specific thermal, structural and opening requirements."
    },
    {
      kicker: "CAD SECTION",
      image: secondaryImage,
      title: `${visibleWidth} standard visible width`,
      copy: `The ${opening.toLowerCase()} configuration supports coordinated detailing for specification review and project communication.`
    },
    {
      kicker: "PERFORMANCE LOGIC",
      image: primaryImage,
      title: product.features?.[0] || "Sealing and drainage architecture",
      copy: product.features?.[1] || "Integrated sealing, glazing and drainage details help balance comfort, durability and long-term performance."
    }
  ];

  const grid = createElement("div", "product-sheet-tech-grid");
  cards.forEach((card) => {
    const article = createElement("article", "product-sheet-tech-card");
    const media = createElement("div", "product-sheet-tech-media");
    if (card.image) {
      const image = document.createElement("img");
      image.src = card.image;
      image.alt = `${product.title} ${card.kicker.toLowerCase()} visual`;
      image.loading = "lazy";
      media.append(image);
    } else {
      media.append(createProductVisual(product, "product-sheet-tech-placeholder"));
    }
    article.append(
      createElement("span", "product-sheet-tech-kicker", card.kicker),
      media,
      createElement("h4", "", card.title),
      createElement("p", "", card.copy)
    );
    grid.append(article);
  });
  return grid;
}

function createProductCard(product, isFeatured = false, displayIndex = 0) {
  const tone = productToneCycle[displayIndex % productToneCycle.length];
  const card = createElement("article", `product-card product-portfolio-card product-portfolio-row product-card-tone-${tone}${isFeatured ? " product-card-featured" : ""}`);
  card.dataset.productId = product.id;
  card.dataset.tone = tone;
  const mediaWrap = createElement("div", "product-card-media");
  const media = product.image ? document.createElement("img") : createElement("div", "product-image-placeholder");
  if (product.image) {
    media.src = product.image;
    media.alt = `${product.title} sample image`;
    media.loading = "lazy";
  } else {
    media.setAttribute("role", "img");
    media.setAttribute("aria-label", `${product.title} image pending`);
  }
  mediaWrap.append(media);

  const body = createElement("div", "product-body");
  const tag = createElement("span", "product-tag", product.tag);
  body.append(
    tag,
    createElement("h3", "", product.title),
    createElement("p", "", product.summary)
  );

  const actions = createElement("div", "product-actions");
  const detailButton = createElement("button", "text-button portfolio-link product-detail-trigger");
  detailButton.type = "button";
  detailButton.append(
    createElement("span", "", "View specifications"),
    createElement("span", "link-arrow", "→")
  );
  detailButton.addEventListener("click", () => openProductDialog(product.dialogProductId || product.id));
  actions.append(detailButton);

  const whatsapp = createElement("a", "text-button portfolio-link");
  whatsapp.append(
    createElement("span", "", whatsappContactLabel),
    createElement("span", "link-arrow", "→")
  );
  whatsapp.href = whatsappContactUrl;
  whatsapp.target = "_blank";
  whatsapp.rel = "noopener";
  whatsapp.setAttribute("aria-label", "Contact e-gooo via WhatsApp for more product details");
  actions.append(whatsapp);
  body.append(actions);
  card.append(mediaWrap, body);
  return card;
}

function productMatchesFilter(product, filter) {
  if (filter === "all") return true;
  return product.categories.includes(filter);
}

function sortProductsForFilter(productList, filter) {
  const ordered = [...productList];
  const findSeriesIndex = (series) => {
    const seriesPattern = new RegExp(`(^|[^0-9])${series}([^0-9]|$)`, "i");
    return ordered.findIndex((product) => seriesPattern.test(`${product.title} ${product.tag} ${product.id}`));
  };

  if (filter === "window") {
    const first96Index = findSeriesIndex("96");
    if (first96Index > 0) {
      ordered.unshift(...ordered.splice(first96Index, 1));
    }
  }

  if (filter === "sliding") {
    const first125Index = findSeriesIndex("125");
    if (first125Index > 0) {
      ordered.unshift(...ordered.splice(first125Index, 1));
    }
  }
  return ordered;
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

  const filtered = portfolioShowcaseProducts.filter((product) => productMatchesFilter(product, filter));
  const ordered = sortProductsForFilter(filtered, filter);

  grid.replaceChildren(...ordered.map((product, index) => createProductCard(product, index === 0 && Boolean(product.image), index)));
}

function getInitialProductFilter() {
  const params = new URLSearchParams(window.location.search);
  const requestedFilter = params.get("filter") || "all";
  return validFilters.has(requestedFilter) ? requestedFilter : "all";
}

function applyProductFilter(filter = "all", updateUrl = false) {
  const nextFilter = validFilters.has(filter) ? filter : "all";
  setActiveFilter(nextFilter);
  renderProducts(nextFilter);

  if (!updateUrl || !grid) return;

  const nextUrl = new URL(window.location.href);
  if (nextFilter === "all") {
    nextUrl.searchParams.delete("filter");
  } else {
    nextUrl.searchParams.set("filter", nextFilter);
  }
  nextUrl.hash = "product-list";
  window.history.replaceState({}, "", nextUrl);
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

  const sheet = createElement("article", "product-sheet");
  const headerBar = createElement("header", "product-sheet-bar product-sheet-bar-top");
  const logo = document.createElement("img");
  logo.src = "assets/brand/e-gooo-logo-footer-transparent.png";
  logo.alt = "e-gooo Windows & Doors";
  logo.className = "product-sheet-logo";
  headerBar.append(
    logo,
    createElement("span", "", "HIGH-PERFORMANCE WINDOW SYSTEM")
  );

  const media = createElement("div", "product-sheet-hero-media");
  media.append(createProductVisual(product));
  const sampleGallery = createSampleGallery(product.samples);
  if (sampleGallery) media.append(sampleGallery);

  const badges = createElement("div", "product-sheet-badges");
  getConfigurationTags(product).forEach((tag) => badges.append(createElement("span", "", tag)));

  const copy = createElement("div", "product-sheet-copy");
  copy.append(
    createElement("span", "product-sheet-kicker", product.tag),
    createElement("h2", "", product.title),
    createElement("h3", "", "COMFORT, ENGINEERED."),
    createElement("p", "", product.summary),
    createElement("div", "product-sheet-divider"),
    badges
  );

  const quote = createElement("a", "button primary", "Request quotation");
  quote.href = "cooperation.html";
  quote.addEventListener("click", () => closeDialog(dialog));

  const whatsapp = createElement("a", "button secondary dark-text", whatsappContactLabel);
  whatsapp.href = whatsappContactUrl;
  whatsapp.target = "_blank";
  whatsapp.rel = "noopener";
  whatsapp.setAttribute("aria-label", "Contact e-gooo via WhatsApp for more product details");

  const actions = createElement("div", "product-sheet-actions");
  actions.append(quote, whatsapp);
  copy.append(actions);

  const hero = createElement("section", "product-sheet-hero");
  hero.append(media, copy);

  const technical = createElement("section", "product-sheet-technical");
  technical.append(
    createElement("span", "product-sheet-section-kicker", "TECHNICAL OVERVIEW"),
    createElement("h3", "", "System details for project specification."),
    createTechnicalCards(product)
  );

  const detailColumns = createElement("section", "product-sheet-detail-columns");
  const specColumn = createElement("div", "product-sheet-detail-block");
  specColumn.append(createElement("h3", "", "Technical specifications"), createSpecTable(product.specs));
  const hardwareColumn = createElement("div", "product-sheet-detail-block");
  hardwareColumn.append(
    createElement("h3", "", "Hardware and operation"),
    createFeatureList(product.hardware),
    createElement("h3", "", "Color and finish options"),
    createColorSwatches(product.colors)
  );
  detailColumns.append(specColumn, hardwareColumn);

  const footerBar = createElement("footer", "product-sheet-bar product-sheet-bar-bottom");
  footerBar.append(
    createElement("span", "", "SYSTEM ENGINEERING • PROJECT CUSTOMISATION • CONTROLLED MANUFACTURING"),
    createElement("strong", "", "e-gooo | Where architecture breathes and life flows.")
  );

  sheet.append(headerBar, hero, createMetricStrip(product), technical, detailColumns, footerBar);
  dialogBody.replaceChildren(sheet);

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
    applyProductFilter(button.dataset.filter, true);
  });
});

familyLinks.forEach((link) => {
  link.addEventListener("click", () => {
    applyProductFilter(link.dataset.familyFilter || "all", true);
  });
});

showcaseFilterLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const filter = link.dataset.showcaseFilter;
    if (!validFilters.has(filter)) return;
    event.preventDefault();
    applyProductFilter(filter, true);
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

function updateHeaderState() {
  if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
}

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();

if (menuButton && header) {
  menuButton.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
}

if (siteNav && header && menuButton) {
  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      header.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
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

    const subject = `${lead.type} from e-gooo English website`;
    const body = Object.entries(lead)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    window.location.href = `mailto:${inquiryRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    form.reset();
    const status = form.querySelector("[data-form-status]");
    if (status) status.textContent = "Your email app is opening with the inquiry. A backup was saved in this browser.";
  });
});

applyProductFilter(getInitialProductFilter());
renderComparisonTable();
initHeroCarousel();
