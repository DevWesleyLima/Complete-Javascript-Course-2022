let numbers = [1,2,3,4,5,10,11,12,13,14,15,20,25,44,66,88,105]


function getNumbersRange(numbers)
{
    let numberRange10to20 = [];
    let remainingNumbers = [];

    for(i = 0; i < numbers.length; i++)
    {
        if(numbers[i] >= 10 && numbers[i] <= 20)
        {                      
            numberRange10to20.push(numbers[i]);
        }        
        else
        {
            remainingNumbers.push(numbers[i]);
        }
    } 

    console.log(`********** Number Range **********`); 
    console.log(`There are: ` + numberRange10to20.length + ` numbers inside of the Range 10 to 20!`); 
    console.log(numberRange10to20);
    console.log(``);
    console.log(`******* Remaining Numbers ********`);
    console.log(`There are: ` + remainingNumbers.length + ` numbers outside of the Range 10 to 20!`);     
    console.log(remainingNumbers);
}

getNumbersRange(numbers);