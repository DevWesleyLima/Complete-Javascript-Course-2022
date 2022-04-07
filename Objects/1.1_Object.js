const car = 
{
    model: 'A4',
    brand: 'Audi',
    value: 89000,
    owner: 
    {
        name: 'Raul',
        age: 56,
        address: 
        {
            street: 'ABC Street',
            number: 123
        }
    },
    drivers:
    [{
        name: 'Junior',
        age: 19
    },
    {
      name: 'Annie',
      age: 42 
    }],
    getCarInsurance: function()
    {
        //...
    }
}

//Default Data
console.log(car.owner.address.number);
console.log(car.owner.address.street);

console.log(`***`);

//Example1
car.owner.address.number = 1000;
console.log(car.owner.address.number);

//Example2
car['owner']['address']['street'] = 'Av. Gigante';
console.log(car.owner.address.street);

console.log(``);

//Delete and Sub-Delete Examples
delete car.owner.address;
delete car.getCarInsurance;
console.log(car);