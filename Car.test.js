const Car = require("./Car");

beforeEach(()=> {
    BMW = new Car("BMW",20000,"Petrol")
  });

describe('Showing car details', () => {   
  test('can getManufacturer', () => {
    const expected = "BMW";
    const actual = BMW.getManufacturer();
    expect(actual).toBe(expected);
  });

      
  test('can getPrice', () => {
    const expected = 20000;
    const actual = BMW.getPrice();
    expect(actual).toBe(expected);
  });

      
  test('can getEngineType', () => {
    const expected = "Petrol";
    const actual = BMW.getEngineType();
    expect(actual).toBe(expected);
  })

});