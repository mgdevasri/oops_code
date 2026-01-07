interface Payment {
    void pay();
}

class BankPayment {
    void verifyAccount() {
        System.out.println("Bank account verified");
    }
}

class OnlinePayment extends BankPayment implements Payment {
    public void pay() {
        System.out.println("Payment successful");
    }
}

public class Hybrid{
    public static void main(String[] args) {
        OnlinePayment p = new OnlinePayment();
        p.verifyAccount();
        p.pay();
    }
}
