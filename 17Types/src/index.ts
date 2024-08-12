let num: number = 10;
let userName: string = "Sumit kumar";
// userName = 234; //Type 'number' is not assignable to type 'string'.
let isCompleted: boolean = false;
let isNull: null = null; // empty
let isUndefined: undefined = undefined; // value is not defined
let isVoid: void = undefined;
// function printUserName(userName: string):void {
//     console.log("Print my name" , userName);
//     // return "hello";
//     // return 5;

// }
// const result = printUserName("sumit kumar");
// console.log("result: " , result, typeof result);
// 🌟🌟🌟🌟🌟🌟🌟🌟🌟
// let isAny: any = "anyThing"  // not check type (it means of any)
// isAny = 12;
// isAny = true;
// isAny = undefined
// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
let isUnknown: unknown = "String";
isUnknown = false;
isUnknown = undefined;
if (typeof isUnknown == "number") {
  isUnknown = 23;
}
// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
function returnError(): never {
  throw new Error("Any Error");

  // try {
  //   throw new Error("Any Error")

  // } catch (error) {

  // }
}

// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
type EmpType = {
  name: string;
  age: number;
  class: string;
};

let emp: EmpType = {
  name: "Ajay",
  age: 42,
  class: "Engineer",
};

let student: {
  name: string;
  email: string;
  phone: number;
} = {
  name: "Sumit",
  email: "sumit@gmail.com",
  phone: 9123423425,
};
let std: object = {
  name: "Sumit",
  email: "sumit@gmail.com",
  phone: 9123423425,
};
let stt: {} = {
  name: "Sumit",
  email: "sumit@gmail.com",
  phone: 9123423425,
};
// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

let data: number[] = [123, 456, 789, 92, 523, 235, 82];
// let data1:number[] = [123,456,789,92,523,235,82, "Sumit"]; //Type 'string' is not assignable to type 'number'
let dataString: string[] = ["Ajay", "Sumit", "Kali", "Ram"];
let tuple: [string, number, boolean] = ["Sumit", 20, true]; // each array index type defined
// let tuple:[string,number] = ["Sumit", 20,23,28]; // Type '[string, number, number, number]' is not assignable to type '[string, number]'.

tuple.push("amit"); // output: [ 'Sumit', 20, true, 'amit' ]
// console.log(tuple);
// console.log(tuple.length); //output: 4

// let newArr:[] = ["afdslj"];  //is causing a problem because you're declaring newArr with an explicit type of an empty tuple [], which means it should be an array that holds zero elements. However, you are trying to assign an array with one string element "afdslj" to it.
// let arr:[] = [];
// arr.push(10);

let newArr1: [number, string, boolean, { name: string }] = [
  23,
  "abc",
  true,
  { name: "sumit" },
];
// let newArr2 = ["sumit",234,false,true,{roll: 23},[234,234],"k",null,undefined];

// let datta = new Array(100)  // fixed size of array length always 100

type StudentType = {
  name: string;
  email: string;
  phone: number;
  // address?: string;
  // address?: string | null;
  address: string | null;
};

let newStudent: StudentType = {
  name: "Sumit",
  email: "sumitkumar@gmail.com",
  phone: 2308789234,
  address: "japur",
};

let students: StudentType[] = [
  { name: "Sumit", email: "sumit@gmail.com", phone: 9234234235, address: null },
  {
    name: "Amit",
    email: "Amit@gmail.com",
    phone: 8734234235,
    address: "jaipur",
  },
];

let students1: [StudentType, StudentType] = [
  { name: "Sumit", email: "sumit@gmail.com", phone: 9234234235, address: null },
  {
    name: "Amit",
    email: "Amit@gmail.com",
    phone: 8734234235,
    address: "jaipur",
  },
];

// let students2:[StudentType,StudentType,StudentType] = [{name: "Sumit",email: "sumit@gmail.com",phone: 9234234235,address: null},{name: "Amit",email: "Amit@gmail.com",phone: 8734234235, address: "jaipur"}]  //Error: Cannot redeclare block-scoped variable

// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
// 👉 Union
let num2: number | string = 234;
num2 = "Hello";
num2 = 234;
// num2 = null; // Error: Type 'null' is not assignable to type 'string | number'.

let num3: number | null = null;
num3 = 234;

type SHAPE = {
  area: number;
};
type CIRCLE = {
  size: string;
};

let newShape: SHAPE | CIRCLE = {
  area: 234,
};
let newShape1: SHAPE | CIRCLE = {
  area: 234,
  size: "8",
};
// 👉 Intersection Types
let newShape3: SHAPE & CIRCLE = {
  area: 234,
  size: "48",
};
// let newShape4: SHAPE & CIRCLE = {  //Type '{ area: number; }' is not assignable to type 'SHAPE & CIRCLE'.
//     area: 234,
// }

// let num4: number & null = null;  // intersection work on only objects

type ContactForm = {
  name: string;
  email: string;
  budget: number;
  // message?: string
  message: string | null;
};

let newContact: ContactForm = {
  name: "Sumit",
  email: "sumit@kumar.com",
  budget: 82234,
  message: null,
};
newContact.message;

// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// 👉 Enum

enum COLORS {
  RED, // index: 0
  GREEN, // index: 1
  BLUE, // index: 2
}
const whatColor: number = COLORS.BLUE;
// console.log(whatColor);

enum WEEKDAYS {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

// console.table(WEEKDAYS);

enum USERROLE {
  ADMIN,
  USER,
}
// const ADMIN = "ADMIN";  // not do this
// const USER = "USER";  // not do this
// const user = "user" // not do this

let newAdmin = {
  role: USERROLE.ADMIN,
  name: "Sumit",
};
let newUser = {
  role: USERROLE.USER,
  name: "Sumit",
};

// if("user" == "user") { // string compare not compatible besides the number compare is good performance)

// }
// if(23 = 23){  // easy(fast): (number is compare good performance)

// }

if (newAdmin.role == USERROLE.ADMIN) {
  // so here compare to (index == index){0 == 0} that means number compare is easy(fast)
  //something
}

// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
// 👉 Generics

// function swap(arr:number[]): number[] {
//    return [arr[1],arr[0]]
// }

// const result: number[] = swap([10,20]);
// console.log(result);

// function swap2(arr:string[]): string[] {
//    return [arr[1],arr[0]]
// }

// const result: string[] = swap2(["hello","world"]);
// console.log(result);

// 👉 do this upper problem solve with generics (logic is same but different parameters(type) do on working with generics)

function swap<T>(arr: T[]): T[] {
  return [arr[1], arr[0]];
}

const result: string[] = swap<string>(["hello", "world"]);
// console.log(result);

// const result1: number[] = swap([10,20]); // also write this work
const result1: number[] = swap<number>([10, 20]);
// console.log(result1);

const result2: boolean[] = swap<boolean>([true, false]);
// console.log(result2);

type StudentTypeA = {
  name: string;
  email: string;
};

// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
// 👉 interface
// type A = number | null
// interface B number | null // not working

interface TeacherA {
  class: string;
}

interface StudentTypeC extends TeacherA {
  rollNo: number;
  uni: string;
}
let newObj: StudentTypeC = {
  rollNo: 234,
  uni: "hello",
  class: "X",
};

interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  sku: string;
  weight: number;
}
interface IData {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

let dataDemo: IData = {
  products: [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
    },
  ],
  total: 194,
  skip: 0,
  limit: 30,
};

// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// 👉 Arrow func 

const myFunc = <T> (arr:T[]): T[] => {
    return arr;
}