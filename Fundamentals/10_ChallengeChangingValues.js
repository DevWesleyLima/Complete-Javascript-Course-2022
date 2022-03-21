console.log(`Example 1`);
{   
    //Original Data
    let a = 7;
    let b = 94;
    let c = a;

    console.log(`A: ` + a);
    console.log(`B: ` + b);
    
    console.log(`-----`);

    //New Data Values
    a = b;    
    b = c;
    
    console.log(`A: ` + a);
    console.log(`B: ` + b);
}

console.log(``);
console.log(`*********`);
console.log(`---------`);
console.log(`*********`);
console.log(``);

console.log(`Example 2`);
{   
    //Original Data
    let a = 7;
    let b = 94;

    console.log(`A: ` + a);
    console.log(`B: ` + b);
    
    console.log(`-----`);

    //New Data Values
   [a,b] = [b,a]
    
    console.log(`A: ` + a);
    console.log(`B: ` + b);
}
