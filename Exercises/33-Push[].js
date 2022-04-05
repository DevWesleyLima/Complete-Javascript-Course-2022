let intNumbers = [1, 2, 3, 4, 5];
let strNumbers = ["A", "B", "C", "D", "E"];
let floatNumbers = [11.1, 12.2, 13.3, 14.4, 15.5];

function concatArraysNumbers(...arrays)
{   
    let concatArrays = [];    

    for(let i = 0; i < arrays.length; i++)
    {
      concatArrays.push(arrays[i])
    }
    console.log(concatArrays);   
}

concatArraysNumbers(intNumbers, strNumbers, floatNumbers);

/* Return:
[
  [ 1, 2, 3, 4, 5 ],
  [ 'A', 'B', 'C', 'D', 'E' ],
  [ 11.1, 12.2, 13.3, 14.4, 15.5 ]
]
*/