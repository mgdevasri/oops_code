#include <iostream>
using namespace std;

class Device {
public:
    void powerOn() {
        cout << "Device powered on" << endl;
    }
};

class Laptop : public Device {
public:
    void code() {
        cout << "Coding on laptop" << endl;
    }
};

int main() {
    Laptop l;
    l.powerOn();
    l.code();
}
