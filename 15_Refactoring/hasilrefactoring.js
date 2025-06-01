const readline = require('readline');
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

// Class untuk mengelola user data dengan secure practices
class UserManager {
    constructor() {
        this.usersFile = path.join(__dirname, 'users.json');
        this.initializeUsersFile();
    }

    // Initialize users file jika belum ada
    initializeUsersFile() {
        if (!fs.existsSync(this.usersFile)) {
            fs.writeFileSync(this.usersFile, '[]', 'utf8');
        }
    }

    // Input Validation - Validasi username
    validateUsername(username) {
        // Validasi range data - hanya huruf alfabet ASCII dan angka
        const alphanumericRegex = /^[a-zA-Z0-9]+$/;
        if (!alphanumericRegex.test(username)) {
            throw new Error("Username hanya boleh mengandung huruf alfabet ASCII dan angka");
        }
        
        // Validasi panjang data - minimal 3, maksimal 20 karakter
        if (username.length < 3) {
            throw new Error("Username minimal 3 karakter");
        }
        if (username.length > 20) {
            throw new Error("Username maksimal 20 karakter");
        }
        
        return true;
    }

    // Password Management - Password rules dan validation
    validatePassword(password, username) {
        // Validasi panjang password - minimal 8 karakter
        if (password.length < 8) {
            throw new Error("Password minimal 8 karakter");
        }
        
        // Validasi maksimal 50 karakter
        if (password.length > 50) {
            throw new Error("Password maksimal 50 karakter");
        }

        // Password harus mengandung minimal 1 karakter unik
        const specialCharRegex = /[!@#$%^&*]/;
        if (!specialCharRegex.test(password)) {
            throw new Error("Password harus mengandung minimal 1 karakter unik (!@#$%^&*)");
        }

        // Password harus mengandung minimal 1 angka
        const numberRegex = /\d/;
        if (!numberRegex.test(password)) {
            throw new Error("Password harus mengandung minimal 1 angka");
        }

        // Password tidak boleh mengandung kata dari username
        if (password.toLowerCase().includes(username.toLowerCase())) {
            throw new Error("Password tidak boleh mengandung kata dari username");
        }

        return true;
    }

    // Password Management - Password hashing dengan SHA256
    hashPassword(password) {
        const salt = crypto.randomBytes(16).toString('hex');
        const hash = crypto.createHash('sha256');
        hash.update(password + salt);
        return {
            hashedPassword: hash.digest('hex'),
            salt: salt
        };
    }

    // Verifikasi password saat login
    verifyPassword(inputPassword, storedHash, salt) {
        const hash = crypto.createHash('sha256');
        hash.update(inputPassword + salt);
        return hash.digest('hex') === storedHash;
    }

    // Load users dari file JSON
    loadUsers() {
        try {
            const data = fs.readFileSync(this.usersFile, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error("Error membaca file users:", error.message);
            return [];
        }
    }

    // Save users ke file JSON
    saveUsers(users) {
        try {
            fs.writeFileSync(this.usersFile, JSON.stringify(users, null, 2), 'utf8');
            return true;
        } catch (error) {
            console.error("Error menyimpan file users:", error.message);
            return false;
        }
    }

    // Registrasi user dengan secure practices
    registerUser(username, password) {
        try {
            // Input validation
            this.validateUsername(username);
            this.validatePassword(password, username);

            // Load existing users
            const users = this.loadUsers();

            // Check apakah username sudah ada
            const existingUser = users.find(user => user.username === username);
            if (existingUser) {
                throw new Error("Username sudah terdaftar");
            }

            // Hash password
            const { hashedPassword, salt } = this.hashPassword(password);

            // Tambah user baru
            const newUser = {
                id: Date.now(),
                username: username,
                password: hashedPassword,
                salt: salt,
                createdAt: new Date().toISOString()
            };

            users.push(newUser);

            // Save ke file
            if (this.saveUsers(users)) {
                console.log("✓ Registrasi berhasil!");
                return true;
            } else {
                throw new Error("Gagal menyimpan data user");
            }

        } catch (error) {
            console.error("✗ Error registrasi:", error.message);
            return false;
        }
    }

    // Login user dengan verifikasi password
    loginUser(username, password) {
        try {
            // Basic input validation
            if (!username || !password) {
                throw new Error("Username dan password tidak boleh kosong");
            }

            // Load users
            const users = this.loadUsers();

            // Cari user
            const user = users.find(u => u.username === username);
            if (!user) {
                throw new Error("Username tidak ditemukan");
            }

            // Verifikasi password
            if (this.verifyPassword(password, user.password, user.salt)) {
                console.log("✓ Login berhasil!");
                return { success: true, user: { id: user.id, username: user.username } };
            } else {
                throw new Error("Password salah");
            }

        } catch (error) {
            console.error("✗ Error login:", error.message);
            return { success: false, error: error.message };
        }
    }
}

// Class SayaTubeVideo yang sudah ada (dengan sedikit perbaikan)
class SayaTubeVideo {
    constructor(judul) {
        // Input Validation - Handling data invalid
        if (judul === null || judul === undefined) {
            throw new Error("Judul tidak boleh null atau undefined");
        }
        
        if (typeof judul !== 'string') {
            throw new Error("Judul harus berupa string");
        }
        
        if (judul.trim().length === 0) {
            throw new Error("Judul tidak boleh kosong");
        }
        
        if (judul.length > 100) {
            throw new Error("Judul tidak boleh melebihi 100 karakter");
        }

        // Generate ID acak 5 digit
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = judul.trim();
        this.playCount = 0;
    }

    // Metode untuk menambah jumlah tayang dengan pemeriksaan prasyarat
    increasePlayCount(count) {
        // Input Validation
        if (typeof count !== 'number' || isNaN(count)) {
            throw new Error("Jumlah tayang harus berupa angka");
        }
        
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
            throw kesalahan;
        }
    }

    // Metode untuk mencetak detail video
    printVideoDetails() {
        console.log(`ID Video: ${this.id}`);
        console.log(`Judul: ${this.title}`);
        console.log(`Jumlah Tayang: ${this.playCount.toLocaleString()}`);
    }
}

// Main Application Class
class SecureDesktopApp {
    constructor() {
        this.userManager = new UserManager();
        this.currentUser = null;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    // Helper function untuk input dengan promise
    question(prompt) {
        return new Promise((resolve) => {
            this.rl.question(prompt, resolve);
        });
    }

    // Helper function untuk input password (hidden)
    async questionPassword(prompt) {
        return new Promise((resolve) => {
            this.rl.question(prompt, (answer) => {
                resolve(answer);
            });
        });
    }

    // Menu utama
    async showMainMenu() {
        console.log('\n=== SECURE DESKTOP APPLICATION ===');
        console.log('1. Registrasi User');
        console.log('2. Login User');
        console.log('3. Keluar');
        
        const choice = await this.question('Pilih menu (1-3): ');
        
        switch (choice.trim()) {
            case '1':
                await this.handleRegistration();
                break;
            case '2':
                await this.handleLogin();
                break;
            case '3':
                console.log('Terima kasih! Aplikasi ditutup.');
                this.rl.close();
                return;
            default:
                console.log('Pilihan tidak valid!');
                await this.showMainMenu();
        }
    }

    // Handle registrasi
    async handleRegistration() {
        try {
            console.log('\n--- REGISTRASI USER ---');
            const username = await this.question('Username: ');
            const password = await this.questionPassword('Password: ');
            const confirmPassword = await this.questionPassword('Konfirmasi Password: ');
            
            if (password !== confirmPassword) {
                console.log('✗ Password dan konfirmasi password tidak sama!');
            } else {
                this.userManager.registerUser(username.trim(), password);
            }
            
        } catch (error) {
            console.error('Error dalam registrasi:', error.message);
        }
        
        await this.showMainMenu();
    }

    // Handle login
    async handleLogin() {
        try {
            console.log('\n--- LOGIN USER ---');
            const username = await this.question('Username: ');
            const password = await this.questionPassword('Password: ');
            
            const loginResult = this.userManager.loginUser(username.trim(), password);
            
            if (loginResult.success) {
                this.currentUser = loginResult.user;
                await this.showUserMenu();
            }
            
        } catch (error) {
            console.error('Error dalam login:', error.message);
        }
        
        await this.showMainMenu();
    }

    // Menu setelah login berhasil
    async showUserMenu() {
        console.log(`\n=== SELAMAT DATANG, ${this.currentUser.username.toUpperCase()}! ===`);
        console.log('1. Buat Video Tutorial');
        console.log('2. Logout');
        
        const choice = await this.question('Pilih menu (1-2): ');
        
        switch (choice.trim()) {
            case '1':
                await this.handleCreateVideo();
                break;
            case '2':
                console.log('✓ Logout berhasil!');
                this.currentUser = null;
                await this.showMainMenu();
                return;
            default:
                console.log('Pilihan tidak valid!');
                await this.showUserMenu();
        }
    }

    // Handle pembuatan video
    async handleCreateVideo() {
        try {
            console.log('\n--- BUAT VIDEO TUTORIAL ---');
            
            // Buat video dengan judul sesuai format
            const video = new SayaTubeVideo(`Tutorial Design By Contract – ${this.currentUser.username}`);
            
            // Input jumlah tayang untuk uji overflow
            const jumlahPerulanganStr = await this.question('Masukkan jumlah perulangan untuk uji overflow (misal 20): ');
            const jumlahPerulangan = parseInt(jumlahPerulanganStr);
            
            // Validasi input
            if (isNaN(jumlahPerulangan) || jumlahPerulangan < 0) {
                throw new Error("Jumlah perulangan harus berupa angka positif");
            }
            
            if (jumlahPerulangan > 1000) {
                throw new Error("Jumlah perulangan maksimal 1000 untuk keamanan");
            }
            
            // Uji penambahan jumlah tayang dengan potensi overflow
            console.log("\n--- Proses Uji Penambahan Jumlah Tayang ---");
            try {
                for (let i = 0; i < jumlahPerulangan; i++) {
                    video.increasePlayCount(10000000);
                    if (i % 5 === 0) {
                        console.log(`Progress: ${i + 1}/${jumlahPerulangan}`);
                    }
                }
                console.log("✓ Proses uji selesai tanpa error!");
            } catch (kesalahan) {
                console.error("✗ Error dalam proses uji:", kesalahan.message);
            }
            
            // Cetak detail video
            console.log("\n--- DETAIL VIDEO ---");
            video.printVideoDetails();
            
        } catch (error) {
            console.error('Error dalam pembuatan video:', error.message);
        }
        
        await this.showUserMenu();
    }

    // Start aplikasi
    async start() {
        console.log('🔒 Secure Desktop Application dengan Design by Contract');
        console.log('📋 Implementasi: Input Validation & Password Management');
        await this.showMainMenu();
    }
}

// Jalankan aplikasi
const app = new SecureDesktopApp();
app.start().catch(error => {
    console.error('Error menjalankan aplikasi:', error.message);
    process.exit(1);
});