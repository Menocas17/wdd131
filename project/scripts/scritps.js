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



createIndiceLinks (generalStaff); // populating the staff menu


// adding the click event listener for the menu in mobile devices
deployButton.addEventListener('click', () => {
    menuList.classList.toggle ('staff-menu-list-hidden');
    
})

// adding the funcionalities to the links in the menu 

const buttonCoordinadoresS = document.querySelector('#directoresS');
const buttonCoordinadoresL  = document.querySelector('#directoresL');
const buttonCoordinares  = document.querySelector('#coordinadores');
const generalButton = document.querySelector('#menu-title');
const staffContent = document.querySelector('.staff-content');



// function populateStaffContent (staff) {
//     staffContent.innerHTML = ''; 
//     staffContent.innerHTML = `
//         <figure>
//             <img src="${staff.foto}">

//         </figure>
//     `
// }

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

