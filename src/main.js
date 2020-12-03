import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);


////////////////////////////////aqui empieza funcion

const table = document.getElementById("table");

let tarjeta = document.createElement("DIV");

let image = document.createElement("IMG");

//se cree el elemento tarjeta dentro del elemento tabla
table.appendChild(tarjeta);
//
tarjeta.setAttribute("class", "cell");

tarjeta.setAttribute("id", "card");
tarjeta.appendChild(image);
image.setAttribute("class", "image");
let name = document.createElement("P");

tarjeta.appendChild(name);

for(let i = 0;i < data.results.length; i++){
if(window.onload === true){

let imageReturn = image.setAttribute("src", data.results[i].image);
 
return imageReturn;}

name.innerHTML = data.results[i].name;}

console.log()