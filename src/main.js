import  functions  from './data.js';

import data from './data/rickandmorty/rickandmorty.js';


let info = data.results;

let table = document.getElementById("table");


window.addEventListener("load", addAllCharacters(info));
function  addAllCharacters(info) {
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
select.addEventListener("change",function(){
  
  if(select.value === "alphAscending"){
    table.innerHTML = "";
    let array = functions.orderAZ(info);
    info=array;
  return addAllCharacters(info); }

  else if(select.value === "alphDescending"){
    let array = functions.orderZA(info);
    info=array;
    return addAllCharacters(info);}

  else{
    let array = functions.orderDefault(info);
    info=array;
    return addAllCharacters(info)}});

const alienChckBx = document.getElementById("alien");
const humanChckBx = document.getElementById("human");
const femaleChckBx = document.getElementById("female");
const maleChckBx = document.getElementById("male");
const unknownGenderChckBx = document.getElementById("unknown");
    
alienChckBx.addEventListener("click",filterInfo);
humanChckBx.addEventListener("click",filterInfo);
femaleChckBx.addEventListener("click",filterInfo);
maleChckBx.addEventListener("click",filterInfo);
unknownGenderChckBx.addEventListener("click",filterInfo);

function filterInfo(){
  if ((alienChckBx.checked===true)&&(humanChckBx.checked===true)) {
    let filterArray = functions.alienHumanFilter(info);
    info=filterArray;
    addAllCharacters(info);
  }
  else if ((alienChckBx.checked===true)&&(femaleChckBx.checked===true)) {
    let filterArray = functions.alienFemaleFilter(info);
    info=filterArray;
    addAllCharacters(info);}
    else if ((alienChckBx.checked===true)&&(maleChckBx.checked===true)) { 
    let filterArray = functions.alienMaleFilter(info);
    info=filterArray;
      addAllCharacters(info);}
    else if ((alienChckBx.checked===true)&&(unknownGenderChckBx.checked===true)) {
      let filterArray = functions.alienUnkFilter(info);
      info=filterArray;
      addAllCharacters(info);}
    else if ((humanChckBx.checked===true)&&(femaleChckBx.checked===true)) {
      let filterArray = functions.humanFemaleFilter(info);
      info=filterArray;
      addAllCharacters(info);}
    else if ((humanChckBx.checked===true)&&(maleChckBx.checked===true)) {
      let filterArray = functions.humanMaleFilter(info);
      info=filterArray;
      addAllCharacters(info);}
    else if ((humanChckBx.checked===true)&&(unknownGenderChckBx.checked===true)) {
      let filterArray = functions.humanUnkFilter(info);
      info=filterArray;
      addAllCharacters(info); }
    else if ((femaleChckBx.checked===true)&&(maleChckBx.checked===true)) {
      let filterArray = functions.femaleMaleFilter(info);
      info=filterArray;
      addAllCharacters(info); }   
    else if ((femaleChckBx.checked===true)&&(unknownGenderChckBx.checked===true)) {
      let filterArray = functions.femaleUnkFilter(info);
      info=filterArray;
      addAllCharacters(info); } 
    else if ((maleChckBx.checked===true)&&(unknownGenderChckBx.checked===true)) {
      let filterArray = functions.maleUnkFilter(info);
      info=filterArray;
      addAllCharacters(info); } 
    else if ((unknownGenderChckBx.checked===true)&&(femaleChckBx.checked===true)&&(maleChckBx.checked===true)) {
      let filterArray = functions.threeGenderFilter(info);
      info=filterArray;
      addAllCharacters(info); }   
    else if (alienChckBx.checked===true) {
      let filterArray = functions.alienFilter(info);
      info=filterArray;
      addAllCharacters(info);}
    else if (humanChckBx.checked===true) {
      let filterArray = functions.humanFilter(info);
      info=filterArray;
      addAllCharacters(info);}
    else if (femaleChckBx.checked===true) {
      let filterArray = functions.femaleFilter(info);
      info=filterArray;
      addAllCharacters(info);}
    else if (maleChckBx.checked===true) {
      let filterArray = functions.maleFilter(info);
      info=filterArray;
      addAllCharacters(info);}
    else if (unknownGenderChckBx.checked===true) {
      let filterArray = functions.unkFilter(info);
      info=filterArray;
      addAllCharacters(info);}
    else {
      info=data.results;
    addAllCharacters(info)}
}
    
//modal//
          
let modalName = document.getElementById("modalName");
let modalImage = document.getElementById("modalImage");

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.querySelector(".box");


// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

btn.onclick = function(event) {
  let x = event.target;
  modal.style.display = "block";
  modalImage.setAttribute("src", x.src);
  modalName.innerHTML = x.innerHTML;}
  

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