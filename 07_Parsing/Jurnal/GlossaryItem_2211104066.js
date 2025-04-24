const fs = require('fs');

class GlossaryItem2211104066 {
  constructor() {
    this.glossary = {
      title: "",
      glossDiv: {
        title: "",
        glossList: {
          glossEntry: {
            ID: "",
            SortAs: "",
            GlossTerm: "",
            Acronym: "",
            Abbrev: "",
            GlossDef: {
              Para: "",
              GlossSeeAlso: []
            },
            GlossSee: ""
          }
        }
      }
    };
  }

  readJSON() {
    try {
      // Read the JSON file
      const jsonString = fs.readFileSync('jurnal7_3_2211104066.json', 'utf8');
      
      // Parse the JSON
      const data = JSON.parse(jsonString);
      
      // Copy properties to this instance
      Object.assign(this, data);
      
      // Display the GlossEntry results
      const entry = this.glossary.glossDiv.glossList.glossEntry;
      
      console.log("Glossary Entry Information:");
      console.log(`ID: ${entry.ID}`);
      console.log(`SortAs: ${entry.SortAs}`);
      console.log(`GlossTerm: ${entry.GlossTerm}`);
      console.log(`Acronym: ${entry.Acronym}`);
      console.log(`Abbrev: ${entry.Abbrev}`);
      console.log(`GlossDef: ${entry.GlossDef.Para}`);
      console.log("GlossSeeAlso:");
      entry.GlossDef.GlossSeeAlso.forEach(item => {
        console.log(`- ${item}`);
      });
      console.log(`GlossSee: ${entry.GlossSee}`);
    } catch (error) {
      console.error("Error reading JSON file:", error.message);
    }
  }
}

module.exports = GlossaryItem2211104066;