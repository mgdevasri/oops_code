//Compiler provider defaulf constructor
class Mobile {
    String brand;
    int price;
}

public class Ex1 {
    public static void main(String[] args) {
        Mobile m = new Mobile();   // default constructor called
        System.out.println(m.brand); // null
        System.out.println(m.price); // 0
    }
}
