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
var BankAccount1 = /** @class */ (function () {
    function BankAccount1(balance) {
        this.balance = balance;
    }
    BankAccount1.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount1;
}());
var SavingsAccount1 = /** @class */ (function (_super) {
    __extends(SavingsAccount1, _super);
    function SavingsAccount1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SavingsAccount1.prototype.addInterest = function () {
        this.balance += 500;
    };
    return SavingsAccount1;
}(BankAccount1));
var ac = new SavingsAccount1(5000);
ac.addInterest();
console.log(ac.getBalance());
