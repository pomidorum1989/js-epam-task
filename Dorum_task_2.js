function time(result) {
    startday = new Date();
    a = startday.setHours(0,0,0);
    now = (new Date()).getTime();
    return result = (now - a)/1000;   
}
console.log(time(result))
