class Mobile {

    // Overloading 1
    void start() {
        System.out.println("start with fingerprint");
    }

    // Overloading 2
    void start(int keyCode) {
        System.out.println("Phone start using the password: " + keyCode);
    }

    // Overloading 3
    void start(String voiceCommand) {
        System.out.println("Phone start by voice command: " + voiceCommand);
    }
}

public class Method_overloading {
    public static void main(String[] args) {
        Vehicle v = new Vehicle();

        v.start();                    // no parameter
        v.start(1234);                // int parameter -using password
        v.start("Start the car");     // String parameter  - voice cmd
    }
}
