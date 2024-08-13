// class Laptop{
//    brand:string;
//    price:number;
//    constructor(brand:string, price:number){
//     this.brand = brand;
//     this.price = price;
//    }
 
//    startLaptop(){
//         console.log("Starting laptop...", this.brand, this.price);
//    }
// }

// let newLaptop = new Laptop("Dell",24000);
// let newLaptop2 = new Laptop("Hp",45000);

// newLaptop2.startLaptop();
// newLaptop.startLaptop();


// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// class Laptop{
//    brand:string = "default value";
//    price:number =0;
  
//    setClassProperties(a:string,b:number){
//       this.brand = a;
//       this.price = b;
//    }
//    startLaptop(){
//         console.log("Starting laptop...", this.brand, this.price);
//    }
// }

// let newLaptop1 = new Laptop();

// newLaptop1.setClassProperties("dell",24000);


// let newLaptop2 = new Laptop(); 
// let newLaptop3 = new Laptop(); 

// newLaptop2.setClassProperties("hp",45000);
// newLaptop3.brand = "Microsoft"
// newLaptop3.price = 32000;

// console.log("newLaptop2: " ,newLaptop2.brand ," " ,newLaptop2.price);
// console.log("newLaptop1: " ,newLaptop1.brand ," " ,newLaptop1.price);
// console.log("newLaptop3: " ,newLaptop3.brand ," " ,newLaptop3.price);

// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// class Laptop{
//    brand:string = "default value";
//    price:number =0; 
//    constructor(a:string,b:number,c:boolean){
//       console.log("console in constructor");
//       this.brand = a;
//       this.price = b;
      
//    }
//    setClassProperties(a:string,b:number){
//             this.brand = a;
//             this.price = b;
//          }

//    startLaptop(){
//         console.log("Starting laptop...", this.brand, this.price);
//    }
// } 
// let newLaptop = new Laptop;
// newLaptop.brand = "dell";
// newLaptop.price = 2344324;
// console.log(newLaptop);  // output: Laptop { brand: 'dell', price: 2344324 }

// let newLaptop1 = new Laptop("Hp",234,true); // console in constructor
// newLaptop1.setClassProperties("dell",5256);
// newLaptop1.setClassProperties("apple",100000);
// console.log("newLaptop1: ", newLaptop1); // output: newLaptop1:  Laptop { brand: 'Hp', price: 234 }


// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟



// interface ILaptop{
//    brand:string;
//    price: number;
//    setClassProperties(brand:string,price:number):string;
//    // setClassProperties: (brand:string,price:number) => void;
//    // setClassProperties(brand:string,price:number):void;
//    // startLaptop: () => void;
//    startLaptop():void;
// }
// interface IApple{
//    isTrue:boolean;
// }
// class Laptop implements ILaptop,IApple{
//    brand:string;
//    price:number;
//    isTrue:boolean; 
//    constructor(a:string,b:number,c:boolean){
//       console.log("console in constructor");
//       this.brand = a;
//       this.price = b;
//       this.isTrue = c;
      
//    }
//    setClassProperties(brand:string,price:number): string{
//             this.brand = brand;
//             this.price = price;
//             return brand;
//    }

//    startLaptop():void{
//         console.log("Starting laptop...", this.brand, this.price);
//    }
// } 

// let newLaptop1:ILaptop = new Laptop("Hp",234,false); 
// let k:string = newLaptop1.setClassProperties("Asus",43000)
// console.log(k);


// console.log("newLaptop1",newLaptop1);


// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// 👉 function overriding (same name,same prameter,same return type,but logic is different)
// function sum(num1: number, num2: number):number{
//    return num1 + num2;
// }

// function sum(num1: number, num2: number):number{
//    return num1 * num2;
// }
// overriding: In TypeScript, method overriding involves using the same method name, parameters, and return type, but with different logic in the subclass compared to the superclass.
// sum();


// 👉 function overloading  (same name different parameters)
// function sum(num1: number, num2: number):number{
//    return num1 + num2;
// }

// function sum(color:string,num1:number):number{
//    return 4;

// }

// sum(12,234); // first sum func 
// sum("red",894); // first sum func 

// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
// 👉 Inheritance 

// class Parent{
//    title:string = "BMW"
// }

// class Child extends Parent{
//    description:string = "my description"
// }

// // const parentObject = new Parent();
// // parentObject.title;

// const childObject = new Child()
// childObject.description;
// // console.log("childObject.title: " + childObject.title);


// class Shape{
//    width: number = 0;
//    height: number = 0;

//    constructor(width:number, height:number){
//      this.width = width;
//      this.height = height;
//    }

//    getArea():number{
//       return this.width * this.height
//    }
  
// }

