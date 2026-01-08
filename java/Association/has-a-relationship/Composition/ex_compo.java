
import java.util.*;
// Dependent class
class Room {
    private String type;

    Room(String type) {
        this.type = type;
    }

    void show() {
        System.out.println("Room type: " + type);
    }
}

// Owner class (Composition)
class House {
    private List<Room> rooms;

    House() {
        rooms = new ArrayList<>();
        rooms.add(new Room("Bedroom"));
        rooms.add(new Room("Kitchen"));
    }

    void showHouse() {
        System.out.println("House contains:");
        for (Room r : rooms) {
            r.show();
        }
    }
}

public class ex_compo {
    public static void main(String[] args) {
        House house = new House();
        house.showHouse();

        // When house is destroyed, rooms are destroyed automatically
        house = null;
    }
}

}
