let menuOpen = document.querySelector('.menu-toggle');
let menuWrapper = document.querySelector('.menu-wrapper');

menuOpen.addEventListener('click', function() {
   menuOpen.classList.toggle('bx-x');
   menuWrapper.classList.toggle('active');
});

var swiper = new Swiper(".mySwiper", {
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: false,
   spaceBetween: 30,
   slidesPerView: "auto",
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
   coverflowEffect: {
     rotate: 0,
     stretch: 0,
     depth: 0,
     modifier: 1,
     slideShadows: true,
   },
   navigation: {
      nextEl: ".bxs-chevron-right-circle",
      prevEl: ".bx-chevron-left-circle",
    },
 });