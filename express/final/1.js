const http = require('http');
const { readFileSynd, readFileSync } = require('fs');
// get file
const homepage = readFileSync('./public/index.html')

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homepage)
        res.end()
    }
    if(url ==='/about'){
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>this is about page</h1>')
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('page not found')
        res.end()
    }
})
server.listen(5000)