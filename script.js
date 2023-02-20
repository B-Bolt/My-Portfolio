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

// Function's

mySkills.addEventListener('mouseover', function () {
    fRow.forEach((frow) => frow.style.flexBasis = '100%');
    mySkills.addEventListener('mouseleave', function () {
        fRow.forEach((frow) => frow.style.flexBasis = frow.style.flexBasis = '30%');
    })
});

// Set DOM Elements

f1Row.style.flexBasis = '0%';
fRow.forEach((frow) => frow.style.flexBasis = '0');
loadMore.classList.add('hidden');

// NavBar Link's 

navLinkAll.forEach((item) => item.addEventListener('click', function () {
    item.classList.toggle('link-active');
}));

// For Load More Button

loadButton.addEventListener('click', function () {
    loadMore.classList.toggle('hidden');
});


// For Professional Skills

zRow.addEventListener('mouseover', function () {
    f1Row.style.flexBasis = '100%';
    f1Row.addEventListener('mouseleave', function () {
        f1Row.style.flexBasis = '10%';
    })
});

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

divProducts.forEach((products) => products.addEventListener('mouseover', function () {
    divProducts.forEach((products) => products.classList.remove('visual'));
    products.classList.toggle('visual');
    divProducts.forEach((products) => products.addEventListener('mouseleave', function () {
        products.classList.remove('visual');
    })
    )
}));