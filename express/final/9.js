const express =require('express')
const app=express();
const auth=require('./auth')
const logger=require('./logger')

app.use([logger,auth])


app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/about',(req,res)=>{
    res.send('about page')
})
app.get('/api',(req,res)=>{
    res.send('api page')
    console.log(req.user)
})

app.listen(5000,()=>{
    console.log('server listing port on 5000..')
})