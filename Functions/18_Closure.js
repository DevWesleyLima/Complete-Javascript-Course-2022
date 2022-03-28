/*
* In JavaScript, a closure is a function 
*  that references variables in the outer
*  scope from its inner scope. 
* The closure preserves the outer scope
*  inside its inner scope.
*/

//Closure Example
const x = 'A';

function outside()
{
    const x = 'B';
    function inside()
    {
        return x;
    }
    return inside;
}
const myFunction = outside();
console.log(myFunction()); 