const searchButton = document.querySelector(".search-js");
const catalogButton = document.querySelector(".catalog-js");
const catalogMenu = document.querySelector(".menu-catalog-js");
const menuButton = document.querySelector(".button_menu-js");
const menu = document.querySelector(".sidebar-js");
const closeButton = document.querySelector(".button-close-js");


function openSearch() {
  if (!window.matchMedia("(max-width: 576px)").matches) return;
  insertPlug(searchButton);
  toggleOverlay([searchButton]);
  const {bottom} = searchButton.getBoundingClientRect();
  closeButton.style.top = `${bottom + 20}px`;
  closeButton.style.left = "50%";
  closeButton.style.transform = "translateX(-50%)";
  searchButton.removeEventListener("pointerdown", openSearch);
  closeButton.addEventListener("pointerdown", closeSearch);
}

function closeSearch() {
  toggleOverlay([searchButton]);
  removePlug();
  closeButton.style = "";
  searchButton.addEventListener("pointerdown", openSearch);
  closeButton.removeEventListener("pointerdown", closeSearch);
}

function openCatalog() {
  if (!window.matchMedia("(max-width: 768px)").matches) return;
  insertPlug(catalogButton);
  toggleOverlay([catalogButton, catalogMenu]);
  const {bottom: bottomCatalog, left: leftCatalog} = catalogButton.getBoundingClientRect();
  const {left, top} = menuButton.getBoundingClientRect();
  closeButton.style.left = left + "px";
  closeButton.style.top = top + "px";
  catalogMenu.style.top = bottomCatalog + 30 + "px";
  catalogMenu.style.left = leftCatalog + "px";
  catalogButton.removeEventListener("pointerdown", openCatalog);
  closeButton.addEventListener("pointerdown", closeCatalog);
  catalogButton.addEventListener("pointerdown", closeCatalog);
}

function closeCatalog() {
  toggleOverlay([catalogButton, catalogMenu]);
  removePlug();
  closeButton.style = "";
  catalogButton.addEventListener("pointerdown", openCatalog);
  catalogButton.removeEventListener("pointerdown", closeCatalog);
  closeButton.removeEventListener("pointerdown", closeCatalog);
}

function openMenu() {
  if (!window.matchMedia("(max-width: 768px)").matches) return;
  toggleOverlay([menuButton, menu]);
  const {left, top} = menuButton.getBoundingClientRect();
  closeButton.style.left = left + "px";
  closeButton.style.top = top + "px";
  menuButton.removeEventListener("pointerdown", openMenu);
  closeButton.addEventListener("pointerdown", closeMenu);
}

function closeMenu() {
  toggleOverlay([menuButton, menu]);
  closeButton.style = "";
  menuButton.addEventListener("pointerdown", openMenu);
  closeButton.removeEventListener("pointerdown", closeMenu);
}

function toggleOverlay(targets) {
  const overlay = document.querySelector(".overlay");
  const body = document.body;
  const isClose = !overlay.classList.contains("open");
  targets.forEach(target => {
    target.classList.toggle("open", isClose);
  });
  overlay.classList.toggle("open", isClose);
  body.classList.toggle("open", isClose);
  closeButton.classList.toggle("hide", !isClose);
}

function insertPlug(target) {
  const plug = target.cloneNode(true);
  plug.classList.remove("catalog-js");
  plug.classList.add("plug-js");
  target.parentNode.insertBefore(plug, target);
}

function removePlug() {
  const plug = document.querySelector(".plug-js");
  plug.remove();
}

document.addEventListener("DOMContentLoaded", () => {
  searchButton.addEventListener("pointerdown", openSearch);
  catalogButton.addEventListener("pointerdown", openCatalog);
  menuButton.addEventListener("pointerdown", openMenu);
});