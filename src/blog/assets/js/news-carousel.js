new Swiper('#news-carousel > .swiper-container', {
    slidesPerView: 5,
    slidesPerColumn: 1,
    spaceBetween: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        1268: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        }
    }
})
