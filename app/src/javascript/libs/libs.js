// AOS.init();

// Fancybox.bind("[data-fancybox]", {
//   // Your custom options
// });

const swiper = new Swiper(".reviews__slider", {
  slidesPerView: 2,
  spaceBetween: 22,
  loop: true,
  // Optional parameters
  // direction: "vertical",
  // loop: true,

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".reviews__item-next",
    prevEl: ".reviews__item-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
