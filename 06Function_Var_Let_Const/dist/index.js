"use strict";
// 👉 Section 1
// printConsole(); // output: 1
// function printConsole(){
//     console.log("1");
// }
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");
// printConsole();
// console.log("7");
// console.log("8");
// console.log("9");
// printConsole();
// 👉 Section 2
// function printConsole() {
//   console.log("1");
//   console.log("2");
//   console.log("3");
//   console.log("4");
//   console.log("5");
//   console.log("6");
//   console.log("7");
//   console.log("8");
//   console.log("9");
// }
// printConsole();
// printConsole();
// 👉 Section 3
// Question: Write ts program that's calculate sum of two numbers using function
// function sum(){
//     var num1:number = 10;
//     var num2:number = 20;
//     var result:number = num1 + num2;
//     console.log("Result is =" , result);
// }
// sum();
// 👉 Section 4
// Question: Write ts program that's calculate sum of two numbers 20,30 using function
// function sum(num1: number,num2:number) {  // parameter func
// //   var num1: number = 10;
// //   var num2: number = 20;
//   var result: number = num1 + num2;
//   console.log("Result is =", result);
// }
// sum(20,30);
// 👉 Section 5
// function sum(num1: number,num2:number): number {  // parameter func
//   var result: number = num1 + num2;
// //   result = result + 5;
// //   result = result + 40;
// //   console.log("Result is =", result);
//   return result;
// //   return "sumit";
// }
//  var sumResult:number = sum(20,30);
// //  sumResult = sumResult + 5;
//  sumResult += 5;
//  console.log(sumResult);
// 👉 Section 6
// console.log(resultSum); // error: Variable 'resultSum' is used before being assigned.
// var resultSum: number  = sum(30,40);
// console.log(resultSum);
// function sum(num1: number,num2:number): number {  
//     var result: number = num1 + num2;
//     return result;
//   }
// 👉 Section 7 
// console.log(sum); // error: Variable 'sum' is used before being assigned.
// var sum = (num1: number, num2: number): number => {
//     // var num1:number = 10;
//     // var num2:number = 20;
//     var result:number = num1 + num2;
//     return result;
// }
// var sum =  (num1: number, num2: number): number => num1 + num2;
// var resultSum: number = sum(50,30);
// console.log(resultSum);
// 👉 Section (var , let ,const)
// var num1:number = 10;
// let num2:number = 20;
// const num3: number = 40;
// num3 = 50; // error: Cannot assign to 'num3' because it is a constant.
// var golobalVariable = 30;
// function printConsole(){
//     var localVariable = 50;
//     console.log("golobalVariable " , golobalVariable);
//    console.log("localVariable " , localVariable);
// }
// // console.log(localVariable); // error: Cannot find name 'localVariable'.
// printConsole();
// 👉 Section (var )
// if(2 < 5){
//     var ifVariable:number = 15; //block scope variable
// }
// console.log("ifVariable " , ifVariable); // error Variable 'ifVariable' is used before being assigned. & output: 15
// {
//     var ifVariable:number = 15;  // block scope variable
// }
// console.log("ifVariable " , ifVariable);  // output: 15
// 👉 Section (let )
// if(2 < 5){
//     let ifVariable:number = 15;  // local variable
// }
// console.log("ifVariable " , ifVariable);  // error:- Cannot find name 'ifVariable'.
// {
//     let ifVariable:number = 15;  // local variable
// }
// console.log("ifVariable " , ifVariable); // error: Cannot find name 'ifVariable'
// 👉 Section (const )
{
    // var ifVariable1: number = 30; // scope variable (like work global)
    // let ifVariable2:number = 15;  // local variable
    const ifVariable3 = 25; // local variable
}
// console.log(ifVariable1); // output: 30
// console.log(ifVariable2); // error: Cannot find name 'ifVariable'
console.log(ifVariable3); // error: Cannot find name 'ifVariable'
