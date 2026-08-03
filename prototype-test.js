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
const myBora = new Vehicle ("WV Bora", 200);
console.log (myFerrari);
console.log(`The best car is the ${myBora.make}, it has a speed of ${myBora.speed} km/h`);
myFerrari.accelerate(10);
console.log(myFerrari);
