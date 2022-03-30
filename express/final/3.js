const express =require('express')
const app=express()

app.get('/',(req,res)=>{
    res.status(200).send('home page')

})
app.get('/about',(req,res)=>{
    res.status(200).send('about page')

})
app.get('/css',(req,res)=>{
    res.status(200).send('css page')

})
app.get('*',(req,res)=>{
    res.status(404).send('page not found')

})
app.listen(5000,(req,res)=>{
    console.log('user hit the server on port no 5000..')
})