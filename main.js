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
    slidesPerview: "auto",
    loop: true,

});


// Show Cart-------------------------------------------
const cart = document.getElementById('cart'),
    cartShop = document.getElementById('cart-shop'),
    cartClose = document.getElementById('cart_close')

if (cartShop) {
    cartShop.addEventListener("click", () => {
        cart.classList.add('show-cart')
    })
}

if (cartClose) {
    cartClose.addEventListener("click", () => {
        cart.classList.remove('show-cart')
    })
}
//------------    show login-----------------------------------
const login = document.getElementById('login'),
    loginButton = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close')

if (loginButton) {
    loginButton.addEventListener("click", () => {
        login.classList.add('show-login')
    })
}

if (loginClose) {
    loginClose.addEventListener("click", () => {
        login.classList.remove('show-login')
    })
}

function scrollup() {
    const scrollup = document.getElementById('scroll-up');
    if (window.scrollY >= 350) {
        scrollup.classList.add('show-scroll');
    } else {
        scrollup.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollup);

const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav_close');

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu'); // Fixed from `cart` to `navMenu`
    });
}

// --------------QUESTION ACCORDION------------------
// --------------QUESTION ACCORDION------------------
const accordionItems = document.querySelectorAll('.question_item');

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.question_header');

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');

        // Close the currently open item if it's different from the clicked one
        if (openItem && openItem !== item) {
            toggleItem(openItem, false);
        }

        // Toggle the clicked item
        toggleItem(item, !item.classList.contains('accordion-open'));
    });
});

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.question_content');

    if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute ('style')
    item.classList.remove('accordion-open');
} else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
}
};

