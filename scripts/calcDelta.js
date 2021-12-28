
const xlsx = require('node-xlsx').default;
const fs = require('fs');

const outputFile = `${__dirname}/../dataset/Grants Results History Round over Round + Grant over Grant-with-delta.xlsx`
const workSheetsFromFile = xlsx.parse(`${__dirname}/../dataset/Grants Results History Round over Round + Grant over Grant.xlsx`);

const firstSheet = workSheetsFromFile[0];
// console.log(workSheetsFromFile)
const compareColumns = ['match_amount', 'num_contributions', 'num_unique_contributors', 'total'];

const COLUMNS = firstSheet.data[0].reduce((mapping, item, index) => {
  mapping[item] = index;
  return mapping
}, {})

compareColumns.forEach(_ => {
  firstSheet.data[0].push(`${_}_last`)
  firstSheet.data[0].push(`${_}_delta`)
  firstSheet.data[0].push(`${_}_delta_rate`)
})

firstSheet.data = firstSheet.data.map((_,index) => {
  if (_[0] == 12) {
    const lastRound = firstSheet.data.find(c => c[0] == 11 && c[4] == _[4])
    if (lastRound) {
      const deltaStatus = compareColumns.map(filed => {
        const lastState = lastRound[COLUMNS[filed]] || 0;
        const nowState = _[COLUMNS[filed]] || 0;
        const delta = nowState - lastState;
        const deltaRate = lastState > 0 ? delta / lastState : 0;
        return {
          filed,
          delta: delta,
          last: lastState,
          delta_rate: deltaRate
        }
      }).forEach(status => {
        _.push(status.last)
        _.push(status.delta)
        _.push(status.delta_rate)
      })
      console.log({
        lastRound, 
        _
      })
    } else {
      console.log('last')
    }
    return _;
  }
  if (index == 0) return _;
}).filter(_ => _)

// console.log(firstSheet.data[0])

const buf = xlsx.build(workSheetsFromFile);
fs.writeFileSync(outputFile, buf);