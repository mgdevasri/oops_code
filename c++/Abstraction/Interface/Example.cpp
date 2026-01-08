#include <iostream>
#include <string>
using namespace std;

// Interface-like base class
class Notification {
public:
    // Pure virtual function (acts like an interface method)
    virtual void send(const string& message) = 0;

    // Virtual destructor (good practice)
    virtual ~Notification() {}
};

// Email implementation
class EmailNotification : public Notification {
public:
    void send(const string& message) override {
        cout << "Email sent: " << message << endl;
    }
};

// SMS implementation
class SmsNotification : public Notification {
public:
    void send(const string& message) override {
        cout << "SMS sent: " << message << endl;
    }
};

int main() {

    Notification* n1 = new EmailNotification();
    Notification* n2 = new SmsNotification();

    n1->send("Meeting at 10 AM");
    n2->send("OTP: 123456");

    delete n1;
    delete n2;

    return 0;
}
