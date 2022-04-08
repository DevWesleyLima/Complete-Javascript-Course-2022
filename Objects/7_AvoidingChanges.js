//Object.preventExtensions
const product = Object.preventExtensions
({
    name: 'Name', price: 1.99, tag: 'Offert'
});

console.log(`Extensible: `, Object.isExtensible(product));

product.name = 'Rubber';
product.description = 'School Rubber';
delete product.tag;
console.log(product);

//Object.seal
const people = {name: 'Juli', age: 35};
Object.seal(people);
console.log('Sealed:', Object.isSealed(people));

//Object.freeze = Object.seal + const values
