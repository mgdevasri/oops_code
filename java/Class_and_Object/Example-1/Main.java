class Mobile {
    String brand;
    String model;
    double price;
    int battery;

    Mobile(String brand, String model, double price, int battery) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.battery = battery;
    }

    void showDetails() {
        System.out.println(brand + " " + model + " | Price: " + price + " | Battery: " + battery + "%");
    }

    void charge(int amount) {
        battery += amount;
        System.out.println("Battery charged to " + battery + "%");
    }
}

public class Main {
    public static void main(String[] args) {
        Mobile m1 = new Mobile("Samsung", "Galaxy S21", 70000, 50);
        Mobile m2 = new Mobile("Apple", "iPhone 13", 90000, 30);

        m1.showDetails();
        m1.charge(20);

        m2.showDetails();
        m2.charge(40);
    }
}
