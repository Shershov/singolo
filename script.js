// heder nav

let menuElements = document.querySelectorAll(".navigation > li > a");
for (element of menuElements) {
    element.onclick = function(e) {
        e.target.classList.add('current__link');
        for (element of menuElements) {
            if (element != e.target) element.classList.remove('current__link');
        }
    }
}
console.log(menuElements);

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