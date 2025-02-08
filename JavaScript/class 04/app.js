



// var array = [1, 2, 3, 4, 5];
// var newArr = array.pop();
// var arr = array.push(6)
// console.log('array: ', array);
// console.log('newArr: ', newArr);
// console.log('arr: ', arr);



// var pets = ["dog", "cat", "fly", "bug", "ox"];

// // pets.splice(2, 1, "pig", "duck", "emu")
// pets.splice(3, 0, "pug", "duck", "emu")
// console.log('pets: ', pets);


// var pets = ["dog", "cat", "fly", "bug", "ox", "pug", "duck", "emu"];
// var newPets = pets.slice(2, 7)
// console.log('newPets: ', newPets);


// shallow copy
// var petsSplice = ["dog", "cat", "fly", "bug", "ox"];

// var newPetsSlice = petsSplice.splice(3, 1);

// console.log('pets with splice method ', petsSplice);

// console.log('newPetsSlice: ', newPetsSlice);


// deep copy
// var petsSlice = ["dog", "cat", "fly", "bug", "ox"];

// var newPetsSlice = petsSlice.slice(1, 4);

// console.log('petsSlice: ', petsSlice);

// console.log('newPetsSlice: ', newPetsSlice);




// for loop
// var i;
// for (i = 1; i <= 10; i++) {
//     // 11    true     11
//     console.log("Hemskar Code Hub");
// }




// console.log("Hemskar");
// console.log("Hemskar");
// console.log("Hemskar");
// console.log("Hemskar");
// console.log("Hemskar");
// console.log("Hemskar");
// console.log("Hemskar");
// console.log("Hemskar");
// console.log("Hemskar");
// console.log("Hemskar");
// console.log("Hemskar");





var numArray = ["dog", "cat", "fly", "bug", "ox"];
console.log('numArray: ', numArray);
// console.log(numArray[0] + 1) // 2
// console.log(numArray[1] + 1) //3
// console.log(numArray[2] + 1) //4
// console.log(numArray[3] + 1) //5
// console.log(numArray[4]) //9

for (var i = 0; i < numArray.length; i++) {
    //  1
    console.log(numArray[i] + 1) // dog1
}