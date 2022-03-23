// 1st way
const result = testScore => testScore >= 7 ? `Approved` : `Rejected`;

console.log(result(7.1));
console.log(result(6.5));

console.log(`--------`);

// 2nd way
const result2 = testScore => {
    return testScore >= 7 ? `Approved` : `Rejected`;
}
console.log(result2(6.1));
console.log(result2(7.5));
