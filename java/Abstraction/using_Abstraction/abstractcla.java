
abstract class Device {

    abstract void turnOn();
    abstract void turnOff();

    protected void logAction(String action) {
        System.out.println("[LOG] " + action);
    }
}

// sub class
class TV extends Device {
    @Override
    void turnOn() {
        logAction("Turning ON TV");
        System.out.println("TV is ON");
    }
    @Override
    void turnOff() {
        logAction("Turning OFF TV");
        System.out.println("TV is OFF");
    }
}
// sub class : Fan
class Fan extends Device {
    @Override
    void turnOn() {
        logAction("Turning ON Fan");
        System.out.println("Fan is ON");
    }
    @Override
    void turnOff() {
        logAction("Turning OFF Fan");
        System.out.println("Fan is OFF");
    }
}

// sub class: Washing Machine
class WashingMachine extends Device {

    @Override
    void turnOn() {
        logAction("Starting Washing Machine");
        System.out.println("Washing Machine is RUNNING");
    }

    @Override
    void turnOff() {
        logAction("Stopping Washing Machine");
        System.out.println("Washing Machine is STOPPED");
    }
}

public class abstractcla {

    public static void main(String[] args) {

        Device tv = new TV();
        Device fan = new Fan();
        Device wm = new WashingMachine();

        tv.turnOn();
        fan.turnOn();
        wm.turnOn();

        wm.turnOff();
        fan.turnOff();
        tv.turnOff();
    }
}
