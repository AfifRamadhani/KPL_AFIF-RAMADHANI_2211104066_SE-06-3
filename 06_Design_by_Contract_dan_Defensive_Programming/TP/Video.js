const readline = require('readline');

class SayaTubeVideo {
    constructor(judul) {
        // Pemeriksaan prasyarat (Prekondisi)
        if (judul === null) {
            throw new Error("Judul tidak boleh null");
        }
        if (judul.length > 100) {
            throw new Error("Judul tidak boleh melebihi 100 karakter");
        }

        // Generate ID acak 5 digit
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = judul;
        this.playCount = 0;
    }

    // Metode untuk menambah jumlah tayang dengan pemeriksaan prasyarat
    increasePlayCount(count) {
        // Pemeriksaan prasyarat
        if (count < 0) {
            throw new Error("Jumlah tayang tidak boleh negatif");
        }
        if (count > 10000000) {
            throw new Error("Jumlah tayang tidak boleh melebihi 10.000.000 per panggilan");
        }

        // Periksa potensi integer overflow
        try {
            if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
                throw new Error("Jumlah tayang akan melebihi nilai integer maksimum");
            }
            this.playCount += count;
        } catch (kesalahan) {
            console.error("Kesalahan menambah jumlah tayang:", kesalahan.message);
        }
    }

    // Metode untuk mencetak detail video
    printVideoDetails() {
        console.log(`ID Video: ${this.id}`);
        console.log(`Judul: ${this.title}`);
        console.log(`Jumlah Tayang: ${this.playCount}`);
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
            // Input nama praktikan untuk judul video
            const namaPraktikan = await tanyaInput("Masukkan nama Anda: ");
            
            // Buat video dengan judul sesuai format
            const video = new SayaTubeVideo(`Tutorial Design By Contract – ${namaPraktikan}`);

            // Input jumlah tayang untuk uji overflow
            const jumlahPerulangan = parseInt(await tanyaInput("Masukkan jumlah perulangan untuk uji overflow (misal 20): "));
            
            // Uji penambahan jumlah tayang dengan potensi overflow
            console.log("\n--- Proses Uji Penambahan Jumlah Tayang ---");
            try {
                for (let i = 0; i < jumlahPerulangan; i++) {
                    // Tambahkan jumlah tayang mendekati batas maksimum
                    video.increasePlayCount(10000000);
                }
            } catch (kesalahan) {
                console.error("Kesalahan dalam proses uji:", kesalahan.message);
            }

            // Cetak detail video
            console.log("\n--- Detail Video ---");
            video.printVideoDetails();

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