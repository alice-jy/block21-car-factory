//define the Car constructor function
class Car{
    constructor(make, model, year){
        this.make = make; 
        this.model = model; 
        this.year = year; 
    }
    getDescription(){
        return `${this.year} ${this.make} ${this.model}`;
    }
}

//define the ElectricCar constructor as a subclass of Car
class ElectricCar extends Car{
    constructor(make,model,year,range){
    //call the parent constructor using `call` to set the properties
    super(make,model,year);
    this.range = range; 
    }
    // override the getDescription method for ElectricCar
    getDescription(){
        return `${super.getDescription()} ${this.range}`;
    }
}
// create an instance of ElectricCar
const electricCar = {
    make: "Tesla",
    model: "Model S",
    year: 2019, 
  };
  // call the getDescription method on the instance
  const description = electricCar.getDescription();
  console.log(description); 

