let offset = 0;
const slider = document.querySelector('.sliderParent');
const buttonLeft = document.querySelector('.clientsBlockButtonLeft');
const buttonRight = document.querySelector('.clientsBlockButtonRight');

buttonRight.addEventListener('click', () => {
  offset = offset + 462;
  if (offset > 924) {
    offset = 0;
  }
  slider.style.left = -offset + 'px';
});

buttonLeft.addEventListener('click', () => {
  offset = offset - 462;
  if (offset < 0) {
    offset = 0;
  }
  slider.style.left = -offset + 'px';
});