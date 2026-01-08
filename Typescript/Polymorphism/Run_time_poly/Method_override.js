var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Parent class
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.calculateArea = function () {
        console.log("Calculating area of a shape");
    };
    return Shape;
}());
// Child class 1
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.calculateArea = function () {
        console.log("Area of Circle = π × r × r");
    };
    return Circle;
}(Shape));
// Child class 2
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calculateArea = function () {
        console.log("Area of Rectangle = length × breadth");
    };
    return Rectangle;
}(Shape));
// Main 
var shape;
shape = new Circle(); // parent reference → child object
shape.calculateArea(); // Circle method called
shape = new Rectangle(); // parent reference → another child object
shape.calculateArea(); // Rectangle method called
