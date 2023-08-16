const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

//events listeners
function addItem (e) {
    e.preventDefault()

    const newItemText = itemInput.value;
    if (newItemText === '') {
        alert('Please add an Item');
        return;
}
     //create element
     const li = document.createElement('li');
     const text = document.createTextNode(newItemText);
     li.appendChild(text);

     //console.log(li);

     //create a button using a function
     const button = createButton('remove-item btn-link text-red');
     li.appendChild(button)
     console.log(li)

     itemList.appendChild(li)

     itemInput.value = '';
}

function createButton (classes) {
    const button =document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark')
    button.appendChild(icon)
    return button
}

function createIcon (classes) {
    const icon = document.createElement('i');
    icon.className = classes ;
    return icon;
}


itemForm.addEventListener('submit', addItem)