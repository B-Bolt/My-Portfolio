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
const ynButton = document.getElementById('YN');
const sampleWork = document.getElementsByClassName('Sample-Work');
const wAll = document.querySelectorAll('W-All');
const flipImage = document.querySelector('.FlipImage');
const flipSection = document.querySelector('.FlipSection');
const ulDropDown = document.querySelector('.ul-DropDown');
const navIdClass = document.querySelectorAll('.navIdClass');
const subDropDown = document.getElementsByClassName('subDropDown');
const ulDropDownLi = document.querySelectorAll('.ul-DDli');
const subDropDownLi = document.querySelectorAll('.ul-sDDli');
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
    menuImg.style.transition = '0.6s';
    menuUl.style.transition = '2s';
    if (menuUl.style.display === 'block' && menuImg.style.transform === 'translateX(-10px)') {
        menuImg.style.transform = 'translateX(0)';
        menuUl.style.display = 'block';
    } else if (menuUl.style.display === 'block') {
        menuUl.style.display = 'none';
    } else {
        menuUl.style.display = 'block';
    }
});

// End Navbar Menu - For Mobile

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
    loadButton.value === 'دیدن نمونه های بیشتر' ? loadButton.value = 'بستن' : loadButton.value = 'دیدن نمونه های بیشتر';
});

// For Work's Flip

// divProducts.forEach((W) => W.addEventListener('mouseover', function () {
//     W.flipElp.textContent = 'For More info , Click Below';
// }));

// Flip Section

wAll.forEach((wall) => wall.addEventListener('mouseover', function () {
    if (wall.contains('flipImage') || ('flipSection')) {
        wall.style.transform = 'rotateY(180deg)';
    }
}))

// End Flip Section

// For Nav Drop Down


// End Nav Drop Down

// Begin sub Drop Down
let once = true;

const fullWidth = function () {
    ulDropDownLi.forEach((ulli) => ulli.addEventListener('mouseover', function () {
        ulDropDownLi.forEach((ulli) => ulli.style.display = 'none');
        ulDropDownLi.forEach(this.style.display = 'block', this.style.width = '95%');
    }));
    ulDropDown.addEventListener('mouseleave', function () {
        ulDropDownLi.forEach((ulli) => ulli.style.display = '');
        if (ulDropDownLi.forEach((ulli) => ulli.style.width = '')) {
            ulDropDownLi.forEach((ulli) => ulli.style.flex = '');
            ulDropDownLi.forEach(this.style.display = '', this.style.width = '');
        }
    })
}

fullWidth();

// End sub Drop Down

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

// Input Contact Section

ynButton.addEventListener('click', function () {
    ynButton.placeholder = 'Please Write Down Your Name ...';
    ynButton.addEventListener('focusout', function () {
        ynButton.placeholder = 'Your Name';
    })
})