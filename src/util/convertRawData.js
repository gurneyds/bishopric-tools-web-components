let fs = require('fs');

var converter = require('./converter');

let callings = converter.processRawData();

for(let i=0; i < callings.length; i++){
  console.log(JSON.stringify(callings[i]));
}

console.log('There are:' + callings.length + ' callings');

let filledCallings = callings.filter(item => item.since);

console.log('There are:' + filledCallings.length + ' filled callings');

let csv = 'Organization,Calling,Person,Since\n';
for(let i=0; i < callings.length; i++) {
  let c = callings[i];
  csv += c.org + "," + c.calling + "," + c.person + "," + c.since + "\n";
}

// Convert to CSV and output to a file
fs.writeFile("callings.csv", csv, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
