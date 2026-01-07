class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

interface Doctor {
    treatPatient(): void;
}

interface Researcher {
    doResearch(): void;
}

class Surgeon extends Person implements Doctor, Researcher {
    treatPatient(): void {
        console.log("Treating patient");
    }

    doResearch(): void {
        console.log("Doing medical research");
    }

    performSurgery(): void {
        console.log("Performing surgery");
    }
}

const surgeon = new Surgeon("Dr. Kumar");
surgeon.treatPatient();
surgeon.doResearch();
surgeon.performSurgery();
