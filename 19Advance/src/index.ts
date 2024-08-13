// 👉 Type Assertions  

// const route = {
//     params: "Sumit"
// }
// // const value = route.params as number ; //Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first
// const value = route.params as string ;

// let capitalize = value.length

// let someValue : any = "this is a string";

// let strLength1:number = (someValue as string).length;
// let strLength2:number = (<string>someValue).length;

// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// 👉 Regular Functions

// function add(a:number, b:number):number{
//     return a + b;
// }

// console.log(add(2,4));

// 👉  Function Expressions

// const multiply = function (a:number, b:number):number{
//     return a * b;
// }

// console.log(multiply(2,4));

// 👉  Arrow Function 

// const subtract = (a:number, b:number):number => {
//     return a - b;
// }


// console.log(subtract(2,3));


// 👉 optional Function 

// function greet(name:string, greeting?:string):string{
//     return greeting ? `${greeting}` : `Hello, ${name}`
// }

// console.log(greet("Sumit"));
// console.log(greet("Sumit","Welcome to Typescript"));

// 👉 default parameter function

// function greet(name:string, greeting:string = "Hello"):string{
//     return `${greeting}, ${name}`
// }

// console.log(greet("Sumit"));
// console.log(greet("Sumit","Welcome to Typescript"));


// 👉 Rest parameter function

// function sum(...numbers: number[]): number {
//     // return numbers.reduce((prevs:number,curr:number):number => {
//     //     return prevs + curr;
//     // },0)
//     // OR 
//     return numbers.reduce((total,num) => total + num,0)
// }


// console.log(sum(1,2,4,5,6));

// 👉 some do this by function

// type Operation = (a:number, b:number) => number;

// const add:Operation = (a,b) => a + b;

// 👉 Literal Types in typescript

// string Literal type (like number,object,boolean,mix)
// type Greeting = "Hello" | "Hi" | "Kaise Ho";

// function greet(greeting: Greeting):void {
//     console.log(greeting);
    
// }

// greet("adsfa") //Argument of type '"adsfa"' is not assignable to parameter of type 'Greeting'.
// greet("Hi");


// 👉 namespace
// namespace registerValidation{
//    export function validateName(name:string):boolean {
//         return name.length > 2;
//     }
// }


// const isValidName = registerValidation.validateName(""); //return: false
// console.log(isValidName);

// 👉 Type Guards
// Type guard allow you to create more specific type checks within code blocks

// function isString(value:any):value is string{
//     return typeof value === "string";
// }

// function checking(value:string | number){
//     if(isString(value)){
//         console.log("Yes its string");
    
//     }else{
//         console.log("number");
        
//     }
// }

// checking("t") //output: Yes its string
// checking(2) //output: number

// 👉 index signature
// allow you to define types for dynamic property keys

// interface StringArray{
//     [index:number]: string;
// }
// let myArray: StringArray;
// myArray = ["Sumit","Typescript"]

// let myStr: string = myArray[0]
// // console.log(myStr);


// 👉 keyof operator
// interface Person{
//     name: string;
//     age:number;
// }
// type PersonKeys = keyof Person;
// let m:PersonKeys = "age";
// // console.log(m);

// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// 👉  UTILITY TYPES (Partial,Required,Readonly,Record,Pick,Omit)

 //🌠 optional
// interface Animal{
//     name: string;
//     sound: string;
//     // sound?: string;
// }
// type PartialAnimal = Partial<Animal>; //optional (add all of ? marks)

// // const dog:PartialAnimal = { // no error because all properties optional with help of Partial<>
    
// // }
// const dog:PartialAnimal = { // no error
//     name: "dellu",
//     sound: "bark"
// }

// 🌠 if Required 

// interface Animal{
//     name?: string;
//     sound?: string;
//     // sound: string;
// }

// type RequiredAnimal = Required<Animal>; //optional (add all of ? marks)

// // const dog: RequiredAnimal = { // Error: Type '{}' is missing the following properties from type 'Required<Animal>': name, sound

// // }
// const dog: RequiredAnimal = { 
//    name: "dellu",
//    sound: "bark",
// }

//🌠 Readonly 

// interface Animal{
//     name?: string;
//     sound?: string;
// }

// type ReadOnlyAnimal = Readonly<Animal>

// const dog: ReadOnlyAnimal = {
//     name: "dellu",
//     sound: "bark",
// }

// dog.name = "Timmy"; //Cannot assign to 'name' because it is a read-only property.

//🌠 Record 

// interface Animal{
//     name: string;
//     sound: string;
// }
// type ReadOnlyAnimal = Readonly<Animal>
// type RecordAnimal = Record<string,number> // value: number,any,mix etc..

// const dog: ReadOnlyAnimal = {
//     name: "dellu",
//     sound: "bark",
// }

// const record:RecordAnimal = {
//     name: 2,
//     sound: 234
//     // sound: "hello" // Type 'string' is not assignable to type 'number'
// }

// //🌠 Pick
// type NameOnly = Pick<Animal,"name">;

// let cat:NameOnly = {
//     name: "shoophie",
//     // sound: "Meow"  //Object literal may only specify known properties, and 'sound' does not exist in type 'NameOnly'.ts(2353)
// }

//🌠 Omit
// interface Animal{
//     name: string;
//     sound: string;
//     color: string;
// }


// type OmitOnly = Omit<Animal,"name">;
// let rabbit:OmitOnly = {
//     // name: "sophie" // Error : Object literal may only specify known properties, and 'name' does not exist in type 'OmitOnly'
//     sound: "meow",
//     color: "white"
// }
