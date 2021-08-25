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