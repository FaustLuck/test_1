const searchButton = document.querySelector(".search");
const catalogButton = document.querySelector(".catalog");
const menuButton = document.querySelector(".button_menu-mobile");
const menu = document.querySelector(".menu");
const closeButton = document.querySelector(".button-close");


function openSearch() {
  if (!window.matchMedia("(max-width: 576px)").matches) return;
  toggleOverlay(searchButton);
  const {bottom} = searchButton.getBoundingClientRect();
  closeButton.style.top = `${bottom + 20}px`;
  closeButton.style.left = "50%";
  closeButton.style.transform = "translateX(-50%)";
  searchButton.removeEventListener("pointerdown", openSearch);
  closeButton.addEventListener("pointerdown", closeSearch);
}

function closeSearch() {
  toggleOverlay(searchButton);
  closeButton.style = "";
  searchButton.addEventListener("pointerdown", openSearch);
  closeButton.removeEventListener("pointerdown", closeSearch);
}

function openCatalog() {
  if (!window.matchMedia("(max-width: 576px)").matches) return;
  toggleOverlay(catalogButton);
  const {left, top} = menuButton.getBoundingClientRect();
  closeButton.style.left = left + "px";
  closeButton.style.top = top + "px";
  catalogButton.removeEventListener("pointerdown", openCatalog);
  closeButton.addEventListener("pointerdown", closeCatalog);
}

function closeCatalog() {
  toggleOverlay(searchButton);
  closeButton.style = "";
  catalogButton.addEventListener("pointerdown", openCatalog);
  closeButton.removeEventListener("pointerdown", closeCatalog);
}

function openMenu() {
  if (!window.matchMedia("(max-width: 576px)").matches) return;
  toggleOverlay(menuButton);
  const {left, top} = menuButton.getBoundingClientRect();
  closeButton.style.left = left + "px";
  closeButton.style.top = top + "px";
  menu.classList.remove("hide");
  menuButton.removeEventListener("pointerdown", openMenu);
  closeButton.addEventListener("pointerdown", closeMenu);
}

function closeMenu() {
  toggleOverlay(menuButton);
  menu.classList.add("hide");
  closeButton.style = "";
  menuButton.addEventListener("pointerdown", openMenu);
  closeButton.removeEventListener("pointerdown", closeMenu);
}

searchButton.addEventListener("pointerdown", openSearch);
catalogButton.addEventListener("pointerdown", openCatalog);
menuButton.addEventListener("pointerdown", openMenu);

function toggleOverlay(target) {
  const overlay = document.querySelector(".overlay");
  const body = document.body;
  const isClose = !overlay.classList.contains("open");
  target.classList.toggle("open", isClose);
  overlay.classList.toggle("open", isClose);
  body.classList.toggle("open", isClose);
  closeButton.classList.toggle("hide", !isClose);
}