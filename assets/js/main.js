/* бургер + скролл*/

const burger = document?.querySelector("[data-burger]");
const menu = document?.querySelector("[data-nav]");
const menuItems = menu.querySelectorAll("a");
const icon = document?.querySelector(".menu-icon");

const body = document.body;

burger?.addEventListener("click", () => {
  body.classList.toggle("stop-scroll");
  menu?.classList.toggle("menu--visible");
});

menuItems.forEach(el => {
  el.addEventListener("click", () => {
    body.classList.remove("stop-scroll");
    menu?.classList.remove("menu--visible");
    burger?.classList.remove("menu-icon--active");
  });
});

icon?.addEventListener("click", () => {
  burger?.classList.toggle("menu-icon--active");
});