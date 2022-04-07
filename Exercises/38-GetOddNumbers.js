function getOddNumbers(begin = 0, end = 100)
{   
    if(begin > end)
    {
        [begin, end] = [end, begin]
    }  

    for(i = begin; i <= end; i++)
    {
        if((i % 2 !== 0))
        {
            console.log(i);
        }
    }   
}

getOddNumbers(19, 3);
console.log(``);
console.log(`**`);
console.log(``);
getOddNumbers(3, 19);