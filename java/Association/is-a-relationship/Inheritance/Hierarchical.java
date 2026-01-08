class Notification {
    void send() {
        System.out.println("Sending notification");
    }
}

class EmailNotification extends Notification {
    void sendEmail() {
        System.out.println("Sending Email");
    }
}

class SMSNotification extends Notification {
    void sendSMS() {
        System.out.println("Sending SMS");
    }
}

public class Hierarchical{
    public static void main(String[] args) {
        EmailNotification e = new EmailNotification();
        e.send();
        e.sendEmail();

        SMSNotification s = new SMSNotification();
        s.send();
        s.sendSMS();
    }
}
