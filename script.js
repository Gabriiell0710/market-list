function open_modal (){
    document.querySelector("#modal").style.display = 'flex';
}


let buttons = document.querySelectorAll('[id^="btn_"]');
buttons.forEach(button => {
    button.addEventListener('click', (evt) => {
        open_modal();
        let index = button.id.substring(4);
        load_products(index);
        document.querySelector("#modal-title").textContent = button.textContent;
    })
    const modal_exit = document.querySelector("#modal_exit").addEventListener('click', () => {
        document.querySelector("#modal").style.display = 'none';
    })
})


async function load_products(idCategory){

    try {
        const response = await fetch('http://localhost:8080/products/category/' + idCategory)
        const data = await response.json();
    
        const productList = document.querySelector("#product-list");
        productList.innerHTML = "";
        const arrayLength = data.length;

        const productQtdInput = document.querySelector(".modal-inputs");
        productQtdInput.innerHTML = '';
    
        for(var i = 0; i < arrayLength - 1; i++){
            const listItem = document.createElement("li");
            listItem.textContent = data[i].name;
            productList.appendChild(listItem);

            const inputQtd = document.createElement('input')
            inputQtd.type = "number";
            inputQtd.min = 0;
            productQtdInput.appendChild(inputQtd);
        }
    
    } catch (error) {
        console.log("error")
    }

}










