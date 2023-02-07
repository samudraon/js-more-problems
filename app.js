var human = {
    name: "rahim",
    age: 25,
    friends: ['hero', 'alom', 'robin', 'manna'],
    country: 'Bangladesh',
    father: {
        name: 'Kuddos',
    },
}

// console.log(human.friends[2]);

for (var i = 0; i < human.friends.length; i++) {
    var element = human.friends[i];
    // console.log(element);
}

// addition function
function sum(num1, num2) {
    var result = num1 + num2;
    return result;
}

function minus(num1, num2) {
    var result = num1 - num2;
    return result;
}

var totalMinus = minus(60, 10);

var totalSum = sum(10, 40);

const total = totalSum + totalMinus;
// console.log(total);

function writeSorry(name) {
    for (var i = 0; i < 10; i++) {
        console.log('sorry ' + name);
    }
}

// writeSorry('Sam');

function product(rice, lentil, oil) {
    var sum = rice + lentil + oil;
    return sum;
}

var totalPrice = product(60, 120, 100);
// console.log(totalPrice);


function kmToMiles(km) {
    var result = km * 0.62;
    return result;
}

var miles = kmToMiles(4);
// console.log(miles);


function workout(workoutName) {
    var chestWorkout = ['cable cross', 'pac dec fly', 'chest press'];
    var bicepWorkout = ['bicep', 'lat pull down']

    if (workoutName == 'chest') {
        return chestWorkout;
    }
    else if (workoutName == 'bicep') {
        return bicepWorkout;
    }
    else {
        return "don't know";
    }
}

var workoutPlan = workout();
// console.log(workoutPlan);



var myDays = 25;
var first1To10Days = 500;
var second11To20Days = 300;
var third21Days = 100;

if (myDays <= 10) {
    var totalCost = myDays * 500;
}
else if (myDays <= 20 && myDays > 10) {
    var first1To10DaysCost = 10 * 500;
    var remainingDays = myDays - 10;
    var totalDaysCost = remainingDays * 300;
    var total11DaysTo20DaysCost = first1To10DaysCost + totalDaysCost;
}
else {
    var first1To10Days = 500 * 10;
    var second11To20Days = 300 * 10;
    var remainingDays = myDays - 20;
    var thirdInfinityDays = remainingDays * 100;
    var totalAbove20DaysCost = first1To10Days + second11To20Days + third21Days;
    // console.log(totalAbove20DaysCost);
}



var marks = 100;

function marks() {

}

function convertToF(celsius) {
    var fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}

var far = convertToF(22);
// console.log(far, 'F');


function convertToC(fahrenheit) {
    var celsius = (fahrenheit - 32) / 1.8;
    return celsius
}

var cel = convertToC(71.6);
console.log(cel);