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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Surgeon = /** @class */ (function (_super) {
    __extends(Surgeon, _super);
    function Surgeon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Surgeon.prototype.treatPatient = function () {
        console.log("Treating patient");
    };
    Surgeon.prototype.doResearch = function () {
        console.log("Doing medical research");
    };
    Surgeon.prototype.performSurgery = function () {
        console.log("Performing surgery");
    };
    return Surgeon;
}(Person));
var surgeon = new Surgeon("Dr. Kumar");
surgeon.treatPatient();
surgeon.doResearch();
surgeon.performSurgery();
