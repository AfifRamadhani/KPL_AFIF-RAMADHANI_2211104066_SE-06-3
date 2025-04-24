class KuliahMahasiswa2211104066 {
    constructor(matakuliah) {
      this.matakuliah = matakuliah;
    }
  
    static bacaJSON(jsonData) {
      try {
        // Mengubah string JSON menjadi objek JavaScript
        const data = JSON.parse(jsonData);
        
        // Membuat instance baru dari kelas KuliahMahasiswa dengan data dari JSON
        const kuliahMahasiswa = new KuliahMahasiswa2211104066(data.matakuliah);
        
        // Menampilkan informasi sesuai format yang diminta
        console.log("Daftar mata kuliah yang diambil:");
        kuliahMahasiswa.matakuliah.forEach((mk, index) => {
          console.log(`MK ${index + 1} ${mk.kode} - ${mk.nama}`);
        });
        
        return kuliahMahasiswa;
      } catch (error) {
        // Menangani kesalahan jika terjadi
        console.error("Error saat parsing JSON:", error);
        return null;
      }
    }
  }
  
  // Export kelas agar bisa digunakan di file lain (untuk Node.js)
  module.exports = KuliahMahasiswa2211104066;