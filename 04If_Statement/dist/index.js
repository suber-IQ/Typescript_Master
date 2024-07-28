"use strict";
// var a: number = 10 + 20 - 2 * 5 / 2 == 2;  // Type 'boolean' is not assignable to type 'number'.
// 👉 Block scope 
// {
//     let userName: number = 23;
//     console.log(userName);
// }
// {
//     console.log(userName);
// }
// global scope
// console.log("Pring somthing");
// console.log("Pring somthing1");
// console.log("Pring somthing2");
// if(false){
//     console.log("Printing somthing..");
// }
// if(true){
//     console.log("Printing somthing..");
// }
// var result: boolean = 5 <10 && 15 > 10;
// if(result){
//     console.log("Expression 1");
//     console.log("Expression 4");
//     console.log("Expression 5");
//     console.log("Expression 8");
//     console.log("Expression 2345");
//     console.log("Expression 23");
//     console.log("Expression 53");
// }
// if(!result){
//     console.log("Expression 2");
// }
// 👉 nested if 
// if(2 < 6){
//     console.log("parent");
//     if(6 > 1){
//         console.log("child");
//         if(6<= 6){
//             console.log("Nested child");
//         }
//     }
// }
// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
var n1 = 10;
var n2 = 15;
if (n1 == n2) {
    console.log("true");
}
else {
    console.log("false");
}
