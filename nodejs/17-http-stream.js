const http=require('http')
const fs=require('fs')
http.createServer((req,res)=>{
    const fileStream=fs.createReadStream('./contant/big.txt','utf-8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',()=>{
        res.end(err)
    })
})
.listen(5000)