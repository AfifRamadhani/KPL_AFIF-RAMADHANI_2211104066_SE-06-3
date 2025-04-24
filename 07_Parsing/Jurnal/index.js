const DataMahasiswa2211104066 = require('./DataMahasiswa_2211104066.js');
const TeamMembers2211104066 = require('./TeamMember_2211104066.js');
const GlossaryItem2211104066 = require('./GlossaryItem_2211104066.js');

console.log("=== JSON Deserialization Demo ===\n");

// Task 1: DataMahasiswa
console.log("Task 1: Student Data");
const studentData = new DataMahasiswa2211104066();
studentData.readJSON();
console.log();

// Task 2: TeamMembers
console.log("Task 2: Team Members");
const teamData = new TeamMembers2211104066();
teamData.readJSON();
console.log();

// Task 3: GlossaryItem
console.log("Task 3: Glossary Item");
const glossaryData = new GlossaryItem2211104066();
glossaryData.readJSON();