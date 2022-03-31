function getDivisibleBy(dividend, divisor)
{ 
    if((dividend % divisor) === 0)
    {
        console.log(`True`);
        return console.log(`${dividend} is divisible by ${divisor}`);
    }
    else
    {
        console.log(`False`);
        return console.log(`${dividend} is not divisible by ${divisor}`);
    }
}

getDivisibleBy(10,3);
getDivisibleBy(66,3);

