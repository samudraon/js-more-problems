//first way
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log(sum);

// second way:
let sum2 = (n * (n + 1)) / 2;
console.log(sum2);