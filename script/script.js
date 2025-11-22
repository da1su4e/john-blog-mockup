const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__nav');
const menuLinks = document.querySelectorAll('.header__nav-link');


if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
   });

   menuLinks.forEach(link => {
      link.addEventListener("click", () => {
         document.body.classList.remove('lock');
         iconMenu.classList.remove('active');
         menuBody.classList.remove('active');
      });
   });
}