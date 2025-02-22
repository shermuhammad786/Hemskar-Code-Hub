


// var doomsday = new Date("June 30, 2008");
// var myYears = doomsday.getFullYear();
// var myMonths = doomsday.getMonth();
// var myDay = doomsday.getDate();
// // console.log('myDay: ', myDay);

// var currentDate = new Date();
// var currentYear = currentDate.getFullYear();
// var currentMonth = currentDate.getMonth();
// var currentDay = currentDate.getDate();

// var msToday = currentDate.getTime();
// console.log('msToday: ', msToday);
// // 23583458098

// var msDoomsday = doomsday.getTime();
// console.log('msDoomsday: ', msDoomsday);
// // 234098494

// var msDiff = msToday - msDoomsday;
// console.log('msDiff: ', msDiff);


// var dDiff = msDiff / (1000 * 60 * 60 * 24 * 31 * 12);
// console.log('dDiff: ', Math.floor(dDiff));
// console.log('currentDay: ', currentDay);

// console.log("my current age ==>>", currentYear - myYears, myMonths - currentMonth, myDay - currentDay)

// console.log('doomsday: ', doomsday);
// console.log('currentDate: ', currentDate);

// var userAge = prompt("Enter Your Age", 2008);
// var setAge = prompt("Enter your imagine Date", 2025);

// var currentDate = new Date();
// var getUserAge = currentDate.setFullYear(userAge)
// console.log('currentDate: ', currentDate);
// var getUserYear = getUserAge / (1000 * 60 * 60 * 24 * 31 * 12)
// var setUserDate = currentDate.setFullYear(setAge);



// console.log('getUserYear: ', getUserYear);
// console.log('setUserDate: ', setUserDate);
// console.log('getUserAge: ', getUserAge);

// var userCurrentAge = setUserDate.getFullYear();
// console.log('userCurrentAge: ', userCurrentAge);



// var userAge = +prompt("Enter Your Age", 2008);
// var setAge = +prompt("Enter your imagine Date", 2025);


// var currentDate = new Date();
// currentDate.setFullYear(setAge);

// var setUserAge = new Date();
// setUserAge.setFullYear(userAge);



// console.log('your age is : ', currentDate.getFullYear() - setUserAge.getFullYear(), currentDate.getDate());
// console.log('your age is : ', setAge - userAge);



// dry  don't repeat yourself


// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// alert("time: " + theHr + ":" + theMin);

// function getTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     alert("time: " + theHr + ":" + theMin);
// }

// getTime()
// getTime()
// getTime()
// getTime()
// getTime()
// getTime()
// getTime()

// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// alert("time: " + theHr + ":" + theMin);

// robot("apple");
// robot("banana");
// var username = prompt("enter your username")
// var email = prompt("enter your email")
// var password = prompt("enter your password")

function robot(fruit) {
    console.log("mujhe aik glass juice chahye");
    console.log("robot: btao konsa juice chahye");
    console.log("me: mujhe " + fruit + " juice chahye");
    console.log("robot gaya juice machine ke pass aur sabse phele machine ko chalya");
    console.log("robot ne juice bana diya");
    console.log("ye le sir apka aik " + fruit + " ka juice");
}

function signup(username) {
    alert(username + " Thanks for signing up")
    alert("signup successfull now you can login")
}
signup("Sher Muhammad")
robot("mango");