function radianToDegree(radian) {
    const pi = 3.14159265359;
    const degree = (radian*(180/pi)).toFixed(2);
    return degree;
}
const result = radianToDegree(10);
console.log(result);