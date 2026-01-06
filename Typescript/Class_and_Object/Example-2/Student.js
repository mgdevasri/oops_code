var Student = /** @class */ (function () {
    function Student(name, rollNo, marks1, marks2, marks3) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks1 = marks1;
        this.marks2 = marks2;
        this.marks3 = marks3;
    }
    Student.prototype.showDetails = function () {
        console.log("Name: ".concat(this.name, " | RollNo: ").concat(this.rollNo));
        console.log("Marks: ".concat(this.marks1, ", ").concat(this.marks2, ", ").concat(this.marks3));
        var total = this.marks1 + this.marks2 + this.marks3;
        var avg = total / 3;
        console.log("Total: ".concat(total, " | Average: ").concat(avg));
    };
    return Student;
}());
var s1 = new Student("SARAVANA", 101, 85, 90, 80);
var s2 = new Student("DEVASRI", 102, 75, 88, 92);
s1.showDetails();
console.log();
s2.showDetails();
