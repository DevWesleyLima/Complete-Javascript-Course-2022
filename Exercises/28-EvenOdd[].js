let numbers = [1,2,3,4,5,6,7,8,9,10,111,222,333,444]

function getEvenOdd(numbers)
{
    let even = [];
    let odd = [];

    for(i = 0; i < numbers.length; i++)
    {
        if((numbers[i] % 2) == 0)
        {                      
            even.push(numbers[i]);
        }        
        else
        {
            odd.push(numbers[i]);
        }
    } 

    console.log(`******* Even *******`); 
    console.log(`There are: ` + even.length + ` even numbers!`); 
    console.log(even);
    console.log(``);
    console.log(`******* Odd ********`);
    console.log(`There are: ` + odd.length + ` odd numbers!`);     
    console.log(odd);
}

getEvenOdd(numbers);