let happiness =
    {
        boundless: 2,
        unclouded: 1,
        unspeakable: 5,
        crazy: 3,
        uhearthly: 4
    }
let values = Object.entries(happiness)
values.sort(function (a, b) {
    return a[1] - b[1];
});

for (i = 0; i < values.length; i++){
    console.log(values[i][0])
}