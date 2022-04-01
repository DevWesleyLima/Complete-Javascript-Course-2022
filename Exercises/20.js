function getMoneyChange(money)
{  
    //Simplifying the calculations
    let remainder100 = money % 100;
    let remainder50 = remainder100 % 50;
    let remainder10 = remainder50 % 10;
    let remainder5 = remainder10 % 5;
    let remainder1 = remainder5 % 1;

    //Calculating the moneyChange
    let moneyChange100 = ((money / 100) - (remainder100 / 100)); 
    let moneyChange50 = ((remainder100 - remainder50) / 50); 
    let moneyChange10 = ((remainder50 - remainder10) / 10);
    let moneyChange5 = ((remainder10 - remainder5) / 5);
    let moneyChange1 = ((remainder5 - remainder1) / 1);    

    //Returns
    if(moneyChange100 !== 0 && moneyChange100 > 0)
    {
        console.log(`Banknote(s) R$ 100,00: ` + moneyChange100.toFixed(0) + ` note(s)`);
    }
    if(moneyChange50 !== 0 && moneyChange50 > 0)
    {
        console.log(`Banknote(s) R$ 50,00: ` + moneyChange50.toFixed(0) + ` note(s)`);
    }
    if(moneyChange10 !== 0 && moneyChange10 > 0)
    {
        console.log(`Banknote(s) R$ 10,00: ` + moneyChange10.toFixed(0) + ` note(s)`);
    }
    if(moneyChange5 !== 0 && moneyChange5 > 0)
    {
        console.log(`Banknote(s) R$ 5,00: ` + moneyChange5.toFixed(0) + ` note(s)`);
    }
    if(moneyChange1 !== 0 && moneyChange1 > 0)
    {
        console.log(`Banknote(s) R$ 1,00: ` + moneyChange1.toFixed(0) + ` note(s)`);
    }
    if(money === 0)
    {
        console.log(`Error: No money has been found!`);
    }
    if(money < 0)
    {
        console.log(`Error: Invalid number!`);
    }    
}

getMoneyChange(269);