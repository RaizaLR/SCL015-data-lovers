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
image.setAttribute("src", info[i].image);
image.setAttribute("class", "image");
name.innerHTML = info[i].name;
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

  const alienChckBx = document.getElementById("alien");
  alienChckBx.addEventListener("click",alienFilter);

    function alienFilter(){
      if (alienChckBx.checked===true) {
        let info = data.results.filter(e => e.species === "Alien");
        addAllCharacters(info);
         }
         else {
          let info = data.results; 
          addAllCharacters(info)};}
    
  const humanChckBx = document.getElementById("human");
  humanChckBx.addEventListener("click",humanFilter);

    function humanFilter(){
      if (humanChckBx.checked===true) {
        let info = data.results.filter(e => e.species === "Human");
        addAllCharacters(info);
          }
          else {
          let info = data.results; 
          addAllCharacters(info)};}

  const femaleChckBx = document.getElementById("female");
 femaleChckBx.addEventListener("click",femaleFilter);

    function femaleFilter(){
      if (femaleChckBx.checked===true) {
        let info = data.results.filter(e => e.gender === "Female");
        addAllCharacters(info);
          }
          else {
          let info = data.results; 
          addAllCharacters(info)};}

  const maleChckBx = document.getElementById("male");
  maleChckBx.addEventListener("click",maleFilter);
  
      function maleFilter(){
        if (maleChckBx.checked===true) {
          let info = data.results.filter(e => e.gender === "Male");
          addAllCharacters(info);
            }
            else {
            let info = data.results; 
            addAllCharacters(info)};}

  const unknownGenderChckBx = document.getElementById("unknown");
  unknownGenderChckBx.addEventListener("click",unknownGenderFilter);
  
      function unknownGenderFilter(){
        if (unknownGenderChckBx.checked===true) {
          let info = data.results.filter(e => e.gender === "unknown");
          addAllCharacters(info);
            }
            else {
            let info = data.results; 
            addAllCharacters(info)};}
          


// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("card");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




  // let species = document.querySelector("aside");
  // species.addEventListener("click",myFunction);
  //       function myFunction(event){
  //         let x = event.target;

  //         if(x.id === "alien"){
  //           let info = data.results.filter(e => e.species == "Alien");
  //             addAllCharacters(info);
  //         } 
  //         else if((x.id === "human")){
  //           let info = data.results.filter(e => e.species == "Human");
  //           addAllCharacters(info);
  //         }
  //         else if((x.id === "female")){
  //           let info = data.results.filter(e => e.gender == "Female");
  //           addAllCharacters(info);
  //         }
  //         else if((x.id === "male")){
  //           let info = data.results.filter(e => e.gender == "Male");
  //           addAllCharacters(info);
  //         }
  //         else if((x.id === "unknown")){
  //           let info = data.results.filter(e => e.gender == "unknown");
  //           addAllCharacters(info);
  //         }
  //         else{
  //           let info = data.results; 
  //           addAllCharacters(info);
  //         }}