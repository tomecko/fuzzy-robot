var Robot = function(name) {
  this.name = name;
  this.isFunctional = true;
}

Robot.prototype.sayHi = function(toWho) {
  if(this.isFunctional === true){
    console.log("Robot " + this.name + " greets " + toWho);
  }
  else{
    console.log("Robot " + this.name + "is broken");
  }
};

Robot.prototype.changeName = function(newname) {
  console.log("Robot " + this.name + "changes name to " + newname);
  this.name = newname;
};

Robot.prototype.fixIt = function() {
  if (this.isFunctional === true) {
      console.log("Robot " + this.name + "was fixed");
  } else {
      console.log("Robot " + this.name + "was not fixed");
  }
};

var robot1 = new Robot('First');
console.log(robot1.sayHi('Terminator'));