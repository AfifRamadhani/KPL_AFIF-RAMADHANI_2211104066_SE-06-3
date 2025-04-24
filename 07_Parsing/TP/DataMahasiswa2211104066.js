class DataMahasiswa2211104066 {
    constructor(nama, nim, fakultas) {
      this.nama = nama;
      this.nim = nim;
      this.fakultas = fakultas;
    }
  
    static bacaJSON(jsonData) {
      try {
        // Mengubah string JSON menjadi objek JavaScript
        const data = JSON.parse(jsonData);
        
        // Membuat instance baru dari kelas DataMahasiswa dengan data dari JSON
        const mahasiswa = new DataMahasiswa2211104066(data.nama, data.nim, data.fakultas);
        
        // Menampilkan informasi sesuai format yang diminta
        console.log(`Nama ${mahasiswa.nama} dengan nim ${mahasiswa.nim} dari fakultas ${mahasiswa.fakultas}`);
        
        return mahasiswa;
      } catch (error) {
        // Menangani kesalahan jika terjadi
        console.error("Error saat parsing JSON:", error);
        return null;
      }
    }
  }
  
  // Export kelas agar bisa digunakan di file lain (untuk Node.js)
  module.exports = DataMahasiswa2211104066;