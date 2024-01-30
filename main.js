const mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
const tablet = window.matchMedia('(min-width: 768px) and (max-width: 1119px)');
const desktop = window.matchMedia('(min-width: 1120px)');
const openBtn = document.querySelector(".brands__btn_show-all");
const hideBtn = document.querySelector(".brands__btn_hidden");
const cards = document.querySelectorAll(".brands__item");
const middleScreenHidden = document.querySelectorAll(
  ".brands__item:nth-last-child(-n + 5)"
);
const bigScreenHidden = document.querySelectorAll(
  ".brands__item:nth-last-child(-n + 3)"
);
let swiper = Swiper;
let init = false;

function swiperMode() {

  // Enable (for mobile)
  if (mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 16,
        pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
      });
    }
  }

  // Disable (for tablet)
  else if (tablet.matches) {
    swiper.destroy();
    init = false;
  }

  // Disable (for desktop)
  else if (desktop.matches) {
    swiper.destroy();
    init = false;
  }
}

window.addEventListener('load', () => {
  swiperMode();
});

window.addEventListener('resize', () => {
  swiperMode();
});


openBtn.addEventListener("click", function () {
  for (const card of cards) {
    card.style.display = "flex";
  }
  openBtn.style.display = "none";
  hideBtn.style.display = "block";
});

hideBtn.addEventListener("click", function () {
  if (tablet.matches) {
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

