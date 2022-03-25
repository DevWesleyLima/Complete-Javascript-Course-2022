//Normal Function
let double = function (a) 
{
    return 2 * a;
}

//Arrow Function
let double2 = (a) => 
{
    return 2 * a;
}

//Implicit Function
let double3 = a => 2 * a;

//Outputs
console.log(double(Math.PI));
console.log(double2(Math.PI));
console.log(double3(Math.PI));

//Other Examples
hello = () => `Hello World!`;
hello2 = _ => `Hello World 2!`;
console.log(hello());
console.log(hello2()); 