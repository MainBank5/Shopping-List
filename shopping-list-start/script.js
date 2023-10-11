const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const ItemFilter = document.getElementById('filter');


//events listeners
function onAddItemSubmit(e) {
    e.preventDefault()

    const newItemText = itemInput.value;
    if (newItemText === '') {
        alert('Please add an Item');
        return;
}
   //create item dome element
  addItemtoDOM(newItemText);


     //create element
     /*const li = document.createElement('li');
     const text = document.createTextNode(newItemText);
     li.appendChild(text);

     console.log(li);

     //create a button using a function
     const button = createButton('remove-item btn-link text-red');
     li.appendChild(button);

     console.log(li)

     //add li to the dom
     itemList.appendChild(li);*/

     //add item to local storage
     addToLocalStorage(newItemText)

     checkUI();

     itemInput.value = '';
}

function addItemtoDOM(item) {
    const li = document.createElement('li');
     const text = document.createTextNode(item);
     li.appendChild(text);

     const button = createButton('remove-item btn-link text-red');
     li.appendChild(button);

     itemList.appendChild(li);

}

function addToLocalStorage (item) {
    let itemsFromStorage;

    if(localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    itemsFromStorage.push(item)

    localStorage.setItem('items', JSON.stringify(itemsFromStorage))
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

function removeItem (e) {
    //console.log(e.target.parentElement)
    //the if targets the button
    if(e.target.parentElement.classList.contains('remove-item')) {
        console.log('clicked');
        if(confirm('Are you sure!')) {
            //now to target the list item to remove it on clicking the button
          e.target.parentElement.parentElement.remove();

          checkUI();
        }
          
    }

}

/*function clearItems (e) {
    //itemList.remove();
    itemList.innerHTML = '';
}*/

function clearItems () {
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
    checkUI();
}

function filterItems (e) {
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();
    
    console.log(text);

    items.forEach((item) => {

        const itemName = item.firstChild.textContent.toLowerCase()
        //console.log(itemName);

        if(itemName.indexOf(text) != -1) {
            //console.log(true);
            item.style.display ='flex';
        } else {
            //console.log(false);
            item.style.display='none'
        }
    })
}




function checkUI () { 
    const items = itemList.querySelectorAll('li');
    //console.log(items)
    if(items.length === 0) {
        clearBtn.style.display = 'none';
        ItemFilter.style.display = 'none';
    }
    else{
        clearBtn.style.display = 'block';
        ItemFilter.style.display = 'block';  
    }
}

//event listeners
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
ItemFilter.addEventListener('input', filterItems);


checkUI();

localStorage.setItem('name', 'Eliud');

console.log(localStorage.getItem('name'))
console.log(localStorage.name);

//localStorage.removeItem('name')
localStorage.clear()

