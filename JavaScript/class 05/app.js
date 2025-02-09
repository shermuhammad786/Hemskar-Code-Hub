




// if (city === cities[0]) {
//     alert(city + " is this cleanest city");
// }
// else if (city === cities[1]) {
//     alert(city + " is this cleanest city");
// }
// else if (city === cities[2]) {
//     alert(city + " is this cleanest city");
// }
// var matchCity = "no"
// var city = prompt("Enter your city name");
// var cities = ["hyd", "karachi", "dadu"];


// for (var i = 0; i < cities.length; i++) {
//     if (city === cities[i]) {
//         matchCity = "yes";
//         break;
//     }
//     else {
//         alert(city + " city not found")
//     }

// }
// if (matchCity === "yes") {
//     alert(city + " is the cleanest city")
// }


// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];

// for (var i = 0; i < firstNames.length; i++) {
//     //    4              5
//     for (var j = 0; j < lastNames.length; j++) {
//         //   4               4
//         fullNames.push(firstNames[i] + lastNames[j]);
//     }
// }

// console.log(fullNames, " ===>>>> full names")

// var city = prompt("Enter your city"); /// Karachi
// var firstChar;
// var SecondChar;
// var cities = ["hyd", "karachi", "dadu"];
// var matchCity = false

// for (var i = 0; i < cities.length; i++) {
//     if (city.toLowerCase() === cities[i]) {
//         matchCity = true
//     }
// }
// if (matchCity === true) {
//     firstChar = city.slice(0, 1)
//     SecondChar = city.slice(1)
//     document.write(firstChar.toUpperCase() + SecondChar.toLowerCase())
// }


var months = ["January", "Febuary", "March", "April"];

for (var i = 0; i < months.length; i++) {
    if (months[i].length > 3) {
        document.write(months[i].slice(0, 3) + " ");
    }
}