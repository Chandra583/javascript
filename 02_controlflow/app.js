let pass = prompt("please enter your passwordd");
//convert pass variable in sring to number
let passWord = parseInt(pass);
if (passWord === 124) {
  console.log("Password is correct");
} else if (passWord <= 124) {
  console.log("Password is short");
} else if (passWord >= 124) {
  console.log("Password is long");
} else {
  console.log("Error in password");
}

let x = prompt("to what do to");
let y = parseInt(x);

switch (y) {
  case 0:
    {
      alert("on");
    }
    break;
  case 1:
    {
      alert("off");
    }
    break;
  default: {
    alert("error");
  }
}

swith casessss

let fruit = prompt("Enter your day fruit name ");
switch (fruit) {
  case "Banana":
    console.log("Banana is good ");
    break;
  case "Orange":
    console.log("I'm not fan of Orange");
    break;
  case "apple":
    console.log("one apple keeps you away from doctor hahaha");
    break;
  default:
    console.log("Sorry!! i never heard of that fruit");
}

for (let i = 1; i <= 1000; i++) {
  console.log("Happy birthday to me", i);
}

Arraays
let favSingers = ["Honey", "singh", "arjith"];
console.log(favSingers[0]);
let favNumb = [54, 55, 89, 18];
let mixedArr = ["str", ["other", "jsj"], 123, false];
console.log(mixedArr[1][1]);

object

const car = {
  type: "mahindra",
  model: 2023,
  color: "red",
};
console.log(typeof car);

car.type = "Toyota";
car.wheels = 4;
console.log(car);

let Name = "Vignesh sir";
function sayHello(Name) {
  console.log(`hello ${Name}`);
}
// let Name = "Vignesh sir";

sayHello("vignesh");
sayHello("viggu");
sayHello("ganesh");

//retun keyword in function
function addNumber() {
  return 6 + 7;
}
console.log(addNumber());

function myFun(a, b

function birthday(Name, dob) {
  console.log(`my name is ${Name}`);
}
function dob() {
  console.log("And my birthaday in 11/8/2000");
}

birthday("Vignesh", dob());

function showCallfunc(fn) {
  let value = 25;
  fn(value);
}

showCallfunc(function (value) {
  console.log(value * 2);
});

function greet(name, cb, ls) {
  console.log(`hi my name ${name}`);
  cb();
  ls();
}

function callme() {
  console.log("I am a call back function");
}
function secoundCallme() {
  console.log("I am second call back function");
}

greet("Vignesh", callme, secoundCallme);

function showCallfunc(fn) {
  let value = 10;
  fn(value);
}
showCallfunc(function (value) {
  console.log(value * 3);
});

const oldSeason = (year) => {
  console.log(`Welocome to New season of ${year} :)`);
};
oldSeason(2023);

const greet = (name) => {
  return `Hello World ${name}`;
};
console.log(greet("vignesh"));

const add = (x, y, z) => {
  return x + y + z;
};
console.log(add(4, 6, 8));

function student(name, ID, year, section) {
  return { name, ID, year, section };
}
console.log(student("chandra", "Bsc19009", 2, "c"));

const a = 1;
const b = 2;
const c = 3;

const obj = {
  a,
  b,
  c,
};

console.log(obj);

const lib = {
  //   sum: (a, b) => a + b,
  //   mult: (a, b) => a * b,
  sum: (a, b) => {
    return a + b;
  },
  mult: (a, b) => {
    return a ** b;
  },
};

console.log(lib.sum(5, 6));
console.log(lib.mult(5, 6));
