let compareWithThis = function (parameter)
{
    console.log(this === parameter);
}

compareWithThis(global);
const obj = {};
compareWithThis = compareWithThis.bind(obj);
compareWithThis(global);
compareWithThis(obj);

console.log(``);
console.log(`------`);
console.log(``);

//This
let compareWithThisArrow = parameter => console.log(this === parameter);
compareWithThisArrow(global);
compareWithThisArrow(this);
compareWithThisArrow(obj);
compareWithThisArrow(module.exports);

console.log(``);
console.log(`------`);
console.log(``);

//Bind
compareWithThisArrow = compareWithThisArrow.bind(obj);
compareWithThisArrow(global);
compareWithThisArrow(this);
compareWithThisArrow(obj);
compareWithThisArrow(module.exports);