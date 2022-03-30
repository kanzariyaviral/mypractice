const express = require('express')
const app = express()
const { people } = require('./data')

//statis assets
app.use(express.static('./methods-public'))
//parse from data
app.use(express.urlencoded({ extended: false }))
//
app.use(express.json())

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('please enter your name')
})

app.get('/api/admin', (req, res) => {
    res.status(200).json({ success: true, data: people })
})


app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {

    const { name } = req.body
    if (!name) {
        return res.status(404).json({ success: false, msg: 'please enter your name' })
    }
    res.status(201).json({ success: true, person: name })
})


app.post('/api/postman', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(404).json({ success: false, msg: 'please enter your name' })
    }
    res.status(201).json({ succes: true, data: [...people, name] })
})


app.put('/api/postman/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))
    if (!person) {
       return res.status(404).json({ success: false, msg: 'no person with this id ${id}' })
    }
    const newperson = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newperson })
})


app.delete('/api/postman/:id',(req,res)=>{
    
    const {name}=req.body

    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person){
        return res.status(404).json({ success: false, msg: 'no person with this id ${req.params}' })
    }

    const newperson=people.filter((person)=>person.id !==Number(req.params.id));
    return res.status(200).json({success:true,date:newperson})
})




app.listen(5000, () => {
    console.log('server use port no 5000')
})