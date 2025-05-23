// Rectangle.js

// Menghitung luas dan keliling persegi panjang dengan pendekatan OOP

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  // Method untuk menghitung luas
  calculateArea() {
    return this.length * this.width;
  }

  // Method untuk menghitung keliling
  calculatePerimeter() {
    return 2 * (this.length + this.width);
  }

  // Menampilkan hasil
  displayResult() {
    console.log(`Panjang: ${this.length}`);
    console.log(`Lebar: ${this.width}`);
    console.log(`Luas: ${this.calculateArea()}`);
    console.log(`Keliling: ${this.calculatePerimeter()}`);
  }
}

// Eksekusi program
const rectangle = new Rectangle(10, 5);
rectangle.displayResult();
