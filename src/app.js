const fruitList = ["alma", "körte", "szilva", "banán"];
const list = document.querySelector("#list");
const fruitInput = document.querySelector("#fruit");
const addButton = document.querySelector("#addButton");

fruitList.forEach((fruit) => {
    const li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
});

function makeLiItem(text){
    const li = document.createElement("li");
    li.textContent = text;
    return li;
}

addButton.addEventListener("click", () => {
    console.log("hozzáadás ...");
    const newFruit = fruitInput.value;
    fruitList.push(newFruit);
    list.appendChild(makeLiItem(newFruit));
    fruitInput.value = "";
})
   

