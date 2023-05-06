'use strict';
// For Nav Section 
let navLinkAll = document.querySelectorAll('.link');

// in case we'd update nav Dynamic
function activeLink() {
    navLinkAll.forEach((item) => item.classList.remove('link-active'));
    this.classList.add('link-active');
};

// Variables

const mySkills = document.querySelector('.MySkills');
let mainRow = document.querySelectorAll('.Row');
let fRow = document.querySelectorAll('.F-Row');
let f1Row = document.querySelector('.F-Row-1');
let zRow = document.querySelector('.Row-1');
const loadButton = document.getElementById('BLoad');
const loadMore = document.querySelector('.Load-More');
const s1El = document.querySelector('.S1');
const divProducts = document.querySelectorAll('.W-All');
const dElement = document.querySelectorAll('.D-Element');
const counter1El = document.querySelectorAll('.counter');
const frowF = document.querySelectorAll('.F-Row').forEach((frow) => frow.style.flexBasis);
const menuImg = document.querySelector('#navImg');
const menuUl = document.getElementById('navId');
const navbarEl = document.querySelector('.Navbar');
const flipElp = document.querySelector('#Flip-P');
const slideEl = document.getElementsByClassName('CC');
let slideIndex = 1;

// Function's

const rowMax = function () {
    fRow.forEach((frow) => frow.style.flexBasis = '100%');
    counter1El.forEach((counter) => counter.textContent = '');
}
// const counterPlus = function () {
//     for (let i = 0; i < f1Row.style.flexBasis.length; i++) {
//         fRow.forEach((frow) => frow.style.flexBasis = '100%');
//     }
// }

// Navbar Menu - For Mobile

menuImg.addEventListener('click', function () {
    menuImg.style.transition = 'all 0.6s';
    menuUl.style.transition = 'all 2s';
    if (menuUl.style.display === 'block' && menuImg.style.transform === 'translateX(-200px)') {
        menuImg.style.transform = 'translateX(0)';
        menuUl.style.display = 'none';
    } else {
        menuImg.style.transform = 'translateX(-200px)';
        menuUl.style.display = 'block';
    }
});

// NavBar Link's 

navLinkAll.forEach((item) => item.addEventListener('click', function () {
    item.classList.toggle('link-active');
    navbarEl.addEventListener('mouseleave', function () {
        item.classList.remove('link-active');
    })
}));


// Skills

mySkills.addEventListener('mouseover', function () {
    rowMax();
    mySkills.addEventListener('mouseleave', function () {
        fRow.forEach((frow) => frow.style.flexBasis = '');
    })
}, { once: true });

// Set DOM Elements

fRow.forEach((frow) => frow.style.flexBasis = '0');
loadMore.classList.add('hidden');

// For Load More Button

loadButton.addEventListener('click', function () {
    loadMore.classList.toggle('hidden');
    loadButton.style.transition = "all 2s";
    loadButton.value === 'Load More Work' ? loadButton.value = 'Close More Work' : loadButton.value = 'Load More Work';
});

// For Work's Flip

divProducts.forEach((W) => W.addEventListener('mouseover', function () {
    W.flipElp.textContent = 'For More info , Click Below';
}));


// For Professional Skills - old Code

// zRow.addEventListener('mouseover', function () {
//     f1Row.style.flexBasis = '100%';
//     f1Row.addEventListener('mouseleave', function () {
//         f1Row.style.flexBasis = '10%';
//     })
// });

// for Work Done

/* dElement.forEach((elements) => elements.addEventListener('mouseover', function () {
    elements.classList.toggle('D-Active');
})); */

// For Product Div

/* divProducts.forEach((products) => products.addEventListener('mouseover', function () {
    products.classList.toggle('visual');
    products.addEventListener('mouseleave', function () {
        products.classList.toggle('visual');
    })
})); */

// divProducts.forEach((products) => products.addEventListener('mouseover', function () {
//     divProducts.forEach((products) => products.classList.remove('visual'));
//     products.classList.toggle('visual');
//     divProducts.forEach((products) => products.addEventListener('mouseleave', function () {
//         products.classList.remove('visual');
//     })
//     )
// }));

// Slideshow

function plusS(n) {
    showSlide(slideIndex += n)
}
showSlide(slideIndex);

function showSlide(n) {
    if (n > slideEl.length) slideIndex = 1;
    if (n < 1) slideIndex = slideEl.length;
    for (let i = 0; i < slideEl.length; i++) {
        slideEl[i].style.display = 'none';
    }
    slideEl[slideIndex - 1].style.display = 'block';
}