// Class HaloGeneric dengan method SapaUser
class HaloGeneric {
    static SapaUser(user) {
        console.log(`Halo Afif Ramadhani ${user}`);
    }
}

// Class DataGeneric dengan property generic
class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

// Pemanggilan method untuk testing
console.log("===== Test HaloGeneric =====");
HaloGeneric.SapaUser("");

console.log("\n===== Test DataGeneric =====");
let myData = new DataGeneric("2211104066");
myData.PrintData();