#include <iostream>
using namespace std;

class Mobile {
public:
    string brand;
    int price;

    Mobile() {   // default constructor
        brand = "Samsung";
        price = 70000;
    }
};

int main() {
    Mobile m;
    cout << m.brand << endl;
    cout << m.price << endl;
}
