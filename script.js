const btnPrev = document.querySelector('.phone_inner .left__arrow');
const btnNext = document.querySelector('.phone_inner .right__arrow');
const images = [...document.querySelectorAll('.phone_inner .slide__field')];

const iphones = document.querySelectorAll(".iphon-vert > img");
const mobileBtnVert = document.querySelector(".mobile__btn-vert");

const iphones2 = document.querySelectorAll(".iphon-horiz > img");
const mobileBtnHor = document.querySelector(".mobile__btn-hor");

const sliderBg = document.getElementById('slider__bg');

const navMenu = document.getElementById('nav__menu');
const portfolioTabs = document.querySelectorAll('#portfolio__menu > li');
const portfolioItems = document.getElementById("portfolio__items");
const portfolioImgItems = document.querySelectorAll('.porfolio__item');

// heder nav


navMenu.addEventListener('click', (event) => {
    navMenu.querySelectorAll('li > a').forEach(el => el.classList.remove('current__link'));
    event.target.classList.add('current__link');
})


// slider

let i = 0;
btnPrev.onclick = function() {
    images[i].style.display = 'none';
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].style.display = 'flex';
}

btnNext.onclick = function() {
    images[i].style.display = 'none';
    i++;
    if (i >= images.length) {
        i = 0;
    }
    images[i].style.display = 'flex';
}

// slider screens

let j = 0;

mobileBtnVert.onclick = function() {
    iphones[j].style.display = 'none';
    j++;
    if (j >= iphones.length) {
        j = 0;
    }
    iphones[j].style.display = 'block';
}


let k = 0;

mobileBtnHor.onclick = function() {
    iphones2[k].style.display = 'none';
    k++;
    if (k >= iphones2.length) {
        k = 0;
    }
    iphones2[k].style.display = 'block';
}

// slider background



btnPrev.addEventListener('click', changeSliderBackGroundLeft);

function changeSliderBackGroundLeft() {
    if (images[0].style.display == 'flex') {
        sliderBg.classList.remove('slider__next');
    } else {
        sliderBg.classList.add('slider__next');
    }
}

btnNext.addEventListener('click', changeSliderBackGroundRight);

function changeSliderBackGroundRight() {
    if (images[0].style.display == 'flex') {
        sliderBg.classList.remove('slider__next');
    } else {
        sliderBg.classList.add('slider__next');
    }

}



// portfolio menu
for (let element of portfolioTabs) {
    element.onclick = function(e) {
        e.target.classList.add('portfolio__active-link');
        for (let element of portfolioTabs) {
            if (element != e.target) element.classList.remove('portfolio__active-link');
        }
    }
}
// portfolio images
for (let portfolioTab of portfolioTabs) {
    portfolioTab.onclick = function() {
        for (let portfolioImgItem of portfolioImgItems) {
            portfolioImgItem.style.order = Math.floor((Math.random() * 12));
        }
    }
}
// portfolio bordered

portfolioItems.addEventListener('click', (e) => {
    portfolioItems.querySelectorAll('img').forEach(el => el.classList.remove('portfolio__item-bordered'));
    if (e.target.tagName === 'IMG') { e.target.classList.add('portfolio__item-bordered'); }
});