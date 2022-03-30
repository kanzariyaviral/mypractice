const http =require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('this is home page')
        // res.end()
    }
    else if(req.url==='/about'){
        res.end('this is about page')
    
    }else{
        res.end(`
                <p>sorry this page is not exit</p>
                <a href='/'>home page</a>`
        )
    }
})
server.listen(5001)