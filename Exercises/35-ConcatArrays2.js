let stackArray = [0, 1, 2, 3, 4];
let additionalArray1 = [5, 6, 7, 8, 9];
let additionalArray2 = [10, 11, 12, 13, 14];
let additionalArray3 = [15, 16, 17, 18, 19];

function concatArraysNumbers(...arrays)
{   
    let concatArrays = []; 

    for(let i = 0; i < arrays.length; i++)
    {
        concatArrays = concatArrays.concat(arrays[i])
        
        if(i === 0)
        {
            console.log(`Stack Array[${i}]: ` + arrays[i]);
        }
        else
        {
            console.log(`Additional Array[${i}]: ` + arrays[i]);
        }
    }

    console.log(``);
    console.log(`*** Results ***`);
    console.log(`Unified Array: ` + concatArrays);   
}

concatArraysNumbers(stackArray, additionalArray1, additionalArray2, additionalArray3);
