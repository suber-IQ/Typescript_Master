
// 👉 synchronous code 

// let abc:string = "sumit";  // step 1

// function print(){               // step 2
//     console.log("hello world!");
    
// }

// if(condition){
    //load student data file (10Millions student)
// }

// if(condition){    // not depend    //step 3
//     myprint();
    // excution 10 minutes
    // for(let i = 0; i < 10; i++){ // depend 
//     console.log(i);
    // excution 5 minutes

// }
// }
   

// for(let i = 0; i < 10; i++){ // not depend // step 4 
//     console.log(i);
//     excution 5 minutes
// }


// print(); // step 5  (delay previous code execution then print() call)

// step 1 -> step 2 -> step 3 -> step 4 (sequence to run code line by line)(synchronous code)

// 👉 section 1:

// let result = async function myPrint(): Promise<number> {
//     let a: number = 5;
//          await new Promise(resolve => setTimeout(resolve,1000))
//     return a;
// }


// console.log(result());

// console.log("hello world!");

// let b:string =  "cool";

// console.log(b);

// result();


// 👉 section 2:


console.log("before async code");

function doSomething(){
    console.log("print doSomething");
}

// setTimeout(doSomething,5000);  // async code

// setInterval(doSomething,2000); // infinite set of time intervals

console.log("after async code");

