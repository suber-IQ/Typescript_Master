import chalk from 'chalk';
import data from './data.json' assert { type: "json"}

// console.log(chalk.blue("hello world!"));
// console.log(chalk.bgBlue("hello world!"));
// console.log(chalk.bgYellow("hello world!"));
// console.log(chalk.white.bgRed.bold("hello world!"));
// console.log(chalk.white.bgRed.bold("hello world!") + " My name is " + chalk.bgGreen.italic("Sumit!"));


// 👉 section 1

for(let i = 0; i < data.students.length; i++){
    const elm = data.students[i];
    if(elm.name === "Emily Johnson"){
    console.table(chalk.white.bgBlue.bold(elm.id) + " " + chalk.white.bgBlue.bold(elm.name) + " " + chalk.white.bgBlue.bold(elm.age));
        
    }
    // console.table(chalk.white.bgBlue.bold(elm.id) + " " + chalk.white.bgBlue.bold(elm.name) + " " + chalk.white.bgBlue.bold(elm.age));
    //  console.log(chalk.white.bgBlue.bold(elm.name));
    //  console.log(chalk.white.bgBlue.bold(elm.age));
    
}