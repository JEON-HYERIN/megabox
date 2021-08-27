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
  //     mousewheel: {
  //       invert: true,
  // },
});


// NOTICE BUTTON 
const noticeBtns = document.querySelectorAll('#info .notice .btn');

noticeBtns.forEach(function (noticeBtn) {
  noticeBtn.addEventListener('click', () => {
    noticeBtn.classList.toggle('active');
  })
})


// TOGGLE BUTTON
const toggleBtn = document.querySelector('.toggle-btn');
const headerMenuEl = document.querySelector('.header__menu');
toggleBtn.addEventListener('click', () => {
  headerMenuEl.classList.toggle('open');
});


headerMenuEl.addEventListener('click', function (event) {
  const links = event.target.dataset.link;
  console.log(links);
});


// ARROW UP BUTTON
const arrowUpBtn = document.querySelector('.arrow-up'); 
const visualEl = document.querySelector('#visual');
arrowUpBtn.addEventListener('click', function () {
  visualEl.scrollIntoView({behavior: "smooth"});
});


// ARROW UP BUTTON 숨기기
const visualElHeight = visualEl.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
  if ( window.scrollY > visualElHeight / 2) {
    arrowUpBtn.classList.add('visible');
  } else {
    arrowUpBtn.classList.remove('visible');
  }
});
