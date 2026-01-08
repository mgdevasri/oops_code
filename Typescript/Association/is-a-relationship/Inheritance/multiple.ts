interface Phone {
    call(): void;
}

interface Camera {
    takePhoto(): void;
}

class SmartPhone implements Phone, Camera {
    call(): void {
        console.log("Calling...");
    }

    takePhoto(): void {
        console.log("Photo taken");
    }
}

const sp = new SmartPhone();
sp.call();
sp.takePhoto();
