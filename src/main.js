import  functions  from './data.js';

import data from './data/rickandmorty/rickandmorty.js';





window.addEventListener("load", function(){
  let info = data.results;
  functions.addAllCharacters(info);
});

let select = document.getElementById("select");
select.addEventListener("change",function(){
  let info = data.results;
functions.order(info);
 });


const alienChckBx = document.getElementById("alien");
alienChckBx.addEventListener("click",function(){
let info = data.results;
functions.filter(info);
});
const humanChckBx = document.getElementById("human");
humanChckBx.addEventListener("click",function(){
  let info = data.results;
  functions.filter(info);
  });
const femaleChckBx = document.getElementById("female");
femaleChckBx.addEventListener("click",function(){
  let info = data.results;
  functions.filter(info);
  });
const maleChckBx = document.getElementById("male");
maleChckBx.addEventListener("click",function(){
  let info = data.results;
  functions.filter(info);
  });
const unknownGenderChckBx = document.getElementById("unknown");
unknownGenderChckBx.addEventListener("click",function(){
  let info = data.results;
  functions.filter(info);
  });

    
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