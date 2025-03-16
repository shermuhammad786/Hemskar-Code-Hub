




// function checkUser() {
//     console.log("chal raha hai ...")
//     var username = document.getElementById("username");
//     var existUser = document.getElementById("eixtUser");

//     if (username.value === "Zeeshan") {
//         existUser.innerHTML = username.value + " is already exists"
//     } else {
//         existUser.innerHTML = username.value + " is a valid username"
//     }
// }



var paragraph = document.getElementById("para");
console.log('paragraph: ', paragraph);
var seemore = document.getElementById("seemore");
var seeless = document.getElementById("seeless");
seeless.style.display = "none"
var completePara = paragraph.innerHTML;
var shortPara = paragraph.innerHTML.slice(0, 100);
paragraph.innerHTML = shortPara;
function seeMore() {
    paragraph.innerHTML = completePara;
    seemore.style.display = "none"
    seeless.style.display = "block"
    // seemore.innerHTML = "see less"
    // paragraph.innerHTML = completePara;
    // if (paragraph.innerHTML == shortPara) {
    //     console.log("==>> compelte para ")
    //     seemore.innerHTML = "see less";
    // } else {
    //     console.log("==>> compelte short apra para ")
    //     paragraph.innerHTML = shortPara;
    //     seemore.innerHTML = "see more"
    // }
    console.log('paragraph.innerHTML: ', paragraph.innerHTML);
    console.log('shortPara: ', shortPara);

}

function seeLess() {
    paragraph.innerHTML = shortPara;
    seemore.style.display = "block"
    seeless.style.display = "none"
}