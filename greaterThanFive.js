function greaterThanFive(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        // console.log(element);
        if (element > 5) {
            count++;
        }
    }
    return count;
}

const numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
const greater = greaterThanFive(numbers);
console.log(greater);