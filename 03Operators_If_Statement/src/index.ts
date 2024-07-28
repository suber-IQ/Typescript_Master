 
// 👉 part 1 (how to excution)
// var userName: string = "sumit";
// console.log(userName); //output: sumit

// var num1: number = 10;
// console.log(num1);  //output: 10

// var num2: number = 15; 
// console.log(num2); //output: 15

// var num3: number = 20;
// console.log(num3); //output: 20

// 👉 part 2 (how to excution)
// var userName: string = "sumit";
// var num1: number = 10;
// var num2: number = 15;
// var num3: number = 20;

// console.log(num3);  // output: 20
// console.log(num2);  // output: 15
// console.log(num1); // output: 10
// console.log(userName); //output: sumit


// 👉 Primitive data type (string,number,boolean,undefined,null)
// var newYear;   // datatype: undefined
// console.log(newYear);  //output: undefined

// var fullYear = null;   // datatype: null
// console.log(fullYear); //output: null

// 👉 Template literals (``)

// var titleName: string = "Gupta";
// var userName2: string = `sumit titleName`;  // this is Template literal
// var userName3: string = 'Sumit kumar';
// var userName4: string = `Sumit ${titleName}`;  // this is Template literal

// console.log(userName2); //output: sumit titleName
// console.log(userName4); //output: Sumit Gupta
// var user1: string = "sumit";
// var user2: string = " kumar";

// console.log(`hello world "How are you" 'and' Full Name is: ${user1} ${user2}`);  //output: hello world "How are you" 'and' Full Name is: sumit  kumar


// 👉 Check Data types (typeof)

// var userNum: number = 23;
// console.log(typeof userNum); //output: number

// var userString: string = "Hello, world";
// console.log(typeof userString); //output: string


// var userBool: boolean = true;
// console.log(typeof userBool); //output: boolean


// var userDefined;
// console.log(typeof userDefined); //output: undefined

// var userNull: null = null;
// console.log(typeof userNull);  //output: Object


// 👉 Operators (Arithematic operator)

// var num1:number = 10;
// var num2:number = 20;
// var result:number = num1 + num2;
// var result1:number = num2 - num1;
// var result2:number = num2 * num1;
// var result3:number = num2 / num1;
// var result4:number = num2 % num1;  //remender value gives result4
// var num3 = 5;
// var num4 = 2;
// var result7:number = num3 ** num4;  //(num3^num4) (5^2: 5 * 5 = 25)


// console.log(result);  //output: 30
// console.log(result1);  //output: 10
// console.log(result2);  //output: 200
// console.log(result3);  //output: 2
// console.log(result4);  //output: 0
// console.log(result7);  //output: 25

// var n1: number = 11;
// // var n2: number = 3;
// // var n2: number = 5;
// // var n2: number = 6;
// // var n2: number = 8;
// var n2: number = 10;
// var res:number = n2 % n1;
// console.log(res);




// 👉 Operators (Assignment Operators)

// var num1:number = 10;
// num1 + 20;
// console.log(num1); //output: 10

// // num1 = num1 + 5; 
// num1 += 5; 
// num1 -= 3; 
// console.log(num1);


// 👉 Operators (Comparison Operators) (given always boolean result)

// var n: number = 5;
// var n2:string = "5";

// console.log(n==5); //output: true (only value compare)
// // console.log(n===n2); //output:  This comparison appears to be unintentional because the types 'number' and 'string' have no overlap.
// console.log(n===7); //output: false   (also value and type compare)
// console.log(n!=5); //output:  false
// console.log(n > 8); //output: false 
// console.log(n < 8); //output: true
// console.log(n >= 8); //output: false
// console.log(n <= 5); //output: true


// var num1:number = 2;
// var num2:number = 5;
// var num3: number = 7;
// var result:number = num1 + num2 - num3 * 2 / 4;  //output: 0 
// operation:  2 + 5 - (7 * 2) /4
// operation:  2 + 5 - ((14) / 4 )
// operation:  2 + 5 - 3.5
// operation:  7 - 3.5
// operation:  3.5   //output:3.5  

// console.log(result); //output: 3.5
// console.log(Math.floor(result)); output: 3


// 👉 Operators (logical Operators)


// 🎄 AND (`&&`) Operators

// true && true = true     (1  && 1 = 1)
// true && false = false   (1  && 0 = 0)
// false && true = false   (0  && 1 = 0)
// false && false = false  (0  && 0 = 0)

// 🎄 OR (`||`) Operator

// true || true = true    (1  || 1 = 1)
// true || false = true   (1  || 0 = 1)
// false || true = true   (0  || 1 = 1)
// false || false = false (0  || 0 = 0)

// 🎄 NOT (`!`) Operator
// true = false     (!1 = 0)
// false = true     (!0 = 1)


// let isAdult: boolean = true;
// let hasLicense: boolean = false;
// var result:boolean = isAdult && hasLicense;
// var result1:boolean = isAdult || hasLicense;
// var result2:boolean = !isAdult;
// console.log(result); //output: false
// console.log(result1); //output: true
// console.log(result2); //output: false


// 👉  IF statement



if(false){
console.log("line1");
console.log("line2");
console.log("line3");
console.log("line4");
console.log("line5");
}
if(true){
console.log("line6");
console.log("line7");
console.log("line8");
console.log("line9");
console.log("line10");
}

 








