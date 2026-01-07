var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
    }
    SmartPhone.prototype.call = function () {
        console.log("Calling...");
    };
    SmartPhone.prototype.takePhoto = function () {
        console.log("Photo taken");
    };
    return SmartPhone;
}());
var sp = new SmartPhone();
sp.call();
sp.takePhoto();
