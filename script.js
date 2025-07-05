let swiper;

let checkoutWidowSize = function () {
  if (window.innerWidth < 768) {
    return true;
  }
  return false;
};

let init = function () {
  if (swiper) {
    swiper.destroy();
    let paginationEl = document.querySelector(".swiper-pagination");
    if (paginationEl) {
      paginationEl.innerHTML = "";
    }
  }

  if (checkoutWidowSize()) {
    swiper = new Swiper(".swiper", {
      direction: "horizontal",
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
};

window.addEventListener("resize", function () {
  init();
});

init();

let showMore = document.querySelector(".show-more");
let text = showMore.querySelector("p");
let showMoreArrows = showMore.querySelector("svg");
let wrapper = document.querySelector(".swiper-wrapper");

showMore.addEventListener("click", function (evt) {
  evt.preventDefault();

  wrapper.classList.toggle("h-auto");
  showMoreArrows.classList.toggle("rt-180");

  if (text.textContent === "Показать всё") {
    text.textContent = "Скрыть";
  } else {
    text.textContent = "Показать всё";
  }
});
