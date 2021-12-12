const PER_PAGE = 20;

export let inLibraryFilms = [];

export function getStorageItems(librarySection) {
  if (localStorage.getItem(librarySection)) {
    const inLibraryJson = localStorage.getItem(librarySection);
    inLibraryFilms = JSON.parse(inLibraryJson);
    return inLibraryFilms;
  }
}

export function getByPage(page = 1) {
  const start = (page - 1) * PER_PAGE;
  return [...inLibraryFilms].splice(start, PER_PAGE);
}