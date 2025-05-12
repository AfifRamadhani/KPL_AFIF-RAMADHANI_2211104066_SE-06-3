// MatematikaLibraries/matematika.js

/**
 * Namespace MatematikaLibraries untuk menampung fungsi-fungsi matematika
 */
const MatematikaLibraries = {
    /**
     * Menghitung Faktor Persekutuan Terbesar (FPB) dari dua bilangan
     * @param {number} input1 - Bilangan pertama
     * @param {number} input2 - Bilangan kedua
     * @returns {number} FPB dari kedua bilangan
     */
    FPB: function(input1, input2) {
        // Algoritma Euclidean untuk menghitung FPB
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
     * Menghitung Kelipatan Persekutuan Terkecil (KPK) dari dua bilangan
     * @param {number} input1 - Bilangan pertama
     * @param {number} input2 - Bilangan kedua
     * @returns {number} KPK dari kedua bilangan
     */
    KPK: function(input1, input2) {
        // KPK(a,b) = (a * b) / FPB(a,b)
        return Math.abs(input1 * input2) / this.FPB(input1, input2);
    },
    
    /**
     * Menghitung turunan dari persamaan polinomial
     * @param {number[]} persamaan - Array koefisien polinomial [a,b,c,d] untuk ax^3 + bx^2 + cx + d
     * @returns {string} Hasil turunan dalam bentuk string
     */
    Turunan: function(persamaan) {
        if (!persamaan || persamaan.length <= 1) {
            return "0";
        }
        
        let hasil = [];
        // Iterasi koefisien dari pangkat tertinggi ke pangkat 1
        for (let i = 0; i < persamaan.length - 1; i++) {
            // Koefisien baru = koefisien lama * pangkat
            let pangkat = persamaan.length - i - 1;
            let koefisien = persamaan[i] * pangkat;
            hasil.push(koefisien);
        }
        
        // Membangun string representasi hasil turunan
        let output = "";
        for (let i = 0; i < hasil.length; i++) {
            let pangkat = hasil.length - i - 1;
            let koefisien = hasil[i];
            
            if (koefisien === 0) continue;
            
            // Tambahkan tanda plus jika bukan suku pertama dan koefisien positif
            if (output !== "" && koefisien > 0) {
                output += " + ";
            } else if (output !== "" && koefisien < 0) {
                output += " - ";
                koefisien = Math.abs(koefisien);
            } else if (koefisien < 0) {
                output += "-";
                koefisien = Math.abs(koefisien);
            }
            
            // Tambahkan koefisien ke output, kecuali kalau 1 dan bukan konstanta
            if (koefisien !== 1 || pangkat === 0) {
                output += koefisien;
            }
            
            // Tambahkan variabel x dan pangkatnya
            if (pangkat > 0) {
                output += "x";
                if (pangkat > 1) {
                    output += pangkat;
                }
            }
        }
        
        return output || "0";
    },
    
    /**
     * Menghitung integral dari persamaan polinomial
     * @param {number[]} persamaan - Array koefisien polinomial [a,b,c,d] untuk ax^3 + bx^2 + cx + d
     * @returns {string} Hasil integral dalam bentuk string
     */
    Integral: function(persamaan) {
        if (!persamaan || persamaan.length === 0) {
            return "C";
        }
        
        let hasil = [];
        // Iterasi koefisien dari pangkat tertinggi ke pangkat 0
        for (let i = 0; i < persamaan.length; i++) {
            let pangkat = persamaan.length - i;
            let koefisien = persamaan[i] / pangkat;
            hasil.push(koefisien);
        }
        hasil.push("C"); // Konstanta integrasi
        
        // Membangun string representasi hasil integral
        let output = "";
        for (let i = 0; i < hasil.length; i++) {
            if (i === hasil.length - 1) {
                // Menambahkan konstanta integrasi
                output += " + " + hasil[i];
                continue;
            }
            
            let pangkat = hasil.length - i - 1;
            let koefisien = hasil[i];
            
            if (koefisien === 0) continue;
            
            // Tambahkan tanda plus jika bukan suku pertama dan koefisien positif
            if (output !== "" && koefisien > 0) {
                output += " + ";
            } else if (output !== "" && koefisien < 0) {
                output += " - ";
                koefisien = Math.abs(koefisien);
            } else if (koefisien < 0) {
                output += "-";
                koefisien = Math.abs(koefisien);
            }
            
            // Tambahkan koefisien ke output
            if (koefisien !== 1 || pangkat === 0) {
                // Jika koefisien desimal, gunakan 1 angka dibelakang koma
                if (koefisien % 1 !== 0) {
                    koefisien = Math.round(koefisien * 100) / 100;
                }
                output += koefisien;
            }
            
            // Tambahkan variabel x dan pangkatnya
            if (pangkat > 0) {
                output += "x";
                if (pangkat > 1) {
                    output += pangkat;
                }
            }
        }
        
        return output;
    }
};

// Mengekspor library agar bisa digunakan oleh file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MatematikaLibraries;
}