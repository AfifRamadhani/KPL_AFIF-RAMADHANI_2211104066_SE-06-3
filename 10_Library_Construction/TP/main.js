// Program utama untuk menggunakan AljabarLibraries
const { Aljabar } = require('./AljabarLibraries');

console.log("TP Modul 10 - Aljabar Libraries");
console.log("================================");

// Test fungsi akarPersamaanKuadrat
console.log("\nTest Fungsi akarPersamaanKuadrat:");
console.log("Persamaan: x² - 3x - 10 = 0");

try {
  const hasilAkar = Aljabar.akarPersamaanKuadrat([1, -3, -10]);
  console.log(`Akar-akar persamaan: x₁ = ${hasilAkar[0]}, x₂ = ${hasilAkar[1]}`);
} catch (error) {
  console.log(`Error: ${error.message}`);
}

// Test fungsi hasilKuadrat
console.log("\nTest Fungsi hasilKuadrat:");
console.log("Persamaan: (2x - 3)²");

try {
  const hasilKuadrat = Aljabar.hasilKuadrat([2, -3]);
  console.log(`Hasil kuadrat: ${hasilKuadrat[0]}x² + (${hasilKuadrat[1]})x + ${hasilKuadrat[2]}`);
  console.log(`Atau: ${hasilKuadrat[0]}x² ${hasilKuadrat[1] >= 0 ? '+' : ''} ${hasilKuadrat[1]}x ${hasilKuadrat[2] >= 0 ? '+' : ''} ${hasilKuadrat[2]}`);
} catch (error) {
  console.log(`Error: ${error.message}`);
}

// Tambahan test case untuk akarPersamaanKuadrat
console.log("\nTest Case Tambahan untuk akarPersamaanKuadrat:");
console.log("Persamaan: 2x² + 5x - 12 = 0");

try {
  const hasilAkar = Aljabar.akarPersamaanKuadrat([2, 5, -12]);
  console.log(`Akar-akar persamaan: x₁ = ${hasilAkar[0]}, x₂ = ${hasilAkar[1]}`);
} catch (error) {
  console.log(`Error: ${error.message}`);
}

// Tambahan test case untuk hasilKuadrat
console.log("\nTest Case Tambahan untuk hasilKuadrat:");
console.log("Persamaan: (3x + 4)²");

try {
  const hasilKuadrat = Aljabar.hasilKuadrat([3, 4]);
  console.log(`Hasil kuadrat: ${hasilKuadrat[0]}x² + (${hasilKuadrat[1]})x + ${hasilKuadrat[2]}`);
  console.log(`Atau: ${hasilKuadrat[0]}x² ${hasilKuadrat[1] >= 0 ? '+' : ''} ${hasilKuadrat[1]}x ${hasilKuadrat[2] >= 0 ? '+' : ''} ${hasilKuadrat[2]}`);
} catch (error) {
  console.log(`Error: ${error.message}`);
}