function getWeekDays(day)
{
    switch(day)
    {
        case 1: 
            console.log(`Sunday`);
            console.log(`Weekend`);
            break;
        case 2:
            console.log(`Monday`);
            console.log(`Work Day`);
            break;
        case 3: 
            console.log(`Tuesday`);
            console.log(`Work Day`);
            break;
        case 4:
            console.log(`Wednesday`);
            console.log(`Work Day`);
            break;
        case 5: 
            console.log(`Thursday`);
            console.log(`Work Day`);
            break;
        case 6:
            console.log(`Friday`);
            console.log(`Work Day`);
            break;
        case 7: 
            console.log(`Saturday`);
            console.log(`Weekend`);
            break;
        default:
            console.log(`Error: Invalid Day!`);
            console.log(`There is not other day in the week!`);
            break;
    }
}

getWeekDays(1);
console.log(`---`);
getWeekDays(2);
console.log(`---`);
getWeekDays(3);
console.log(`---`);
getWeekDays(4);
console.log(`---`);
getWeekDays(5);
console.log(`---`);
getWeekDays(6);
console.log(`---`);
getWeekDays(7);
console.log(`---`);
getWeekDays(8);
console.log(`---`);
getWeekDays(9);