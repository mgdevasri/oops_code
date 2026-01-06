#include <iostream>
using namespace std;

class Student {
public:
    string name;
    int rollNo;
    int marks1, marks2, marks3;

    Student(string n, int r, int m1, int m2, int m3) {
        name = n;
        rollNo = r;
        marks1 = m1;
        marks2 = m2;
        marks3 = m3;
    }

    void showDetails() {
        cout << "Name: " << name << " | RollNo: " << rollNo << endl;
        cout << "Marks: " << marks1 << ", " << marks2 << ", " << marks3 << endl;
        int total = marks1 + marks2 + marks3;
        double avg = total / 3.0;
        cout << "Total: " << total << " | Average: " << avg << endl;
    }
};

int main() {
    Student s1("SARAVANA", 101, 85, 90, 80);
    Student s2("DEVASRI", 102, 75, 88, 92);

    s1.showDetails();
    cout << endl;
    s2.showDetails();

    return 0;
}
