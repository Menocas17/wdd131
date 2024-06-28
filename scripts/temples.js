const hamButton = document.querySelector('#menu')
const title = document.querySelector('h1');
const navegation = document.querySelector('.navegation-menu')

hamButton.addEventListener('click', ()=>{
    title.classList.toggle('open-title');
    navegation.classList.toggle('open');
    hamButton.classList.toggle('open-button');
});

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;