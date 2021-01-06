import episodes from './data/rickandmorty/episodesrickandmorty.js';

let table = document.getElementById("table");

window.addEventListener("load", addAllEpisodes(episodes));
function addAllEpisodes() {
  for (let j = 0; j < episodes.episodesArray.length; j++) {
    let tarjeta = document.createElement("DIV");
    let name = document.createElement("P");
    tarjeta.setAttribute("class", "cell");
    tarjeta.setAttribute("id", "card");
    name.innerHTML = `Episodio numero ${episodes.episodesArray[j].id} <br> <strong>"${episodes.episodesArray[j].name}"</strong>`;
    table.appendChild(tarjeta);
    tarjeta.appendChild(name);
  }}