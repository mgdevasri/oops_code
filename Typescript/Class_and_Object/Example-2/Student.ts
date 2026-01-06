class Student {
    constructor(
        public name: string,
        public rollNo: number,
        public marks1: number,
        public marks2: number,
        public marks3: number
    ) {}

    showDetails() {
        console.log(`Name: ${this.name} | RollNo: ${this.rollNo}`);
        console.log(`Marks: ${this.marks1}, ${this.marks2}, ${this.marks3}`);
        let total = this.marks1 + this.marks2 + this.marks3;
        let avg = total / 3;
        console.log(`Total: ${total} | Average: ${avg}`);
    }
}

let s1 = new Student("SARAVANA", 101, 85, 90, 80);
let s2 = new Student("DEVASRI", 102, 75, 88, 92);

s1.showDetails();
console.log();
s2.showDetails();
