// Fungsi untuk menghitung total harga termasuk pajak
function calculateTotalPrice(products, taxRate) {
  let totalPrice = 0;

  // Melakukan perulangan untuk menjumlahkan harga dari setiap produk
  for (let product of products) {
    totalPrice += product.price;
  }

  // Menghitung jumlah pajak berdasarkan total harga
  const taxAmount = totalPrice * taxRate;

  // Mengembalikan total harga termasuk pajak
  return totalPrice + taxAmount;
}

// Contoh penggunaan fungsi
const shoppingCart = [
  { name: 'Laptop', price: 12000000 },   // Produk pertama: Laptop
  { name: 'Mouse', price: 250000 },      // Produk kedua: Mouse
  { name: 'Keyboard', price: 500000 }    // Produk ketiga: Keyboard
];

const taxRate = 0.1; // Pajak 10%
const total = calculateTotalPrice(shoppingCart, taxRate); // Hitung total harga

// Tampilkan hasil total harga termasuk pajak ke konsol
console.log(`Total yang harus dibayar (termasuk pajak): Rp${total}`);
