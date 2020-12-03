import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);




const table = document.getElementById("table");




window.onload = function addAllCharacters() {
const info = data.results;
    for (let i=0; i < info.length; i++) {
let tarjeta = document.createElement("DIV");
let image = document.createElement("IMG");
let name = document.createElement("P");
tarjeta.setAttribute("class", "cell");
tarjeta.setAttribute("id", "card");
image.setAttribute("src", data.results[i].image);
image.setAttribute("class", "image");
name.innerHTML = data.results[i].name;
table.appendChild(tarjeta);
tarjeta.appendChild(image);
tarjeta.appendChild(name);
 }
 }










// function addLi() {
//     var contenido;
//     for (i = 0; i < pelis.length; i++) {
//       var li = document.createElement("li");
//       var p = document.createElement("p");
//       contenido = "Nombre:" + pelis[i].Nombre + " || Genero: " + pelis[i].Genero;
//       p.appendChild(document.createTextNode(contenido));
//       document.querySelector("#lista-pelis").appendChild(li).appendChild(p);
//     }
// }