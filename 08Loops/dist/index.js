"use strict";
// section : 1 
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);
// section : 2
// function printConsole(){
//     console.log("Hello world"); // ten times hello world print
// }
// printConsole();
// printConsole();
// printConsole();
// printConsole();
// printConsole();
// printConsole();
// printConsole();
// printConsole();
// printConsole();
// printConsole();
// section : 3
// console.log("start loop");
// for(let i = 1; i <= 5;i++){
//     // console.log(1);
//     // console.log(2);
//     console.log(i);    
// }
// console.log("end loop");
// section : 4
// while(false){
//     console.log(index); // not print
// }
// let index:number = 0;
// while(true){
// while(2 < 5){
// while(index < 5){ // index: 0, index: 1,index: 2,index: 3,index: 4
// console.log(index);
// index = index + 1;
// }
// section 5: 
// 👉 Write a ts program, that print the table of 2
// let index: number = 1;
// while(index <= 10){
//     console.log(2 * index);
//     index = index + 1;
// }
// 👉 Section 6 (increment prefix postfix operators)
// var index:number = 1;
// index = index + 1;
// index++; // postfix increment operator
// index = index - 1; 
// // assignment operator (+=, *=, /=, and %=)
// index += 1 // assignment operator
// index -= 1 // assignment operator
// index--; //postfix decrement operator
// console.log("index",index);
// 👉 prefix increment operator & prefix decrement operator 
// let index:number = 1;
// ++index; // prefix increment operator
// --index; // prefix decrement operator
// console.log("index",index);
// 👉 Section 7 (postfix increment operators)
// let index:number = 8;
// let result:number = index++;
// console.log("result: " , result); //output: 8
// console.log("index: " , index);  //output: 9
// 👉 Section 8 (post decrement operators)
// let index:number = 8;
// let result:number = index--;
// console.log("result: " , result);  //output: 8
// console.log("index: " , index);  // output: 7
// 👉 Section 9 (prefix increment operators)
// let index:number = 8;
// let result:number = ++index;
// console.log("result: " , result); //output: 9
// console.log("index: " , index); // output: 9
// 👉 Section 9 (prefix decrement operators)
// let index:number = 8;
// let result:number = --index;
// console.log("result: " , result); //output: 7
// console.log("index: " , index); // output: 7
// 👉 Section 10 
// let index:number = 1;
// while(index < 10){
//     console.log(index);
//     index++;
// }
// for(let index:number = 0; index < 10; index++){
//     console.log(index);   
// }
// let i:number = 18;
// do{
//   console.log(i);
//   i++;
// }while(i < 10);
// ❓ write a ts program ,that calculate sum of even numbers in between 1 - 1000;
let even = 0;
let odd = 0;
var listEvn = [];
var listOdd = [];
for (let i = 1; i <= 1000; ++i) {
    if (i % 2 == 0) {
        even += i;
        listEvn.push(i);
    }
    else {
        odd += i;
        listOdd.push(i);
    }
}
console.log("Even: ", even); // output: 250500
console.log("odd: ", odd); //output: 250000
console.log("list of Even: ");
console.table(listEvn);
console.log("list of odd: ");
console.table(listOdd);
// console.log("Sum of even numbers in between 1 - 1000 is: ", sum); //output: 250500
