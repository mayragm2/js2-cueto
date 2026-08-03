class Vehicle {
    constructor (make, speed){
        this.make = make;
        this.speed = speed; 
    } 
    accelerate(amount){
        this.speed += amount;
    }
    brake(amount){
        this.speed -= amount;
    }
}

const myFerrari = new Vehicle ("Ferrari", 280);
const myBora = new Vehicle ("WV Bora", 200);
console.log(`The best car is the ${myBora.make}, it has a speed of ${myBora.speed} km/h`);

console.log (myFerrari);    //Print myFerrari status
myFerrari.accelerate(10);   //Accelerate myFerrari
console.log(myFerrari);     //Print myFerrari status
myFerrari.brake(10);        //Brake myFerrari
console.log (myFerrari);    //Print myFerrari status

console.log(myFerrari.accelerate === myBora.accelerate);

