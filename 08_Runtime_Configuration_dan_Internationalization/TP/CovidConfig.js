const fs = require('fs');

class CovidConfig {
    constructor() {
        // Default config values
        this.config = {
            "satuan_suhu": "celcius",
            "batas_hari_deman": 14,
            "pesan_ditolak": "Anda tidak diperbolehkan masuk ke dalam gedung ini",
            "pesan_diterima": "Anda dipersilahkan untuk masuk ke dalam gedung ini"
        };
        this.configPath = './covid_config.json';
        this.loadConfig();
    }

    // Load configuration from file
    loadConfig() {
        try {
            // Check if config file exists
            if (fs.existsSync(this.configPath)) {
                const fileContent = fs.readFileSync(this.configPath, 'utf8');
                const loadedConfig = JSON.parse(fileContent);
                
                // Update config with loaded values
                this.config = {
                    ...this.config, // Keep defaults for missing values
                    ...loadedConfig // Override with values from file
                };
                
                console.log("Configuration loaded successfully");
            } else {
                console.log("Config file not found. Using default values.");
                this.saveConfig(); // Create the default config file
            }
        } catch (error) {
            console.log("Failed to load configuration. Using default values.", error);
        }
    }

    // Save configuration to file
    saveConfig() {
        try {
            const configJson = JSON.stringify(this.config, null, 2);
            fs.writeFileSync(this.configPath, configJson);
            console.log("Configuration saved successfully");
        } catch (error) {
            console.log("Failed to save configuration.", error);
        }
    }

    // Get a configuration value
    getConfig(key) {
        return this.config[key];
    }

    // Set a configuration value
    setConfig(key, value) {
        this.config[key] = value;
        this.saveConfig();
    }

    // Method to switch temperature unit
    ubahSatuan() {
        if (this.config.satuan_suhu === "celcius") {
            this.config.satuan_suhu = "fahrenheit";
        } else {
            this.config.satuan_suhu = "celcius";
        }
        this.saveConfig();
        return this.config.satuan_suhu;
    }
}

module.exports = CovidConfig;