// index.js
// Program utama yang memanggil fungsi-fungsi dari MatematikaLibraries

// Import MatematikaLibraries module
const MatematikaLibraries = require('./matematikaLibraries');

// Fungsi untuk menampilkan teks ke layar (seperti console.log)
function tampilkanHasil(judul, hasil) {
    console.log(`${judul}: ${hasil}`);
    console.log("=".repeat(50));
}

// Fungsi utama program
function main() {
    console.log("=".repeat(50));
    console.log("PROGRAM MATEMATIKA LIBRARIES");
    console.log("=".repeat(50));
    
    // 1. Test fungsi FPB
    const fpbInput1 = 60;
    const fpbInput2 = 45;
    const fpbHasil = MatematikaLibraries.FPB(fpbInput1, fpbInput2);
    tampilkanHasil(`FPB dari ${fpbInput1} dan ${fpbInput2}`, fpbHasil);
    
    // 2. Test fungsi KPK
    const kpkInput1 = 12;
    const kpkInput2 = 8;
    const kpkHasil = MatematikaLibraries.KPK(kpkInput1, kpkInput2);
    tampilkanHasil(`KPK dari ${kpkInput1} dan ${kpkInput2}`, kpkHasil);
    
    // 3. Test fungsi Turunan
    // Persamaan: x^3 + 4x^2 - 12x + 9
    const persamaanTurunan = [1, 4, -12, 9];
    const turunanHasil = MatematikaLibraries.Turunan(persamaanTurunan);
    tampilkanHasil(`Turunan dari persamaan [${persamaanTurunan}]`, turunanHasil);
    
    // 4. Test fungsi Integral
    // Persamaan: 4x^3 + 6x^2 - 12x + 9
    const persamaanIntegral = [4, 6, -12, 9];
    const integralHasil = MatematikaLibraries.Integral(persamaanIntegral);
    tampilkanHasil(`Integral dari persamaan [${persamaanIntegral}]`, integralHasil);
}

// Jalankan program utama
main();