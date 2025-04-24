const fs = require('fs');

class DataMahasiswa2211104066 {
  constructor() {
    this.nim = "";
    this.firstname = "";
    this.lastname = "";
    this.age = 0;
    this.gender = "";
    this.address = {
      street: "",
      city: "",
      zipcode: ""
    };
    this.courses = [];
  }

  readJSON() {
    try {
      // Read the JSON file
      const jsonString = fs.readFileSync('jurnal7_1_2211104066.json', 'utf8');
      
      // Parse the JSON
      const data = JSON.parse(jsonString);
      
      // Copy properties to this instance
      Object.assign(this, data);
      
      // Display the results
      console.log("Student Information:");
      console.log(`NIM: ${this.nim}`);
      console.log(`Name: ${this.firstname} ${this.lastname}`);
      console.log(`Age: ${this.age}`);
      console.log(`Gender: ${this.gender}`);
      console.log(`Address: ${this.address.street}, ${this.address.city}, ${this.address.zipcode}`);
      console.log("Courses:");
      this.courses.forEach(course => {
        console.log(`- ${course}`);
      });
    } catch (error) {
      console.error("Error reading JSON file:", error.message);
    }
  }
}

module.exports = DataMahasiswa2211104066;