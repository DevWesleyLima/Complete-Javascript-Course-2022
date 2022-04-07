function getSimpleInterest(capital, rate, time)
{    
    let amount = capital + ((capital * (rate / 100)) * time);
    console.log(`Amount (Simple Interest): R$ ${amount.toFixed(2)}`);   
}

getSimpleInterest(100, 10, 2);

console.log(``);

function getCompoundInterest(capital, rate, time)
{    
    let amount = (capital * Math.pow((1 + (rate / 100)), time));
    console.log(`Amount (Compound Interest): R$ ${amount.toFixed(2)}`);   
}

getCompoundInterest(100, 10, 2);