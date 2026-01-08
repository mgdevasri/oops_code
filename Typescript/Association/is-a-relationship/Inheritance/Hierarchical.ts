class Vehicle {
    start() {
        console.log("Vehicle started");
    }
}

class Car extends Vehicle {
    airConditioner() {
        console.log("AC ON");
    }
}

class Bike extends Vehicle {
    kickStart() {
        console.log("Bike kick started");
    }
}

const car = new Car();
car.start();
car.airConditioner();

const bike = new Bike();
bike.start();
bike.kickStart();
