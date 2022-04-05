function checkAnnualHeight(height1, annualHeightRate1, childAge1, height2, annualHeightRate2, childAge2, getThisYear)
{     
    let annualHeight1 = (height1 * (1 + annualHeightRate1/100));
    let annualHeight2 = (height2 * (1 + annualHeightRate2/100));

    if(annualHeight1 > annualHeight2)
    {
        console.log(`*** Inserted Data ***`);
        console.log(`Child 1 has ${height1.toFixed(2)}cm tall`);
        console.log(`Child 2 has ${height2.toFixed(2)}cm tall`);
        console.log(``);        
        
        while(annualHeight1 >= annualHeight2)
        {
            if(childAge2 < 20)
            {
            annualHeight1 = (annualHeight1 * (1 + annualHeightRate1/100));
            annualHeight2 = (annualHeight2 * (1 + annualHeightRate2/100));
            getThisYear++;
            childAge1++;
            childAge2++;       
            }
            else
            {
                break;
            }
        }       
        
        if(annualHeight1 >= annualHeight2)
        {
            console.log(`*** ${getThisYear} Check ***`);
            console.log(`Child 1 will be ${annualHeight1.toFixed(2)}cm tall by the end of ${getThisYear}!!! `);
            console.log(`Child 2 will be ${annualHeight2.toFixed(2)}cm tall by the end of ${getThisYear}!!! `);
            console.log(``);

            console.log(`*** Warning ***`);
            console.log(`Humans only grow up to 20 years old!`);
            console.log(`Child 2 has ${childAge2}yo and he/she will no longer be able to grow!!!`);            
            console.log(`For this reason, this analysis is being finished in ${getThisYear}!`);
            console.log(``);

            console.log(`*** Unfotunately ***`);
            console.log(`Child 2 was not able to exceed the height of Child 1!`);
        }
        else
        {
            console.log(`*** ${getThisYear} Check ***`);
            console.log(`Child 1 will be ${annualHeight1.toFixed(2)}cm tall by the end of ${getThisYear}!!! `);
            console.log(`Child 2 will be ${annualHeight2.toFixed(2)}cm tall by the end of ${getThisYear}!!! `);
            console.log(``);

            console.log(`*** Congratulations!!! ***`);
            console.log(`Child 2 was able to exceed the height of Child 1 in ${getThisYear}!`);
        }
    }
    
    else if(annualHeight2 > annualHeight1)
    {
        console.log(`*** Inserted Data ***`);
        console.log(`Child 1 has ${height1.toFixed(2)}cm tall`);
        console.log(`Child 2 has ${height2.toFixed(2)}cm tall`);
        console.log(``);        
        
        while(annualHeight2 >= annualHeight1)
        {
            if(childAge1 < 20)
            {
            annualHeight1 = (annualHeight1 * (1 + annualHeightRate1/100));
            annualHeight2 = (annualHeight2 * (1 + annualHeightRate2/100));
            getThisYear++;
            childAge1++;
            childAge2++;       
            }
            else
            {
                break;
            }
        }       
        
        if(annualHeight2 >= annualHeight1)
        {
            console.log(`*** ${getThisYear} Check ***`);
            console.log(`Child 1 will be ${annualHeight1.toFixed(2)}cm tall by the end of ${getThisYear}!!! `);
            console.log(`Child 2 will be ${annualHeight2.toFixed(2)}cm tall by the end of ${getThisYear}!!! `);
            console.log(``);

            console.log(`*** Warning ***`);
            console.log(`Humans only grow up to 20 years old!`);
            console.log(`Child 1 has ${childAge1}yo and he/she will no longer be able to grow!!!`);            
            console.log(`For this reason, this analysis is being finished in ${getThisYear}!`);
            console.log(``);

            console.log(`*** Unfotunately ***`);
            console.log(`Child 1 was not able to exceed the height of Child 2!`);
        }
        else
        {
            console.log(`*** ${getThisYear} Check ***`);
            console.log(`Child 1 will be ${annualHeight1.toFixed(2)}cm tall by the end of ${getThisYear}!!! `);
            console.log(`Child 2 will be ${annualHeight2.toFixed(2)}cm tall by the end of ${getThisYear}!!! `);
            console.log(``);

            console.log(`*** Congratulations!!! ***`);
            console.log(`Child 1 was able to exceed the height of Child 2 in ${getThisYear}!`);
        }
    }

    else
    {   
        console.log(`Both Children have the same height and annual height rate...`)
        console.log(`They will always be the same height at the end of the following years, no matter what year it is!!!`);
    }
}

checkAnnualHeight(140,10,18,145,9,18,2022);
console.log(``);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
checkAnnualHeight(145,9,18,140,10,18,2022);
console.log(``);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
checkAnnualHeight(140,10,17,145,9,17,2022);
console.log(``);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
checkAnnualHeight(145,9,17,140,10,17,2022);
console.log(``);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
checkAnnualHeight(145,9,18,140,10,19,2022);
console.log(``);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
checkAnnualHeight(140,10,19,145,9,18,2022);
