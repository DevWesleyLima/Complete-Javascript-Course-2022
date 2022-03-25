// 1st Example: Default Parameters 
function sum(a, b, c)
{
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

//A = 1 | B = 1 | C = 1
console.log(sum()); // result 3

//A = 3 | B = 1 | C = 1
console.log(sum(3)); // result 5

//A = 1 | B = 2 | C = 3
console.log(sum(1, 2, 3)); // result 6

// 0 is considered as `false`, so, for this reason JS will return the deafult values:
// A = 1 | B = 1 | C = 1
console.log(sum(0, 0, 0)); // result 3

// Default A = 1 | B = 2 | Default C = 1
console.log(sum(0, 2, 0)); // result 4

// Default A = 1 | Default B = 1 | C = 2
console.log(sum(0, 0, 2)); // result 4


