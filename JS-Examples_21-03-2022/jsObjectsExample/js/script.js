// Using the constructor function

function Engine(cyclinders, size) {
    this.cyclinders = cyclinders;
    this.size = size;
}

function Car(make, model, color, cyclinders, size) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.engine = new Engine(cyclinders, size);
}

let c1 = new Car("Nissan", "300ZX", "Blue", 4, 2.2);
console.log(c1);