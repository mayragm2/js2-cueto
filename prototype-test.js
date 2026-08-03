class Vehicle {
    constructor (make, speed){
        this.make = make;
        this.speed = speed; 
    } 
    accelerate(amount){
        this.speed += amount;
    }
}

const myFerrari = new Vehicle ("Ferrari", 280);
console.log (myFerrari);
myFerrari.accelerate(10);
console.log(myFerrari);