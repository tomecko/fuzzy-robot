// Zadanie 1 - z wykładowcą

var car = {
    brand: "Peugeot",
    color: "grey",
    numberOfKilometers: 0,
    printCarInfo: function() {
        return this.brand + ", " + this.color + ", " + this.numberOfKilometers + "km"
    },
    drive: function(distance) {
        this.numberOfKilometers += distance;
    }
}

console.log(car.printCarInfo());
console.log(car.drive(10));
console.log(car.printCarInfo());

// Zadanie 1

car.service = ["01.01.2010"];

car.addService = function(arguments) {
    this.service.push(arguments);
}
car.addService("02.02.2011");
car.checkService = function() {
    return this.service;
}

console.dir(car);

// Zadanie 3

var stairs = {
    step: 0
}

stairs.up = function() {
    this.step++;
}

stairs.down = function() {
    this.step--;
}

stairs.printStep = function() {
    console.log(this.step);
}

stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep();