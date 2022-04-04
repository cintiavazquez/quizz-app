export default function Singlepage() {
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
    homeIcon.classList.add("nav-icon_active");
    bookmarkPage.classList.add("display-none");
    bookmarkIcon.classList.remove("nav-icon_active");
    createPage.classList.add("display-none");
    createIcon.classList.remove("nav-icon_active");
    profilePage.classList.add("display-none");
    profileIcon.classList.remove("nav-icon_active");
  });

  bookmarkIcon.addEventListener("click", () => {
    homepage.classList.add("display-none");
    homeIcon.classList.remove("nav-icon_active");
    bookmarkPage.classList.remove("display-none");
    bookmarkIcon.classList.add("nav-icon_active");
    createPage.classList.add("display-none");
    createIcon.classList.remove("nav-icon_active");
    profilePage.classList.add("display-none");
    profileIcon.classList.remove("nav-icon_active");
  });

  createIcon.addEventListener("click", () => {
    homepage.classList.add("display-none");
    homeIcon.classList.remove("nav-icon_active");
    bookmarkPage.classList.add("display-none");
    bookmarkIcon.classList.remove("nav-icon_active");
    createPage.classList.remove("display-none");
    createIcon.classList.add("nav-icon_active");
    profilePage.classList.add("display-none");
    profileIcon.classList.remove("nav-icon_active");
  });

  profileIcon.addEventListener("click", () => {
    homepage.classList.add("display-none");
    homeIcon.classList.remove("nav-icon_active");
    bookmarkPage.classList.add("display-none");
    bookmarkIcon.classList.remove("nav-icon_active");
    createPage.classList.add("display-none");
    createIcon.classList.remove("nav-icon_active");
    profilePage.classList.remove("display-none");
    profileIcon.classList.add("nav-icon_active");
  });
}
