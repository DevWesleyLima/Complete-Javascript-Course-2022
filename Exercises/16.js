function getCalculations(a,operator,b)
{
    switch(operator)
    {
        case `+`:
            console.log(`${a} + ${b} = ${a + b}`);
            break;
        case `-`:
            console.log(`${a} - ${b} = ${a - b}`);
            break;
        case `*`:
            console.log(`${a} x ${b} = ${a * b}`);
            break;
        case `/`:
            console.log(`${a} ÷ ${b} = ${a / b}`);
            break
        default:
            console.log(`Error: Invalid operator!`);
            break;
    }
}

getCalculations(1,`+`,2);
console.log(`----------`);
getCalculations(2,`-`,1);
console.log(`----------`);
getCalculations(1,`*`,2);
console.log(`----------`);
getCalculations(1,`/`,2);
console.log(`----------`);
getCalculations(1,`|`,2);