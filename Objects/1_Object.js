const product = new Object;
product.name = 'Chair';
product.brand = 'ForTrek';
product['Product Brand'] = 'ForTrek';
product.price = 749.90;
product.size = 'XG';

console.log(product);
delete product['Product Brand'];
console.log(product);