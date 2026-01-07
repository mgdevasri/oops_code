class Car {
    // Properties
    private int  wheels;
    private String color;
    // Constructor
    public Car(int wheels, String color) {
        this.wheels = wheels;
        this.color = color;
    }
    // Methods
    public void start() {
        System.out.println("Car started");
    }
    public void stop() {
        System.out.println("Car stopped");
    }
    public void showDetails() {
    System.out.println("Wheels: " + wheels + ", Color: " + color);
}   
}

// Bike class (independent, no parent)
class Bike {
    // Properties
    private int wheels;
    private String color;
    // Constructor
    public Bike(int wheels, String color) {
        this.wheels = wheels;
        this.color = color;
    }
    // Methods
    public void start() {
        System.out.println("Bike started");
    }
    public void stop() {
        System.out.println("Bike stopped");
    }
    public void showDetails() {
    System.out.println("Wheels: " + wheels + ", Color: " + color);
}   
}

// Main class
public class without_Inheritance {
    public static void main(String[] args) {
        // Create Car object
        Car myCar = new Car(4, "Red");
        myCar.start();
        myCar.stop();
        myCar.showDetails();
        System.out.println();
        // Create Bike object
        Bike myBike = new Bike(2, "Blue");
        myBike.start();
        myBike.stop();
        myBike.showDetails();
    }
}
