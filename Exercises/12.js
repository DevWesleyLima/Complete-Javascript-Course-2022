function getFactorial(factorialNumber)
{   
    for(let i = factorialNumber - 1; i >= 1; i--)
    {
        factorialNumber *= i;
    }
    console.log(factorialNumber.toFixed(2));
}

getFactorial(4);
console.log(`----`);
getFactorial(10);
console.log(`----`);