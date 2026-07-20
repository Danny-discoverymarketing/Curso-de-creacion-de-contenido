const sectionsContainer = document.querySelector("#sectionsContainer");
const categoryFilters = document.querySelector("#categoryFilters");
const searchInput = document.querySelector("#searchInput");
const resourceCount = document.querySelector("#resourceCount");
const emptyState = document.querySelector("#emptyState");

let activeCategory = "Todos";

const allResources = resourceSections.flatMap((section) =>
  section.resources.map((resource) => ({
    ...resource,
    category: section.category,
  }))
);

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getFilteredResources() {
  const query = normalizeText(searchInput.value.trim());

  return allResources.filter((resource) => {
    const matchesCategory =
      activeCategory === "Todos" || resource.category === activeCategory;
    const searchableText = normalizeText(
      `${resource.title} ${resource.description} ${resource.category} ${resource.url}`
    );

    return matchesCategory && searchableText.includes(query);
  });
}

function createResourceCard(resource) {
  const item = document.createElement("li");
  item.className = "resource-card";

  let image = null;
  if (resource.image) {
    image = document.createElement("img");
    image.className = "resource-image";
    image.src = resource.image;
    image.alt = resource.imageAlt || "";
    image.loading = "lazy";
  }

  const main = document.createElement("div");
  main.className = "resource-main";

  const titleRow = document.createElement("div");
  titleRow.className = "resource-title-row";

  const title = document.createElement("h3");
  title.className = "resource-title";

  const link = document.createElement("a");
  link.href = resource.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = resource.title;

  const externalIcon = document.createElement("span");
  externalIcon.className = "external-icon";
  externalIcon.setAttribute("aria-hidden", "true");
  externalIcon.textContent = "↗";

  const visibleUrl = document.createElement("a");
  visibleUrl.className = "resource-url";
  visibleUrl.href = resource.url;
  visibleUrl.target = "_blank";
  visibleUrl.rel = "noopener noreferrer";
  visibleUrl.textContent = resource.url;

  title.append(link, externalIcon);
  titleRow.append(title);
  main.append(titleRow, visibleUrl);
  item.append(main);

  if (image) {
    item.append(image);
  }

  return item;
}

function createVideoCourseCard(resources) {
  const item = document.createElement("li");
  item.className = "resource-card video-course-card";

  resources.forEach((resource) => {
    const videoItem = document.createElement("article");
    videoItem.className = "video-week";

    const title = document.createElement("h3");
    title.className = "resource-title";

    const link = document.createElement("a");
    link.href = resource.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = resource.title;

    const externalIcon = document.createElement("span");
    externalIcon.className = "external-icon";
    externalIcon.setAttribute("aria-hidden", "true");
    externalIcon.textContent = "↗";

    const visibleUrl = document.createElement("a");
    visibleUrl.className = "resource-url";
    visibleUrl.href = resource.url;
    visibleUrl.target = "_blank";
    visibleUrl.rel = "noopener noreferrer";
    visibleUrl.textContent = resource.url;

    title.append(link, externalIcon);
    videoItem.append(title, visibleUrl);

    if (resource.image) {
      const image = document.createElement("img");
      image.className = "resource-image";
      image.src = resource.image;
      image.alt = resource.imageAlt || "";
      image.loading = "lazy";
      videoItem.append(image);
    }

    item.append(videoItem);
  });

  return item;
}

function renderSections() {
  const filteredResources = getFilteredResources();
  const groupedResources = resourceSections
    .map((section) => ({
      category: section.category,
      resources: filteredResources.filter(
        (resource) => resource.category === section.category
      ),
    }))
    .filter((section) => section.resources.length > 0);

  sectionsContainer.replaceChildren();
  resourceCount.textContent = filteredResources.length;
  emptyState.hidden = filteredResources.length > 0;

  groupedResources.forEach((section) => {
    const sectionElement = document.createElement("section");
    sectionElement.className = "resource-section";
    if (section.category === "Videos Curso Cut 30 en Español") {
      sectionElement.classList.add("video-course-section");
    }
    sectionElement.setAttribute("aria-labelledby", `section-${slugify(section.category)}`);

    const heading = document.createElement("div");
    heading.className = "section-heading";

    const title = document.createElement("h2");
    title.id = `section-${slugify(section.category)}`;
    title.textContent = section.category;

    const list = document.createElement("ul");
    list.className = "resource-list";
    if (section.category === "Videos Curso Cut 30 en Español") {
      list.append(createVideoCourseCard(section.resources));
    } else {
      section.resources.forEach((resource) => list.append(createResourceCard(resource)));
    }

    heading.append(title);
    sectionElement.append(heading, list);
    sectionsContainer.append(sectionElement);
  });
}

function renderCategoryFilters() {
  const categories = ["Todos", ...resourceSections.map((section) => section.category)];

  const buttons = categories.map((category) => {
    const button = document.createElement("button");
    button.className = "filter-button";
    button.type = "button";
    button.textContent = category;
    button.setAttribute("aria-pressed", category === activeCategory ? "true" : "false");
    button.addEventListener("click", () => {
      activeCategory = category;
      updateFilterButtons();
      renderSections();
    });
    return button;
  });

  categoryFilters.replaceChildren(...buttons);
}

function updateFilterButtons() {
  categoryFilters.querySelectorAll(".filter-button").forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      button.textContent === activeCategory ? "true" : "false"
    );
  });
}

function slugify(value) {
  return normalizeText(value).replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

searchInput.addEventListener("input", renderSections);

renderCategoryFilters();
renderSections();
