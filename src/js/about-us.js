const photo = document.querySelector(".footer__link");

photo.addEventListener('click', clickAboutUs);

function clickAboutUs() { 
    return `<div class="js-modal-about-us">
    <ul>
      <li>
        <img class="#" src="#" />
      </li>
    </ul>
  </div>`
};