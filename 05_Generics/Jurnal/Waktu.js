// Class for the generic method implementation
class Penjumlahan {
    jumlahTigaAngka(a, b, c) {
      return a + b + c;
    }
  }
  
  // Class for the generic database implementation
  class SimpleDataBase {
    constructor() {
      this.storedData = [];
      this.inputDates = [];
    }
    
    addNewData(data) {
      this.storedData.push(data);
      this.inputDates.push(new Date());
    }
    
    printAllData() {
      for (let i = 0; i < this.storedData.length; i++) {
        console.log(`Data ${i+1} berisi: ${this.storedData[i]}, yang disimpan pada waktu UTC: ${this.inputDates[i].toUTCString()}`);
      }
    }
  }
  
  // Main execution
  function main() {
    console.log("Starting program...");
    
    const penjumlahan = new Penjumlahan();
    
    // Using digits from NIM 2211104066
    const num1 = 22; 
    const num2 = 11;
    const num3 = 10;
    
    const hasil = penjumlahan.jumlahTigaAngka(num1, num2, num3);
    console.log(`Hasil penjumlahan: ${hasil}`);
    
    // Using SimpleDataBase
    const database = new SimpleDataBase();
    database.addNewData(num1);
    database.addNewData(num2);
    database.addNewData(num3);
    
    console.log("\nPrinting all data:");
    database.printAllData();
  }
  
  // Run the main function
  main();