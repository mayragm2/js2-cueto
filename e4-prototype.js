class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
  eat(amount) {
    this.energy += amount;
  }
}

const leo = new Animal("Leo", 7);

class Dog extends Animal {
    constructor (name, energy) {
        super(name, energy);
    }
     
    play (length){
    if (length > this.energy){
        console.log ("Your dog does not have enough energy.");
    } else {
    this.energy -= length;
    console.log (`Your dog, ${this.name} has played for ${length} minutes. It has ${this.energy} energy points remaining.`);
    }}
}

const d1 = new Dog ("Rex", 7);

console.log (d1);
d1.play(5);

console.log(d1);
d1.eat(10);

console.log (d1);
d1.play (12);

d1.play (2);