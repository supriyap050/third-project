function addItem() {
  const inputItemValue = document.getElementById("inputItem").value;
  const inputDateValue = document.getElementById("inputDate").value;

  const listItem = document.querySelector(".listItem");

  listItem.innerHTML += `<li> <span>${inputItemValue}</span> <span> ${inputDateValue}</span> <button onclick="deleteItem(this)">Delete</button>  </li>`;
}

const deleteItem=(button) =>{
      button.parentElement.remove();
    }