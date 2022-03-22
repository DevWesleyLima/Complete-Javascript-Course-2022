/************************/
console.log(`Var`);

var name = `1stName`;

{
    var name = `2ndName`;
    console.log(name);
}

console.log(name);

/************************/
console.log(`==========`);

console.log(`Let`);

let name2 = `1stName`;

{
    let name2 = `2ndName`;
    console.log(name2);
}

console.log(name2);

/************************/
console.log(`==========`);

console.log(`Const`);
const name3 = `1stName`;
{
    const name3 = `2ndName`;
    console.log(name3);
}

console.log(name3);