// let userName:string = "Sumit";
// let userNames:string[] = ["Sumit","Amit","Anjali","Ajay"];
// let car:string[] = ["color","white","price","2M","company", "honda"];

// console.log(car[0])

// 👉 section 1:

// let car = {
//    color: "white",
//    price: "2M",
//    company: "Honda",
//    year: 2024,
//    run: function() {
//       //code here
//    }
// }

// console.table(car);
// console.log("car color: " + car.color);

// 👉 section 2:
// let car1 = {
//     company: "Honda",
//     color: "black"
// }
// let car2 = {
//     company: "kia",
//     color: "gray"
// }
// let car3 = {
//     company: "toyota",
//     color: "white"
// }

// let cars = [car1, car2, car3];

// console.table(cars)
// console.log("zero index of cars arr: " , cars[0])
// console.log("zero index of cars arr into company: " + cars[1].company)

// 👉 section 3:

type CarTypes = {
  company: string;
  color: string;
  price?: string; // ? is optional
  year: number;
  isUsedCar: boolean;
  speed?: (a:string, b:number) => string;
};

let car: CarTypes = {
  color: "white",
  company: "Honda",
  year: 2024,
  isUsedCar: false,
  speed: function (a,b) {
    //code here
    let speed: string = "500km/h"
    return speed;
  },
};

let car1: CarTypes = {
  color: "blue",
  price: "1.2L",
  company: "pulsar",
  year: 2014,
  isUsedCar: false,
  speed: function (a,b){
    let speed: string = "80km/h"
    return speed;  
  }
};
let car2: CarTypes = {
  color: "black",
  price: "2M",
  company: "beloro",
  year: 2011,
  isUsedCar: true,
};

let cars: CarTypes[] = [car, car1, car2];

console.table(cars);
