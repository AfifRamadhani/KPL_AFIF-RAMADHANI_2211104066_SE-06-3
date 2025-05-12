// index.js
// Aplikasi pemanggil library MatematikaLibraries

// Import library MatematikaLibraries
const { FPB, KPK, Turunan, Integral } = require('./matematikaLibraries');

console.log("===================================================");
console.log("       APLIKASI MATEMATIKA DENGAN LIBRARY          ");
console.log("===================================================");

// Test fungsi FPB
console.log("\n1. Fungsi Faktor Persekutuan Terbesar (FPB)");
console.log("---------------------------------------------------");
const fpbInput1 = 60;
const fpbInput2 = 45;
const fpbHasil = FPB(fpbInput1, fpbInput2);
console.log(`FPB(${fpbInput1}, ${fpbInput2}) = ${fpbHasil}`);

// Test fungsi KPK
console.log("\n2. Fungsi Kelipatan Persekutuan Terkecil (KPK)");
console.log("---------------------------------------------------");
const kpkInput1 = 12;
const kpkInput2 = 8;
const kpkHasil = KPK(kpkInput1, kpkInput2);
console.log(`KPK(${kpkInput1}, ${kpkInput2}) = ${kpkHasil}`);

// Test fungsi Turunan
console.log("\n3. Fungsi Turunan Persamaan");
console.log("---------------------------------------------------");
// Persamaan: x³ + 4x² - 12x + 9
const persamaanTurunan = [1, 4, -12, 9];
console.log(`Persamaan awal: x³ + 4x² - 12x + 9`);
console.log(`Representasi array: [${persamaanTurunan.join(', ')}]`);
const hasilTurunan = Turunan(persamaanTurunan);
console.log(`Hasil turunan: ${hasilTurunan}`);

// Test fungsi Integral
console.log("\n4. Fungsi Integral Persamaan");
console.log("---------------------------------------------------");
// Persamaan: 4x³ + 6x² - 12x + 9
const persamaanIntegral = [4, 6, -12, 9];
console.log(`Persamaan awal: 4x³ + 6x² - 12x + 9`);
console.log(`Representasi array: [${persamaanIntegral.join(', ')}]`);
const hasilIntegral = Integral(persamaanIntegral);
console.log(`Hasil integral: ${hasilIntegral}`);

console.log("\n===================================================");