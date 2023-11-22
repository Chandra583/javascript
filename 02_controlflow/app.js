// let pass = prompt("please enter your passwordd");
// //convert pass variable in sring to number
// let passWord = parseInt(pass);
// if (passWord === 124) {
//   console.log("Password is correct");
// } else if (passWord <= 124) {
//   console.log("Password is short");
// } else if (passWord >= 124) {
//   console.log("Password is long");
// } else {
//   console.log("Error in password");
// }

// let x = prompt("to what do to");
// let y = parseInt(x);

// switch (y) {
//   case 0:
//     {
//       alert("on");
//     }
//     break;
//   case 1:
//     {
//       alert("off");
//     }
//     break;
//   default: {
//     alert("error");
//   }
// }

// swith casessss

// let fruit = prompt("Enter your day fruit name ");
// switch (fruit) {
//   case "Banana":
//     console.log("Banana is good ");
//     break;
//   case "Orange":
//     console.log("I'm not fan of Orange");
//     break;
//   case "apple":
//     console.log("one apple keeps you away from doctor hahaha");
//     break;
//   default:
//     console.log("Sorry!! i never heard of that fruit");
// }

// for (let i = 1; i <= 1000; i++) {
//   console.log("Happy birthday to me", i);
// }

// Arraays
// let favSingers = ["Honey", "singh", "arjith"];
// console.log(favSingers[0]);
// let favNumb = [54, 55, 89, 18];
// let mixedArr = ["str", ["other", "jsj"], 123, false];
// console.log(mixedArr[1][1]);

// object

// const car = {
//   type: "mahindra",
//   model: 2023,
//   color: "red",
// };
// console.log(typeof car);

// car.type = "Toyota";
// car.wheels = 4;
// console.log(car);

// let Name = "Vignesh sir";
// function sayHello(Name) {
//   console.log(`hello ${Name}`);
// }
// // let Name = "Vignesh sir";

// sayHello("vignesh");
// sayHello("viggu");
// sayHello("ganesh");

// //retun keyword in function
// function addNumber() {
//   return 6 + 7;
// }
// console.log(addNumber());

// function myFun(a, b

// function birthday(Name, dob) {
//   console.log(`my name is ${Name}`);
// }
// function dob() {
//   console.log("And my birthaday in 11/8/2000");
// }

// birthday("Vignesh", dob());

// function showCallfunc(fn) {
//   let value = 25;
//   fn(value);
// }

// showCallfunc(function (value) {
//   console.log(value * 2);
// });

// function greet(name, cb, ls) {
//   console.log(`hi my name ${name}`);
//   cb();
//   ls();
// }

// function callme() {
//   console.log("I am a call back function");
// }
// function secoundCallme() {
//   console.log("I am second call back function");
// }

// greet("Vignesh", callme, secoundCallme);

// function showCallfunc(fn) {
//   let value = 10;
//   fn(value);
// }
// showCallfunc(function (value) {
//   console.log(value * 3);
// });

// const oldSeason = (year) => {
//   console.log(`Welocome to New season of ${year} :)`);
// };
// oldSeason(2023);

// const greet = (name) => {
//   return `Hello World ${name}`;
// };
// console.log(greet("vignesh"));

// const add = (x, y, z) => {
//   return x + y + z;
// };
// console.log(add(4, 6, 8));

// function student(name, ID, year, section) {
//   return { name, ID, year, section };
// }
// console.log(student("chandra", "Bsc19009", 2, "c"));

// const a = 1;
// const b = 2;
// const c = 3;

// const obj = {
//   a,
//   b,
//   c,
// };

// console.log(obj);

// const lib = {
//   //   sum: (a, b) => a + b,
//   //   mult: (a, b) => a * b,
//   sum: (a, b) => {
//     return a + b;
//   },
//   mult: (a, b) => {
//     return a ** b;
//   },
// };

// console.log(lib.sum(5, 6));
// console.log(lib.mult(5, 6));

//default function parameter in javascrript

// function ctn5(count = true) {
//   //this is the default function parameter where we assing a default value for parameter becouse of if any arguments are not given so then excute this deafut parameter
//   if (count === true) {
//     for (let i = 0; i <= 5; i++) {
//       console.log(`${i} is the number`);
//     }
//   } else {
//     console.log("invalid");
//   }
// }

// ctn5();

// function multiply(a, b = 1) {
//   let result = a * b;
//   console.log(`the product of ${a} and ${b}  is = ${result}`);
// }
// multiply(2, 5);

//Spread operation/operators.
//this for function
// function paint(a, b, c, d, e) {
//   console.log(`a = ${a}`);
//   console.log(`b = ${b}`);
//   console.log(`c = ${c}`);
//   console.log(`d = ${d}`);
//   console.log(`e = ${e}`);
// }

// let color = ["red", "green", "blue", "yellow", "darkblue"];
// //intsea  of giving all as argument creating variable and use spread operator using ""..."" it helps to well readable function
// paint(...color);

// //this for arrays
// const arr1 = [1, 3, 4];
// const arr2 = [5, 6, 8];
// const addTwoArrys = [...arr1, ...arr2];

// console.log(addTwoArrys);
// console.log(addTwoArrys.length);
// console.log(typeof addTwoArrys);

// const ppl = ["Chandra", "shekar", "ks", "muni"];
// const ppls = [...ppl, "mandi", "manoja"];
// console.log(ppls);

//for object

