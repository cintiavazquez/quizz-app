export default function Buttons(questionElement) {
  const buttonshow = questionElement.querySelector(".js-button");
  const answer = questionElement.querySelector(".js-answer");

  buttonshow.addEventListener("click", () => {
    answer.classList.toggle("display-none");
    if (buttonshow.textContent == "Show answer") {
      buttonshow.textContent = "Hide answer";
    } else {
      buttonshow.textContent = "Show answer";
    }
  });
}
