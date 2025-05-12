// AljabarLibraries.js
// Library untuk perhitungan aljabar

class Aljabar {
    /**
     * Mencari akar-akar dari persamaan kuadrat ax^2 + bx + c = 0
     * @param {Array<number>} persamaan - Array berisi koefisien persamaan kuadrat [a, b, c]
     * @returns {Array<number>} Array berisi dua akar persamaan kuadrat
     */
    static akarPersamaanKuadrat(persamaan) {
      // Pastikan array koefisien memiliki 3 elemen
      if (persamaan.length !== 3) {
        throw new Error("Persamaan kuadrat harus memiliki 3 koefisien: a, b, c");
      }
  
      const a = persamaan[0];
      const b = persamaan[1];
      const c = persamaan[2];
  
      // Hitung diskriminan
      const diskriminan = b * b - 4 * a * c;
  
      // Jika diskriminan negatif, akar-akar imajiner (tidak ditangani di implementasi ini)
      if (diskriminan < 0) {
        throw new Error("Persamaan kuadrat memiliki akar-akar imajiner");
      }
  
      // Hitung kedua akar persamaan kuadrat menggunakan rumus kuadrat
      const x1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
      const x2 = (-b - Math.sqrt(diskriminan)) / (2 * a);
  
      return [x1, x2];
    }
  
    /**
     * Mendapatkan hasil kuadrat dari persamaan berpangkat 1 (ax + b)
     * @param {Array<number>} persamaan - Array berisi koefisien persamaan [a, b]
     * @returns {Array<number>} Array berisi koefisien hasil kuadrat [a^2, 2ab, b^2]
     */
    static hasilKuadrat(persamaan) {
      // Pastikan array koefisien memiliki 2 elemen
      if (persamaan.length !== 2) {
        throw new Error("Persamaan berpangkat 1 harus memiliki 2 koefisien: a, b");
      }
  
      const a = persamaan[0];
      const b = persamaan[1];
  
      // Hasil kuadrat dari (ax + b)² = a²x² + 2abx + b²
      const a_kuadrat = a * a;     // koefisien x²
      const ab_dua = 2 * a * b;    // koefisien x
      const b_kuadrat = b * b;     // konstanta
  
      return [a_kuadrat, ab_dua, b_kuadrat];
    }
  }
  
  // Export modul agar bisa digunakan di file lain
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Aljabar };
  }