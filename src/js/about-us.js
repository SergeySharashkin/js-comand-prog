// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Mousewheel } from 'swiper';

const footerLink = document.querySelector('.footer__link');
const swiperActiv = document.querySelector('.backdrop-swiper');
const swiperFix = document.getElementById('swiper-fix');

const swiperClose = document.querySelector('.js-swiper-close');
const swiperPosition = document.querySelector('.swiper-position');

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Mousewheel],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: {
    invert: true,
  },
  slidesPerView: 1,
  spaceBetween: 4,
  slidesPerGroup: 1,
});


footerLink.addEventListener('click', () => {
  swiperActiv.style.display = 'block';
  swiperFix.classList.add('swiper-fix');
});

swiperClose.addEventListener('click', () => {
  swiperActiv.style.display = 'none';
  swiperFix.classList.remove('swiper-fix');
});

function handleModalClick(evt) {
  if (!evt.target.closest('.swiper-position')) {
    swiperActiv.style.display = 'none';
    swiperFix.classList.remove('swiper-fix');
  }
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    swiperActiv.style.display = 'none';
    swiperFix.classList.remove('swiper-fix');
  }
});
