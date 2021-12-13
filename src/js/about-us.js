// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

const photo = document.querySelector(".footer__link");

photo.addEventListener('click', checkModal);

function checkModal() { 
  const modal = document.querySelector("about-us");
  modal.classList.add(".about-us__visible");
  if (modal.classList.contains(".about-us__visible")) {
    modal.classList.remove(".about-us__visible");
   }

}