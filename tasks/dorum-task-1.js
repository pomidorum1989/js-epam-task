let arrayNumber = [];
let arrayresult = [];

// for (let i = 0; i < 10; i++) {
//     arrayNumber.push(Math.floor(Math.random() * 10));
// }
arrayNumber = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
console.log(`Initial array: ${arrayNumber}\n`);

function myArrayMax(arrayNumber) {
    // const max = Math.max.apply(null, arrayNumber);
    const max = Math.max(...arrayNumber);
    console.log(`Current max value in the array: ${max}`);
    return max;
}
while (arrayNumber.length >= 8) {

    const maxNumber = myArrayMax(arrayNumber);
    const maxNumberIndex = arrayNumber.indexOf(maxNumber);
    console.log(`Index of max number in the array: ${maxNumberIndex}`);

    const removedValue = arrayNumber.splice(maxNumberIndex, 1);
    console.log(`Removed value from the array: ${removedValue}`);

    arrayresult.push(removedValue)
    console.log(`Current initial array state: ${arrayNumber}`);
    console.log(`Current result array state: ${arrayresult}\n`);
}
function multiply(arrayresult) {
    // var sum = 1;
    // for (var i = 0; i < arrayresult.length; i++) {
    //     sum = sum * arrayresult[i];
    // }
    // return sum;
    return arrayresult.reduce((product, num) => product * num, 1);
}
console.log(`Sum of max values: ${multiply(arrayresult)}`);