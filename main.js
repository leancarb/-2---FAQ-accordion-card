const containers = document.querySelectorAll(".main__container");

containers.forEach((container) => {
  container.addEventListener("click", () => {
    const answer = container.querySelector(".main__container--answer");
    if (answer) {
      answer.classList.toggle("visible");
    }

    const question = container.querySelector(".main__container--question-q");
    if (question) {
      question.classList.toggle("bold");
    }

    const arrow = container.querySelector(".main__container--arrow");
    if (arrow) {
      arrow.classList.toggle("rotated");
    }

    container.classList.toggle("visible");

    const bold = container.querySelector("main__container--question");
    if (bold) {
      bold.classList.toggle("bold");
    }
  });
});
