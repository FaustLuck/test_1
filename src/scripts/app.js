const searchButton = document.querySelector(".search");
const catalogButton = document.querySelector(".catalog");
const menuButton = document.querySelector(".button_menu-mobile");
const closeButton = document.querySelector(".button-close");


function openSearch() {
  if (!window.matchMedia("(max-width: 576px)").matches) return;
  searchButton.classList.add("open");
  toggleOverlay();
  const {bottom} = searchButton.getBoundingClientRect();
  closeButton.style.top = `${bottom + 20}px`;
  closeButton.style.left = "50%";
  closeButton.style.transform = "translateX(-50%)";
  closeButton.classList.remove("hide");

  searchButton.removeEventListener("pointerdown", openSearch);
  closeButton.addEventListener("pointerdown", closeSearch);
}

function closeSearch() {
  searchButton.classList.remove("open");
  toggleOverlay();
  closeButton.classList.add("hide");
  closeButton.style = "";

  searchButton.addEventListener("pointerdown", openSearch);
  closeButton.removeEventListener("pointerdown", closeSearch);
}

function openCatalog() {
  if (!window.matchMedia("(max-width: 576px)").matches) return;
  console.log(1);
}

function closeCatalog() {
}

searchButton.addEventListener("pointerdown", openSearch);
catalogButton.addEventListener("pointerdown", openCatalog);

function toggleOverlay() {
  const overlay = document.querySelector(".overlay");
  const body = document.body;
  const isClose = !overlay.classList.contains("open");
  overlay.classList.toggle("open", isClose);
  body.classList.toggle("open", isClose);
}