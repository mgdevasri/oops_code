var UserSession = /** @class */ (function () {
    function UserSession(username) {
        this.isLoggedIn = false;
        this.username = username;
    }
    UserSession.prototype.login = function () {
        if (!this.isLoggedIn) {
            this.isLoggedIn = true;
            console.log("".concat(this.username, " logger in"));
        }
        else {
            console.log("User already logged in");
        }
    };
    UserSession.prototype.logout = function () {
        if (this.isLoggedIn) {
            this.isLoggedIn = false;
            console.log("".concat(this.username, " logged out"));
        }
        else {
            console.log("User is not logged in");
        }
    };
    UserSession.prototype.getstatus = function () {
        return this.isLoggedIn ? "Logged In" : "Logged Out";
    };
    return UserSession;
}());
var user = new UserSession("devasri");
user.login();
console.log(user.getstatus());
user.logout();
