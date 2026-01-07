#include <iostream>
using namespace std;
class Vehicle {
public:
    void move() {
        cout << "Vehicle moving" << endl;
    }
};

class Car : public Vehicle {
public:
    void fuel() {
        cout << "Fuel car" << endl;
    }
};

class ElectricCar : public Car {
public:
    void charge() {
        cout << "Charging electric car" << endl;
    }
};

int main() {
    ElectricCar e;
    e.move();
    e.fuel();
    e.charge();
}
