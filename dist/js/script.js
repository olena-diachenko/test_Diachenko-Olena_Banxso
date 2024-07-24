'use strict';

const cardSwiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 48,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
