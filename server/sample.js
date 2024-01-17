import cutoff from './GM Cutoffs.json' assert { type: 'json' };
import fs from 'fs';

const list = {};

for (let i = 0; i < cutoff.length; i++) {
    const collegeBranch = cutoff[i]["College, Branch"];
    const gmCutoff = cutoff[i]["GM"];
    list[collegeBranch] = gmCutoff;
}

const dataArray = Object.entries(list);

const sortedArray = dataArray.sort(([, a], [, b]) => a - b);

const sortedObject = Object.fromEntries(sortedArray);

const jsonString = JSON.stringify(sortedObject, null, 2);

fs.writeFileSync('GMCutoffSorted.json', jsonString);

console.log('Sorted output has been written to GMCutoffSorted.json');