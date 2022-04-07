function changeArrayValues(array1, array2)
{
    console.log(`Array 1: ` + array1);
    console.log(`Array 2: ` + array2);
    console.log(`*****`);

    if(array1.length === array2.length)
    {
        [array1, array2] = [array2, array1]

        console.log(`New Array 1: ` + array1);
        console.log(`New Array 2: ` + array2);
    }
    else
    {
        console.log(`The arrays have different length!`);
    }
}

let array1 = [1,2,3];
let array2 = [4,5,6];

changeArrayValues(array2, array1);