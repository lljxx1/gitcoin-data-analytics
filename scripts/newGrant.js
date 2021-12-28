
const xlsx = require('node-xlsx').default;
const fs = require('fs');

const outputFile = `${__dirname}/../dataset/Grants Results History Round over Round + Grant over Grant-ever-new.xlsx`
const workSheetsFromFile = xlsx.parse(`${__dirname}/../dataset/Grants Results History Round over Round + Grant over Grant.xlsx`);

const firstSheet = workSheetsFromFile[0];


firstSheet.data = firstSheet.data.filter((_, index) => {
  if (index == 0) return _;
  if (_[0]  != 12) return false
  const lastRound = firstSheet.data.find(c => c[0] != _[0] && c[4] == _[4]);
  return !lastRound;
})

// console.log(firstSheet.data[0])

const buf = xlsx.build(workSheetsFromFile);
fs.writeFileSync(outputFile, buf);