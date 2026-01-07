#include <iostream>
using namespace std;

class BankAccount {
public:
    // Public balance
    double balance;

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
};

int main() {
    BankAccount acc;

    acc.deposit(5000);
    acc.withdraw(1000);

    //  Direct access
    acc.balance = -99999;

    cout << "Balance: " << acc.balance << endl;
    return 0;
}
