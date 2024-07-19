// Ham button fot the navegation

const hamButton = document.querySelector('#menu');
const navegation = document.querySelector('.nav-menu');



hamButton.addEventListener('click', ()=>{
    navegation.classList.toggle('nav-menu-open');
    hamButton.classList.toggle('open-button');

});

const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

// button and scripting for the staff menu

const  deployButton = document.querySelector('#staff-deploy-button');
const  backButton   = document.querySelector('#staff-back-button');
const menuTitle = document.querySelector('#menu-title');
const menuList = document.querySelector('#staff-menu-list')

// declarign the array containing the info about the staff

let generalStaff = [
    {
        id: 'directoresS',
        titulo: 'Matrimonio Director de Sesion',
        nombre: 'Matrimonio Rivera Vicente',
        foto: 'images/staff/general/matrimonioDirector/directores.webp',
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam odio ipsum soluta quisquam. Impedit eius voluptatem maxime, veritatis officia a suscipit blanditiis perferendis adipisci molestiae aliquam, explicabo consequuntur et earum doloribus saepe ad voluptatibus quia molestias placeat natus odit dolor corporis? Rerum qui quas, quaerat in, dolores impedit ducimus iusto, est possimus odit nisi quasi illum incidunt odio obcaecati minima. Adipisci vel quisquam voluptatum debitis laudantium! Dolore, facilis fugiat!" 
    },
    {
        id: 'directoresL',
        titulo: 'Matrimonio Director de Logistica',
        nombre: 'Matrimonio Menocal Alonzo',
        foto: "images/staff/general/matrimonioLogistica/matrimoniologistica.webp",
        bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam odio ipsum soluta quisquam. Impedit eius voluptatem maxime, veritatis officia a suscipit blanditiis perferendis adipisci molestiae aliquam, explicabo consequuntur et earum doloribus saepe ad voluptatibus quia molestias placeat natus odit dolor corporis? Rerum qui quas, quaerat in, dolores impedit ducimus iusto, est possimus odit nisi quasi illum incidunt odio obcaecati minima. Adipisci vel quisquam voluptatum debitis laudantium! Dolore, facilis fugiat!"
    },
    {
        id: 'coordinadores',
        titulo: 'Coordinadores de Sesion',
        nombre1: 'Michael Hernandez',
        nombre2: 'Stephanie Hernandez',
        foto1: "images/staff/general/coordinadoresSesion/michael.webp",
        foto2: "images/staff/general/coordinadoresSesion/stephanie.webp",
        bio1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam voluptates facilis explicabo totam velit non vitae ducimus! Sapiente reprehenderit suscipit doloribus magnam id, placeat beatae sed iste! Harum delectus laborum eaque, quae, amet, nulla eligendi tenetur consequatur animi voluptatem perspiciatis!",
        bio2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam voluptates facilis explicabo totam velit non vitae ducimus! Sapiente reprehenderit suscipit doloribus magnam id, placeat beatae sed iste! Harum delectus laborum eaque, quae, amet, nulla eligendi tenetur consequatur animi voluptatem perspiciatis!"
    }
];


// declarin the function to populate the staff menu

function createIndiceLinks(staffTeam) {
    staffTeam.forEach(staffMember => {
        let itemList = document.createElement('li');
        itemList.innerHTML = `<a href="#" id="${staffMember.id}">${staffMember.titulo}</a>`;
        menuList.appendChild(itemList);
    });
}

if (window.location.pathname.includes('staff.html')) {
    createIndiceLinks (generalStaff); // populating the staff menu

    deployButton.addEventListener('click', () => {
        menuList.classList.toggle ('staff-menu-list-hidden');
        
    })

    deployButton.addEventListener('click', () => {
        menuList.classList.toggle ('staff-menu-list-hidden');
        
    })
    
}

// adding the click event listener for the menu in mobile devices

// adding the funcionalities to the links in the menu 

const buttonCoordinadoresS = document.querySelector('#directoresS');
const buttonCoordinadoresL  = document.querySelector('#directoresL');
const buttonCoordinares  = document.querySelector('#coordinadores');
const generalButton = document.querySelector('#menu-title');
const staffContent = document.querySelector('.staff-content');



