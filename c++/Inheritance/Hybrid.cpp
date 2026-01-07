#include <iostream>
using namespace std;

// Base class
class Person {
public:
    void showIdentity() {
        cout << "I am a person" << endl;
    }
};
// Single inheritance
class MedicalStaff : public Person {
public:
    void work() {
        cout << "Medical staff working" << endl;
    }
};
// Multiple inheritance (Level 1)
class Doctor : virtual public MedicalStaff {
public:
    void treatPatient() {
        cout << "Doctor treating patient" << endl;
    }
};
class Nurse : virtual public MedicalStaff {
public:
    void assistDoctor() {
        cout << "Nurse assisting doctor" << endl;
    }
};
// Hybrid inheritance (Multiple + Multilevel)
class Surgeon : public Doctor, public Nurse {
public:
    void performSurgery() {
        cout << "Surgeon performing surgery" << endl;
    }
};

int main() {
    Surgeon s;

    s.showIdentity();      // From Person
    s.work();              // From MedicalStaff
    s.treatPatient();      // From Doctor
    s.assistDoctor();      // From Nurse
    s.performSurgery();    // Own method

    return 0;
}
