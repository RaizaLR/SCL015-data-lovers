// estas funciones son de ejemplo
const table = document.getElementById("table");


let select = document.getElementById("select");
const alienChckBx = document.getElementById("alien");
const humanChckBx = document.getElementById("human");
const femaleChckBx = document.getElementById("female");
const maleChckBx = document.getElementById("male");
const unknownGenderChckBx = document.getElementById("unknown");

const functions = {
  addAllCharacters(info) {
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
  ,
 order(info) {
    if(select.value === "alphAscending"){
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
      return functions.addAllCharacters(info);
       }
       
      else if(select.value === "alphDescending"){
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
        return functions.addAllCharacters(info);
         }

      else {
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
        return functions.addAllCharacters(info);
      }  }
      ,
       filter(info){
        let aliensArray = info.filter(e => e.species==="Alien");
        let humansArray = info.filter(e => e.species==="Human");
        let femaleArray = info.filter(e => e.gender === "Female");
        let maleArray = info.filter(e => e.gender === "Male");
        let unknownGenderArray = info.filter(e => e.gender === "unknown");
        let aliensHumansArray = aliensArray.filter(e => e.species==="Human");
        let alienFemaleArray = aliensArray.filter(e => e.gender === "Female");
        let alienMaleArray = aliensArray.filter(e => e.gender === "Male");
        let alienUnkArray = aliensArray.filter(e => e.gender === "unknown");
        let humanFemaleArray = humansArray.filter(e => e.gender === "Female");
        let humanMaleArray = humansArray.filter(e => e.gender === "Male");
        let humanUnkArray = humansArray.filter(e => e.gender === "unknown");
        let femaleMaleArray = femaleArray.filter(e => e.gender === "Male");
        let femaleUnkArray = femaleArray.filter(e => e.gender === "unknown");
        let maleUnkArray = maleArray.filter(e => e.gender === "unknown");
        let threeGendersArray = femaleMaleArray.filter(e => e.gender === "unknown");

        if ((alienChckBx.checked===true)&&(humanChckBx.checked===true)) {
        functions.addAllCharacters(aliensHumansArray); }
        else if ((alienChckBx.checked===true)&&(femaleChckBx.checked===true)) {
        functions.addAllCharacters(alienFemaleArray); }
        else if ((alienChckBx.checked===true)&&(maleChckBx.checked===true)) { 
        functions.addAllCharacters(alienMaleArray); }
        else if ((alienChckBx.checked===true)&&(unknownGenderChckBx.checked===true)) {
        functions.addAllCharacters(alienUnkArray); }
        else if ((humanChckBx.checked===true)&&(femaleChckBx.checked===true)) {
        functions.addAllCharacters(humanFemaleArray); }
        else if ((humanChckBx.checked===true)&&(maleChckBx.checked===true)) {
        functions.addAllCharacters(humanMaleArray); }
        else if ((humanChckBx.checked===true)&&(unknownGenderChckBx.checked===true)) {
        functions.addAllCharacters(humanUnkArray); }
        else if ((femaleChckBx.checked===true)&&(maleChckBx.checked===true)) {
        functions.addAllCharacters(femaleMaleArray); }   
        else if ((femaleChckBx.checked===true)&&(unknownGenderChckBx.checked===true)) {
        functions.addAllCharacters(femaleUnkArray); } 
        else if ((maleChckBx.checked===true)&&(unknownGenderChckBx.checked===true)) {
        functions.addAllCharacters(maleUnkArray); } 
        else if ((femaleChckBx.checked===true)&&(maleChckBx.checked===true)&&(unknownGenderChckBx.checked===true)) {
        functions.addAllCharacters(threeGendersArray); }   
        else if (alienChckBx.checked===true) {
        functions.addAllCharacters(aliensArray);}
        else if (humanChckBx.checked===true) {
        functions.addAllCharacters(humansArray);}
        else if (femaleChckBx.checked===true) {
        functions.addAllCharacters(femaleArray);}
        else if (maleChckBx.checked===true) {
        functions.addAllCharacters(maleArray);}
        else if (unknownGenderChckBx.checked===true) {
        functions.addAllCharacters(unknownGenderArray);}
        else {
        functions.addAllCharacters(info)} }
}

// export const anotherExample = () => {
//   return 'OMG';
// };

// let nombres = {

// }
// console.log([name:0]);

export default functions;