class Mobile {
    String brand;
    int price;

    Mobile() {   // default constructor
        brand = "Samsung";
        price = 70000;
    }
}

public class Ex2 {
    public static void main(String[] args) {
        Mobile m = new Mobile();
        System.out.println(m.brand);
        System.out.println(m.price);
    }
}
