const ferrari = 
{
    model: 'F40',
    topSpeed: 324
};

const volvo = 
{
    model: 'V40',
    topSpeed: 200
};

console.log(ferrari.__proto__);
console.log(volvo.__proto__);
console.log(`***`);

console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
console.log(`***`);

function MyObject(){}
console.log(typeof Object, typeof MyObject);
console.log(Object.prototype, MyObject.prototype);