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
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    User.prototype.login = function () {
        console.log(this.name + " logged in");
    };
    User.prototype.logout = function () {
        console.log(this.name + " logged out");
    };
    return User;
}());
// Child class: Admin //login and logout is inherits from the parent class 
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, email) {
        return _super.call(this, name, email) || this;
    }
    Admin.prototype.manageUsers = function () {
        console.log("Admin managing users");
    };
    return Admin;
}(User));
// Child class: Customer
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(name, email) {
        return _super.call(this, name, email) || this;
    }
    Customer.prototype.purchase = function () {
        console.log("Customer purchasing product");
    };
    return Customer;
}(User));
// Usage
var admin = new Admin("Devasri", "devasri@mail.com");
admin.login();
admin.manageUsers();
admin.logout();
var customer = new Customer("sara", "sara@mail.com");
customer.login();
customer.purchase();
customer.logout();
