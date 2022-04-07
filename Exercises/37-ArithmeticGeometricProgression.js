/*
* firstTerm: a1
* period: n 
* difference: d
*/
function aP(a1, n, d)
{
    let sum = 0;

    for(i = 0; i < n; i++)
    {
        sum += a1 + (d * i);
        console.log(`Period[${i+1}]: ` + (a1 + (d * i)));
    }

    console.log(`***************************`);
    console.log(`Arithmetic Progression: ` + sum);
    console.log(`***************************`);
}

aP(2,10,10);

console.log(``);

/*
* firstTerm: a1
* period: n 
* difference: r
*/
function gP(a1, n, d)
{   
    let sum = 0;

    for(i = 0; i < n; i++)
    {        
        sum += a1 * (Math.pow( d, i));
        console.log(`Period[${i+1}]: ` + (a1 * (Math.pow( d, i))));
    }   

    console.log(`*****************************`);
    console.log(`Geometric Progression: ` + sum);
    console.log(`*****************************`);
}

gP(5,10,3);