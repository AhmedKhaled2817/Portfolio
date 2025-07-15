/*=============== SWIPER testimonials ===============*/
let swiperPopular = new Swiper(".mySwiper", {
  // Optional parameters
    loop: true,
    spaceBetween: 30,
    slidesPerView:3,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    breakpoints:{
    '0':{          // أقل من 480px
      slidesPerView: 1,
    },
    '576': {
      slidesPerView: 1,
    },
    '768':{
      slidesPerView: 2,
    },
    '992': {
      slidesPerView: 2,
    },
    '1200': {
      slidesPerView: 3,
    }
    }
});


const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset: true, // animation repaet
});
sr.reveal(`.hero-section,.portfolio,.testimonials,.blog,.contact,.footer`)
sr.reveal(`.work-one,.work-two,.work-three`,{interval:100})
sr.reveal(`.one`,{delay:900,origin:'left'})
sr.reveal(`.two`,{delay:1000,origin:'right'})