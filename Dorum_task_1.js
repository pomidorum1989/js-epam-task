let arrayNumber = [];
let arrayresult = [];

for (let i = 0; i < 10; i++) {
    arrayNumber.push(Math.floor(Math.random() * 10));
}

let c = arrayNumber
console.log(c);

function myArrayMax(arrayNumber) {

    return Math.max.apply(null, arrayNumber);
}
while (8 <= arrayNumber.length) {

    b = myArrayMax(arrayNumber);
    console.log(b);

    d = arrayNumber.indexOf(b);
    console.log (d);
    
    e = arrayNumber.splice(d,1);
    console.log (arrayNumber); 

    arrayresult.push(e)
    console.log(arrayresult)
} 
function multiply (arrayresult) {
    var sum=1;
    for (var i=0; i<arrayresult.length; i++) {
        sum = sum * arrayresult[i];
    } 
    return sum;
}
console.log( multiply (arrayresult))