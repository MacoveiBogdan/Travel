// Selectors

let header = document.querySelector('.Header');
let hamburgerMenu = document.querySelector('.HamburgerMenu');

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('MenuOpen');
})