
//Creating the dinamic menu on mobile devices
const hamButton = document.querySelector('#menu')
const title = document.querySelector('h1');
const navegation = document.querySelector('.navegation-menu');
const icon = document.querySelector ('.icon');

hamButton.addEventListener('click', ()=>{
    title.classList.toggle('open-title');
    navegation.classList.toggle('open');
    hamButton.classList.toggle('open-button');
    icon.classList.toggle('icon-hidden');
});


// Adding the dinamic info in the footer
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

//Dinamicaly adding the temple gallery 

//Creating the temples objects

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Tegucigalpa Honduras",
        location: "Tegucigalpa, Honduras",
        dedicated: "2013, March, 17",
        area: 592015,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/tegucigalpa-honduras-temple/tegucigalpa-honduras-temple-3878-main.jpg"
      },

      {
        templeName: "Managua Nicaragua",
        location: "Managua, Nicaragua",
        dedicated: "In construction",
        area: 957988,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/managua-nicaragua-temple/managua-nicaragua-temple-31300-main.jpg"
      },


      {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, November, 02",
        area: 199132,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
      },
    
];


// inserting the gallery in the html
const gallery = document.querySelector("#gallery");

function createTempleCards (filteredTemples) {
    filteredTemples.forEach((temple) => {
        let article = document.createElement('article');
        
        article.classList.add('temple-card');
        
        article.innerHTML = `
            <h3>${temple.templeName}</h3>
            <ul>
                <li>
                    <span>Location:</span> ${temple.location}
                </li>
                <li>
                    <span>Dedicated:</span> ${temple.dedicated}
                </li>
                <li>
                    <span>Size:</span> ${temple.area} sq ft
                </li>
            </ul>
            <img src="${temple.imageUrl}" alt="Photo of ${temple.templeName} temple" loading="lazy" height="250">
        `;
        
        gallery.appendChild(article);
        })
};

createTempleCards(temples);


// Creating the logic to manage the menu buttons
const galleryTittle = document.querySelector("#gallery-title");
const homeButton = document.querySelector("#home");
const oldButton = document.querySelector("#old");
const newButton = document.querySelector("#new");
const largeButton = document.querySelector("#large");
const smallButton = document.querySelector("#small");


function menuButtonClick (buttonId) {
    switch(buttonId){
        case 'home':
            location.reload();
            break;

        case 'old':
            galleryTittle.textContent = "Older Temples"
            gallery.innerHTML = ''
            createTempleCards(temples.filter(temple => temple.dedicated.split(',')[0].trim() < 1900))
            break;

        case 'new':
            galleryTittle.textContent = "Newer Temples"
            gallery.innerHTML = ''
            createTempleCards(temples.filter(temple => temple.dedicated.split(',')[0].trim() > 2000))
            break;
                
        
        case 'large':
            galleryTittle.textContent = "Larger Temples"
            gallery.innerHTML = ''
            createTempleCards(temples.filter(temple => temple.area > 90000))
            break;
    
        case 'small':
            galleryTittle.textContent = "Smaller Temples"
            gallery.innerHTML = ''
            createTempleCards(temples.filter(temple => temple.area < 10000))
            break;

    }       

}

homeButton.addEventListener('click', () => {
    menuButtonClick("home")
});
oldButton.addEventListener('click', () => {
    menuButtonClick("old");
});
newButton.addEventListener('click', () => {
    menuButtonClick("new");
});
largeButton.addEventListener('click', () => {
    menuButtonClick('large');
});
smallButton.addEventListener('click', () => {
    menuButtonClick('small')
})


