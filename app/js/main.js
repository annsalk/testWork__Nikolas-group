$(function(){

    var mySwiper = new Swiper ('.swiper-container', {
        speed: 1000,
        autoplay: {
            delay: 5000,
          },
        slidesPreView: 1,
        navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            },
        loop: true,
    });

    var mySwiper2 = new Swiper ('.swiper-container-news', {
        wrapperClass: 'swiper-wrapper-news',
        slideClass: 'swiper-slide-news',
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: 4,
        speed: 1000,
        spaceBetween: 25,
        navigation: {
            nextEl: '.news-button-next',
            prevEl: '.news-button-prev',
          },
    });


});