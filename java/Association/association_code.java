import java.util.*;

// Component class
class Book {
    private String title;

    Book(String title) {
        this.title = title;
    }

    void showTitle() {
        System.out.println("Book: " + title);
    }
}

// Container class
class Library {
    private List<Book> books;

    Library() {
        books = new ArrayList<>();
    }

    void addBook(Book book) {
        books.add(book);
    }

    void showBooks() {
        System.out.println("Library contains:");
        for (Book b : books) {
            b.showTitle();
        }
    }
}

public class association_code {
    public static void main(String[] args) {
        Book b1 = new Book("OOP Concepts");
        Book b2 = new Book("Data Structures");

        Library lib = new Library();
        lib.addBook(b1);
        lib.addBook(b2);

        lib.showBooks();
    }
}
