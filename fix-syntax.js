// fix-syntax.js
// Simple script to fix the syntax errors in server.js
const fs = require('fs');

const serverFile = './server.js';
const content = fs.readFileSync(serverFile, 'utf8');

// Fix line 38 with the missing brace
const fixedContent = content.replace(
  /date: "Jan 30", peg: "29", character: "Bill nye \(concocting chemical synthesis, then throwing at { foe\)", time: "12:15 pm" },/g,
  '{ date: "Jan 30", peg: "29", character: "Bill nye (concocting chemical synthesis, then throwing at foe)", time: "12:15 pm" },'
);

// Fix similar issues for May 10
const fixedContent2 = fixedContent.replace(
  /date: "May 10", peg: "29", character: "Bill nye \(concocting chemical synthesis, then throwing at { foe\)", time: "12:15 pm" },/g,
  '{ date: "May 10", peg: "29", character: "Bill nye (concocting chemical synthesis, then throwing at foe)", time: "12:15 pm" },'
);

// Fix similar issues for Aug 18
const fixedContent3 = fixedContent2.replace(
  /date: "Aug 18", peg: "29", character: "Bill nye \(concocting chemical synthesis, then throwing at { foe\)", time: "12:15 pm" },/g,
  '{ date: "Aug 18", peg: "29", character: "Bill nye (concocting chemical synthesis, then throwing at foe)", time: "12:15 pm" },'
);

// Fix similar issues for Nov 26
const fixedContent4 = fixedContent3.replace(
  /date: "Nov 26", peg: "29", character: "Bill nye \(concocting chemical synthesis, then throwing at { foe\)", time: "12:15 pm" },/g,
  '{ date: "Nov 26", peg: "29", character: "Bill nye (concocting chemical synthesis, then throwing at foe)", time: "12:15 pm" },'
);

// Add module exports at the end of the file
const finalContent = fixedContent4 + `

// Export for testing
module.exports = {
    pegs,
    getDayOfYear,
    getTimePegIndex
};`;

fs.writeFileSync(serverFile, finalContent);
console.log('Syntax errors fixed in server.js');
