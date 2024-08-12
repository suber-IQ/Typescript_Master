"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num = 10;
let userName = "Sumit kumar";
// userName = 234; //Type 'number' is not assignable to type 'string'.
let isCompleted = false;
let isNull = null; // empty
let isUndefined = undefined; // value is not defined
let isVoid = undefined;
// function printUserName(userName: string):void {
//     console.log("Print my name" , userName);
//     // return "hello"; 
//     // return 5;
// }
// const result = printUserName("sumit kumar");
// console.log("result: " , result, typeof result);
// 🌟🌟🌟🌟🌟🌟🌟🌟🌟
// let isAny: any = "anyThing"  // not check type (it means of any)
// isAny = 12;
// isAny = true;
// isAny = undefined
// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
let isUnknown = "String";
isUnknown = false;
isUnknown = undefined;
if (typeof isUnknown == "number") {
    isUnknown = 23;
}
// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
function returnError() {
    throw new Error("Any Error");
    // try {
    //   throw new Error("Any Error")
    // } catch (error) {
    // }
}
let emp = {
    name: "Ajay",
    age: 42,
    class: "Engineer"
};
let student = {
    name: "Sumit",
    email: "sumit@gmail.com",
    phone: 9123423425
};
let std = {
    name: "Sumit",
    email: "sumit@gmail.com",
    phone: 9123423425
};
let stt = {
    name: "Sumit",
    email: "sumit@gmail.com",
    phone: 9123423425
};
// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
let data = [123, 456, 789, 92, 523, 235, 82];
// let data1:number[] = [123,456,789,92,523,235,82, "Sumit"]; //Type 'string' is not assignable to type 'number'
let dataString = ["Ajay", "Sumit", "Kali", "Ram"];
let tuple = ["Sumit", 20, true]; // each array index type defined 
// let tuple:[string,number] = ["Sumit", 20,23,28]; // Type '[string, number, number, number]' is not assignable to type '[string, number]'.
tuple.push("amit"); // output: [ 'Sumit', 20, true, 'amit' ]
// console.log(tuple);
// console.log(tuple.length); //output: 4
// let newArr:[] = ["afdslj"];  //is causing a problem because you're declaring newArr with an explicit type of an empty tuple [], which means it should be an array that holds zero elements. However, you are trying to assign an array with one string element "afdslj" to it.
// let arr:[] = [];
// arr.push(10);
let newArr1 = [23, "abc", true, { name: "sumit" }];
let newStudent = {
    name: "Sumit",
    email: "sumitkumar@gmail.com",
    phone: 2308789234,
    address: "japur"
};
let students = [{ name: "Sumit", email: "sumit@gmail.com", phone: 9234234235, address: null }, { name: "Amit", email: "Amit@gmail.com", phone: 8734234235, address: "jaipur" }];
let students1 = [{ name: "Sumit", email: "sumit@gmail.com", phone: 9234234235, address: null }, { name: "Amit", email: "Amit@gmail.com", phone: 8734234235, address: "jaipur" }];
// let students2:[StudentType,StudentType,StudentType] = [{name: "Sumit",email: "sumit@gmail.com",phone: 9234234235,address: null},{name: "Amit",email: "Amit@gmail.com",phone: 8734234235, address: "jaipur"}]  //Error: Cannot redeclare block-scoped variable
// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
// 👉 Union 
let num2 = 234;
num2 = "Hello";
num2 = 234;
// num2 = null; // Error: Type 'null' is not assignable to type 'string | number'.
let num3 = null;
num3 = 234;
let newShape = {
    area: 234,
};
let newShape1 = {
    area: 234,
    size: "8"
};
// 👉 Intersection Types
let newShape3 = {
    area: 234,
    size: "48"
};
let newContact = {
    name: "Sumit",
    email: "sumit@kumar.com",
    budget: 82234,
    message: null
};
newContact.message;
// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
// 👉 Enum 
var COLORS;
(function (COLORS) {
    COLORS[COLORS["RED"] = 0] = "RED";
    COLORS[COLORS["GREEN"] = 1] = "GREEN";
    COLORS[COLORS["BLUE"] = 2] = "BLUE"; // index: 2
})(COLORS || (COLORS = {}));
const whatColor = COLORS.BLUE;
// console.log(whatColor);
var WEEKDAYS;
(function (WEEKDAYS) {
    WEEKDAYS[WEEKDAYS["MONDAY"] = 0] = "MONDAY";
    WEEKDAYS[WEEKDAYS["TUESDAY"] = 1] = "TUESDAY";
    WEEKDAYS[WEEKDAYS["WEDNESDAY"] = 2] = "WEDNESDAY";
    WEEKDAYS[WEEKDAYS["THURSDAY"] = 3] = "THURSDAY";
    WEEKDAYS[WEEKDAYS["FRIDAY"] = 4] = "FRIDAY";
    WEEKDAYS[WEEKDAYS["SATURDAY"] = 5] = "SATURDAY";
    WEEKDAYS[WEEKDAYS["SUNDAY"] = 6] = "SUNDAY";
})(WEEKDAYS || (WEEKDAYS = {}));
// console.table(WEEKDAYS);
var USERROLE;
(function (USERROLE) {
    USERROLE[USERROLE["ADMIN"] = 0] = "ADMIN";
    USERROLE[USERROLE["USER"] = 1] = "USER";
})(USERROLE || (USERROLE = {}));
// const ADMIN = "ADMIN";  // not do this
// const USER = "USER";  // not do this
// const user = "user" // not do this
let newAdmin = {
    role: USERROLE.ADMIN,
    name: "Sumit"
};
let newUser = {
    role: USERROLE.USER,
    name: "Sumit"
};
// if("user" == "user") { // string compare not compatible besides the number compare is good performance)
// }
// if(23 = 23){  // easy(fast): (number is compare good performance)
// }
if (newAdmin.role == USERROLE.ADMIN) { // so here compare to (index == index){0 == 0} that means number compare is easy(fast)
    //something
}
// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
// 👉 Generics 
// function swap(arr:number[]): number[] {
//    return [arr[1],arr[0]]
// }
// const result: number[] = swap([10,20]);
// console.log(result);
// function swap2(arr:string[]): string[] {
//    return [arr[1],arr[0]]
// }
// const result: string[] = swap2(["hello","world"]);
// console.log(result);
// 👉 do this upper problem solve with generics 
function swap(arr) {
    return [arr[1], arr[0]];
}
const result = swap(["hello", "world"]);
console.log(result);
// const result1: number[] = swap([10,20]); // also write this work
const result1 = swap([10, 20]);
console.log(result1);
const result2 = swap([true, false]);
console.log(result2);
// userName = 234234; //Type 'string' is not assignable to type 'string
