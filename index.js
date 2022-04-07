import Bookmark from './components/bookmark/bookmark.js';
import Buttons from './components/buttons/buttons.js';
import Singlepage from './singlepage.js';
import turnLogintoCard from './question-post/question-card.js';

// Single Page App
Singlepage();

//Create cards
turnLogintoCard();

// bookmark function
const bookmarks = document.querySelectorAll('.js-question__bookmark');

bookmarks.forEach(bookmarkElement => {
  Bookmark(bookmarkElement);
});

// button function
const questionwrap = document.querySelectorAll('.js-questionwrap');

questionwrap.forEach(questionElement => {
  Buttons(questionElement);
});
