"use strict";
// var rollNo:number = 23;
// var rollNo:number = 5;
// var rollNo:number = 3;
// var rollNo:number = 2;
// 👉 section 1 (Array) ( always starting with zero index)
// var studentRollNo:number[] = [10,20,30,50,100,400];
// console.log(studentRollNo);
// console.log(studentRollNo[2]);
// console.log(studentRollNo[0]);
// console.log(studentRollNo[1]);
// console.log(studentRollNo[3]);
// console.log(studentRollNo[4]);
// console.log(studentRollNo[5]);
// console.log(studentRollNo[6]); //output: undefined
// 👉 section 2 (Update)
// var studentRollNo:number[] = [10,20,30,50,100,400];
// studentRollNo[2] = 88;
// console.log(studentRollNo[2]); //output: 88
// console.log(studentRollNo); // output:  [10,20,88,50,100,400];
// 👉 section 3 
// let studentName:string[] = ["Sumit","Amit","Kajal","Priyanka","Ajali"];
// studentName[5] = "Aditaya"  //output: [ 'Sumit', 'Amit', 'Kajal', 'Priyanka', 'Ajali', 'Aditaya' ]
// console.log(studentName);
// 👉 section 4 
// let studentNames:string[] = ["Sumit","Amit","Kajal","Priyanka","Ajali"];
// const pushArrayItem = (stdName: string) => {
//     studentNames[studentNames.length] = stdName;
// }
// pushArrayItem("Gupta");
// pushArrayItem("Kali");
// console.table(studentNames);
// 👉 section 5 
let studentNames = ["Sumit", "Amit", "Kajal", "Priyanka", "Ajali"];
// studentNames.push("Anjana"); //Appends new elements to the end of an array
// studentNames.pop();
// studentNames.pop();  //Removes the last element from an array
// studentNames.shift();  //Removes the first element from an array
// studentNames.unshift("kumar");  // Inserts new elements at the start of an array
// studentNames.splice(2,1,"Arjun"); // (all work for push,pop,shift,unshift using splice only)
// studentNames.splice(1,0,"karan"); 
// 🎏 push work with splice what do
// studentNames.splice(studentNames.length,0,"durga")
// 🎏 unshift work with splice what do
// studentNames.splice(0,0,"durga")
// 🎏 shift work with splice what do
// studentNames.splice(0,1)
// 🎏 pop work with splice what do
let lastIndexOfArr = studentNames.length - 1;
studentNames.splice(lastIndexOfArr, 1);
// const pushItem = (item:string) => {
//     studentNames[studentNames.length] = item;
// }
// pushItem("Kali")
console.table(studentNames);
