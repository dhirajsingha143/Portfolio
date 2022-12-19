const divMenu = document.querySelector('.mobile-menu');
const crossButton = document.querySelector('.cross-button');
const hamburgerButton = document.querySelector('.fa-bars');

const openMenu = () => {
    divMenu.classList.toggle('display');
};

crossButton.addEventListener('click', () => {
    openMenu();
});

hamburgerButton.addEventListener('click', () => {
    openMenu();
});

$('.nav-menu li a').on('click', () => {
    $('#cross-button').click();
});
