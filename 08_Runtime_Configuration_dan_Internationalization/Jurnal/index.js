import readlineSync from 'readline-sync';
import BankTransferConfig from './BankTransferConfig.js';

// Load configuration
const config = BankTransferConfig.loadConfig();

// Step 1: Display prompt for transfer amount based on language
const transferAmountPrompt = config.lang.toLowerCase() === "en" 
  ? "Please insert the amount of money to transfer:" 
  : "Masukkan jumlah uang yang akan di-transfer:";

console.log(transferAmountPrompt);
let transferAmount = 0;

try {
  transferAmount = parseInt(readlineSync.question(''));
  
  if (isNaN(transferAmount)) {
    console.log("Invalid input. Using 0 as default.");
    transferAmount = 0;
  }
} catch (error) {
  console.log("Invalid input. Using 0 as default.");
}

// Step 2: Calculate transfer fee and total amount
const transferFee = transferAmount <= config.transfer.threshold 
  ? config.transfer.low_fee 
  : config.transfer.high_fee;

const totalAmount = transferAmount + transferFee;

if (config.lang.toLowerCase() === "en") {
  console.log(`Transfer fee = ${transferFee}`);
  console.log(`Total amount = ${totalAmount}`);
} else {
  console.log(`Biaya transfer = ${transferFee}`);
  console.log(`Total biaya = ${totalAmount}`);
}

// Step 3: Display transfer methods
const methodPrompt = config.lang.toLowerCase() === "en" 
  ? "Select transfer method:" 
  : "Pilih metode transfer:";

console.log(methodPrompt);

for (let i = 0; i < config.methods.length; i++) {
  console.log(`${i + 1}. ${config.methods[i]}`);
}

// Get user selection
let selectedMethod = 0;
try {
  selectedMethod = parseInt(readlineSync.question(''));
  
  // Validate input
  if (selectedMethod < 1 || selectedMethod > config.methods.length) {
    console.log("Invalid selection.");
    process.exit(1);
  }
} catch (error) {
  console.log("Invalid selection.");
  process.exit(1);
}

// Step 4: Ask for confirmation
const confirmationValue = config.lang.toLowerCase() === "en" 
  ? config.confirmation.en 
  : config.confirmation.id;

const confirmationPrompt = config.lang.toLowerCase() === "en" 
  ? `Please type "${confirmationValue}" to confirm the transaction:` 
  : `Ketik "${confirmationValue}" untuk mengkonfirmasi transaksi:`;

console.log(confirmationPrompt);
const userConfirmation = readlineSync.question('');

// Step 5: Process the result
if (userConfirmation.toLowerCase() === confirmationValue.toLowerCase()) {
  const successMessage = config.lang.toLowerCase() === "en" 
    ? "The transfer is completed" 
    : "Proses transfer berhasil";
  
  console.log(successMessage);
} else {
  const cancelMessage = config.lang.toLowerCase() === "en" 
    ? "Transfer is cancelled" 
    : "Transfer dibatalkan";
  
  console.log(cancelMessage);
}