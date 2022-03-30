const express =require('express')
const app=express()
const{products, people}=require('./data.js')
app.get('/',(req,res)=>{
    res.status(200).send(products)
})
app.get('*',(req,res)=>{
    res.status(404).send('page not found')
})
app.listen(5000,(req,res)=>{
    console.log('server listen on port no 5000..')
})