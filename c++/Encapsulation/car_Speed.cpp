#include <iostream>
using namespace std;

class car
{
    private:
         int speed;
         const int Max_speed =180;
    public:
         car()
         {
            speed=0;
         }

         void accelerate(int value)
         {
            if(speed+value<=Max_speed){
                speed +=value;
            }
            else{
                speed=Max_speed;
            }
         }

         void brake(int value)
         {
            if(speed - value >= 0)
            {
                speed -=value;

            }
            else{
                speed =0;
            }
         }
         int getspeed()
         {
            return speed;
         }

};

int main()
{
    car mycar;
    mycar.accelerate(40);
    mycar.accelerate(1000);
    mycar.brake(10);
    cout << "Current Speed: " << mycar.getspeed() << " km/h" << endl;
    return 0;
    
}