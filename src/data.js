const functions = {
  
 orderAZ(info) {
  let orderedInfo = info.sort(function (a, b) {
         if (a.name > b.name) {
           return 1;}
         if (a.name < b.name) {
           return -1;}
         // a debe ser igual a b
         return 0});  
     return orderedInfo;
},

  orderZA(info) {
  let  orderedInfo = info.sort(function (a, b) {
           if (a.name < b.name) {
             return 1}
           if (a.name > b.name) {
             return -1}
           // a debe ser igual a b
           return 0});   
        return orderedInfo;
},

  orderDefault(info) {
  let orderedInfo = info.sort(function (a, b) {
           if (a.id > b.id) {
             return 1}
           if (a.id < b.id) {
             return -1}
           // a debe ser igual a b
           return 0;
        });   
        return orderedInfo;
},

speciesFilter(info, species){
  let speciesArray = info.filter(e => e.species===species);
  return speciesArray;
},

genderFilter(info, gender){
  let genderArray = info.filter(e => e.gender === gender);
  return genderArray;
},
}

export default functions;