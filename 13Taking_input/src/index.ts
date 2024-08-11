import inquirer, { Answers, QuestionCollection} from "inquirer";
// const questions: QuestionCollection = [
//     {
//        name: "age",
//        type: "number",
//        message: "what is your age?",
//     },
//     {
//        name: "userName",
//        type: "input",
//        message: "what is your UserName?",
//     },
// ];


// let answers: Promise<Answers> = inquirer.prompt(questions)


// answers.then((answer: Answers) => {
//   console.table(answer);
// }).catch((err) => {
//     console.log("error: ",err);
// })

// console.log("Hello");



// section 2:


const questions: QuestionCollection = [
    {
       name: "num1",
       type: "number",
       message: "what number1",
    },
    {
       name: "num2",
       type: "number",
       message: "What number2",
    },
    {
        name: "Operations",
        type: "list",
        message: "What number2",
        choices: ["*","+","-","/"]
    }
];


let answers: Promise<Answers> = inquirer.prompt(questions)


answers.then((ans: Answers) => {
     switch(ans.Operations){
        case "*":
            console.log(`${ans.num1} * ${ans.num2} = ${ans.num1 * ans.num2}` );
            break;
        case "+":
            console.log(`${ans.num1} + ${ans.num2} = ${ans.num1 + ans.num2}` );
            break;
        case "-":
            console.log(`${ans.num1} - ${ans.num2} = ${ans.num1 - ans.num2}` );
            break;
        default:
            console.log(`${ans.num1} / ${ans.num2} = ${ans.num1 / ans.num2}` );
            
     }
}).catch((err) => {
    console.log("error: ",err);
})
