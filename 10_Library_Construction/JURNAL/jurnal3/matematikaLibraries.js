// MatematikaLibraries.js
// Library Matematika dengan implementasi FPB, KPK, Turunan, dan Integral

/**
 * Mencari Faktor Persekutuan Terbesar dari dua bilangan
 * @param {number} input1 - Bilangan pertama
 * @param {number} input2 - Bilangan kedua
 * @returns {number} - Nilai FPB dari kedua bilangan
 */
function FPB(input1, input2) {
    // Implementasi algoritma Euclidean untuk mencari FPB
    // FPB(a,b) = FPB(b, a mod b) sampai b = 0
    
    // Memastikan nilai positif
    input1 = Math.abs(input1);
    input2 = Math.abs(input2);
    
    // Algoritma Euclidean
    while (input2 !== 0) {
        let temp = input2;
        input2 = input1 % input2;
        input1 = temp;
    }
    
    return input1;
}

/**
 * Mencari Kelipatan Persekutuan Terkecil dari dua bilangan
 * @param {number} input1 - Bilangan pertama
 * @param {number} input2 - Bilangan kedua
 * @returns {number} - Nilai KPK dari kedua bilangan
 */
function KPK(input1, input2) {
    // Rumus: KPK(a,b) = (a*b) / FPB(a,b)
    return Math.abs(input1 * input2) / FPB(input1, input2);
}

/**
 * Mendapatkan hasil turunan dari persamaan sederhana
 * @param {number[]} persamaan - Array koefisien persamaan (dari pangkat tertinggi ke terendah)
 * @returns {string} - String hasil turunan dalam format yang diminta
 */
function Turunan(persamaan) {
    if (!Array.isArray(persamaan) || persamaan.length === 0) {
        return "0";
    }
    
    const hasilTurunan = [];
    
    // Proses turunan: koefisien * pangkat, pangkat dikurangi 1
    for (let i = 0; i < persamaan.length - 1; i++) {
        const koefisien = persamaan[i];
        const pangkat = persamaan.length - i - 1;
        
        const koefisienBaru = koefisien * pangkat;
        const pangkatBaru = pangkat - 1;
        
        if (koefisienBaru !== 0) {
            hasilTurunan.push({ koef: koefisienBaru, pangkat: pangkatBaru });
        }
    }
    
    // Format hasil turunan menjadi string
    return formatPersamaan(hasilTurunan);
}

/**
 * Mendapatkan hasil integral dari persamaan sederhana
 * @param {number[]} persamaan - Array koefisien persamaan (dari pangkat tertinggi ke terendah)
 * @returns {string} - String hasil integral dalam format yang diminta
 */
function Integral(persamaan) {
    if (!Array.isArray(persamaan) || persamaan.length === 0) {
        return "C";
    }
    
    const hasilIntegral = [];
    
    // Proses integral: koefisien / (pangkat+1), pangkat ditambah 1
    for (let i = 0; i < persamaan.length; i++) {
        const koefisien = persamaan[i];
        const pangkat = persamaan.length - i - 1;
        
        const pangkatBaru = pangkat + 1;
        const koefisienBaru = koefisien / pangkatBaru;
        
        hasilIntegral.push({ koef: koefisienBaru, pangkat: pangkatBaru });
    }
    
    // Tambahkan konstanta C
    return formatPersamaan(hasilIntegral) + " + C";
}

/**
 * Fungsi helper untuk memformat array persamaan menjadi string
 * @param {Object[]} persamaan - Array objek dengan koefisien dan pangkat
 * @returns {string} - String persamaan yang diformat
 */
function formatPersamaan(persamaan) {
    if (persamaan.length === 0) {
        return "0";
    }
    
    let hasil = "";
    
    for (let i = 0; i < persamaan.length; i++) {
        const { koef, pangkat } = persamaan[i];
        
        // Format koefisien
        let koefStr = "";
        if (i === 0) {
            // Item pertama
            koefStr = koef === 1 && pangkat > 0 ? "" : 
                     koef === -1 && pangkat > 0 ? "-" : koef.toString();
        } else {
            // Item berikutnya
            koefStr = koef > 0 ? ` + ${koef === 1 && pangkat > 0 ? "" : koef}` : 
                     koef < 0 ? ` - ${Math.abs(koef) === 1 && pangkat > 0 ? "" : Math.abs(koef)}` : "";
        }
        
        // Jika koefisien adalah 0, lewati
        if (koef === 0) {
            continue;
        }
        
        // Format pangkat
        let pangkatStr = "";
        if (pangkat === 0) {
            pangkatStr = "";
        } else if (pangkat === 1) {
            pangkatStr = "x";
        } else {
            pangkatStr = `x${pangkat}`;
        }
        
        hasil += koefStr + pangkatStr;
    }
    
    return hasil || "0";
}

// Export fungsi-fungsi yang akan digunakan
module.exports = {
    FPB,
    KPK,
    Turunan,
    Integral
};