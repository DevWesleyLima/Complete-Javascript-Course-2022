function getHIValue(age)
{
    baseValue = 100;

    console.log(`***********************`);
    console.log(`Health Insurance Values`);
    console.log(`***********************`);
    
    if(age < 0)
    {
        console.log(`Error: Invalid Age Inserted!`);
    }
    else if(age < 10)
    {
        console.log(`Members (0 to 9 yo): £` + (baseValue + 80).toFixed(2));
    }
    else if(age < 31)
    {
        console.log(`Members (10 to 30 yo): £` + (baseValue + 50).toFixed(2));
    }
    else if(age < 61)
    {
        console.log(`Members (31 to 60 yo): £` + (baseValue + 95).toFixed(2));
    }    
    else if(age > 60)
    {
        console.log(`Members (+60 yo): £` + (baseValue + 130).toFixed(2));
    }
    else
    {
        console.log(`Error: Invalid Age Inserted!`);
    }
}

getHIValue(9);
console.log(``);
getHIValue(10);
console.log(``);
getHIValue(31);
console.log(``);
getHIValue(61);
console.log(``);
getHIValue(-10);