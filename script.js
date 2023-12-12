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

// ---------- Function's ----------

const rowMax = function () {
    fRow.forEach((frow) => frow.style.flexBasis = '100%');
    counter1El.forEach((counter) => counter.textContent = '');
}
// const counterPlus = function () {
//     for (let i = 0; i < f1Row.style.flexBasis.length; i++) {
//         fRow.forEach((frow) => frow.style.flexBasis = '100%');
//     }
// }

//

// --------------- Begin Header TypeWriter ----------

let iC = 0;

let exText = 'به‌خاطر انبارگردانی تمام اجناس تولیدی با 10% تخفیف عرضه می‌شوند';

let exParagraph = document.getElementById('exParagraph');

function typeWriter() {
    if (iC < exText.length) {
        exParagraph.innerHTML += exText.charAt(iC);
        iC++;
        setTimeout(typeWriter, 40);
    }
};
typeWriter();
// ---------- End Header TypeWriter ----------


// ---------- Navbar Menu - For Mobile ----------


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

// ---------- End Navbar Menu - For Mobile ----------

// ---------- NavBar Link's ----------

navLinkAll.forEach((item) => item.addEventListener('click', function () {
    item.classList.toggle('link-active');
    navbarEl.addEventListener('mouseleave', function () {
        item.classList.remove('link-active');
    })
}));

// ---------- End Navbar Link's ----------

// ---------- Begin the Modal ----------

function openModal() {
    document.getElementById("slideModal").style.display = "block";
}

function closeModal() {
    document.getElementById("slideModal").style.display = "none";
}

let slideindexX = 1;
showSlides(slideindexX);

// ---------- Next/previous controls ----------

function plusSlides(n) {
    showSlides(slideindexX += n);
}

// ---------- Thumbnail image controls ----------

function currentSlide(n) {
    showSlides(slideindexX = n);
}

// need to be change later

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("widePics");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideindexX = 1 }
    if (n < 1) { slideindexX = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideindexX - 1].style.display = "block";
    dots[slideindexX - 1].className += " active";
    captionText.innerHTML = dots[slideindexX - 1].alt;
}

// ---------- End the Modal ----------

// ---------- Begin of Slideshow ----------

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
};

// ---------- End of Slideshow ----------

// ---------- Skill's ----------

// mySkills.onscroll(function () {
//     rowMax();
//     setTimeout(fRow.forEach((frow) => frow.style.flexBasis = ''), 3000);
// });

mySkills.addEventListener('mouseover', function () {
    rowMax();
    mySkills.addEventListener('mouseleave', function () {
        fRow.forEach((frow) => frow.style.flexBasis = '');
    })
}, { once: true });

// ---------- End of Skill's ----------

// ---------- Set DOM Elements ----------

fRow.forEach((frow) => frow.style.flexBasis = '0');
loadMore.classList.add('hidden');

// ---------- For Load More Button ----------

loadButton.addEventListener('click', function () {
    loadMore.classList.toggle('hidden');
    loadButton.style.transition = "all 2s";
    loadButton.value === 'دیدن نمونه های بیشتر' ? loadButton.value = 'بستن' : loadButton.value = 'دیدن نمونه های بیشتر';
});

// ---------- For Work's Flip ----------

// divProducts.forEach((W) => W.addEventListener('mouseover', function () {
//     W.flipElp.textContent = 'For More info , Click Below';
// }));

// ---------- Flip Section ----------

wAll.forEach((wall) => wall.addEventListener('mouseover', function () {
    if (wall.contains('flipImage') || ('flipSection')) {
        wall.style.transform = 'rotateY(180deg)';
    }
}))

// ---------- End Flip Section ----------

// ---------- For Nav Drop Down ----------


// ---------- End Nav Drop Down ----------

// ---------- Begin D Work Count Up ----------


// ---------- End D Work Count Up ----------



// ---------- For Professional Skills - old Code ----------

// zRow.addEventListener('mouseover', function () {
//     f1Row.style.flexBasis = '100%';
//     f1Row.addEventListener('mouseleave', function () {
//         f1Row.style.flexBasis = '10%';
//     })
// });

// ---------- for Work Done ----------

/* dElement.forEach((elements) => elements.addEventListener('mouseover', function () {
    elements.classList.toggle('D-Active');
})); */

// ---------- For Product Div ----------

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

// Input Contact Section

ynButton.addEventListener('click', function () {
    ynButton.placeholder = 'Please Write Down Your Name ...';
    ynButton.addEventListener('focusout', function () {
        ynButton.placeholder = 'Your Name';
    })
});