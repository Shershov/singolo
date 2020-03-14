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