// // const shape = new Shape(10,20);
// // shape.getArea();

// class Circle extends Shape{
//    radius: number = 0;
//    constructor(radius:number,width:number,height:number){
//       super(width,height);
//       this.radius = radius;
//    }
//    getArea():number{
//       return 3.14 * (this.radius * this.radius)
//    }
//    // getArea():number{
//    //    return this.radius * this.width //output: 8 (2 * 4)
//    // }
    
// }
// class Cube extends Shape{
//    third:number = 0;

//    constructor(third:number,width:number,height:number){
//       super(width,height);
//       this.third = third;
//    }
//    getArea():number{
//       return this.height * this.third * this.width;
//    }
// }

// const circle = new Circle(2,4,2);
// let area:number = circle.getArea();
// console.log(area); 

// 👉 multilevel inheritance 


// Base class (Parent class)
// class Animal {
//    eat(): void {
//        console.log("This animal eats food.");
//    }
// }

// // Derived class (Child class of Animal)
// class Dog extends Animal {
//    bark(): void {
//        console.log("The dog barks.");
//    }
// }

// // Further derived class (Child class of Dog)
// class Puppy extends Dog {
//    play(): void {
//        console.log("The puppy plays with a ball.");
//    }
// }

// // Creating an instance of the Puppy class
// const myPuppy = new Puppy();

// myPuppy.eat();  // Inherited from Animal class
// myPuppy.bark(); // Inherited from Dog class
// myPuppy.play(); // Method of Puppy class


// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// 👉 Encapsulation (Private,Protected,public)


// class Bank{
//    public balance: number = 0.00;
//    getBalance(){
//      return this.balance;  
//    }
// }

// class Accounts extends Bank{
//    private transactions:number[] = [];
// }

// const account = new Accounts();
// account.transactions  // is not accessible

 

// class Bank{
//    // private balance: number = 0.00;
//    protected balance: number = 0.00;
//    private getBalance(){
//      return this.balance;  
//    }
// }

// class Accounts extends Bank{
//    public transactions:number[] = [];
//    public showBalance(){
//       console.log("balancen is: " + this.balance); // protected
      
//    }
// }

// const account = new Accounts();
// // account.balance  // is not accessible (if private)
// // account.getBalance  // is not accessible (if private)
//  account.showBalance();


 // 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// 👉 polymorphism : super type is defined

// interface IShape{
//    getArea():number
// }

// class Circle implements IShape{
//    // public radius:number = 0; 
//     constructor(public radius:number){
//       //   this.radius = radius; // is not required asign already asign constructor(public radius:number)
//     }
//     getArea():number {
//       return parseFloat((Math.PI * this.radius ** 2).toFixed(2)); // Math.PI(3.14)
//     }

// }

// class Reactangle implements IShape{
//      constructor(public width:number,public height:number){}
//      getArea():number{
//       return this.width * this.height;
//      }
// }

// const shapes:IShape[] = [new Circle(10),new Reactangle(5,7)];

// shapes.forEach((shape) => {
//    console.log("Get Area: " + shape.getArea());
// })

 // 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// 👉 Abstract

// interface IShape{
//    getArea():number  // purly abstraction (here don't define definitions)
// }
// abstract class AShape{
  
//    getArea(){   // define definition  (also define definition advantage but interface have only asigned functions without definition)
//       return 8;
//    }
//    abstract display():void; // not defined definition
// }

// class Circle extends AShape{
//    // public radius:number = 0; 
//     constructor(public radius:number){
//       super()
//       //   this.radius = radius; // is not required asign already asign constructor(public radius:number)
//     }
//     getArea():number {
//       return parseFloat((Math.PI * this.radius ** 2).toFixed(2)); // Math.PI(3.14)
//     }

//    //  write this abstract method implements 
//    display(): void {
//        console.log("hello world!");
       
//    }

// }

// class Reactangle extends AShape{
//      constructor(public width:number,public height:number){
//       super();
//      }
//      getArea():number{
//       return this.width * this.height;
//      }
// }

// const shapes:IShape[] = [new Circle(10),new Reactangle(5,7)];

// shapes.forEach((shape) => {
//    console.log("Get Area: " + shape.getArea());
// })


 // 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// 👉 static keyword

class Counter {
   // Static variable to keep track of the count
   static count: number = 0;

   constructor() {
       // Increment the static count when a new instance is created
       Counter.count++;
   }

   // Static method to get the current count
   static getCount(): number {
       return Counter.count;
   }
}

// Creating instances of the Counter class
const counter1 = new Counter();
const counter2 = new Counter();
const counter3 = new Counter();

// Accessing the static variable and method using the class name
console.log(Counter.getCount()); // Output: 3









