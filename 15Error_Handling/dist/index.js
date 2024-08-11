import inquirer from "inquirer";
// let result:number = num1 * num2;  // ReferenceError
// let2 a:number = 1;  // syntax error
// let sum:number = num1 * num2; // logical error
// let divide:number = 5/0; // runtime error
// let obj: any = null;
//   console.log(obj.name); // Error: Cannot read property 'name' of null
// console.log(a);
// console.log(result);
//👉  section 1
// const questions: QuestionCollection = [
//     {
//        name: "num1",
//        type: "number",
//        message: "what number1",
//     },
//     {
//        name: "num2",
//        type: "number",
//        message: "What number2",
//     },
// ];
// try {
//     let answers:Answers = await inquirer.prompt(questions);
// } catch (error) {
//      console.log("error: " + error);
// } finally{
//     console.log("every time run if try complete or also error give");
// }
//👉  section 2
// async function customProcess(){   // like paymentProcess
// try {
//     //payment deduct from user
//     // await paymentDeduct
//     // order create
//     //pdf
//     //download
//     // upload
//     console.log("before error");
//     // leta
//     let a:number = 10;
//     console.log("after error");
// } catch (error) {
//      console.log("error: " + error);
// }
// finally{
//     //loader turn off
//     console.log("I'm finally...");
// }
// }
// customProcess()
//👉  section 3
// try {
//     console.log("before error");
//     throw new Error("Something went wrong"); // vscode known as comes to error this line next line is blur (opacity low)
//     console.log("after error");  //Unreachable code detected.
// } catch (error) {
//      console.log(error);
// }
// finally{
//     console.log("finally...");
// }
//👉  section 4
async function customProcess() {
    try {
        const answer = await inquirer.prompt([{
                name: "score",
                type: "number",
                message: "Enter your marks between 0 - 100"
            }]);
        if (answer.score > 100 || answer.score < 0) {
            throw new Error("Enter correct marks score!");
        }
    }
    catch (error) {
        console.log("error: " + error);
    }
    finally {
        //loader turn off
        console.log("I'm finally...");
    }
}
customProcess();
