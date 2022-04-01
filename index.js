import Bookmark from "./components/bookmark/bookmark.js";
import Buttons from "./components/buttons/buttons.js";

const bookmarks = document.querySelectorAll(".js-question__bookmark");

bookmarks.forEach((bookmarkElement) => {
  Bookmark(bookmarkElement);
});

/*Question/answer buttons*/

const questionwrap = document.querySelectorAll(".js-questionwrap");

questionwrap.forEach((buttonElement) => {
  Buttons(buttonElement);
});
