import functions from '../src/data.js';

const characters = [{name: "Bobby Moynihan", id: 2, species: "Human", gender: "Male"}, {name:"Man Painted Silver Who Makes Robot Noises", id: 3, species: "Human", gender: "Male"}, {name:"Agency Director", id: 1, species: "Human", gender: "Male"}, {name:"Arthricia", id: 4, species: "Alien", gender: "Female"}];

describe('functions', () => {
  it('is a object', () => {
    expect(typeof functions).toBe('object');
  });})

describe('functions.orderAZ', () => {
  it('is a function', () => {
    expect(typeof functions.orderAZ).toBe('function');
  });

  it('should return order AZ', () => {
    expect(functions.orderAZ(characters)).toEqual([{name: "Agency Director", id: 1, species: "Human", gender: "Male"}, {name:"Arthricia", id: 4, species: "Alien", gender: "Female"}, {name:"Bobby Moynihan", id:2, species: "Human", gender: "Male"}, {name:"Man Painted Silver Who Makes Robot Noises", id: 3, species: "Human", gender: "Male"}]);
  });
});


describe('functions.orderZA', () => {
  it('is a function', () => {
    expect(typeof functions.orderZA).toBe('function');
  });

  it('should return order ZA', () => {
    expect(functions.orderZA(characters)).toEqual([{name: "Man Painted Silver Who Makes Robot Noises", id: 3, species: "Human", gender: "Male"}, {name:"Bobby Moynihan", id: 2, species: "Human", gender: "Male"}, {name:"Arthricia", id: 4, species: "Alien", gender: "Female"}, {name:"Agency Director", id:1, species: "Human", gender: "Male"}]);
  });
});

describe('functions.orderDefault', () => {
  it('is a function', () => {
    expect(typeof functions.orderDefault).toBe('function');
  });

  it('should return order default', () => {
    expect(functions.orderDefault(characters)).toEqual([{name: "Agency Director", id: 1, species: "Human", gender: "Male"}, {name:"Bobby Moynihan", id:2, species: "Human", gender: "Male"}, {name:"Man Painted Silver Who Makes Robot Noises", id: 3, species: "Human", gender: "Male"}, {name:"Arthricia", id: 4, species: "Alien", gender: "Female"}]);
  });
});

describe('functions.speciesFilter', () => {
  it('is a function', () => {
    expect(typeof functions.speciesFilter).toBe('function');
  });

  it('should return alien species if selected', () => {
    expect(functions.speciesFilter(characters, "Alien")).toEqual([{name:"Arthricia", id: 4, species: "Alien", gender: "Female"}]);
  });

  it('should return human species if selected', () => {
    expect(functions.speciesFilter(characters, "Human")).toEqual([{name:"Agency Director", id: 1, species: "Human", gender: "Male"}, {name: "Bobby Moynihan", id: 2, species: "Human", gender: "Male"}, {name:"Man Painted Silver Who Makes Robot Noises", id: 3, species: "Human", gender: "Male"}]);
  });
});


describe('functions.genderFilter', () => {
  it('is a function', () => {
    expect(typeof functions.genderFilter).toBe('function');
  });

  it('should return female gender if selected', () => {
    expect(functions.genderFilter(characters, "Female")).toEqual([{name:"Arthricia", id: 4, species: "Alien", gender: "Female"}]);
  });

  it('should return male gender if selected', () => {
    expect(functions.genderFilter(characters, "Male")).toEqual([{name:"Agency Director", id: 1, species: "Human", gender: "Male"}, {name: "Bobby Moynihan", id: 2, species: "Human", gender: "Male"}, {name:"Man Painted Silver Who Makes Robot Noises", id: 3, species: "Human", gender: "Male"}]);
  });
});

describe('functions.searchCharacter', () => {
  it('is a function', () => {
    expect(typeof functions.searchCharacter).toBe('function');
  });

  it('should return Character name with A letter', () => {
    expect(functions.searchCharacter(characters, "A")).toEqual([{name:"Agency Director", id: 1, species: "Human", gender: "Male"}, {name:"Arthricia", id: 4, species: "Alien", gender: "Female"}]);
  });

  it('should return Character name with B letter', () => {
    expect(functions.searchCharacter(characters, "B")).toEqual([{name: "Bobby Moynihan", id: 2, species: "Human", gender: "Male"}]);
  });
});