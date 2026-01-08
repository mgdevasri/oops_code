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
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    return Person1;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, rollNo) {
        var _this = _super.call(this, name) || this;
        _this.rollNo = rollNo;
        return _this;
    }
    return Student;
}(Person1));
var CollegeStudent = /** @class */ (function (_super) {
    __extends(CollegeStudent, _super);
    function CollegeStudent(name, rollNo, course) {
        var _this = _super.call(this, name, rollNo) || this;
        _this.course = course;
        return _this;
    }
    return CollegeStudent;
}(Student));
var cs = new CollegeStudent("Arun", 101, "CSE");
console.log(cs.name, cs.rollNo, cs.course);
