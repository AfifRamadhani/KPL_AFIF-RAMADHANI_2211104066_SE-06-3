const fs = require('fs');

class TeamMembers2211104066 {
  constructor() {
    this.teamMemberList = [];
  }

  readJSON() {
    try {
      // Read the JSON file
      const jsonString = fs.readFileSync('jurnal7_2_2211104066.json', 'utf8');
      
      // Parse the JSON
      const data = JSON.parse(jsonString);
      
      // Copy properties to this instance
      Object.assign(this, data);
      
      // Display the results
      console.log("Team member list:");
      this.teamMemberList.forEach(member => {
        console.log(`${member.nim} ${member.firstname} ${member.lastname} (${member.age} ${member.gender})`);
      });
    } catch (error) {
      console.error("Error reading JSON file:", error.message);
    }
  }
}

module.exports = TeamMembers2211104066;