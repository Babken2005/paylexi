const menuBtn = document.querySelector('.ri-menu-line');
const closeBtn = document.querySelector('.ri-close-line');
const menu = document.querySelector('.mobileMenu');

menuBtn.addEventListener('click', () => {
  menu.style.transform = "translateX(0%)";
})
closeBtn.addEventListener('click', () => {
  menu.style.transform = "translateX(100%)";
})