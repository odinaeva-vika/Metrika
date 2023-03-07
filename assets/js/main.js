  /*бургер + скрол по секциям*/
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
  });
});

icon?.addEventListener("click", () => {
  burger?.classList.toggle("menu-icon--active");
});

/*скрол по разделам - убираем перелинковку в адресной строке*/

  const smoothLinks = document.querySelectorAll('a[href^="#"]');

  for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');
  
          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  };