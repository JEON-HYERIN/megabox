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
new Swiper('#movies .swiper-container.all', {
  loop: true,
  autoplay: true,
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

new Swiper('#movies .swiper-container.chart1', {
  // loop: true,
  // autoplay: {
  //   delay: 6000
  // },
  slidesPerView: 4,
  spaceBetween: 24,
  //       mousewheel: {
  //       invert: true,
  // },
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
})

new Swiper('#movies .swiper-container.chart2', {
  // loop: true,
  // autoplay: {
  //   delay: 7000
  // },
  slidesPerView: 4,
  spaceBetween: 24,
  //       mousewheel: {
  //       invert: true,
  // },
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
})

new Swiper('#movies .swiper-container.chart3', {
  // loop: true,
  // autoplay: {
  //   delay: 8000
  // },
  slidesPerView: 4,
  spaceBetween: 24,
  //       mousewheel: {
  //       invert: true,
  // },
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
})

//  NOTICE FILITERING & NOTICE BUTTON 
const noticeBtnContainer = document.querySelector('.notice .btn-group');
const noticeTextContainer = document.querySelectorAll('.notice .text-group');
noticeBtnContainer.addEventListener('click', e => {
  // NOTICE FILITERING
  const filter = e.target.dataset.filter;
  console.log(filter);
  if (filter === null) {
    return;
  }
  
  noticeTextContainer.forEach(function (text) {
    if (filter === text.dataset.type) {
      text.classList.remove('invisible');
    } else {
      text.classList.add('invisible');
    }
  });

  // NOTICE BUTTON 
  const noticeBtn = noticeBtnContainer.querySelector('.btn.active');
  if (noticeBtn != null) {
    noticeBtn.classList.remove('active');
  } e.target.classList.add('active');
});


// TOGGLE BUTTON
const toggleBtn = document.querySelector('.toggle-btn');
const headerMenuEl = document.querySelector('.header__menu');
toggleBtn.addEventListener('click', () => {
  headerMenuEl.classList.toggle('open');
});


headerMenuEl.addEventListener('click', function (event) {
  const links = event.target.dataset.link;
  // console.log(links);
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


// MOVIES FILTERING
const moviesMenu = document.querySelector('#movies .movies__menu');
const slides = document.querySelectorAll('#movies .swiper-container');
moviesMenu.addEventListener('click', function (event) {
  const filter = event.target.dataset.filter;
  // console.log('filter:', filter);
  if (filter === null) {
    return;
  }
  // MOVIES SELECTED BUTTON
  const active = moviesMenu.querySelector('.btn.selected');
  if (active != null) {
    active.classList.remove('selected');
  }
  event.target.classList.add('selected');


  slides.forEach(function (slide) {
    // console.log('type:', slide.dataset.type);
    if (filter === slide.dataset.type) {
      slide.classList.remove('invisible');
    } else {
      slide.classList.add('invisible');
    };
  });
});


// HEADER MENU BUTTON
headerMenuEl.addEventListener('click', function (event) {
  const link = event.target.dataset.link;
  console.log(link);

  if (link === null) {
    return;
  } else {
    scrollIntoView(link);
  }
});


// THIS YEAR
const thisYearEls = document.querySelectorAll('.this-year');
thisYearEls.forEach(thisYearEl => {
  thisYearEl.textContent = new Date().getFullYear();
});



function scrollIntoView (selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior:"smooth"});
}