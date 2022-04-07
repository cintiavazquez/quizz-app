export default function Bookmark(bookmarkElement) {
  const bookmarkempty = bookmarkElement.querySelector('.js-bookmarkempty');
  const bookmarkfilled = bookmarkElement.querySelector('.js-bookmarkfilled');

  bookmarkempty.addEventListener('click', () => {
    bookmarkempty.classList.toggle('display-none');
    bookmarkfilled.classList.toggle('display-none');
  });

  bookmarkfilled.addEventListener('click', () => {
    bookmarkfilled.classList.toggle('display-none');
    bookmarkempty.classList.toggle('display-none');
  });
}
