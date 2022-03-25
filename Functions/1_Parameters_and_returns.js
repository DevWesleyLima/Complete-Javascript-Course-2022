//GetArea Function
function area(width, height){
    const area = width * height;
    if (area > 20) 
    {
        console.log(`Area value is higher than allowed : ${area}m2.`)
    }
    else 
    {
        return area;
    }
}

console.log(area(2, 2)); // result 4 - Okay!
console.log(area(2)); // result NaN, only one value was informed!
console.log(area()); // result NaN, no values were informed!
console.log(area(2, 3, 17, 22, 44)); // result 6 (2 * 3), JS will ignore the other numbers!
console.log(area(5, 5)); // result 25 in a STRING. It will also show up undefined because of that!
console.log(area(6, 6)); // result 36 in a STRING. It will also show up undefined because of that! 