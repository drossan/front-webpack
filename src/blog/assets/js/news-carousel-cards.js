new Swiper('#news-carousel-cards > .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 5,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        1260: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    }
})