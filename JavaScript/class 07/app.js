





// var number = 7.58698997;
// var roundNumber = Math.floor(number)
// var roundNumber2 = Math.ceil(number)
// console.log('roundNumber: ', roundNumber);
// console.log('roundNumber2: ', roundNumber2);



// var ceilNumber = 3.000000000001;  // ceil chhat
// var floorNumber = 3.697095;
// console.log("ceil Number", Math.ceil(ceilNumber))
// console.log("floor Number", Math.floor(floorNumber))


// var number = Math.random();
// console.log('number: ', number);
// console.log('number: multiply by 2 ', number * 2);
// var toss = Math.floor(number * 2);
// console.log('toss: ', toss);
// if (toss === 0) {
//     alert("You win the toss")
// } else {
//     alert("You loss")
// }



// var age = prompt("Enter Your age");
// var increaseAge = parseInt(age) + 1;
// console.log('increaseAge: ', increaseAge);

// var number = "1.999";
// console.log('number: ', number);
// var convertToString = parseFloat(number);
// console.log('convertToString: ', convertToString);


// var number = "3848957";
// var convert = Number(number);
// console.log('convert: ', convert);

// var number = 123556;
// var covert = number.toString();
// console.log('number: ', typeof number);
// console.log('covert: ', typeof covert);



// var number = Math.random() * 4;
// var fixedNumber = number.toFixed()
// console.log('fixedNumber: ', fixedNumber);

// var number = "2025"; /// 2026;

// var addOne = number - 1;
// console.log('addOne: ', addOne);

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var date = new Date();
console.log('date: ', date);
var day = date.getDay();
var time = date.getTime();
var munites = date.getMinutes();
var hours = date.getHours();
var seconds = date.getSeconds();


console.log('seconds: ', seconds);

console.log('hours: ', hours);

console.log('munites: ', munites);

console.log('time: ', time);

console.log('day: ', dayNames[day]);




