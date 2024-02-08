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

modal_exit.addEventListener('click', () => {
    document.querySelector("#modal").style.display = 'none';
})

grocery.addEventListener('click', () => {
    document.querySelector("#modal").style.display = 'flex';
    document.querySelector("#modal-title").textContent = "Mercearia";
})

canned.addEventListener('click', () => {
    document.querySelector("#modal").style.display = 'flex';
    document.querySelector("#modal-title").textContent = "Enlatados";
})

bakery.addEventListener('click', () => {
    document.querySelector("#modal").style.display = 'flex';
    document.querySelector("#modal-title").textContent = "Padaria";
})

drinks.addEventListener('click', () => {
    document.querySelector("#modal").style.display = 'flex';
    document.querySelector("#modal-title").textContent = "Bebidas";
})

meat.addEventListener('click', () => {
    document.querySelector("#modal").style.display = 'flex';
    document.querySelector("#modal-title").textContent = "Carnes";
})

cold.addEventListener('click', () => {
    document.querySelector("#modal").style.display = 'flex';
    document.querySelector("#modal-title").textContent = "Frios";
})

fruits.addEventListener('click', () => {
    document.querySelector("#modal").style.display = 'flex';
    document.querySelector("#modal-title").textContent = "Frutas";
})

vegetables.addEventListener('click', () => {
    document.querySelector("#modal").style.display = 'flex';
    document.querySelector("#modal-title").textContent = "Legumes";
})

cleaning.addEventListener('click', () => {
    document.querySelector("#modal").style.display = 'flex';
    document.querySelector("#modal-title").textContent = "Limpeza";
})

utilities.addEventListener('click', () => {
    document.querySelector("#modal").style.display = 'flex';
    document.querySelector("#modal-title").textContent = "Utilidades";
})

hygiene.addEventListener('click', () => {
    document.querySelector("#modal").style.display = 'flex';
    document.querySelector("#modal-title").textContent = "Higiene";
})

pet.addEventListener('click', () => {
    document.querySelector("#modal").style.display = 'flex';
    document.querySelector("#modal-title").textContent = "Pet";
})