// let ob1 = {
//   name1: "chandra",
//   rollno1: "BSc19009",
// };
// let ob2 = {
//   name2: "shekar",
//   rollno2: "BSc9009",
// };

// let obj3 = { ...ob1, ...ob2 };
// console.log(obj3);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5];

// const clone1 = [...arr1, ...arr2];
// console.log(clone1);

// const user = {
//   name1: "chandra",
//   rollno1: "BSc19009",
// };
// const clone2 = { ...user };
// console.log(clone2);
// console.log(user);

//Rest operotor
//rest operotor means taking unlimited amount of  argumnets when function calling and return as an arrays

// function chandra(...myFrinds) {
//   // console.log(`My frist name is : ${fristName}`);
//   // console.log(`My lasr name is : ${lastName}`);
//   // console.log(`My friends are : ${myFrinds}`);
//   console.log("frinds:", myFrinds);
// }

// chandra(
//   "chandra",
//   "sharma",
//   "shekhar",
//   "Manoj",
//   "muniyamma",
//   "mandi",
//   "chethu",
//   {
//     name: "pradeep",
//     class: "4",
//     age: 28,
//   },
//   [45, true, "charana"]
// );

//Destructing
//destucturing is a way to extract values from arrays or objects into distinct variables

//Destructing with arrays

//take one arrays
// const name = ["chandra", "shekar", "ks", "hnp"];

// //taking array values and making new variable and number arrays == number of variable name should be in keytword
// const [fristName, lastName, initial, village] = name;
// console.log(`My frist name is : ${fristName}`);
// console.log(`My last name is : ${lastName}`);
// console.log(`Initial is : ${initial}`);
// console.log(`Village is : ${village}`);

// //defaul paraneter we can do in destructing
// let a, b;
// [a = 10, b = 20] = ["chandra", "New VAlue"];
// console.log("a", a, "b", b);

//destructing function

// function getDetails() {
//   return ["chandra", "shekar"];
// }

// const [fristname, lastname] = getDetails();
// console.log(`Frist Name :${fristname}, Last Name :${lastname}`);

// function ad() {
//   return [1, 2];
// }

// const [x, y] = ad();
// console.log(x + y);

// const [color1, color2, ...color3] = [
//   "red",
//   "green",
//   "blue",
//   "yellow",
//   "orange",
// ];

// // const [color1, color2, color3] = color;
// console.log("color1 is ", color1);
// console.log("color2 is ", color2);
// console.log("color3 is ", color3);

// //object destructing
// const person = {
//   name: "chandra",
//   age: 25,
//   gender: "male",
//   city: "Bangalore",
// };
// const { name, age, city, gender } = person;
// console.log(`my name is ${name} and i am ${age} years old`);
// console.log(`i live in ${city}`);
// console.log(gender);

// //object destructing with rest operotors

// const { a, b, ...c } = { a: 100, b: 200, c: 550, f: 55, g: 57 };
// console.log("a", a, "b", b, c);

// //Arrays destructing with rest operotors
// const [x, y, ...z] = ["a", "b", "c", "d", "e", "f"];
// console.log(x, y, z);
// // console.log("a", a, "b", b, c);

// let student = {
//   name: "Atul",
//   age: 54,
//   address: { homeName: "jai bhavini", concatnumber: 455 },
//   village: "varanasi",
// };

// function std({ name, age, address, village }) {
//   console.log("name is", name);
//   console.log("age is", age);
//   console.log("address is", address);
//   console.log("village is", village);
// }

// std(student);

// let opt = {
//   title: "My menu",
//   item: ["item1", "item2"],
// };
// function showMenu({ title, item: [item1, item2], item }) {
//   console.log(title);
//   console.log(item);
// }
// showMenu(opt);

// let pass = prompt("Enter you password");
// let passWord = parseInt(pass);

// passWord === 1254
//   ? alert("Your pass word is correct")
//   : alert("please eneter correct password");

// let age = parseInt(prompt("please eneter age"));

// const isAdult = age >= 18 ? "your an adult" : "not an adult";
// console.log(isAdult);
//fro in looop
// let student = ["a", 4, "as", "g"];

// // // for (let x in student) {
// //   console.log(x, student[x]);
// // }

// const obj = { a: 1, b: 2, c: 3 };

// for (let i in obj) {
//   console.log(`${i} = ${obj[i]}`);
// }

//for of loop
// const arr1 = ["a", 4, "as", "g"];

// for (let x of arr1) {
//   console.log(x);
// }

// const words = ["hello", "bird ", "table", "footnbale"];

// const capWords = words.forEach((word, index, arr) => {
//   arr[index] = word[0].toUpperCase() + word.substring(1);
// });

// console.log(words);

let ppl = [
  { fname: "chandra", lname: "shekar" },
  { fname: "andra", lname: "kar" },
  { fname: "dravid", lname: "karan" },
];

const outPut = ppl.map((person) => {
  return [person.fname, person.lname];
});
console.log(outPut);

const arr = [1, 2, 6, 4, 8];

const mult = arr.map((num) => {
  return num * 10;
});
console.log(mult);

const names = [
  {
    name: "Chandra Shekhar",
    age: 25,
    address: {
      village: "Kotiganahosur",
      contact_no: 5896741233,
    },
  },
  {
    name: " Shekhar",
    age: 24,
    address: {
      village: "hosur",
      contact_no: 6741233,
    },
  },
];

const res = names.map((here) => {
  return [here.name, here.age, here.address];
});
console.log(res);
