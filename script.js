const grocery = document.querySelector("#grocery");
const canned = document.querySelector("#canned");
const bakery = document.querySelector("#bakery");
const drinks = document.querySelector("#drinks");
const meat = document.querySelector("#meat");
const cold = document.querySelector("#cold");
const fruits = document.querySelector("#fruits");
const vegetables = document.querySelector("#vegetables");
const cleaning = document.querySelector("#cleaning");
const utilities = document.querySelector("#utilities");
const hygiene = document.querySelector("#hygiene");
const pet = document.querySelector("#pet");

const modal_exit = document.querySelector("#modal_exit");


async function show_products(idCategory){

    try {
        const response = await fetch('http://localhost:8080/products/category/' + idCategory)
    
        const data = await response.json();
    
        const productList = document.querySelector("#product-list");
        productList.innerHTML = "";
        const arrayLength = data.length;
    
        for(var i = 0; i < arrayLength - 1; i++){
            const listItem = document.createElement("li");
            listItem.textContent = data[i].name;
            productList.appendChild(listItem);
        }
        
        console.log(data);
    
    } catch (error) {
        console.log("error")
    }

}


grocery.addEventListener('click', (event) => {
    event.preventDefault();
    open_modal();
    document.querySelector("#modal-title").textContent = "Mercearia";
    show_products(1);
    
    
})

canned.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Enlatados";
    show_products(2);
})

bakery.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Padaria";
    show_products(3);
})

drinks.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Bebidas";
    show_products(4);
})

meat.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Carnes";
    show_products(5);
})

cold.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Frios";
    show_products(6);
})

fruits.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Frutas";
    show_products(7);
})

vegetables.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Legumes";
    show_products(8);
})

cleaning.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Limpeza";
    show_products(9);
})

utilities.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Utilidades";
    show_products(10);
})

hygiene.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Higiene";show_products(11);
})

pet.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Pet";
    show_products(12);
})





function open_modal (){
    document.querySelector("#modal").style.display = 'flex';
}



modal_exit.addEventListener('click', () => {
    document.querySelector("#modal").style.display = 'none';
})


