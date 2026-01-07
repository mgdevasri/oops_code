#include <iostream>
using namespace std;

class studentt
{
    int id;
    string name;
    string dept;

    public:
        studentt(int i,string n,string d)
        {
            id=i;
            name=n;
            dept=d;
        }
    void display()
    {
        cout << "ID " << id;
        cout << "Name " << name;
        cout << "dept " << dept;
    }
    
};

int main()
{
    studentt stu(10,"Devasri","cse");
    stu.display();
    return 0;
}