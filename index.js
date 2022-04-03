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

// Single Page App
const homepage = document.querySelector(".js-homepage");
const bookmarkPage = document.querySelector(".js-bookmark-page");
const createPage = document.querySelector(".js-create-page");
const profilePage = document.querySelector(".js-profile-page");

const homeIcon = document.querySelector(".js-homeicon");
const bookmarkIcon = document.querySelector(".js-bookmarkicon");
const createIcon = document.querySelector(".js-createicon");
const profileIcon = document.querySelector(".js-profileicon");

homeIcon.addEventListener("click", () => {
  homepage.classList.remove("display-none");
  bookmarkPage.classList.add("display-none");
  createPage.classList.add("display-none");
  profilePage.classList.add("display-none");
});

bookmarkIcon.addEventListener("click", () => {
  homepage.classList.add("display-none");
  bookmarkPage.classList.remove("display-none");
  createPage.classList.add("display-none");
  profilePage.classList.add("display-none");
});

createIcon.addEventListener("click", () => {
  homepage.classList.add("display-none");
  bookmarkPage.classList.add("display-none");
  createPage.classList.remove("display-none");
  profilePage.classList.add("display-none");
});

profileIcon.addEventListener("click", () => {
  homepage.classList.add("display-none");
  bookmarkPage.classList.add("display-none");
  createPage.classList.add("display-none");
  profilePage.classList.remove("display-none");
});
