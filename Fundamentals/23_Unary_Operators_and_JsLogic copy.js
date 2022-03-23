// a value = 1
let a = 1;

// a value = 2 (1 + 1)
a++
console.log(a)
// a value = 1 (2 -1)
--a
console.log(a);

//b value =2
let b = 2;
//++ will add +1 to a then it will compare and print the result 
// just after === the -- will reduce -1 from a
console.log(a++ === --b) // here it will be true cause a value will be 2 same as b

// but here it will not... cause the -- operator will reduce -1 from b
console.log(a === b); // this is why it is false here.

