import functions from './data.js';

import data from './data/rickandmorty/rickandmorty.js';


let info = data.results;

let table = document.getElementById("table");


window.addEventListener("load", addAllCharacters(info));
function addAllCharacters(info) {
  table.innerHTML = "";
  for (let i = 0; i < info.length; i++) {
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
    tarjeta.appendChild(name);
    //aqui le decimos a la tarjeta que cuando oiga click ejecute la funcion que muestra el modal
    tarjeta.onclick = function () {
      addModal(info[i]);
    }
  }
}


let select = document.getElementById("select");
select.addEventListener("change", function () {

  if (select.value === "alphAscending") {
    table.innerHTML = "";
    let array = functions.orderAZ(info);
    info = array;
    return addAllCharacters(info);
  }

  else if (select.value === "alphDescending") {
    let array = functions.orderZA(info);
    info = array;
    return addAllCharacters(info);
  }

  else {
    let array = functions.orderDefault(info);
    info = array;
    return addAllCharacters(info)
  }
});

const alienChckBx = document.getElementById("alien");
const humanChckBx = document.getElementById("human");
const femaleChckBx = document.getElementById("female");
const maleChckBx = document.getElementById("male");
const unknownGenderChckBx = document.getElementById("unknown");


alienChckBx.addEventListener("click", alienFilterInfo);
humanChckBx.addEventListener("click", humanFilterInfo);
femaleChckBx.addEventListener("click", femaleFilterInfo);
maleChckBx.addEventListener("click", maleFilterInfo);
unknownGenderChckBx.addEventListener("click", unknownFilterInfo);

function femaleFilterInfo() {
  if (femaleChckBx.checked === true) {
    let gender = "Female";
    let filterArray = functions.genderFilter(info, gender);
    info = filterArray;
    addAllCharacters(info);
  }
  else {
    info = data.results;
    addAllCharacters(info)
  }
}

function maleFilterInfo() {
  if (maleChckBx.checked === true) {
    let gender = "Male";
    let filterArray = functions.genderFilter(info, gender);
    info = filterArray;
    addAllCharacters(info);
  }
  else {
    info = data.results;
    addAllCharacters(info)
  }
}

function unknownFilterInfo() {
  if (unknownGenderChckBx.checked === true) {
    let gender = "unknown"
    let filterArray = functions.genderFilter(info, gender);
    info = filterArray;
    addAllCharacters(info);
  }
  else {
    info = data.results;
    addAllCharacters(info)
  }
}

function alienFilterInfo() {
  if (alienChckBx.checked === true) {
    let species = "Alien";
    let filterArray = functions.speciesFilter(info, species);
    info = filterArray;
    addAllCharacters(info);
  }
  else {
    info = data.results;
    addAllCharacters(info)
  }
}

function humanFilterInfo() {
  if (humanChckBx.checked === true) {
    let species = "Human";
    let filterArray = functions.speciesFilter(info, species);
    info = filterArray;
    addAllCharacters(info);
  }
  else {
    info = data.results;
    addAllCharacters(info)
  }
}


//BUSCAR//
let searchBar = document.getElementById("search");
searchBar.addEventListener("keyup", searchCharacter)
function searchCharacter() {
  if (searchBar.value !== "") {
    let searchInfo = info.filter(e => e.name.includes(searchBar.value));
    info = searchInfo;
    return addAllCharacters(info);
  }
  else if (searchBar.value === "") {
    info = data.results;
    return addAllCharacters(info);
  }
}


//modal//
// Seleccionamos el modal
let modal = document.getElementById("myModal");

// Seleccionamos el elemento <span> que cierra el modal
let span = document.getElementsByClassName("close")[0];

//Funcion para añadir el contenido del modal

function addModal(info) {
  modal.style.display = "block";
  let imagen = document.getElementById("modalImage");
  let name = document.getElementById("modalName");
  let state = document.getElementById("modalStatus");
  let specie = document.getElementById("modalSpecie");
  let gender = document.getElementById("modalGender");
  let location = document.getElementById("modalLocation");
  imagen.setAttribute("src", info.image);
  name.setAttribute("class", "modalName");
  state.setAttribute("class", "modalStatus");
  specie.setAttribute("class", "modalSpecie");
  gender.setAttribute("class", "modalGender");
  name.innerHTML = `<strong>${info.name}</strong>`;
  state.innerHTML = `Estado: ${info.status}`;
  specie.innerHTML = `Especie: ${info.species}`;
  gender.innerHTML = `Género: ${info.gender}`;
  location.innerHTML = `Ubicación: ${info.location.name}`;
}

// Cuando el usuario hace click en <span> (x), se cierra el modal
span.onclick = function () {
  modal.style.display = "none";
}

// Cuando el usuario hace click en cualquier lugar afuera del modal, se cierra
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


