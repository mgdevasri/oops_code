#include <iostream>
using namespace std;

// Parent class
class Employee {
protected:
    string name;
    int empId;

public:
    Employee(string n, int id) {
        name = n;
        empId = id;
    }

    void work() {
        cout << name << " is working" << endl;
    }
};

// Child class: Manager
class Manager : public Employee {
public:
    Manager(string n, int id) : Employee(n, id) {}

    void conductMeeting() {
        cout << "Manager conducting meeting" << endl;
    }
};

// Child class: Developer
class Developer : public Employee {
public:
    Developer(string n, int id) : Employee(n, id) {}

    void writeCode() {
        cout << "Developer writing code" << endl;
    }
};

int main() {
    Manager m("Devasri", 101);
    m.work();
    m.conductMeeting();

    Developer d("Sara", 102);
    d.work();
    d.writeCode();

    return 0;
}
