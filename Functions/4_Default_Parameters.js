// 2nd Example: Default Parameters 
function sum(a, b, c)
{
    a = a !== undefined ? a : 1; 
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;
    return a + b + c;
}

//A = 1 | B = 1 | C = 1
console.log(sum()); // result 3

//A = 3 | B = 1 | C = 1
console.log(sum(3)); // result 5

//A = 1 | B = 2 | C = 3
console.log(sum(1, 2, 3)); // result 6

// A = 0 | B = 0 | C = 0
console.log(sum(0, 0, 0)); // result 0

// Default A = 0 | B = 2 | Default C = 0
console.log(sum(0, 2, 0)); // result 2

// Default A = 0 | Default B = 0 | C = 2
console.log(sum(0, 0, 2)); // result 2
