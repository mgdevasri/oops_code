#include <iostream>
using namespace std;

class Payment {
public:
    void pay() {
        cout << "General payment" << endl;
    }
};

class UpiPayment : public Payment {
public:
    void pay() {
        cout << "UPI payment" << endl;
    }
};

int main() {
    Payment* p;
    UpiPayment u;

    p = &u;
    p->pay();   
}
