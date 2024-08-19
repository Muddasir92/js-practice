// a = 5;
// b = "8";
// c = "A is less";
// d = "A is Greater";
// console.log(a - b);
// console.log(b - a);
// console.log(a < b ? c : d);
// const frt = "mangoes";

// switch(frt){
//     case 'mangoes':
//         console.log("Mango Shake");
//         break
//     case 'apple' :
//         console.log("Apple Juice");
//         break
// }

// a = prompt('enter a number to check ');
// if(a%5==0){
//     console.log(a + "is Divisible of 5")
// }
// else{
//     console.log(a + "is not a Divisible of 5")
// }

// let a = "Java Script";
// for(let val of a ){
//     console.log(val , "hhhhh");
// }

// let student = {
//     name:'Ali',
//     age:23,
//     status: 'married',
// };

//     console.log(`The name of student is ${student.name} age is ${student.age}`);

// let gamenum = 15;
// let usernum = prompt("Guess the number between 0 to 20  : ");

// while(usernum !== gamenum){
//      usernum = prompt("OOPs try again between 0 to 20  : ");
//     console.log('Congratulations You won the Game');
// }
// console.log('Congratulations You won the Game');

// let gamenum = 15;
// let usernum = prompt("Guess the number between 0 to 20: ");

// while (usernum != gamenum) {
//   usernum = parseInt(prompt("Oops! Try again between 0 to 20: "));
// }

// prompt("Congratulations! You won the game.");

// let str = '12345678';
// str = str.slice(0,8,2);
// console.log(str);

// let fname = prompt("Enter your Full name : ");
// let len = fname.length;
// fname = fname.replaceAll(" ", "");
// fname = fname.toLowerCase();
// //  fullname =  ;
// console.log("@" + fname + len);

// let stu = [120, 140, 160, 130, 170, 180];
// let sum = 0;
// let stuu = [];
// let len = stu.length;
// for (let i = 0; i < len; i++) {
//   stuu[i] = stu[i] - stu[i] * 0.1;
// }
// let indexx = 0;
// for (let val of stuu) {
//   console.log(
//     `The price beforer Discounts is ${stu[indexx]} after applying the discounts is  ${val}`
//   );
//   indexx++;
// }

// let items = ["apple", " banana", " mangoes", " tomato "];
// console.log(items);
// items.push("strowberry" , "watermelon");
// console.log(`After pushing , The new values are following ${items}`);
// console.log(`Now we are going to apply pop function`);
// let delval = items.pop();
// console.log(
//   `After applying the pop function the values are follwoing ${items}   and deleted value is ${delval}`
// );

// let fruits = ["apple", " banana", " lichi"];
// let veg = ["tomato", " patato"];
// let mixture = fruits.concat(veg);
// console.log(mixture);

// let fruits = ["apple", " banana", " lichi"];
// fruits.unshift("strawberry");
// console.log(fruits);

// let fruits = ["apple", " banana", " lichi"];
// fruits.shift();
// console.log(fruits);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.slice(2, 7));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.splice(2, 2);
// console.log(arr);

// let com = ["Netflix", "youtube", "facebook", "instagram"];
// console.log(com);
// com.shift();
// console.log(com);
// com.splice(1, 1, "linkedIn");
// console.log(com);
// com.push("amazon");
// console.log(com);

//Functions

// function sum(x,y){
//     console.log(x+y)

// }
// sum(6,7);

//Arrow functons

// const arrsum = (a, b) => {
//   console.log(a + b);
// };

// arrsum(5, 7);

// const volcounter = (inPut) => {
//   let count = 0;
//   let a = inPut;
//   for (let val of a) {
//     if (
//       val == "a" ||
//       val == "A" ||
//       val == "e" ||
//       val == "E" ||
//       val == "i" ||
//       val == "I" ||
//       val == "o" ||
//       val == "O" ||
//       val == "u" ||
//       val == "U"
//     ) {
//       count++;
//     }
//   }
//   if (count != 0) {
//     console.log(`Ther are ${count} vowels in this sentense`);
//   } else {
//     console.log(`There is no vowel in this sentense`);
//   }
// };
// volcounter("A quick brown fox jumps o{ver the lazy dog");

// let arr = [1,2,3,4,5,6,7,8,9];

// arr.forEach((val)=>{
//     console.log(val);
// })

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, ];

// let calculatesq = (val) => {
//   console.log(val * val);
// };
// arr.forEach(calculatesq);

// let arr = [1, 2, 3, 4, 5, 6, 7, 9];
// let evenNum = arr.filter((val) => {
//   return val % 2 == 0;
// });

// console.log(evenNum);

// let arr = [1, 2, 3, 4, 5, 6, 7, 9];
// let max = arr.reduce((res, val) => {
//   return res > val ? res : val;
// });

// console.log(max);

// let arr = [1, 2, 3];
// let factorial = arr.reduce((pre, val) => {
//   return pre * val;
// });

// console.log(factorial);



//convert string into array

// let a = "All that glitters is not gold";
// console.log(a);
// console.log(typeof a);
// let i = [];
// count = 0;
// for (let x of a) {
//   i[count] = x;
//   count++;
// }

// console.log(i[2]);

// let div = document.querySelector("div");
// div.h1.style.backgroundColor = "red";


//    arrow functions
const array = [1,3,4,5,6,7,8,9]

// const newarray = array.map(function(x){
//     return x*x;
// })
// console.log(newarray)

//  by arrow function

const newarray = array.map((x)=>{
    return x *x;
})

const newarray2 = array.map(x => x*x)
// both function giving the same values

console.log(newarray);
console.log(newarray2)


