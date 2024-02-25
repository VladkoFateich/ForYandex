const swiper = new Swiper('.participants-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView:3,
    centeredSlides: true,

  
    navigation: {
      nextEl: '.mobile-next',
      prevEl: '.mobile--prev',
    },

    autoplay: {
        delay: 4000
    }
  });

  const mobileSwiper = new Swiper('.mobile-swiper', {
    direction: 'horizontal',
    slidesPerView:1,
    spaceBetween: 20,
    
    
    pagination: {
      el: '.mobile-pagination',
      clickable:true,
    },

  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.mobile-scrollbar',
    },

  })