function getBhaskara(a, b, c)
{    
    let delta = Math.pow(b,2) - (4 * a * c);
    
    if (delta < 0)
    {           
        return console.log(`Delta is negative! (${delta.toFixed(2)})`);        
    }
    let positiveX = ((-b + Math.sqrt(delta)) / 2 * a);
    let negativeX = ((-b - Math.sqrt(delta)) / 2 * a);
    console.log(`X: [ ${positiveX.toFixed(2)}, ${negativeX.toFixed(2)} ]`);  
}

console.log(`First Example:`);
getBhaskara(1, 3, 2);

console.log(`----------------`);

console.log(`Second Example:`);
getBhaskara(3, 1, 2);