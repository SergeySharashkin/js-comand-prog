
const refModalLink = document.querySelector('.js-modal-open');
const refModalClose = document.querySelector('.js-modal-close');
const refModalOverlay = document.querySelector('.js-modal-overlay')
refModalLink.addEventListener('click', openModal)

export function openModal (e){
  // e.preventDefault()
  const modalName = refModalLink.getAttribute('data-modal')
  const modal = document.querySelector('.js-modal[data-modal = "'+modalName+'"]');
  modal.classList.add('is-show');
  refModalOverlay.classList.add('is-show')


}

refModalClose.addEventListener('click', function (){
  refModalClose.parentNode.classList.remove('is-show')
  refModalOverlay.classList.remove('is-show')
})

refModalOverlay.addEventListener('click', function (){
  refModalClose.parentNode.classList.remove('is-show')
  refModalOverlay.classList.remove('is-show')
})

function renderModal (){

}