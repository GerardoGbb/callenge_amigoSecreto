// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver 

const listaAmigos = [];
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
function agregarAmigo(){
    if(!inputAmigo.value){
        alert("debes ingresar un nombre")
    }
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`
};

function sortearAmigo(){

    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos [random];
    ulResultado.innerHTML = `<h1>El amigo secreto es:${amigoSecreto}</h1>`
}