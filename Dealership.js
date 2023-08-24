const Car = require("./Car"); 

const Dealership = function(name, capacity){
    this.name = name;
    this.capacity = capacity;
    this.carsInStock = [];
}

// getters and setters 

Dealership.prototype.getDealershipName = function() {return this.name}

Dealership.prototype.setDealershipName = function(newName) {
     this.name = newName;
    }

Dealership.prototype.getCapacity = function () { return this.capacity}
    
Dealership.prototype.setCapacity = function(newCapacity) {
        this.price = newCapacity;
    } 

Dealership.prototype.getCarsInStock = function() {
    return this.carsInStock
}   

// METHODS: 

// adding cars to stock 

Dealership.prototype.addCar = function (car) {
    this.carsInStock.push(car);
}

const car1 = new Car("Toyota", 12000, "V8");
const car2 = new Car("Mercedes", 15000, "V6");

const dealership1 = new Dealership("Hotwheel cars", 100);
dealership1.addCar(car1);
dealership1.addCar(car2);
console.log("Cars in stock: ", dealership1.getCarsInStock());

//counting stock 

Dealership.prototype.countCarsInStock = function() {
    return this.carsInStock.length;
}

const dealership2 = new Dealership("Lucky cars", 200);
console.log("Cars in stock:", dealership2.countCarsInStock());


// return array containing each car's manufacturer

Dealership.prototype.getCarManufacturers = function() {
    return this.carsInStock.map(car => car.getManufacturer());
}

const carManufacturers = dealership2.getCarManufacturers();
console.log("Car manufacturers: ", carManufacturers);

// find all cars from a given manufacturer (Toyota)

Dealership.prototype.getToyotaCars = function() {
    return this.carsInStock.reduce((toyotaCars, car) => {
        if (car.getManufacturer() === "Toyota") {
            toyotaCars.push(car);
        }
        return toyotaCars;
    }, []);
}

const toyotaCars = dealership2.getToyotaCars();
console.log("Toyota cars:", toyotaCars);

// total stock value 

Dealership.prototype.getTotalStockValue = function() {
    return this.carsInStock.reduce((reducer, car) => reducer + car.price, 0);
}

const totalValue = dealership2.getTotalStockValue();
console.log("Total value of cars in stock: ", totalValue);

module.exports = Dealership;