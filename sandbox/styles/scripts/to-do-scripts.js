const input = document.querySelector('#task');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const completedList = document.querySelector('#completed-List');

button.addEventListener('click', ()=> {
    const myTask = input.value;
    input.value = '';

    const listItem = document.createElement('li');

    const listText = document.createElement ('span');
    listText.textContent = myTask;
    const listDeleteButton = document.createElement('button');
    listDeleteButton.textContent = 'Delete'
    const listCheckButton = document.createElement ('button');
    listCheckButton.textContent = 'Complete'

    listItem.appendChild(listText);
    listItem.appendChild(listCheckButton);
    listItem.appendChild(listDeleteButton);

    list.appendChild(listItem);

    listDeleteButton.addEventListener('click', ()=>{
        list.removeChild(listItem);
    });

    listCheckButton.addEventListener('click', () => {
        const completedItem = document.createElement('li');
        completedItem.textContent = listText.textContent; // Usamos textContent para obtener el texto de la tarea
        completedList.appendChild(completedItem);
        list.removeChild(listItem); 
    });
});

    
