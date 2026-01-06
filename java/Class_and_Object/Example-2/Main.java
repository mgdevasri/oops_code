class Student {
    String name;
    int rollNo;
    int marks1, marks2, marks3;

    Student(String name, int rollNo, int marks1, int marks2, int marks3) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks1 = marks1;
        this.marks2 = marks2;
        this.marks3 = marks3;
    }

    void showDetails() {
        System.out.println("Name: " + name + " | RollNo: " + rollNo);
        System.out.println("Marks: " + marks1 + ", " + marks2 + ", " + marks3);
        int total = marks1 + marks2 + marks3;
        double avg = total / 3.0;
        System.out.println("Total: " + total + " | Average: " + avg);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("SARAVANA", 101, 85, 90, 80);
        Student s2 = new Student("DEVASRI", 102, 75, 88, 92);

        s1.showDetails();
        System.out.println();
        s2.showDetails();
    }
}
