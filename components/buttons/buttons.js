export default function Buttons(buttonElement) {
  const buttonshow = buttonElement.querySelector(".js-button");
  const answer = buttonElement.querySelector(".js-answer");

  buttonshow.addEventListener("click", () => {
    answer.classList.toggle("display-none");
    if (buttonshow.textContent == "Show answer") {
      buttonshow.textContent = "Hide answer";
    } else {
      buttonshow.textContent = "Show answer";
    }
  });
}
