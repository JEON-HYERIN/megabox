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


new Swiper('#movies .swiper-container', {
  loop: true,
  // autoplay: {
  //   delay: 5000
  // },
  slidesPerView: 4,
  spaceBetween: 24
});