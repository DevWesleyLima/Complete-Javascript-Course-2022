/*
* A lexical scope in JavaScript means
*  that a variable defined outside a function 
*  can be accessible inside another function 
*  defined after the variable declaration. 
* But the opposite is not true;
*  the variables defined inside a function
*  will not be accessible outside that function.
*/

//Lexical Example
const value = 'Global';

function myFunction()
{
    console.log(value);
}

function exec()
{
    const value = 'Local';
    myFunction();
}
exec(); //Lexial - Result: Global