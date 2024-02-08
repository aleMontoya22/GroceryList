//Obtener referencia a los elementos del DOM
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.getElementById('grocery-list');
const clearBtn = document.querySelector(".clear-btn");

//Edi option
let editElement;
let editFlag = false;
let editID = "";

//Agregar event listener al boton de agregar
form.addEventListener('submit', agregarElemento);

//Función para agregar un elemento a la lista
function agregarElemento(e) {
    e.preventDefault();
    const value = grocery.value;

    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        console.log("add item to the list");
    } else if(value&&editFlag){
        console.log("editing");
    } else{
        displayAlert("Please enter value","danger");
    }
}

//displat alert
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
}