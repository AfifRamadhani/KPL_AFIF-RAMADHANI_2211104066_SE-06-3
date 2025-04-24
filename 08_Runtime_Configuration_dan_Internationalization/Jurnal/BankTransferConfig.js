import fs from 'fs';

class BankTransferConfig {
  constructor() {
    // Set default values
    this.lang = "en";
    this.transfer = {
      threshold: 25000000,
      low_fee: 6500,
      high_fee: 15000
    };
    this.methods = ["RTO (real-time)", "SKN", "RTGS", "BI FAST"];
    this.confirmation = {
      en: "yes",
      id: "ya"
    };
  }

  static loadConfig() {
    const configFileName = "bank_transfer_config.json";
    let config = new BankTransferConfig();

    try {
      if (fs.existsSync(configFileName)) {
        const jsonData = fs.readFileSync(configFileName, 'utf8');
        const loadedConfig = JSON.parse(jsonData);
        
        // Update config with loaded values
        config.lang = loadedConfig.lang || config.lang;
        config.transfer = loadedConfig.transfer || config.transfer;
        config.methods = loadedConfig.methods || config.methods;
        config.confirmation = loadedConfig.confirmation || config.confirmation;
        
        console.log("Config file found and loaded");
      } else {
        // Create config file with default values
        const jsonData = JSON.stringify(config, null, 2);
        fs.writeFileSync(configFileName, jsonData);
        console.log("Config file not found, created with default values");
      }
    } catch (error) {
      console.error(`Error loading config: ${error.message}`);
    }

    return config;
  }
}

export default BankTransferConfig;