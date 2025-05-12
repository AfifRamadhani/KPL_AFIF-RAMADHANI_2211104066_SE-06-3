// app.js

// Import library MatematikaLibraries
const MatematikaLibraries = require('./MatematikaLibraries/matematika');

// Fungsi untuk menampilkan hasil dengan format yang baik
function tampilkanHasil(judul, input, hasil) {
    console.log(`\n===== ${judul} =====`);
    console.log(`Input: ${JSON.stringify(input)}`);
    console.log(`Output: ${hasil}`);
    console.log('==================\n');
}

// Menguji fungsi FPB
const hasil_fpb = MatematikaLibraries.FPB(60, 45);
tampilkanHasil('FPB', [60, 45], hasil_fpb);

// Menguji fungsi KPK
const hasil_kpk = MatematikaLibraries.KPK(12, 8);
tampilkanHasil('KPK', [12, 8], hasil_kpk);

// Menguji fungsi Turunan
// Persamaan: x^3 + 4x^2 - 12x + 9
const persamaan_turunan = [1, 4, -12, 9];
const hasil_turunan = MatematikaLibraries.Turunan(persamaan_turunan);
tampilkanHasil('Turunan', persamaan_turunan, hasil_turunan);

// Menguji fungsi Integral
// Persamaan: 4x^3 + 6x^2 - 12x + 9
const persamaan_integral = [4, 6, -12, 9];
const hasil_integral = MatematikaLibraries.Integral(persamaan_integral);
tampilkanHasil('Integral', persamaan_integral, hasil_integral);

// Contoh penggunaan fungsi lainnya
console.log("\n===== Contoh Tambahan =====");

// FPB dengan angka lain
console.log(`FPB(24, 36) = ${MatematikaLibraries.FPB(24, 36)}`);

// KPK dengan angka lain
console.log(`KPK(15, 20) = ${MatematikaLibraries.KPK(15, 20)}`);

// Turunan persamaan sederhana: 3x^2 + 2x + 5
console.log(`Turunan([3, 2, 5]) = ${MatematikaLibraries.Turunan([3, 2, 5])}`);

// Integral persamaan sederhana: 2x + 3
console.log(`Integral([2, 3]) = ${MatematikaLibraries.Integral([2, 3])}`);