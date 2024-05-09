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
        getIdCategoryButton(idCategory);
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

//----------------------------------------------------------------

const modalButton = document.querySelector("#modal-btn");
modalButton.addEventListener('click', () => {
    var confirmation = confirm("Deseja salvar os itens?")
    if(confirmation){
        addList();
        document.querySelector("#modal").style.display = 'none';
        getIdButton(catID);
        getCategoryName(idButton);
        changeColorButton(idButton);
        saveProducts();
    }
})


//--------------------------------------------------------------

var meuObjeto = {
    listaProduto: [],
    listaCategoria: []
};

function novoObjeto (productName, productQtd){
    return{
        productName: productName,
        productQtd: productQtd
    };
}

let listaMeuObjeto = [];

//--------------------------------------------------------------

function getProducts(){
    var product_item = document.querySelectorAll("li");
    product_item.forEach(elem => {
       meuObjeto.listaProduto.push(elem.textContent);
    });
}

//-------------------------------------------------------------

function getQtd(){
    var item_qtd = document.querySelectorAll(".modal-input");
    item_qtd.forEach(elem => {
        meuObjeto.listaCategoria.push(elem.value);
    });
}

//------------------------------------------------------------

var productAndQtd_list = [];
function addList(){
    getProducts();
    getQtd();
    //listaMeuObjeto.push(novoObjeto("abóbora", 8));
    for (let i = 0; i < meuObjeto.listaProduto.length; i++){
        console.log("Oba oba")
        let novoObj = novoObjeto(meuObjeto.listaProduto[i], meuObjeto.listaCategoria[i])
        listaMeuObjeto.push(novoObj)
        
    }
    console.table(listaMeuObjeto); 
}

//-------------------------------------------------------------




var catID = '';
function getIdCategoryButton(idCategory){
    catID = idCategory;
}

//----------------------------------------------------------

var idButton = '';
function getIdButton(number){
    idButton = "btn_" + number;
}

//-----------------------------------------------------------

function changeColorButton(idButton){
    var button = document.querySelector("#" + idButton);
    button.classList.remove('btn');
    button.classList.add('btn-done');
    button.disabled = true;
}

//-----------------------------------------------------------

var categoryName='';
function getCategoryName(n){
var category = document.querySelector("#" + idButton);
 categoryName = category.textContent;
 console.log(categoryName);

}

//-------------------------------------------------------------








function saveProducts(){

    fetch("http://localhost:8080/save",
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(listaMeuObjeto)
    })
    .then(function (res) {console.log(res) })
    .catch(function (res) {console.log(res) })
};








