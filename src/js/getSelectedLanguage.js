import { refs } from './refs';

export function getSelectedLanguage() {
  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', JSON.stringify('ru'));
  }
  refs.languageSelect.value = JSON.parse(localStorage.getItem('language'));
  console.log(refs.languageSelect.value);
}
