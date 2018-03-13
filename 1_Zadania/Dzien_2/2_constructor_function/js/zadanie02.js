function Calculator() {
    this.history = [];
}

Calculator.prototype.printOperations = function() {
    console.log('Operation list: ');
    for (i=0; i<history.length; i++) {
        var operation = this.history[i];
        console.log(operation);
    }
};

Calculator.prototype.clearOperations = function() {
    this.history = [];
};

Calculator.prototype.add = function(num1, num2) {
    var result = num1 + num2;
    this.history.push("added " + num1 + " to " + num2 + " got " + result);
    return result;
};

Calculator.prototype.multiply = function(num1, num2) {
    var result = num1 * num2;
    this.history.push("multiplied " + num1 + " by " + num2 + " got " + result);
    return result;
};

Calculator.prototype.substract = function(num1, num2) {
    var result = num1 - num2;
    this.history.push("substracted " + num1 + " from " + num2 + " got " + result);
    return result;
};

Calculator.prototype.divide = function(num1, num2) {
    var result = num1 / num2;
    this.history.push("divided " + num1 + " by " + num2 + " got " + result);
    return result;
};

var calc = new Calculator();

console.log(calc.add(1,2));
console.log(calc.substract(2,1));
console.log(calc.printOperations());
console.log(calc.clearOperations());
console.log(calc.printOperations());