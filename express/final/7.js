const express= require('express')
const app=express()
const {products,people}=require('./data')


app.get('/',(req,res)=>{
    res.send('<h1>homepage</h1><a href="/api/product">product</a>')

})

app.get('/api/product',(req,res)=>{
    const newproduct=products.map((product)=>{
        const{id,name,price}=product;
        return{id,name,price}
    })
    res.json(newproduct)
})

app.get('/api/product/:productID',(req,res)=>{
    const {productID}=req.params
    const singleProduct=products.find((product)=>product.id===Number(productID))
    if(!singleProduct){
        res.status(404).send('product id not found')
    }
    res.json(singleProduct)
})

app.get('/api/product/:productID/reviews/:reviewsID',(req,res)=>{
    console.log(req.params)
    res.send('hello word')
   
})
app.get('/api/v1/query',(req,res)=>{
    const {search,limit}=req.query;
    let sortedproduct =[...products]
    if(search){
        sortedproduct=sortedproduct.filter((product)=>{
            return product.name.startsWith(search)
        })
    }

    if(limit){
        sortedproduct=sortedproduct.slice(0, Number(limit))
    }
    if(sortedproduct.length < 1){
        res.status(200).send('<h1>product not found</h1>')
    }
    res.status(200).json(sortedproduct)
})



app.listen(5000,()=>{
    console.log('server use port no 5000...')
})