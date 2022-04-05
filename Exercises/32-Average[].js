let numbers = [1, 2, 3, 4, 5]

function getNumbersAverage(numbers)
{
    let sumNumbers = 0;

    for(i = 0; i < numbers.length; i++)
    {
        sumNumbers += numbers[i];
    } 

    console.log(`Numbers Average: ` + sumNumbers / numbers.length);
}

getNumbersAverage(numbers);