import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { refs } from './refs';
import slowScroll from './slow-scroll';

export function pagination({ totalItems, page }, onClickPagePagination) {

  if (totalItems === null) {
    return;
  }

  const instance = new Pagination(refs.tuiContainer, {
    totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
    page: page,
  });
  instance.on('beforeMove', onClickPagePagination);
  slowScroll();
  if (totalItems <= 20) {
    console.log(refs.container.children.length);
    refs.tuiContainer.style.display = 'none';
  } else {
    refs.tuiContainer.style.display = 'flex';
  }
}

