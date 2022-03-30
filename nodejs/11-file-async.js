const {readFile,writeFile}=require('fs');
console.log('start')
readFile('./contant/file1.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first=result;
    readFile('./contant/file2.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
    const second=result;
    writeFile('./contant/result.txt',`here is  result of asyn fileread and writefile: ${first},${second}`,(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('doing');

    })
    })
})
console.log('done')