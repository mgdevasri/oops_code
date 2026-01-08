
// Independent class
class Professor {
    private String name;

    Professor(String name) {
        this.name = name;
    }

    void show() {
        System.out.println("Professor: " + name);
    }
}

// Aggregator class
class Department {
    private String deptName;
    private List<Professor> professors;

    Department(String deptName, List<Professor> professors) {
        this.deptName = deptName;
        this.professors = professors;
    }

    void showDepartment() {
        System.out.println("Department: " + deptName);
        for (Professor p : professors) {
            p.show();
        }
    }
}

public class Examp {
    public static void main(String[] args) {

        // Professors exist independently
        Professor p1 = new Professor("Dr. devasri");
        Professor p2 = new Professor("Dr. saravana");

        List<Professor> list = new ArrayList<>();
        list.add(p1);
        list.add(p2);

        Department dept = new Department("Computer Science", list);
        dept.showDepartment();

        // Department removed, professors still exist
        System.out.println("Department closed, professors still exist:");
        p1.show();
        p2.show();
    }
}

}
