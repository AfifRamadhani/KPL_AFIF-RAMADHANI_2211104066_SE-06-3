const readline = require('readline');
const CovidConfig = require('./CovidConfig');

class CovidScreeningApp {
    constructor() {
        this.covidConfig = new CovidConfig();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    // Method to get user input
    getUserInput(question) {
        return new Promise((resolve) => {
            this.rl.question(question, (answer) => {
                resolve(answer);
            });
        });
    }

    // Check if temperature is within acceptable range
    checkTemperature(temperature) {
        const unit = this.covidConfig.getConfig("satuan_suhu");
        
        if (unit === "celcius") {
            return temperature >= 36.5 && temperature <= 37.5;
        } else { // fahrenheit
            return temperature >= 97.7 && temperature <= 99.5;
        }
    }

    // Check if fever days are within acceptable range
    checkFeverDays(days) {
        const limit = this.covidConfig.getConfig("batas_hari_deman");
        return days < limit;
    }

    // Run the application
    async run() {
        console.log("COVID Screening Application");
        console.log("---------------------------");
        
        try {
            // Get temperature input
            const tempUnit = this.covidConfig.getConfig("satuan_suhu");
            const tempInput = await this.getUserInput(`Berapa suhu badan anda saat ini? Dalam nilai ${tempUnit}: `);
            const temperature = parseFloat(tempInput);
            
            // Get fever days input
            const daysInput = await this.getUserInput("Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala deman? ");
            const days = parseInt(daysInput);
            
            // Check conditions and show appropriate message
            const tempCheck = this.checkTemperature(temperature);
            const daysCheck = this.checkFeverDays(days);
            
            console.log("\nHasil Screening:");
            if (tempCheck && daysCheck) {
                console.log(this.covidConfig.getConfig("pesan_diterima"));
            } else {
                console.log(this.covidConfig.getConfig("pesan_ditolak"));
            }
            
            // Change temperature unit and run again
            console.log("\nMengubah satuan suhu...");
            const newUnit = this.covidConfig.ubahSatuan();
            console.log(`Satuan suhu diubah menjadi: ${newUnit}`);
            
            // Run the check again with new unit
            console.log("\nMelakukan screening dengan satuan baru...");
            const newTempInput = await this.getUserInput(`Berapa suhu badan anda saat ini? Dalam nilai ${newUnit}: `);
            const newTemperature = parseFloat(newTempInput);
            
            const newTempCheck = this.checkTemperature(newTemperature);
            
            console.log("\nHasil Screening:");
            if (newTempCheck && daysCheck) {
                console.log(this.covidConfig.getConfig("pesan_diterima"));
            } else {
                console.log(this.covidConfig.getConfig("pesan_ditolak"));
            }
            
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
        } finally {
            this.rl.close();
        }
    }
}

// Create and run the application
const app = new CovidScreeningApp();
app.run();