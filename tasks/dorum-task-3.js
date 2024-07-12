const happiness = {
    boundless: 2,
    unclouded: 1,
    unspeakable: 5,
    crazy: 3,
    uhearthly: 4
};
const values = Object.entries(happiness).sort((a, b) => a[1] - b[1]);
console.log(`Sorted json:`);
values.forEach(([key]) => console.log(key));