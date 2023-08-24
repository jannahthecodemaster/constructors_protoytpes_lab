const Dealership = require("./Dealership");
const Car = require("./Car"); 


beforeEach(() => {
    dealership = new Dealership("Carsthatgofar", 100)
});

test('can getDealershipName', () => {
    const expected = "Carsthatgofar"; 
    const actual = dealership.getDealershipName();
    expect(actual).toBe(expected);
});

test('can get dealership capacity', () => {
    const expected = 100;
    const actual = dealership.getCapacity();
    expect(actual).toBe(expected);
});

test('can add car to stock', () => {
    const car = new Car("Vauxhaull", 5000, "V4");
    const car2 = new Car("BMW", 3000, "V6");
    dealership.addCar(car);
    dealership.addCar(car2);
    const carsInStock = dealership.getCarsInStock();
    expect(carsInStock).toContain(car, car2);
})

test('can get stock count', () => {
    const expected = 0;
    const stockCount = dealership.countCarsInStock();
    expect(stockCount).toBe(expected);
})

test('can calculate total stock value', () => {
    const car = new Car("Vauxhaull", 5000, "V4");
    const car2 = new Car("BMW", 3000, "V6");
    dealership.addCar(car);
    dealership.addCar(car2);
    const expected = 8000;
    const totalValue = dealership.getTotalStockValue();
    expect(totalValue).toBe(expected);
})