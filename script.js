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


function open_modal (){
    document.querySelector("#modal").style.display = 'flex';
}

modal_exit.addEventListener('click', () => {
    document.querySelector("#modal").style.display = 'none';
})

grocery.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Mercearia";
})

canned.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Enlatados";
})

bakery.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Padaria";
})

drinks.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Bebidas";
})

meat.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Carnes";
})

cold.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Frios";
})

fruits.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Frutas";
})

vegetables.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Legumes";
})

cleaning.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Limpeza";
})

utilities.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Utilidades";
})

hygiene.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Higiene";
})

pet.addEventListener('click', () => {
    open_modal();
    document.querySelector("#modal-title").textContent = "Pet";
})


