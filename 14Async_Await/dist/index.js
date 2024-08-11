import inquirer from "inquirer";
// console.log("First");
// await inquirer.prompt([{
//     name: "num1",
//     type: "number",
//     message: "Enter a number"
// }])
// console.log("second");
// async function printUser(){
//  await inquirer.prompt([{
// //    inquirer.prompt([{
//         name: "num1",
//         type: "number",
//         message: "Enter a number1"
//     }])
// console.log(result);
//     // await inquirer.prompt([{
//      inquirer.prompt([{
//         name: "num2",
//         type: "number",
//         message: "Enter a number2"
//     }])
//   console.log("second");
// }
// printUser();
// await printUser(); // don't stop main thread (global file not use await) 
// console.log("Third"); 
// 👉 section 2 
// console.log("first");
// const printUser = async () => {
//     let num1:number = 0;
//     for(let i:number = 1; i < 923949999; i++){
//        num1 = (i * (5 + i ) * i);
//     }
//      console.log("num1: " ,num1);
//     let num2:number = 0;
//     for(let i:number = 1; i < 555555553; i++){
//        num2 = (i * (5 + i ) * i);
//     }
//      console.log("num2: ", num2);
//      console.log("Second");  // 4 min upload something
//  }
// printUser();
//  console.log("third");
// 👉 section 3
// console.log("first");
// var result = inquirer.prompt([{
//     name: "num1",
//     type: "number",
//     message: "Enter a number1"
// }])
// result.then((success) => {
//    let promise = inquirer.prompt([{
//     name: "num1",
//     type: "number",
//     message: "Enter a number2"
// }])
//    promise.then((success:unknown) => {
//           console.log(success);
//    }).catch((err:unknown) => {
//     console.log("error: ",err);
//    })
// }).catch((error) => {
//     console.log("error: ",error);
// })
// console.log("Third"); 
// 👉 section 4
// console.log("first");
// async function loadNumber(){
//     var result = await inquirer.prompt([{
//         name: "num1",
//         type: "number",
//         message: "Enter a number1"
//     }])
//     console.log("result: ", result);
//     var result1 = await inquirer.prompt([{
//         name: "num2",
//         type: "number",
//         message: "Enter a number2"
//     }])
//     console.log("result1: ", result1);
//     let digit:number = 88;
//     if(result1.num2 > digit){
//         var result2 = await inquirer.prompt([{
//             name: "num3",
//             type: "number",
//             message: "Enter a number3"
//         }])
//         console.log("result: " ,result2);
//     }
//     console.log("second");
// }
// loadNumber();
// console.log("third");
// 👉 section 5 
console.log("first");
async function loadNumber() {
    var result = await inquirer.prompt([{
            name: "num1",
            type: "number",
            message: "Enter a number1"
        }]);
    console.log("result: ", result);
    var result1 = inquirer.prompt([{
            name: "num2",
            type: "number",
            message: "Enter a number2"
        }]);
    console.log("result1: ", result1);
    let digit = 88;
    if (result1.num2 > digit) {
        var result2 = await inquirer.prompt([{
                name: "num3",
                type: "number",
                message: "Enter a number3"
            }]);
        console.log("result: ", result2);
    }
    console.log("second");
}
loadNumber();
console.log("third");
