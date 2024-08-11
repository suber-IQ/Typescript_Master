"use strict";
// let obj:{} = {
//     price: 53,
//     color: 'red'
// }
// 👉 section
// type CarType = {
//     price: number;
//     color: string;
//     startCar: () => void;
// }
// class Car{
//     price:number = 0;
//     color:string = "not defined";
//     constructor(color:string, price:number){
//         this.price = price;
//         this.color = color;
//         // console.log("constructor");
//     }
//     startCar = ():void => {
//         console.log("Starting car...");       
//     }
// }
// let carA:CarType = new Car("red",234);  
// let carB:CarType = new Car("blue",892);  
// // carA.color = "red";
// // carA.price = 425;
// carA.startCar();
// carB.startCar();
// console.log("CarA: ", carA);
// console.log("CarB: ", carB);
// 👉 section 1:
// console.log("before async");
// // let setTimeOutId:number = 0;
// let setIntervalId:number = 0;
// // setTimeOutId = setTimeout(() => {
// //   console.log("setTimeout");
// // },1000)
// setIntervalId = setInterval(() => { // this function return number type
//   console.log("setTimeout");
// },1000)
// if(true){
// // if(false){
//   // clearTimeout(setTimeOutId);
//   clearTimeout(setIntervalId);
// }
// console.log("after async");
// 👉 section 2:
// console.log("before async");
function PromiseFunc(resolve, reject) {
    // if(true){
    if (false) {
        resolve("Successfully async code executed");
    }
    else {
        reject("Something went wrong");
    }
}
const result = new Promise(PromiseFunc);
result
    .then((success) => {
    console.log("success: ", success);
})
    .catch((error) => {
    console.log("fail: ", error);
});
// console.log("after async");
