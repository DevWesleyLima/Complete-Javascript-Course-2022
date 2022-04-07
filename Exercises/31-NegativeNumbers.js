let numbers = [100,2,3,4,5,-15,10,-8,-9,11,12,-2,0,14,15,20,25,44,66,88,105,1,805,-1];

function getNegativeNumbers(numbers)
{
    let negativeNumbers = [];

    for(i = 0; i < numbers.length; i++)
    {
        if(numbers[i] < 0)
        {  
           negativeNumbers.push(numbers[i]);
        }       
    } 

    console.log(`Total amount of negative numbers: ` + negativeNumbers.length);
    console.log(negativeNumbers);
}

getNegativeNumbers(numbers);