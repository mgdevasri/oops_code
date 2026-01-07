class UserSession{
    //private data
    private username : string;
    private isLoggedIn : boolean =false;
    constructor(username:string)
    {
        this.username=username;
    }

    login() :void{
        if(!this.isLoggedIn){
            this.isLoggedIn=true;
            console.log(`${this.username} logger in`);

        }
        else{
            console.log("User already logged in");
        }
    }

    logout() : void{
        if(this.isLoggedIn)
        {
            this.isLoggedIn=false;
            console.log(`${this.username} logged out`)
        }
        else{
            console.log("User is not logged in");
        }
    }
    getstatus() : string{
        return this.isLoggedIn ? "Logged In" : "Logged Out";
      
    }
    
}

const user= new UserSession("devasri");
user.login();
console.log(user.getstatus());
user.logout();