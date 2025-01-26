// alert(123 + 123);

// Data Types

// string   " "
// number    123
// boolean   true ,false
// object    {}
// array     []



// var num = 4;
// var num2 = 5;
// var num3 = 7;

// var result = num + num2 * num3;
//         //   4   +  5   *   7  39;

// alert(result)


// var num = 4;
// var num2 = 5;
// var num3 = 7;

// var result = (num + num2) * num3;
// alert(result)

// var   let   const...; 


// var num = 10;

// var result = num-- + ++num - --num + --num;
// //            10   +   10  -    9  +   8;
// //            10   +       1      +  8 = 19

// alert(result)


// var input = prompt("Enter Your Name", "Hemskar");
// if(input === "Hemskar"){
//     alert("Welcome " + input)
// }
// alert(input);


// var num = prompt("Enter Your Marks");
// if (num === 9) {
//     alert("your grade is A+");
// }
// if (num == 9) {
//     alert("check without datatype");
// }
// if (num == 10) {
//     alert("Your are high then the number");
// }
// alert("The number is " + num)

// true and true === true  ==  &&
// true and false == false == &&
// false and false == false  == &&

// true or true == true    ||
// true or false == true   ||
// false or false == false ||


// if (true && true) { // true
//     alert("condition is true");
// }
// if (false && true) { // fasle
//     alert("condition is false")
// }

// if (true || true) { // true
//     alert("one is true and other is also true");
// }
// if (false || true) {  // true
//     alert("one condition is false and other is true");
// }
// if (false || false) { // false
//     alert("one is false and other is false");
// }

// if (true || false && true) { // true
//     //  true && true == true

// }

// if (true && false || true) {
//     //   false || true == true

// }
// if (false || true || false && false || true) {
//     //    true || false && false || true
//     //          true   && false || true
//     //                  false   || true
//     //                          true

// alert("condition is true")
// }


var percent = prompt("Enter Your Percentage");
if (percent <= 100 && percent >= 80) {
//  true && false === false
    alert("your grade is A+");
}
else if (percent < 80 && percent >= 70) {
    alert("Your grade is A");
} else if (percent < 70 && percent >= 60) {
    alert("your grade is B+");
}else{
    alert("Your grade is F")
}

