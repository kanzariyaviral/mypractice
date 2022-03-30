const { writeFileSync } = require('fs')
// for (i=0;i<1000;i++)
for(i=0;i<100000;i++){
    // writeFileSync('./contant/big.txt', `line number is ${i} \n`, {flag: 'a' })
    writeFileSync('./contant/big.txt',`hello world ${i}\n`,{flag:'a'})

}

