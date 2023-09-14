document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,  // Number of slides visible at once. Adjust as per requirement
        centeredSlides: true, // Center the active slide
        spaceBetween: 10, // Adjust spacing between slides
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});