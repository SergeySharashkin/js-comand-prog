import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { refs } from './refs';

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

}