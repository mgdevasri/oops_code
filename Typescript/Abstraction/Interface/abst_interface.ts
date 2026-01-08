interface AuthService {
    login(username: string, password: string): void;
}
//Admin class
class AdminAuth implements AuthService {
    login(username: string, password: string): void {
        console.log(`Admin ${username} logged in`);
    }
}
//User class
class UserAuth implements AuthService {
    login(username: string, password: string): void {
        console.log(`User ${username} logged in`);
    }
}

let auth: AuthService;

auth = new AdminAuth();
auth.login("admin01", "1234");

auth = new UserAuth();
auth.login("user01", "abcd");
