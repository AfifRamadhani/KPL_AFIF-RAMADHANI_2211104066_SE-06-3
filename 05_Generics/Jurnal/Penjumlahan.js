// Class for the generic method implementation
class Penjumlahan {
    jumlahTigaAngka(a, b, c) {
      return a + b + c;
    }
  }
  
  // Main 
  function main() {
    console.log("Starting program...");
    
    const penjumlahan = new Penjumlahan();
    
    // NIM 2211104066
    const num1 = 22; 
    const num2 = 11;
    const num3 = 10;
    
    const hasil = penjumlahan.jumlahTigaAngka(num1, num2, num3);
    console.log(`Hasil penjumlahan: ${hasil}`);
  }
  
  // Run the main function
  main();