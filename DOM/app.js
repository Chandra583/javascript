// 1. Select element h4 which holds text of "Red" by using getElementsByTagName
// 2. Select div with the class of "green" which holds text (Green) by using getElementsByTagName
// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsByClassName
// 4. Select div which has the class & Id of "yello" by using querySelector()
// 5. Select all the elements which has the class of "teal" by using querySelectorAll

const red = document.getElementsByTagName("h4");
console.log(red);
const green = document.getElementsByClassName("green");
console.log(green);
const blue = document.getElementById("blue");
console.log(blue);
const yellow = document.querySelector("#yellow");
console.log(yellow);
const teal = document.querySelectorAll(".teal");
console.log(teal);
