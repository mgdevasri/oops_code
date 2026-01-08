#include <iostream>
using namespace std;

// Abstract class
class Shape {
public:
    // Pure virtual function
    virtual double area() = 0;

    // Normal method
    void display() {
        cout << "Calculating area..." << endl;
    }
};

// Derived class: Circle
class Circle : public Shape {
private:
    double radius;

public:
    Circle(double r) {
        radius = r;
    }

    double area() {
        return 3.14 * radius * radius;
    }
};

// Derived class: Rectangle
class Rectangle : public Shape {
private:
    double length, breadth;

public:
    Rectangle(double l, double b) {
        length = l;
        breadth = b;
    }

    double area() {
        return length * breadth;
    }
};

// Main function
int main() {

    Shape* s1 = new Circle(5);
    Shape* s2 = new Rectangle(4, 6);

    s1->display();
    cout << "Circle Area: " << s1->area() << endl;

    s2->display();
    cout << "Rectangle Area: " << s2->area() << endl;

    return 0;
}
