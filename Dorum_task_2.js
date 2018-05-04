var startday = new Date();
a = startday.setHours(0,0,0);
console.log(a);
var now = (new Date()).getTime();
console.log(now);
let result = (now - a)/1000;
console.log (result);