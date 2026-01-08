#include <iostream>
using namespace std;
class Payment {
public:
    virtual void pay() {
        cout << "General payment" << endl;
    }
};
class UpiPayment : public Payment {
public:
    void pay() {
        cout << "UPI payment" << endl;
    }
};

class CardPayment : public Payment{
    public:
        void pay(){
            cout << "Card Payment" << endl;
        }
};

int main() {
    Payment* p;
    UpiPayment u;
    CardPayment c;

    p = &u;
    p->pay();   //  overridden

    p = &c;
    p->pay(); 
    return 0;
}
