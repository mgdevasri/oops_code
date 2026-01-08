interface PaymentGateway {
    void pay(double amount);
}

class GooglePay implements PaymentGateway {

    @Override
    public void pay(double amount) {
        System.out.println("Paid ₹" + amount + " using Google Pay");
    }
}

class PhonePe implements PaymentGateway {

    @Override
    public void pay(double amount) {
        System.out.println("Paid ₹" + amount + " using PhonePe");
    }
}

public class Inter {
    public static void main(String[] args) {

        PaymentGateway payment = new GooglePay();
        payment.pay(500);

        payment = new PhonePe();
        payment.pay(300);
    }
}


