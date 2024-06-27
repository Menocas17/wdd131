const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    
    const chapter = input.value;
    input.value = '';

    const listText = document.createElement('span');
    listText.textContent = chapter;

    const listButton = document.createElement('button');
    listButton.textContent = '❌';

    const listItem = document.createElement ("li")
    listItem.appendChild(listText);
    listItem.appendChild(listButton);

    list.appendChild(listItem);

    listButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    input.focus();
});