// Creating the function to populate the staff content
function populateStaffContent (staff) {
    staffContent.innerHTML = '';
    
    
    if (staff.id === 'coordinadores') {

        staffContent.innerHTML = `
        <div class="coordinadores-grid">
            <div>
                <figure>
                    <img loading="lazy" src="${staff.foto1}" alt="Foto de ${staff.nombre1}" >
                    <figcaption>${staff.nombre1}</figcaption>
                </figure>

                <p>
                    ${staff.bio1}
                </p>
            </div>
            
            <div>
                <figure>
                    <img loading="lazy" src="${staff.foto2}" alt="Foto de ${staff.nombre2}" >
                    <figcaption>${staff.nombre2}</figcaption>
                </figure>

                <p>
                    ${staff.bio2}
                </p>
            </div>
        </div>
       
        `;
        
    } else {

        staffContent.innerHTML = `
            <figure>
                <img loading="lazy" src="${staff.foto}" alt="Foto de ${staff.nombre}" >
                <figcaption>${staff.nombre}</figcaption>
            </figure>

            <p>
                ${staff.bio}
            </p>
            `;
    }

}



// adding the event listener

if (window.location.pathname.includes('staff.html')) {

    buttonCoordinadoresS.addEventListener('click', () => {
        let directoresS = generalStaff.filter(staff => staff.id === 'directoresS')[0];
        populateStaffContent(directoresS);
    }); 
    
    buttonCoordinadoresL.addEventListener('click', () => {
        let directoresL = generalStaff.filter(staff => staff.id === 'directoresL')[0];
        populateStaffContent(directoresL);
    }); 
    
    generalButton.addEventListener('click', ()=> {
        location.reload();
    });
    
    buttonCoordinares.addEventListener('click', ()=> {
        let coordinadores = generalStaff.filter(staff => staff.id === 'coordinadores')[0];
        populateStaffContent(coordinadores);
    })
}



// adding the script for the gallery 

const galleryPage = document.querySelector('#gallery');

let galleryPhoto = [
    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/319073316_1153830288587950_6370310389800355127_n.jpg'

    },
    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/319096440_3428187667446437_2804919012174826894_n.jpg'

    },
    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/319103836_544180151056799_4468523160436788346_n.jpg'

    },
    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/319175910_2475426709279448_282572949407150712_n.jpg'

    },
    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/319238834_527668252631546_73980086441639076_n.jpg'

    },
    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/319840455_541697241156472_6946493638002735724_n.jpg'

    },
    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/319343158_1325515864878159_5256372366786665413_n.jpg'

    },
    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/319364938_886091425860131_1575792060484590565_n.jpg'

    },
    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/319508587_1888224681526180_7808286619419807349_n.jpg'

    },
    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/319540320_550529596992829_400206215443420494_n.jpg'

    },
    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/319632172_875579903726093_8151059598392610897_n.jpg'

    },
    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/319714251_684177959753620_7457072020060421976_n.jpg'

    },

    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/319759591_665940205197155_7132383461625346335_n.jpg'

    },

    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/319765065_486404400226801_1204381208381414262_n.jpg'

    },

    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/319819313_1097373680936062_5897303426740586544_n.jpg'

    },
    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/319834959_860309988449742_829981280737714950_n.jpg'

    },

    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/319889204_468428938781153_187589006245000886_n.jpg'

    },
    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/319981111_5768933986517596_2151759356700746219_n.jpg'

    },
    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/320009847_3384126045140120_4577983263148605912_n.jpg'

    },
    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/320012286_921583025385143_9143388977601641464_n.jpg'

    },
    {
        photoName: 'PFJ2022',
        tags: [],
        company: '',
        dayOfWeek: '',
        description: 'Foto de la sesion PFJ 2022',
        imgUrl: 'images/PFJ photos/320418518_462443636069560_7180931505257755031_n.jpg'

    },

    


    
]

function populateGallery (gallery) {
    gallery.forEach(image => {
        let galleryImg = document.createElement('img');
        galleryImg.src = image.imgUrl;
        galleryImg.alt = image.description;
        galleryImg.width = 300;
        galleryImg.loading = 'lazy';
        galleryImg.classList.add('gallery-item')
        galleryPage.appendChild(galleryImg);

    });
}

if (window.location.pathname.includes('gallery.html')) {
    populateGallery(galleryPhoto);

}


// creating the selectors for the expand gallery view 

const modal = document.querySelector('#modal');
const modalImg = document.querySelector('#modal-img');
const captionText = document.querySelector('#caption');
const galleryCloseBtn = document.querySelector('#gallery-close-button');

const images = document.querySelectorAll('.gallery-item');



if (window.location.pathname.includes('gallery.html')) {
    

    images.forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = image.src;
            modalImg.alt = image.alt;
            captionText.innerHTML = image.alt;
        });
    });
    
    galleryCloseBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

