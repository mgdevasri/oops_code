#include <iostream>
using namespace std;

class Mobile {
public:
    string brand;
    int price;
};

int main() {
    Mobile m;   // default constructor
    cout << m.brand << endl;  // empty
    cout << m.price << endl;  // garbage value
}
