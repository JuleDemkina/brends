

window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

 

  resizableSwiper(
    '(max-width: 768px)',
    '.slider-1',
    {
      loop: true,
      
      spaceBetween: 16,
      speed: 500,
      direction: 'horizontal',
      slidesPerView: "auto",
      centeredSlides: false,
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.3,
        },
        340: {
          slidesPerView: 1.35,
        },
        360: {
           slidesPerView: 1.4 
          },
        450:{ slidesPerView: 1.8,},
        550:{ slidesPerView: 2.3,},
        570: { slidesPerView: 2 },
        650:{ slidesPerView: 2.6,},
        700:{ slidesPerView: 2.8,}
      },
    },
  
  );

  
});


let readMore = document.querySelector('.read-more');
let readMoreText =  document.querySelector('.read-more__text');
let swiper = document.querySelector('.swiper');
let readMoreImg = document.querySelector('.read-more__img');
let allHidden = true;

readMore.addEventListener('click', function () {
  readMoreImg.classList.toggle('read-more__img--rotate');
  swiper.classList.toggle('swiper--no-hidden');
  if (allHidden){ 
    readMoreText.textContent= "Скрыть";
   allHidden=false;
  } else {
    readMoreText.textContent= "Показать все";
    allHidden = true;
  }

});
