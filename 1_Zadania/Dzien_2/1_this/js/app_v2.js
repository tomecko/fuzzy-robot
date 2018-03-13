// Zadanie z wykladowca

var car = {
    brand: 'Peugeot',
    color: 'grey',
    numberOfKilometers: 0,
    printCarInfo: function() {
        return this.brand + ', ' + this.color + ', ' + this.numberOfKilometers + ' km';
    },
    drive: function(km) {
        this.numberOfKilometers += km;
    }
};

// console.log(car.printCarInfo());
// console.log(car.drive(10));
// console.log(car.printCarInfo());


// Zadanie 1

car.service = ['01.01.2010'];
console.dir(car);

car.addService = function(newService) {
    var serviceList = this.service;
    serviceList.push(newService);
    return serviceList;
}

car.addService('02.02.2012');
car.addService('03.03.2012');
console.dir(car);

car.checkService = function() {
    return this.service;
}

console.log(car.checkService());

// Zadanie 3

var stairs = {
    step: 0,
    up: function () {
        this.step++;
    },
    down: function () {
        this.step--;
    },
    printStep: function () {
        console.log(this.step);
    }
}

stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep();