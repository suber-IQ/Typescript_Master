"use strict";
// let userName:string = "Sumit";
// let userNames:string[] = ["Sumit","Amit","Anjali","Ajay"];
// let car:string[] = ["color","white","price","2M","company", "honda"];
let car = {
    color: "white",
    company: "Honda",
    year: 2024,
    isUsedCar: false,
    speed: function (a, b) {
        //code here
        let speed = "500km/h";
        return speed;
    },
};
let car1 = {
    color: "blue",
    price: "1.2L",
    company: "pulsar",
    year: 2014,
    isUsedCar: false,
    speed: function (a, b) {
        let speed = "80km/h";
        return speed;
    }
};
let car2 = {
    color: "black",
    price: "2M",
    company: "beloro",
    year: 2011,
    isUsedCar: true,
};
let cars = [car, car1, car2];
console.table(cars);
