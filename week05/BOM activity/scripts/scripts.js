const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Creating the array used to local storage the chapters

let chaptersArray = getChapterList()  || [];

//Defininf the display chapter function

function displayList (inputValue) {
    

    const listText = document.createElement('span');
    listText.textContent = inputValue;

    const listButton = document.createElement('button');
    listButton.textContent = '❌';

    const listItem = document.createElement ("li")
    listItem.appendChild(listText);
    listItem.appendChild(listButton);

    list.appendChild(listItem);

    listButton.addEventListener('click', () => {
        list.removeChild(listItem);
        chaptersArray = chaptersArray.filter((item) => item !== inputValue);
        setChapterList();

    });
    input.focus();
}

function setChapterList () {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }

chaptersArray.forEach(chapter => {
    displayList(chapter);
});


button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
    }
});



