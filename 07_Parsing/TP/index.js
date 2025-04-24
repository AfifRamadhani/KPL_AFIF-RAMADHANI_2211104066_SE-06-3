// Import modul fs untuk membaca file
const fs = require('fs');

// Import kelas yang telah dibuat
const DataMahasiswa2211104066 = require('./DataMahasiswa2211104066.js');
const KuliahMahasiswa2211104066 = require('./KuliahMahasiswa2211104066.js');

// Fungsi untuk membaca dan memproses file JSON pertama
function prosesDataMahasiswa() {
  try {
    // Membaca file JSON
    const jsonData = fs.readFileSync('tp7_1_2211104066.json', 'utf8');
    
    console.log("Memproses JSON DataMahasiswa:");
    // Memanggil metode bacaJSON untuk memproses data
    const mahasiswa = DataMahasiswa2211104066.bacaJSON(jsonData);
    
    return mahasiswa;
  } catch (error) {
    console.error("Error saat membaca file JSON pertama:", error);
    return null;
  }
}

// Fungsi untuk membaca dan memproses file JSON kedua
function prosesKuliahMahasiswa() {
  try {
    // Membaca file JSON
    const jsonData = fs.readFileSync('tp7_2_2211104066.json', 'utf8');
    
    console.log("\nMemproses JSON KuliahMahasiswa:");
    // Memanggil metode bacaJSON untuk memproses data
    const kuliah = KuliahMahasiswa2211104066.bacaJSON(jsonData);
    
    return kuliah;
  } catch (error) {
    console.error("Error saat membaca file JSON kedua:", error);
    return null;
  }
}

// Menjalankan fungsi-fungsi untuk memproses file JSON
const mahasiswa = prosesDataMahasiswa();
const kuliah = prosesKuliahMahasiswa();