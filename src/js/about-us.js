  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination, Mousewheel } from 'swiper';



const swiperActiv = document.querySelector(".backdrop-swiper");
const footerLink = document.querySelector(".footer__link");
const swiperFix = document.getElementById('swiper-fix');
const swiperClose = document.querySelector(".js-swiper-close");
const swiperPosition = document.querySelector(".swiper-position");
// const swiperCloseModal = document.querySelector(".backdrop-swiper");
  const swiper = new Swiper('.swiper', {
    modules: [ Navigation, Pagination, Mousewheel ],
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

footerLink.addEventListener('click', ()=>{

  swiperActiv.style.display = 'block';
  swiperFix.classList.add("swiper-fix");
});

swiperClose.addEventListener('click', ()=>{
  swiperActiv.style.display = 'none';
  swiperFix.classList.remove('swiper-fix');
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
  swiperActiv.style.display = 'none';
  swiperFix.classList.remove('swiper-fix');
  }
});

// swiperActiv.addEventListener('click', onModalCloseSwiper);

// function onModalCloseSwiper() {
//   if (swiperPosition.addEventListener('click', () => {
//     swiperActiv.style.display = 'block';
//     swiperFix.classList.add("swiper-fix");
//   })) { }
//  swiperActiv.style.display = 'none';
//   swiperFix.classList.remove('swiper-fix');
// }


// document.onclick = function(e){
//     if ( e.target.className != 'swiper-position' && e.target.className != 'footer__link' ) {
//         swiperActiv.style.display = 'none';
//     };
// };