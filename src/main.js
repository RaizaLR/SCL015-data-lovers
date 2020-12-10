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
tarjeta.appendChild(name);}
 }

let select = document.getElementById("select");
select.addEventListener("change",order)
function order(){
  if(select.value === "alphAscending"){
    const info = data.results;
    for (let i=0; i < info.length; i++){
   
    info.sort(function (a, b) {
       if (a.name > b.name) {
         return 1;
       }
       if (a.name < b.name) {
         return -1;
       }
       // a debe ser igual a b
       return 0;
    });   
    console.log(info[i].name);  }
     }
    else if(select.value === "alphDescending"){
        console.log("prueba");}
    else {
      console.log("tercero");
    };  }



//  const alphOrder = document.getElementById("select");
// let optionA= document.getElementById("alphAscending");
//   alphOrder.addEventListener('change',ordenAscendente);
//   function ordenAscendente(){
// if(select.selectedIndex=0) {console.log("holamundo")};
// if(select.selectedIndex=1) {console.log("else")};
// if(select.selectedIndex=2) {console.log("if")};
//   }


// elemento.addEventListener("focus", myScript);

// function myScript(){
//     console.log("hola");
// }

//  if (document.getElementById("alphAscending").select==true) { 
//     console.log("ok");
//   }


//  alphAscending.addEventListener('selected', console.log("hola mundo"));

