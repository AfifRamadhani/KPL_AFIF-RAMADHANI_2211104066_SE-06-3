class KodePos {
    constructor() {
        // Inisialisasi tabel kode pos menggunakan object
        this.kodePosTable = {
            "Batumunggal": "40266",
            "Kujangsari": "40287",
            "Mengger": "40267",
            "Wates": "40256",
            "Cijaura": "40287",
            "Jatisari": "40286",
            "Margasari": "40286",
            "Sekejati": "40286",
            "Kebonwaru": "40272",
            "Maleer": "40274",
            "Samoja": "40273"
        };
    }

    getKodePos(kelurahan) {
        // Mengembalikan kode pos berdasarkan kelurahan
        return this.kodePosTable[kelurahan] || "Kode pos tidak ditemukan";
    }
}

// Contoh penggunaan
const kodePos = new KodePos();

console.log("Kode pos Batumunggal: " + kodePos.getKodePos("Batumunggal")); // Output: 40266
console.log("Kode pos Mengger: " + kodePos.getKodePos("Mengger")); // Output: 40267
console.log("Kode pos Samoja: " + kodePos.getKodePos("Samoja")); // Output: 40273
console.log("Kode pos TidakAda: " + kodePos.getKodePos("TidakAda")); // Output: Kode pos tidak ditemukan