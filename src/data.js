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

alienFilter(info){
  let aliensArray = info.filter(e => e.species==="Alien");
  return aliensArray;
},

humanFilter(info){
  let humansArray = info.filter(e => e.species==="Human");
  return humansArray;},
femaleFilter(info){
  let femaleArray = info.filter(e => e.gender === "Female");
  return femaleArray;
},

maleFilter(info){
  let maleArray = info.filter(e => e.gender === "Male");
  return maleArray
},

unkFilter(info){
  let unknownGenderArray = info.filter(e => e.gender === "unknown");
  return unknownGenderArray;
},

alienHumanFilter(info){
  let aliensArray = info.filter(e => e.species==="Alien");
  let aliensHumansArray = aliensArray.filter(e => e.species==="Human");
return aliensHumansArray
},

alienFemaleFilter(info){
  let aliensArray = info.filter(e => e.species==="Alien");
  let alienFemaleArray = aliensArray.filter(e => e.gender === "Female");
return alienFemaleArray
},

alienMaleFilter(info){
  let aliensArray = info.filter(e => e.species==="Alien");
  let alienMaleArray = aliensArray.filter(e => e.gender === "Male");
return alienMaleArray
}, 

alienUnkFilter(info){
  let aliensArray = info.filter(e => e.species==="Alien");
  let alienUnkArray = aliensArray.filter(e => e.gender === "unknown");
return alienUnkArray
}, 

humanFemaleFilter(info){
  let humansArray = info.filter(e => e.species==="Human");
  let humanFemaleArray = humansArray.filter(e => e.gender === "Female");
return humanFemaleArray;
},

humanMaleFilter(info){
  let humansArray = info.filter(e => e.species==="Human");
  let humanMaleArray = humansArray.filter(e => e.gender === "Male");
  return humanMaleArray;
},

humanUnkFilter(info){
  let humansArray = info.filter(e => e.species==="Human");
  let humanUnkArray = humansArray.filter(e => e.gender === "unknown");
  return humanUnkArray;
},
femaleMaleFilter(info){
  let femaleArray = info.filter(e => e.gender === "Female");
  let femaleMaleArray = femaleArray.filter(e => e.gender === "Male");
  return femaleMaleArray;
},
femaleUnkFilter(info){
  let femaleArray = info.filter(e => e.gender === "Female");
  let femaleUnkArray = femaleArray.filter(e => e.gender === "unknown");
  return femaleUnkArray;
},
maleUnkFilter(info){
  let maleArray = info.filter(e => e.gender === "Male");
  let maleUnkArray = maleArray.filter(e => e.gender === "unknown");
  return maleUnkArray;
},
threeGenderFilter(info){
  let femaleArray = info.filter(e => e.gender === "Female");
  let femaleMaleArray = femaleArray.filter(e => e.gender === "Male");
  let threeGendersArray = femaleMaleArray.filter(e => e.gender === "unknown");
  return threeGendersArray;
},
}

export default functions;