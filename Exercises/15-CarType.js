function getCarType(car)
{
    switch(car.toLowerCase())
    {
        case `hatchback`:
            console.log(`Purchase order successfully processed!!!`);
            break;
        case `sedan`:
            console.log(`Are you sure you want to buy this type of vehicle?`);            
            break;
        case `motorcycle`:
            console.log(`Are you sure you want to buy this type of vehicle?`);  
            break;
        case `pickup`:
            console.log(`Are you sure you want to buy this type of vehicle?`);  
            break;
        default:
            console.log(`Sorry, we don't have this type of vehicle here.`);
            console.log(`Can I help you with something else?`);
            break;
    }
}

getCarType(`hatCHBack`);
getCarType(`seDan`);
getCarType(`motORCycle`);
getCarType(`picKup`);
getCarType(`tRuCk`);
