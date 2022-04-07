let numbers = [1,2,2.5,2.55,3,4,5];

function getArrMult(numbers, multiplier)
{    
    let result = [];
    let resultGreater5 = [];

    numbers.forEach(element => 
    {
        result.push(element * multiplier)
    });

    numbers.forEach(element => 
    {
        if((element * multiplier) > 5)
        {
            resultGreater5.push(element * multiplier)
        }
    });

    console.log(`All Results: ` + result);
    console.log(`Results Greater than 5: ` + resultGreater5);
}

getArrMult(numbers, 2);