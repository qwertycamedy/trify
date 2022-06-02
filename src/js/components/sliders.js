import Swiper, {
  Navigation,
  Pagination,
  Controller,
  Autoplay,
  EffectFade,
} from 'swiper';

Swiper.use([Navigation, Pagination, Controller, Autoplay, EffectFade]);

if (document.querySelector('.hero__big-slider')) {
  const heroBigSlider = new Swiper('.hero__big-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: false,
    speed: 700,

    pagination: {
      el: '.hero__big-slider-progress',
      type: 'fraction',

      renderFraction: function (currentClass, totalClass) {
        return '0<span class="' + currentClass + '"></span> ' + ' / ' + '0' + '<span class="' + totalClass + '"></span>';
      }
    },
    navigation: {
      nextEl: '.hero__big-slider-next',
      prevEl: '.hero__big-slider-prev',
    }
  });
  const heroBigSliderHidden = new Swiper('.hero__big-slider-hidden', {
    slidesPerView: 1,
    loop: false,
    speed: 700,

    pagination: {
      el: '.hero__big-slider-hidden-pagination',
      type: 'bullets',
      clickable: true,
    }
  });

  heroBigSlider.controller.control = heroBigSliderHidden;
  heroBigSliderHidden.controller.control = heroBigSlider;
}

if (document.querySelector('.hero__small-slider')) {

  const heroSmallSlider = new Swiper('.hero__small-slider', {
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 9,
      },
      550: {
        spaceBetween: 14,
      },
      769: {
        slidesPerView: 4,
      }
    }
  });

}

if (document.querySelector('.popular__slider')) {
  const popularSlider = new Swiper('.popular__slider', {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
      },
      769: {
        slidesPerView: 3,
      },
      1025: {
        loop: false,
        autoplay: false,
        slidesPerView: 4,
      }
    }
  });
}

if (document.querySelector('.catalog__slider')) {
  const profileOrdersSlider = new Swiper('.catalog__slider', {
    autoplay: {
      delay: 2000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 8,
        centeredSlides: true,
      },
      1025: {
        loop: false,
        autoplay: false,
        spaceBetween: 0,
        allowTouchMove: false,
        slidesPerView: 5,
        grid: {
          rows: 4,
        }
      },
    }
  })
}

if (document.querySelector('.seller-catalog__slider')) {
  const profileOrdersSlider = new Swiper('.seller-catalog__slider', {
    autoplay: {
      delay: 2000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 8,
        centeredSlides: true,
      },
      1025: {
        loop: false,
        autoplay: false,
        spaceBetween: 0,
        allowTouchMove: false,
        slidesPerView: 3,
        grid: {
          rows: 3,
        }
      },
    }
  })
}

if (document.querySelector('.profile-orders__card-slider')) {
  const profileOrdersSlider = new Swiper('.profile-orders__card-slider', {
    slidesPerView: 5,
    navigation: {
      nextEl: '.profile-orders__card-slider-next',
      prevEl: '.profile-orders__card-slider-prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 8.5,
      },
      550: {
        spaceBetween: 15,
      },
    }
  })
}

if (document.querySelector('.product-top__slider-outer')) {
  const productTopBigSlider = new Swiper('.product-top__big-slider', {
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    fadeEffect: {
      crossFade: true,
    },
    speed: 700,
  });
  const productTopSmallSlider = new Swiper('.product-top__small-slider', {
    slidesPerView: 4,
    spaceBetween: 9,
    speed: 700,
    loop: true,

    navigation: {
      nextEl: '.product-top__small-slider-next',
    },

    breakpoints: {
      320: {
        direction: 'horizontal',
      },

      1024: {
        direction: 'vertical',
      },
    }
  });

  productTopBigSlider.controller.control = productTopSmallSlider;
  productTopSmallSlider.controller.control = productTopBigSlider;
}
