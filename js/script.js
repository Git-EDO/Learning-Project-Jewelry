let body = document.querySelector('body');
let burgerOpen = document.querySelector('.burger-open');
let burgerClose = document.querySelector('.burger-close');
let menu = document.querySelector('.menu__list');

burgerOpen.onclick = function() {
    body.classList.add('lock');
}

burgerClose.onclick = function() {
    body.classList.remove('lock');
}

menu.onclick = function() {
    body.classList.remove('lock');
}