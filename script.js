// heder nav

const NAVI_BLOCK = document.querySelectorAll('.header__nav')[0];

NAVI_BLOCK.addEventListener('click', addStyleToNavigation, false);

function addStyleToNavigation(event) {
    if (event.target.tagName !== 'A') return;
    else {
        NAVI_BLOCK.querySelectorAll('a').forEach(elem => elem.classList.remove('current__link'));
        event.target.classList.add('current__link');
    }
}

// slider
const btnPrev = document.querySelector('.phone_inner .left__arrow');
const btnNext = document.querySelector('.phone_inner .right__arrow');

let images = document.querySelectorAll('.phone_inner .slide__field');

let i = 0;
console.log(images);

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