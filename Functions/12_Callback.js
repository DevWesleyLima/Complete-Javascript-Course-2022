const exameGrade = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//Without Callback example
let failedGrade = [];
for (let i in exameGrade)
{
    if (exameGrade[i] < 7)
    {
        failedGrade.push(exameGrade[i]);
    }
}
console.log(failedGrade);
console.log(``);

//Callback example
let failedGrade1 = exameGrade.filter(function(exameGrade)
{
    return exameGrade < 7 ;  
});

console.log(failedGrade1);
console.log(``);

//Callback example 2
let failedGrade2 = exameGrade.filter(exameGrade => exameGrade < 7);
console.log(failedGrade2);
console.log(``);

//Callback example 3
let failedGradeFunction = exameGrade => exameGrade < 7;
let failedGrade3 = exameGrade.filter(failedGradeFunction);
console.log(failedGrade3);
console.log(``);

