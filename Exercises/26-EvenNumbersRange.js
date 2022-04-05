function getEvenNumbers(firstNumber, secondNumber) 
{
    console.log(`Even Numbers:`);

    while(firstNumber <= secondNumber)
    {
        if((firstNumber % 2) === 0)
        {
            console.log(firstNumber); 
        }
        firstNumber++
    }   
}
 
getEvenNumbers(1,100);