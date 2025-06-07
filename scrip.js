new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 20, // فاصله بین اسلایدها

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
     640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
    1280: {
      slidesPerView: 4
    },
    1536: {
      slidesPerView: 5
    }
  }
});
