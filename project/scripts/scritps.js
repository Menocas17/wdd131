const hamButton = document.querySelector('#menu');
const navegation = document.querySelector('.nav-menu');



hamButton.addEventListener('click', ()=>{
    navegation.classList.toggle('nav-menu-open');
    hamButton.classList.toggle('open-button');

});

const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();