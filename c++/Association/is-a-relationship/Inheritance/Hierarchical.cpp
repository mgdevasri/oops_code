#include <iostream>
using namespace std;
class Employee {
public:
    void work() {
        cout << "Employee working" << endl;
    }
};

class Developer : public Employee {
public:
    void code() {
        cout << "Developer coding" << endl;
    }
};

class Tester : public Employee {
public:
    void test() {
        cout << "Tester testing" << endl;
    }
};

int main() {
    Developer d;
    Tester t;
    d.work(); d.code();
    t.work(); t.test();
}
