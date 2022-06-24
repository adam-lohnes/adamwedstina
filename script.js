let programHeader = document.querySelector('.program-header');
let menuHeader = document.querySelector('.menu-header');

let programList = document.querySelector('.program-list');
let menuList = document.querySelector('.menu-list');

programHeader.addEventListener('click', () => {
    programHeader.classList.add('active');
    menuHeader.classList.remove('active');
    programList.classList.add('active');
    menuList.classList.remove('active');
});

menuHeader.addEventListener('click', () => {
    programHeader.classList.remove('active');
    menuHeader.classList.add('active');
    programList.classList.remove('active');
    menuList.classList.add('active');
});