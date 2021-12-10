export let inLibraryFilms = [];

export function getStorageItems(librarySection) {
  if (localStorage.getItem(librarySection)) {
    const inLibraryJson = localStorage.getItem(librarySection);
    inLibraryFilms = JSON.parse(inLibraryJson);
    return inLibraryFilms;
  }
}
