//Obtener referencia a los elementos del DOM
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const listaCompras = document.getElementById('grocery-list');
const clearBtn = document.querySelector(".clear-btn");

//Edi option
let editElement;
let editFlag = false;
let editID = "";

//Función para agregar un elemento a la lista
function agregarElemento(){
    const nuevoItem = inputItem.value;

}

//Agregar event listener al boton de agregar
bntAgregar.addEventListener('click',agregarElemento);