class DoorMachine {
    constructor() {
        // State awal adalah "Terkunci"
        this.state = "Terkunci";
        console.log("Pintu terkunci");
    }

    bukaPintu() {
        if (this.state === "Terkunci") {
            this.state = "Terbuka";
            console.log("Pintu tidak terkunci");
        } else {
            console.log("Pintu sudah terbuka");
        }
    }

    kunciPintu() {
        if (this.state === "Terbuka") {
            this.state = "Terkunci";
            console.log("Pintu terkunci");
        } else {
            console.log("Pintu sudah terkunci");
        }
    }
}

// Contoh penggunaan
const door = new DoorMachine(); // Output: Pintu terkunci

door.bukaPintu(); // Output: Pintu tidak terkunci
door.kunciPintu(); // Output: Pintu terkunci
door.kunciPintu(); // Output: Pintu sudah terkunci
door.bukaPintu(); // Output: Pintu tidak terkunci