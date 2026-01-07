class Person1 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Student extends Person1 {
    rollNo: number;
    constructor(name: string, rollNo: number) {
        super(name);
        this.rollNo = rollNo;
    }
}

class CollegeStudent extends Student {
    course: string;
    constructor(name: string, rollNo: number, course: string) {
        super(name, rollNo);
        this.course = course;
    }
}

const cs = new CollegeStudent("Arun", 101, "CSE");
console.log(cs.name, cs.rollNo, cs.course);
