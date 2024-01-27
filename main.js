const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const openBtn = document.querySelector(".brands__btn_show-all");
const hideBtn = document.querySelector(".brands__btn_hidden");
const cards = document.querySelectorAll(".brands__item");
const middleScreenHidden = document.querySelectorAll(
  ".brands__item:nth-last-child(-n + 5)"
);
const bigScreenHidden = document.querySelectorAll(
  ".brands__item:nth-last-child(-n + 3)"
);
const middleScreen = window.matchMedia(
  "(min-width: 768px) and (max-width: 1119px)"
);
const bigScreen = window.matchMedia("(min-width: 1120px)");

openBtn.addEventListener("click", function () {
  for (const card of cards) {
    card.style.display = "flex";
  }
  openBtn.style.display = "none";
  hideBtn.style.display = "block";
});

hideBtn.addEventListener("click", function () {
  if (middleScreen.matches) {
    for (const card of middleScreenHidden) {
      card.style.display = "none";
    }
  } else {
    for (const card of bigScreenHidden) {
      card.style.display = "none";
    }
  }
  openBtn.style.display = "block";
  hideBtn.style.display = "none";
});

