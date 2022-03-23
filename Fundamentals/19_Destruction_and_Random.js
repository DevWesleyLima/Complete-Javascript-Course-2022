const object = {
    name: `Object C`,
    quantity: `20`,
    unit: `Kilograms`,
    unt: `Kg`,
    price: `5.00`
}

//Destruction 
const { name, price } = object;
console.log(`Name: ` + name + ` | Price: ` + price);

//Destruction and abbreviation (n and p)
const { name: n, price: p} = object;
console.log(`Name: ` + n + ` | Price: ` + p);

//Random 1 
function random1({min = 0, max = 1000})
{
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
const object1 = {min: 50, max: 60};
console.log(random1(object1));

//Random 2
function random2({min = 0, max = 1000})
{    
    return Math.floor(Math.random() * (max - min + 1) + min);;
}

const object2 = {min: 40, max: 50};
console.log(random2(object2));

//Random 3
/*
*   Note: This will only work 
*       if the randMin value is >= than  2 
*/
const randMin = 2; //randMin must be half of the rand max value
const randMax = randMin * 2; //
const formula = Math.floor(Math.random() * randMax) - 1;
const random3 = formula < randMin ? formula + randMin : formula;
console.log(random3)

