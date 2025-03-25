const readline = require('readline');

// Kelas Video untuk Platform SayaTube
class SayaTubeVideo {
    constructor(judul) {
        // Pemeriksaan prasyarat
        if (judul === null) {
            throw new Error("Judul tidak boleh null");
        }
        if (judul.length > 200) {
            throw new Error("Judul tidak boleh melebihi 200 karakter");
        }

        // Buat ID acak 5 digit
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.judul = judul;
        this.jumlahTayang = 0;
    }

    // Metode untuk menambah jumlah tayang dengan pemeriksaan prasyarat
    tambahkanJumlahTayang(jumlah) {
        // Pemeriksaan prasyarat
        if (jumlah < 0) {
            throw new Error("Jumlah tayang tidak boleh negatif");
        }
        if (jumlah > 25000000) {
            throw new Error("Jumlah tayang tidak boleh melebihi 25.000.000 per panggilan");
        }

        // Periksa potensi integer overflow
        try {
            if (this.jumlahTayang + jumlah > Number.MAX_SAFE_INTEGER) {
                throw new Error("Jumlah tayang akan melebihi nilai integer maksimum");
            }
            this.jumlahTayang += jumlah;
        } catch (kesalahan) {
            console.error("Kesalahan menambah jumlah tayang:", kesalahan.message);
        }
    }

    // Metode untuk mencetak detail video
    cetakDetailVideo() {
        console.log(`ID Video: ${this.id}`);
        console.log(`Judul: ${this.judul}`);
        console.log(`Jumlah Tayang: ${this.jumlahTayang}`);
    }
}

// Kelas Pengguna untuk Platform SayaTube
class SayaTubePengguna {
    constructor(namaPengguna) {
        // Pemeriksaan prasyarat
        if (namaPengguna === null) {
            throw new Error("Nama pengguna tidak boleh null");
        }
        if (namaPengguna.length > 100) {
            throw new Error("Nama pengguna tidak boleh melebihi 100 karakter");
        }

        this.namaPengguna = namaPengguna;
        this.videoYangDiunggah = [];
    }

    // Metode untuk menambah video dengan pemeriksaan prasyarat
    tambahkanVideo(video) {
        // Pemeriksaan prasyarat
        if (video === null) {
            throw new Error("Video tidak boleh null");
        }
        if (video.jumlahTayang >= Number.MAX_SAFE_INTEGER) {
            throw new Error("Jumlah tayang video terlalu tinggi");
        }

        this.videoYangDiunggah.push(video);
    }

    // Metode untuk mendapatkan total jumlah tayang semua video
    dapatkanTotalJumlahTayangVideo() {
        return this.videoYangDiunggah.reduce((total, video) => total + video.jumlahTayang, 0);
    }

    // Metode untuk mencetak jumlah tayang semua video (maks 8 video)
    cetakJumlahTayangSemuaVideo() {
        console.log(`Pengguna: ${this.namaPengguna}`);
        
        // Pascakondisi: Cetak maksimal 8 video
        const videoYangDicetak = this.videoYangDiunggah.slice(0, 8);
        
        videoYangDicetak.forEach((video, indeks) => {
            console.log(`Video ${indeks + 1} judul: ${video.judul}`);
        });
    }
}

// Fungsi untuk input interaktif
function inputData() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Fungsi untuk membuat janji (promise) input
    function tanyaInput(pertanyaan) {
        return new Promise((resolve) => {
            rl.question(pertanyaan, (jawaban) => {
                resolve(jawaban);
            });
        });
    }

    // Fungsi utama asinkron untuk input dan pemrosesan
    async function prosesInput() {
        try {
            // Input nama pengguna
            const namaPengguna = await tanyaInput("Masukkan nama pengguna: ");
            const pengguna = new SayaTubePengguna(namaPengguna);

            // Input jumlah video
            const jumlahVideo = parseInt(await tanyaInput("Berapa banyak video yang ingin Anda tambahkan? "));
            
            // Input detail video
            for (let i = 0; i < jumlahVideo; i++) {
                const judulVideo = await tanyaInput(`Masukkan judul video ke-${i + 1}: `);
                const video = new SayaTubeVideo(judulVideo);

                // Input jumlah tayang
                const inputJumlahTayang = parseInt(await tanyaInput(`Masukkan jumlah tayang untuk video "${judulVideo}": `));
                
                // Tambahkan jumlah tayang
                try {
                    video.tambahkanJumlahTayang(inputJumlahTayang);
                } catch (kesalahan) {
                    console.error(kesalahan.message);
                }

                // Tambahkan video ke pengguna
                pengguna.tambahkanVideo(video);
            }

            // Cetak hasil
            console.log("\n--- Hasil ---");
            pengguna.cetakJumlahTayangSemuaVideo();
            console.log(`Total Jumlah Tayang: ${pengguna.dapatkanTotalJumlahTayangVideo()}`);

            // Tutup antarmuka readline
            rl.close();
        } catch (kesalahan) {
            console.error("Kesalahan dalam proses input:", kesalahan.message);
            rl.close();
        }
    }

    // Jalankan proses input
    prosesInput();
}

// Jalankan fungsi input data
inputData();