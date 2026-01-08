// Parent class
class Shape {
    calculateArea(): void {
        console.log("Calculating area of a shape");
    }
}
// Child class 1
class Circle extends Shape {
    override calculateArea(): void {
        console.log("Area of Circle = π × r × r");
    }
}
// Child class 2
class Rectangle extends Shape {
    override calculateArea(): void {
        console.log("Area of Rectangle = length × breadth");
    }
}

// Main 
let shape: Shape;

shape = new Circle();      // parent reference → child object
shape.calculateArea();    // Circle method called

shape = new Rectangle();  // parent reference → another child object
shape.calculateArea();    // Rectangle method called
