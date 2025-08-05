// question 1(function declaration)
// function fun(name) {
//   console.log("Hello, " + name);
// }
// fun("Supriya"); 



// qustion 2 (function expression)
let fun = function(name ) {
console.log("hi "+ name );
};
fun("Anjali");

// question 3
// function fun1(){
//     console.log("declared function");
// }
// let fun1 = function( ) {
//   console.log("function variable" );
// };

// qustion 4 (anonymous function)
// let fun = function(name) {
//   return "Hello, " + name;
// };
// console.log(fun("supriya"));

// question 5(arrow function)
// const sum = (a,b) => (a + b);
// console.log(sum(5,4));

// question 6
// function calculate(a, b,operation) {
//   return operation(a, b);
// }
// function add(x, y) {
//   return x + y;
// }
// function subtract(x, y) {
//   return x - y;
// }
// console.log(calculate(10, 5, add));       
// console.log(calculate(10, 5, subtract));  
  

// question 7

// question 8

// function multiplyBy(operater) {
//   return function(num) {
//     return num * operater;
//   };
// }
// let a = multiplyBy(2);
// let b = multiplyBy(3);
// console.log(a(5));  
// console.log(b(5)); 
