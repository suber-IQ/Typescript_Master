// import c from './sum.js';
// import {a,b} from './sum.js';
// var d:number = c + 5;
// console.log("d: ", d);
// console.log("a: ", a);
// console.log("b: ", b);
// 👉 test 
console.log("before async code");
function doSomething() {
    console.log("print doSomething");
}
await setTimeout(doSomething, 5000); // async code
console.log("after async code");
export {};
