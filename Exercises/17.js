function getJobPromotion(salary, promotionPlan)
{
    switch(promotionPlan.charAt(0).toLowerCase())
    {
        case `a`:
            console.log(
                `Congratulations!!! Your new Salary is: £` 
                + (salary + (salary * (10/100))).toFixed(2));
            break;
        case `b`:
            console.log(
                `Congratulations!!! Your new Salary is: £` 
                + (salary + (salary * (15/100))).toFixed(2));
            break;
        case `c`:
            console.log(
                `Congratulations!!! Your new Salary is: £` 
                + (salary + (salary * (20/100))).toFixed(2));
            break;
        default:
            console.log(`Error: Invalid Promotion Plan!`);
            break;
    }
}

getJobPromotion(100,`a`);
getJobPromotion(100,`B`);
getJobPromotion(100,`c`);
getJobPromotion(100,`D`);