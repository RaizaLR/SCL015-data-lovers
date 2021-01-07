const functions = {

  orderAZ(info) {
    let orderedInfo = info.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      { 
        return -1;
      }
    });
    return orderedInfo;
  },

  orderZA(info) {
    let orderedInfo = info.sort(function (a, b) {
      if (a.name < b.name){
        return 1;
      }
      {
        return -1;
      }
    });
    return orderedInfo;
  },

  orderDefault(info) {
    let orderedInfo = info.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }

      {
        return -1;
      }
    });
    return orderedInfo;
  },

  speciesFilter(info, species) {
    let speciesArray = info.filter(e => e.species === species);
    return speciesArray;
  },

  genderFilter(info, gender) {
    let genderArray = info.filter(e => e.gender === gender);
    return genderArray;
  },
  searchCharacter(info, text) {
    let searchArray = info.filter(e => e.name.includes(text));
    return searchArray;
  },
  computeStats(info, array){
    let computeSpecies = ((array.length)/(info.length))*100;
    computeSpecies = computeSpecies.toFixed(0);
    return computeSpecies;
  }
}

export default functions;