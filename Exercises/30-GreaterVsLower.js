let numbers = [10,2,3,4,5,10,11,12,0,14,15,20,25,44,66,88,105,1,805,-1];

function checkGLNumbers(numbers)
{
    let greater = numbers[0];
    let lower = numbers[0];

    for(i = 0; i < numbers.length; i++)
    {
        if(numbers[i] > greater)
        {                      
           greater = numbers[i];
        }        
        if(numbers[i] < lower)
        {                      
           lower = numbers[i];
        }     
    } 
    console.log(`Greater Number: ` + greater);
    console.log(`Lower Number: ` + lower);
}

checkGLNumbers(numbers);