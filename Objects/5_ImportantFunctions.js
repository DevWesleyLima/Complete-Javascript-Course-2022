const people = 
{
    name: 'Francesca',
    age: 2,
    weight: 13
};

//Keys
console.log(Object.keys(people));

//Values
console.log(Object.values(people));

//Entries
console.log(Object.entries(people));

console.log(`***`);

Object.entries(people).forEach(([keys,values]) => 
{
    console.log(`${keys}: ${values}`);
});

console.log(`***`);

Object.defineProperty(people, 'birthDate',
{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
});

people.birthDate = '01/01/2017'
console.log(people.birthDate);
console.log(Object.keys(people));

//Object.assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);

Object.freeze(obj);
obj.c = 1234;
console.log(obj);