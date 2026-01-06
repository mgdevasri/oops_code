var Mobile = /** @class */ (function () {
    function Mobile(brand, model, price, battery) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.battery = battery;
    }
    Mobile.prototype.showDetails = function () {
        console.log("".concat(this.brand, " ").concat(this.model, " | Price: ").concat(this.price, " | Battery: ").concat(this.battery, "%"));
    };
    Mobile.prototype.charge = function (amount) {
        this.battery += amount;
        console.log("Battery charged to ".concat(this.battery, "%"));
    };
    return Mobile;
}());
var m1 = new Mobile("Samsung", "Galaxy S21", 70000, 50);
var m2 = new Mobile("Apple", "iPhone 13", 90000, 30);
m1.showDetails();
m1.charge(20);
m2.showDetails();
m2.charge(40);
