/*
* Only "Declarations" can be hoisted
*/

//Function Declaration
console.log(sum(3,4)); //Result: 7 (Hoist Works)
function sum(x,y) 
{
    return x + y;
}

//Function Expression 
console.log(sub(3,4)); //Result: Error (Hoist Doesn't Work)
const sub = function(x,y)
{
    return x - y;
} 
console.log(sub(3,4)); //Result: -1


//Named Function Expression 
console.log(mul(3,4)); //Result: Error (Hoist Doesn't Work)
const mul = function mul(x,y)
{
    return x * y;
}
console.log(mul(3,4)); //Result: 12