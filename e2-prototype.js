function Vehicle (make, speed) {
  this.make = make;
  this.speed = speed;
}

Vehicle.prototype.accelerate = function (amount) {
    this.speed += amount;
  };

Vehicle.prototype.brake = function (amount) {
    this.speed -= amount;
  };

const myBora = new Vehicle ("Bora", 200);
console.log (myBora);

const myR12 = new Vehicle ("Renault 12L", 80);
console.log (myR12);