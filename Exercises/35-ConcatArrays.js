let stackArray = [0, 1, 2, 3, 4];
let additionalArray = [5, 6, 7, 8, 9];

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

concatArraysNumbers(stackArray, additionalArray);
