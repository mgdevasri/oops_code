// Mobile.java
class Mobile {
    String brand;
    String model;
    double price;

    // Parameterized Constructor initialize the values - brand,model,price
    //it will called when the object is created 
    Mobile(String brand, String model, double price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    void display() {
        System.out.println("Brand : " + brand);
        System.out.println("Model : " + model);
        System.out.println("Price : " + price);
    }
}

public class para_con {
    public static void main(String[] args) {

        // Object creation using parameterized constructor - ready object 
        Mobile phone1 = new Mobile("Samsung", "S23", 75000);

        phone1.display();
    }
}
