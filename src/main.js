import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const table = document.getElementById("table");


window.addEventListener("load", addAllCharacters(data.results));

function addAllCharacters(info) {
  table.innerHTML = "";
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
select.addEventListener("change",order);
function order(){
  if(select.value === "alphAscending"){
    let info = data.results;
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
    }
    return addAllCharacters(info);
     }
    else if(select.value === "alphDescending"){
      let info = data.results;
      for (let i=0; i < info.length; i++){
     
      info.sort(function (a, b) {
         if (a.name < b.name) {
           return 1;
         }
         if (a.name > b.name) {
           return -1;
         }
         // a debe ser igual a b
         return 0;
      });   
      }
      return addAllCharacters(info);
       }
    else {
      let info = data.results;
      for (let i=0; i < info.length; i++){
     
      info.sort(function (a, b) {
         if (a.id > b.id) {
           return 1;
         }
         if (a.id < b.id) {
           return -1;
         }
         // a debe ser igual a b
         return 0;
      });   
      }
      return addAllCharacters(info);
    };  }