interface Printer {
    void print();
}

interface Scanner {
    void scan();
}

class SmartPrinter implements Printer, Scanner {
    public void print() {
        System.out.println("Printing document");
    }

    public void scan() {
        System.out.println("Scanning document");
    }
}

public class multiple{
    public static void main(String[] args) {
        SmartPrinter sp = new SmartPrinter();
        sp.print();
        sp.scan();
    }
}
