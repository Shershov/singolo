// heder nav

const navMenu = document.getElementById('nav__menu');
navMenu.addEventListener('click', (event) => {
    navMenu.querySelectorAll('li > a').forEach(el => el.classList.remove('current__link'));
    event.target.classList.add('current__link');
})


// slider
const btnPrev = document.querySelector('.phone_inner .left__arrow');
const btnNext = document.querySelector('.phone_inner .right__arrow');
let images = document.querySelectorAll('.phone_inner .slide__field');
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


const iphones = document.querySelectorAll(".iphon-vert > img");
const mobileBtnVert = document.querySelector(".mobile__btn-vert");
let j = 0;

mobileBtnVert.onclick = function() {
    iphones[j].style.display = 'none';
    j++;
    if (j >= iphones.length) {
        j = 0;
    }
    iphones[j].style.display = 'block';
}

const iphones2 = document.querySelectorAll(".iphon-horiz > img");
const mobileBtnHor = document.querySelector(".mobile__btn-hor");
let k = 0;

mobileBtnHor.onclick = function() {
    iphones2[k].style.display = 'none';
    k++;
    if (k >= iphones2.length) {
        k = 0;
    }
    iphones2[k].style.display = 'block';
}



// portfolio menu

const portfolioTabs = document.querySelectorAll('#portfolio__menu > li');
const portfolioImgItems = document.querySelectorAll('.porfolio__item');
for (let element of portfolioTabs) {
    element.onclick = function(e) {
        e.target.classList.add('portfolio__active-link');
        for (let element of portfolioTabs) {
            if (element != e.target) element.classList.remove('portfolio__active-link');
        }
    }
}
// portfolio items
for (let portfolioTab of portfolioTabs) {
    portfolioTab.onclick = function() {
        for (let portfolioImgItem of portfolioImgItems) {
            portfolioImgItem.style.order = Math.floor((Math.random() * 12));
        }
    }
}