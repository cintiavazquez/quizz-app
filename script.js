console.log("hallo");
console.log("hi");

const bookmarkempty = document.querySelector(".js-bookmarkempty");
const bookmarkfilled = document.querySelector(".js-bookmarkfilled");

bookmarkempty.addEventListener("click", () => {
  bookmarkempty.classList.toggle("display-none");
  bookmarkfilled.classList.toggle("display-none");
});

bookmarkfilled.addEventListener("click", () => {
  bookmarkfilled.classList.toggle("display-none");
  bookmarkempty.classList.toggle("display-none");
});

const buttonshow = document.querySelector(".js-button");
const buttonhide = document.querySelector(".js-buttonhide");
const questionsection = document.querySelector(".js-questionsection");

buttonshow.addEventListener("click", () => {
  buttonshow.classList.toggle("display-none");
  buttonhide.classList.toggle("display-none");
  questionsection.classList.toggle("display-none");
});

buttonhide.addEventListener("click", () => {
  buttonhide.classList.toggle("display-none");
  buttonshow.classList.toggle("display-none");
  questionsection.classList.toggle("display-none");
});
