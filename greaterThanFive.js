function greaterThanFive(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        // console.log(element);
        if (element > 5) {
            console.log('YES')
        }
        else {
            console.log('NO')
        }
    }
}

const numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
const greater = greaterThanFive(numbers);