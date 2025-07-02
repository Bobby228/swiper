// let swiper;
// if (window.innerWidth < 768) {
//   const swiper = new Swiper(".swiper", {
//     // Optional parameters
//     direction: "horizontal",
//     slidesPerView: "auto",
//     spaceBetween: 16,

//     // If we need pagination
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
// } else {
//   swiper.destroy(true, true);
// }

let swiper; // объявляем переменную в общей области видимости

function initSwiper() {
  if (window.innerWidth < 768) {
    if (!swiper) {
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
  } else {
    if (swiper) {
      swiper.destroy();
    }
  }
}

// Запускаем при загрузке и при изменении размера окна
window.addEventListener("load", initSwiper);
window.addEventListener("resize", initSwiper);

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
