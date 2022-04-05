export default function turnLogintoCard() {
  const cardData = [
    {
      id: "1",
      isBookmarked: true,
      question: "Which symbol is used to number items in Emmet?",
      answer: "The dollar ($) symbol, i.e.: <code>p.item$*5</code>",
      tags: ["html", "emmet", "basic"],
    },
    {
      id: "2",
      isBookmarked: false,
      question: "What is the specifity of the universal selector (*)?",
      answer: "The universal selector has low specifity (zero).",
      tags: ["css", "specificity", "basic"],
    },
    {
      id: "3",
      isBookmarked: false,
      question:
        "Which relative unit should you use if you want the body to span to the full height of the page(html)?",
      answer:
        "You should use percentages (%), not vh (in case the content is longer than the viewport",
      tags: ["css", "units", "advanced"],
    },
  ];

  cardData.forEach((questionlog) => {
    const card = document.createElement("article");
    card.className = "question";
    card.innerHTML = `
      <h3 class="title">Question</h3>
      <aside class="question__bookmark js-question__bookmark">
        <img
          class="bookmark js-bookmarkempty js-bookmark"
          src="./components/images/bookmark_border_white_24dp.svg"
          alt=""
        />
        <img
          class="bookmark display-none js-bookmarkfilled js-bookmark"
          src="./components/images/bookmark_white_24dp.svg"
          alt=""
        />
      </aside>
      <div class="question__wrap js-questionwrap">
      <p class="question__text">
        ${questionlog.question}
      </p>
      <button class="button js-button">Show answer</button>
      <section class="question__answer display-none js-answer">
        <button class="button button--hide display-none js-buttonhide">
          Hide answer
        </button>
        <p>${questionlog.answer}</p>
      </section>
      <section class="question__tags">
        <p class="questions__tags__single">${questionlog.tags[0]}</p>
        <p class="questions__tags__single">${questionlog.tags[1]}</p>
        <p class="questions__tags__single">${questionlog.tags[2]}</p>
      </section>
    </div>
    `;

    const homepage = document.querySelector(".js-homepagebody");
    homepage.append(card);
  });
}
