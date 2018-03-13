function Calculator() {
    this.history = []
}

Calculator.prototype.add = function(num1, num2) {
    var result = num1 + num2;
    this.history.push('added ' + num1 + ' to ' + num2 + ' got ' + result);
    return result;
}

Calculator.prototype.multiply = function(num1, num2) {
    var result = num1 * num2;
    this.history.push('multipled ' + num1 + ' by ' + num2 + ' got ' + result);
    return result;
}

Calculator.prototype.substract = function(num1, num2) {
    var result = num1 - num2;
    this.history.push('substracted ' + num2 + ' from ' + num1 + ' got ' + result);
    return result;
}

Calculator.prototype.divide = function(num1, num2) {
    var result = num1 / num2;
    this.history.push('divided ' + num1 + ' by ' + num2 + ' got ' + result);
    return result;
}

Calculator.prototype.printOperations = function() {
    console.log(this.history);
}

Calculator.prototype.clearOperations = function() {
    this.history = [];
}


console.dir(Calculator);
var operacja1 = new Calculator();
console.log(operacja1.add(1,2));
console.log(operacja1.multiply(2,3));
console.log(operacja1.substract(5,1));
console.log(operacja1.divide(4,2));
console.dir(operacja1);
operacja1.printOperations();
operacja1.clearOperations();
operacja1.printOperations();