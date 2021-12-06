import { refs } from '../refs';

export function renderTrailerModal(key) {
  const trailerUrl = `https://www.youtube.com/embed/${key}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&`;
  const video = `<iframe
      id="player"
      title="YouTube video player"
      src="${trailerUrl}"
      width="640"
      height="360"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
    ></iframe>`;
  refs.trailerModal.insertAdjacentHTML('beforeend', video);
  console.log(video);
}
