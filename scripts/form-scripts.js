
const productList = document.querySelector("#productName");
const formButton = document.querySelector('#form-button');

const products = [
    {
      id: 'fc-1888',
      name: "Flux capacitor",
      avgrating: 4.5
    },
    {
      id: 'fc-2050',
      name: "Power laces",
      avgrating: 4.7
    },
    {
      id: 'fs-1987',
      name: "Time circuits",
      avgrating: 3.5
    },
    {
      id: 'ac-2000',
      name: "Low voltage reactor",
      avgrating: 3.9
    },
    {
      id: 'jj-1969',
      name: "Warp equalizer",
      avgrating: 5.0
    }
];



function createOption(products) {
  products.forEach(product => {
    let option = document.createElement('option');

    option.textContent = product.name;
    option.value = product.id;

    productList.appendChild(option);
  });
}

createOption(products);







