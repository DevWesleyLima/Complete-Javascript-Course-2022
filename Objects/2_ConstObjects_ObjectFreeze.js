// people -> "A" -> {...}
const people = { name: `Jhon`};
console.log(people); //Jhon

people.name = `Peter`;
console.log(people); //Peter

/*
* people -> "B" -> {...} 
* people = {name: 'Annie'}
*/

Object.freeze(people);

people.name = 'Marie';
people.end = 'Street ABC';
console.log(people); //Error, still Peter!

delete people.name;
console.log(people); //Error, still Peter!

/*
* Try now...
*/

const peopleConst = Object.freeze({name: 'Jake'});
peopleConst.name = 'Marie'; 
console.log(peopleConst); //Error, still Jake!
