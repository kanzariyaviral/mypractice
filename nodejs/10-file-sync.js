const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./contant/file1.txt', 'utf-8');
const second = readFileSync('./contant/file2.txt', 'utf-8');
console.log('doing');
console.log(first, second);
writeFileSync('./contant/final.txt', `here is the result :-${first},${second}`)
