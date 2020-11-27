import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const charactersBtn = document.getElementById("charactersBtn");
charactersBtn.addEventListener("click", function(){
    const welcomeSection = document.getElementById("indexSection");
    welcomeSection.style.display= "none";
    const charactersSection = document.getElementById("charactersSection");
    charactersSection.style.display= "block";
})

// // revisar boton de volver
// const backBtn = document.getElementById("backBtn");
// backBtn.addEventListener("click", function(){
//     const charactersSection = document.getElementById("charactersSection");
//     charactersSection.style.display= "none";
//     const welcomeSection = document.getElementById("welcomePage");
//     welcomeSection.style.display= "block";
// })