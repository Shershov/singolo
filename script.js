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
const mobile = document.querySelector(".mobile");
let j = 0;

mobile.onclick = function() {
    iphones[j].style.display = 'none';
    j++;
    if (j >= iphones.length) {
        j = 0;
    }
    iphones[j].style.display = 'block';
}
console.log(iphones);



// portfolio

const portfolioMenu = document.getElementById('portfolio__menu');
portfolioMenu.addEventListener('click', (event) => {
    portfolioMenu.querySelectorAll('li').forEach(el => el.classList.remove('portfolio__active-link'));
    event.target.classList.add('portfolio__active-link');
})