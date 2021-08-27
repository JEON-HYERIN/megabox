// VISUAL영역 슬라이드
new Swiper('#visual .swiper-container', {
  loop: true,
  autoplay: true,
  pagination : {
    el: '#visual .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '#visual .swiper-prev',
    nextEl: '#visual .swiper-next'
  }
});


// MOVIES 슬라이드
new Swiper('#movies .swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000
  },
  slidesPerView: 4,
  spaceBetween: 24,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    960: {
      slidesPerView: 4,
      spaceBetween: 24
    },
    // 1200: {
    //   slidesPerView: 4,
    //   spaceBetween: 24,
    // }
  },
      mousewheel: {
        invert: true,
  },
});


// NOTICE BUTTON 
const noticeBtns = document.querySelectorAll('#info .notice .btn');

noticeBtns.forEach(function (noticeBtn) {
  noticeBtn.addEventListener('click', () => {
    noticeBtn.classList.toggle('active');
  })
})

