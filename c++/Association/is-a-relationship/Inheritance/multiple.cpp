#include <iostream>
using namespace std;

// Parent Class 1
class Printer {
public:
    void start() {
        cout << "Printer started" << endl;
    }
};

// Parent Class 2
class Scanner {
public:
    void start() {
        cout << "Scanner started" << endl;
    }
};

// Child Class
class AllInOneMachine : public Printer, public Scanner {
public:
    // Child overrides start()
    void start() {
        cout << "All-in-One Machine started" << endl;
    }

    // Can also call parent methods using scope resolution
    void startPrinter() {
        Printer::start();
    }

    void startScanner() {
        Scanner::start();
    }
};

int main() {
    AllInOneMachine machine;

    // Call overridden child method
    machine.start();

    // Call parent methods explicitly
    machine.startPrinter();
    machine.startScanner();

    return 0;
}
