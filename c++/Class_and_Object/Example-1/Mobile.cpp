#include <iostream>
using namespace std;

class Mobile {
public:
    string brand;
    string model;
    double price;
    int battery;

    Mobile(string b, string m, double p, int bat) {
        brand = b;
        model = m;
        price = p;
        battery = bat;
    }

    void showDetails() {
        cout << brand << " " << model << " | Price: " << price << " | Battery: " << battery << "%" << endl;
    }

    void charge(int amount) {
        battery += amount;
        cout << "Battery charged to " << battery << "%" << endl;
    }
};

int main() {
    Mobile m1("Samsung", "Galaxy S21", 70000, 50);
    Mobile m2("Apple", "iPhone 13", 90000, 30);

    m1.showDetails();
    m1.charge(20);

    m2.showDetails();
    m2.charge(40);

    return 0;
}
