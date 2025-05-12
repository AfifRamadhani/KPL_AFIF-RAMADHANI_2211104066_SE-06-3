// matematikaLibraries.js
// Module matematika yang berisi fungsi-fungsi untuk kalkulasi matematika

const MatematikaLibraries = {
    /**
     * Mencari Faktor Persekutuan Terbesar (FPB) dari dua bilangan
     * @param {number} input1 - Bilangan pertama
     * @param {number} input2 - Bilangan kedua
     * @returns {number} FPB dari kedua bilangan
     */
    FPB: function(input1, input2) {
        // Algoritma Euclidean untuk mencari FPB
        let a = Math.abs(input1);
        let b = Math.abs(input2);
        
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        
        return a;
    },
    
    /**
     * Mencari Kelipatan Persekutuan Terkecil (KPK) dari dua bilangan
     * @param {number} input1 - Bilangan pertama
     * @param {number} input2 - Bilangan kedua
     * @returns {number} KPK dari kedua bilangan
     */
    KPK: function(input1, input2) {
        // KPK = (a * b) / FPB(a, b)
        return Math.abs(input1 * input2) / this.FPB(input1, input2);
    },
    
    /**
     * Mendapatkan hasil turunan dari persamaan sederhana
     * @param {number[]} persamaan - Array koefisien dari persamaan (dari pangkat tertinggi ke terendah)
     * @returns {string} Hasil turunan dalam format string
     */
    Turunan: function(persamaan) {
        if (!Array.isArray(persamaan) || persamaan.length <= 1) {
            return "0";
        }
        
        let hasil = [];
        
        // Proses turunan: koefisien baru = koefisien lama * pangkat
        for (let i = 0; i < persamaan.length - 1; i++) {
            const pangkat = persamaan.length - i - 1;
            const koefisienBaru = persamaan[i] * pangkat;
            hasil.push(koefisienBaru);
        }
        
        // Membuat string hasil turunan
        return this.formatPersamaan(hasil);
    },
    
    /**
     * Mendapatkan hasil integral dari persamaan sederhana
     * @param {number[]} persamaan - Array koefisien dari persamaan (dari pangkat tertinggi ke terendah)
     * @returns {string} Hasil integral dalam format string
     */
    Integral: function(persamaan) {
        if (!Array.isArray(persamaan)) {
            return "0 + C";
        }
        
        let hasil = [];
        
        // Proses integral: koefisien baru = koefisien lama / (pangkat + 1)
        for (let i = 0; i < persamaan.length; i++) {
            const pangkatBaru = persamaan.length - i;
            const koefisienBaru = persamaan[i] / pangkatBaru;
            hasil.push(koefisienBaru);
        }
        
        // Tambahkan konstanta C
        hasil.push("C");
        
        // Membuat string hasil integral
        return this.formatPersamaan(hasil);
    },
    
    /**
     * Memformat array koefisien menjadi string persamaan
     * @param {(number|string)[]} koefisien - Array koefisien
     * @returns {string} Persamaan dalam format string
     */
    formatPersamaan: function(koefisien) {
        if (koefisien.length === 0) return "0";
        
        let hasil = "";
        
        for (let i = 0; i < koefisien.length; i++) {
            const k = koefisien[i];
            
            if (k === "C") {
                hasil += " + C";
                continue;
            }
            
            if (k === 0) continue;
            
            const pangkat = koefisien.length - i - 1;
            
            // Tambahkan tanda + atau - sesuai kebutuhan
            if (hasil !== "" && k > 0) {
                hasil += " + ";
            } else if (hasil !== "" && k < 0) {
                hasil += " - ";
            } else if (k < 0) {
                hasil += "-";
            }
            
            // Format koefisien dan variabel
            const koefisienAbs = Math.abs(k);
            
            if (pangkat === 0) {
                hasil += koefisienAbs;
            } else if (pangkat === 1) {
                if (koefisienAbs === 1) {
                    hasil += "x";
                } else {
                    hasil += koefisienAbs + "x";
                }
            } else {
                if (koefisienAbs === 1) {
                    hasil += "x" + pangkat;
                } else {
                    hasil += koefisienAbs + "x" + pangkat;
                }
            }
        }
        
        return hasil;
    }
};

// Export module agar bisa digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MatematikaLibraries;
}