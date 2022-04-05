function checkStrings (string1, string2)
{   
    let checkString1 = string1;
    let checkString2 = "";

    for(let i = 0; i < string1.length; i++)
    {
        let charString1 = string1.charAt(i).toLowerCase()       
        
        for(let j = 0; j < string2.length; j++)
        {
            let charString2 = string2.charAt(j).toLowerCase()            

            if(charString2 === charString1)
            {   
                checkString2 += charString2;                
            }
        }
    }
    
    if(checkString1 === checkString2)
    {
        console.log(checkString1);
        console.log(checkString2);
        console.log(`True`);
    }
    else
    {
        console.log(checkString1);
        console.log(checkString2);
        console.log(`False`);
    }
}

checkStrings('abc','CbA');