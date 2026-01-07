class Person {
    String name;

    Person(String name) {
        this.name = name;
    }
}

class Employee extends Person {
    int empId;

    Employee(String name, int empId) {
        super(name);
        this.empId = empId;
    }
}

class Manager extends Employee {
    Manager(String name, int empId) {
        super(name, empId);
    }

    void conductMeeting() {
        System.out.println(name + " conducting meeting");
    }
}

public class Multilevel{
    public static void main(String[] args) {
        Manager m = new Manager("John", 101);
        m.conductMeeting();
    }
}
