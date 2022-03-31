function getLeapYear(year)
{       
    if((year % 4) === 0 && year !== 0)
    {
        if((year % 100) === 0)
        {            
            if((year % 400) === 0)
            {            
                console.log(`True`);
                console.log(`${year} is a Leap Year`);
            }
            else
            {
                console.log(`False`);
                console.log(`${year} is not a Leap Year`);
            }
        }
        else
        {
            console.log(`True`);
            console.log(`${year} is a Leap Year`);
        }
    } 
    else
    {
        console.log(`False`);
        console.log(`${year} is not a Leap Year`);        
    }
}

getLeapYear(0);
console.log(`----`);
getLeapYear(4);
console.log(`----`);
getLeapYear(100);
console.log(`----`);
getLeapYear(400);
console.log(`----`);
getLeapYear(800);
console.log(`----`);
getLeapYear(2022);
console.log(`----`);
getLeapYear(2023);
console.log(`----`);
getLeapYear(2024);
console.log(`----`);
getLeapYear(2025);
console.log(`----`);
getLeapYear(2026);
console.log(`----`);
getLeapYear(2027);
console.log(`----`);
getLeapYear(2028);