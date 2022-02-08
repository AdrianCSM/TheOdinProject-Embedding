const readMoreBtn = document.querySelector(".btn.show-more-btn");
const text = document.querySelector(".description");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("moreText");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});
