// Q3: Write a program that checks if a given number is positive, negative or zero.

// 👉 issue code 
// var givenNumber: number = 10;

// if(givenNumber > 0){
//     console.log("positive number");
    
// }
// if(givenNumber < 0){
//     console.log("negative number");
    
// }
// if(givenNumber == 0){
//     console.log("zero number");
    
// }

// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
// var givenNumber: number = 10;

// if(givenNumber > 0){
//     console.log("positive number");
    
// }else if(givenNumber < 0){
//     console.log("negative number");
    
// }else{
//     console.log("zero number");
    
// }


// var marks: number = 85;

// if (marks > 80) {
//     console.log("Student Grade A");
// } else if (marks <= 80 && marks >= 70) {
//     console.log("Student Grade B");
// } else if (marks < 70 && marks >= 60) {
//     console.log("Student Grade C");
// } else if (marks < 60 && marks >= 50) {
//     console.log("Student Grade D");
// } else {
//     console.log("Student Grade F");
// }


// 👉 switch statement 

var section: string = "K";

switch (section) {
    case "A":
          console.log("Your class timing is every sunday 9Am - 1Pm");
        break;
    case "B":
        console.log("Your class timing is every Monday 8Am - 12Pm");
    case "C":
        console.log("Your class timing is every Tuesday 2pm - 6Pm");
    default:
        console.log("Your class timing is every Wednesday 12pm - 4Pm");
        break;
}