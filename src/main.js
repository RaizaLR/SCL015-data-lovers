import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const table = document.getElementById("table");

let tarjeta = document.createElement("DIV");

table.appendChild(tarjeta);

tarjeta.setAttribute("class", "cell");
tarjeta.setAttribute("id", "card");

let image = document.createElement("IMG");

tarjeta.appendChild(image);

image.setAttribute("src", data["results"][0]["image"]);

image.setAttribute("class", "image");

let name = document.createElement("P");

tarjeta.appendChild(name);

name.innerHTML = data["results"][0]["name"];

