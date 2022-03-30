const http=require('http')
const {readFileSync}=require('fs')
const { text } = require('body-parser')

const homepage =readFileSync('./navbar-app/index.html')
const homestyles =readFileSync('./navbar-app/styles.css')
const logosvg =readFileSync('./navbar-app/logo.svg')
const browser =readFileSync('./navbar-app/browser-app.js')
 
const server =http.createServer((req,res)=>{
    const url =req.url;
    if(url ==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homepage)
        res.end()
    }
    if(url ==='/homestyles'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homestyles)
        res.end() 
    }
    if(url==='/logosvg'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(logosvg)
        res.end()

    }
    if(url ==='/bro'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(browser)
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.end('page not found')
    }
})
server.listen(4000)