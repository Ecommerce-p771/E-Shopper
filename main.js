var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: true,  
    pagination: {
        el: ".swiper-pagination",
        clickable: true,  
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// -----------------change background header------------------
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrolly >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header') 
        
    }
    var swiper = new Swiper(".new-swiper", {
        spaceBetween: 16,
        centredSlides: true,
        slidesPerview:"auto",
        loop: true,
      
    });
    