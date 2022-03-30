const express = require('express')
const app = express()
// const { people } = require('./data')
const people =require('../routers/people')
const auths=require('../routers/auths')

//statis assets
app.use(express.static('./methods-public'))
//parse from data
app.use(express.urlencoded({ extended: false }))
//
app.use(express.json())

app.



app.use('/api/people',people)
app.use('/',auths)

// app.post('/api/people', )

// app.post('/api/people/postman',)

// app.put('/api/people/postman/:id',)

// app.delete('/api/postman/:id',)




app.listen(5000, () => {
    console.log('server use port no 5000')
})