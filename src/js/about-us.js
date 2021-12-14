// // // import SimpleLightbox from 'simplelightbox';
// // // import 'simplelightbox/dist/simple-lightbox.min.css';

// // const photo = document.querySelector(".footer__link");

// // photo.addEventListener('click', checkModal);

// // function checkModal() { 
// //   const modal = document.querySelector("about-us");
// //   modal.classList.add(".about-us__visible");
// //   if (modal.classList.contains(".about-us__visible")) {
// //     modal.classList.remove(".about-us__visible");
// //    }

// // }

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const alexNumo = document.querySelector(".sergyi");
console.log(alexNumo);
alexNumo.addEventListener('onclick', aboutSergyi);
const findChange = document.querySelector(".modal-header");
console.log(findChange);

findChange.insertAdjacentHTML('beforeend', `<div class="modal-body">
    <a class='btn btn-primary' href="#" style="pointer-events: none"><img class="member-photo" src="./images/member_logo.jpg" alt="AlexNumo" /></a>
    <div class="member-info-position">
        <h3>AlexNumo</h3>
        <ul class="info-about-member-work">
            <li class="about-us-marker">
                <p>ЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕ</p>
            </li>
            <li class="about-us-marker">
                <p>ЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ</p>
            </li>
        </ul>
    </div>
</div>`);

function aboutSergyi() {
  `<div class="modal-body">
    <a class='btn btn-primary' href="#" style="pointer-events: none"><img class="member-photo" src="./images/member_logo.jpg" alt="AlexNumo" /></a>
    <div class="member-info-position">
        <h3>AlexNumo</h3>
        <ul class="info-about-member-work">
            <li class="about-us-marker">
                <p>ЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕ</p>
            </li>
            <li class="about-us-marker">
                <p>ЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ</p>
            </li>
        </ul>
    </div>
</div>`
}
function aboutAlexNumo() {
  `<div class="modal-body">
    <a class='btn btn-primary' href="#"><img class="member-photo" src="./images/member_logo.jpg" alt="AlexNumo" /></a>
    <div class="member-info-position">
      <h3>AlexNumo</h3>
      <ul class="info-about-member-work">
        <li class="about-us-marker">
          <p>Падающий снег</p>
        </li>
        <li class="about-us-marker">
          <p>Работа нашей команды</p>
        </li>
      </ul>
    </div>
  </div>`
}

// import SimpleLightbox from "simplelightbox";
// import 'simplelightbox/dist/simple-lightbox.min.css';

// // let simple = document.getElementById("myBtn").onclick = lightboxSM; return false

// // function lightboxSM() {
// //   console.log("SASAMBA");
// // }


// var lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'title',
//   captionDelay: 250,
//   close: true,
//   widthRatio: 0.5,
//   heightRatio: 0.5,
//   maxZoom: 0,
//   focus: false,
//   disableScroll: true,
// });
