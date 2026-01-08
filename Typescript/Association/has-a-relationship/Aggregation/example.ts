class Freelancer {
    constructor(public name: string) {}

    show(): void {
        console.log(`Freelancer: ${this.name}`);
    }
}
//Aggregator class
class Company {
    constructor(
        public companyName: string,
        private freelancers: Freelancer[]
    ) {}

    showCompany(): void {
        console.log(`Company: ${this.companyName}`);
        this.freelancers.forEach(f => f.show());
    }
}

// Independent freelancers
const f1 = new Freelancer("Devasri");
const f2 = new Freelancer("Saravan");

// Company aggregates freelancers
const company = new Company("EI", [f1, f2]);
company.showCompany();

// Company closed
console.log("Company closed, freelancers still exist:");
f1.show();
f2.show();
