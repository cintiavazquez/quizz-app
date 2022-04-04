import Bookmark from "./components/bookmark/bookmark.js";
import Buttons from "./components/buttons/buttons.js";
import Singlepage from "./singlepage.js";

// bookmark function
const bookmarks = document.querySelectorAll(".js-question__bookmark");

bookmarks.forEach((bookmarkElement) => {
  Bookmark(bookmarkElement);
});

// button function
const questionwrap = document.querySelectorAll(".js-questionwrap");

questionwrap.forEach((questionElement) => {
  Buttons(questionElement);
});

// Single Page App
Singlepage();
