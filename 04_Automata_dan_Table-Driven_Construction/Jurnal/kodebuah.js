class KodeBuah {
    constructor() {
        // Creating a map of fruit names to their codes
        this.buahMap = new Map([
            ["Apel", "A00"],
            ["Aprikot", "B00"],
            ["Alpukat", "C00"],
            ["Pisang", "D00"],
            ["Paprika", "E00"],
            ["Blackberry", "F00"],
            ["Ceri", "H00"],
            ["Kelapa", "I00"],
            ["Jagung", "J00"],
            ["Kurma", "K00"],
            ["Durian", "L00"],
            ["Anggur", "M00"],
            ["Melon", "N00"],
            ["Semangka", "O00"]
        ]);
    }

    // Method to get the code for a given fruit name
    getKodeBuah(namaBuah) {
        if (this.buahMap.has(namaBuah)) {
            return this.buahMap.get(namaBuah);
        } else {
            return "Buah tidak ditemukan";
        }
    }
}

// Test the KodeBuah class directly
console.log("===== TEST KODE BUAH =====");
const kodeBuah = new KodeBuah();

console.log("Kode untuk Apel:", kodeBuah.getKodeBuah("Apel"));
console.log("Kode untuk Durian:", kodeBuah.getKodeBuah("Durian"));
console.log("Kode untuk Semangka:", kodeBuah.getKodeBuah("Semangka"));
console.log("Kode untuk Strawberry:", kodeBuah.getKodeBuah("Strawberry")); // Not in the table
