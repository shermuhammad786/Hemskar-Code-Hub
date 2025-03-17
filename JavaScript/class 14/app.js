
function makeInvisible() {
    var car = document.getElementById("car");

    car.className = "hidden";
}

function getValue(valueOfThis) {
    console.log('valueOfThis: ', valueOfThis.value.length);
    if (valueOfThis.value.length > 11) {
        alert("Please enter a valid number")
    }
}


// var num = 5;
// num += 5
// num -= 2;
// console.log('num: ', num);


// var name = "Shahbaz";
// name = name + " Ali"
// console.log('name: ', name);

// var home = document.getElementById("home");
// home.className += " home"


var navItems = document.getElementsByTagName("li");
console.log('navItems: ', navItems[3].innerHTML);
