function checkStrings(string1, string2)
{   
    let checkString1 = string1.toLowerCase();

    for(let i = 0; i < string1.length; i++)
    {
        let charString1 = string1.charAt(i).toLowerCase() 
        
        for(let j = 0; j < string2.length; j++)
        {
            let charString2 = string2.charAt(j).toLowerCase()            

            if(charString2 === charString1)
            {   
                checkString1 = checkString1.replace(charString2, '')
            }
        }
    }
    
    console.log(`Results: `);

    if(checkString1 === ``)
    {
        console.log(`True`);
    }
    else
    {
        console.log(`False`);
    }
}

checkStrings('AcB','AbAbAbAbdadkclffjbslAkjbvlkCAbC');