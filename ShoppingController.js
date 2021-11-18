var itemNumber = 0;
window.onload = function() {
    let items = document.getElementById("itemNumber");
    items.innerHTML = itemNumber;
    let addItem = document.getElementById("addItem");
    addItem.addEventListener("click",addItemHandle);
    let removeItem = document.getElementById("removeItem");
    removeItem.addEventListener("click",removeItemHandle);
}

//Item add handler
const addItemHandle = (event) => {
    itemNumber++;
    let items = document.getElementById("itemNumber");
    items.innerHTML = itemNumber;
}

//Item remove handler
const removeItemHandle = (event) => {
    if(itemNumber > 0)  itemNumber--;
    let items = document.getElementById("itemNumber");
    items.innerHTML = itemNumber;
}