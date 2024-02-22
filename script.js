function open_modal (){
    document.querySelector("#modal").style.display = 'flex';
}


let buttons = document.querySelectorAll('[id^="btn_"]');
buttons.forEach(button => {
    button.addEventListener('click', (evt) => {
        open_modal();
        let idCategory = button.id.substring(4);
        load_products(idCategory);
        document.querySelector("#modal-title").textContent = button.textContent;
        showIndexButton(idCategory);
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
            inputQtd.classList.add('modal-input');
            productQtdInput.appendChild(inputQtd);
        }
    
    } catch (error) {
        console.log("error")
    }

}


const button = document.querySelector("#modal-btn");
button.addEventListener('click', () => {
    var confirmation = confirm("Deseja salvar os itens?")
    if(confirmation){
        addList();
        document.querySelector("#modal").style.display = 'none';
        console.log(catID);
    }
    
    
})

function getProducts(){
    var product_item = document.querySelectorAll("li");
    var productArray = [];
    product_item.forEach(elem => {
        productArray.push(elem.textContent);
    });
    return productArray;
}

function getQtd(){
    var item_qtd = document.querySelectorAll(".modal-input");
    var qndArray = [];
    item_qtd.forEach(elem => {
        qndArray.push(elem.value);
    });
    return qndArray;
}


function addList(){
    var itens_list = [];
    itens_list.push({name: getProducts(), qtd: getQtd()});
    console.log(itens_list); 
}


var catID = '';

function showIndexButton(idCategory){
    catID = idCategory;
    
}










