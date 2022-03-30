const { people } = require('../data')

const getpeople=(req, res) => {
    res.status(200).json({ success: true, data: people })
}

const creatpeople =(req, res) => {

    const { name } = req.body
    if (!name) {
        return res.status(404).json({ success: false, msg: 'please enter your name' })
    }
    res.status(201).json({ success: true, person: name })
}


const creatpeoplepostmane= (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(404).json({ success: false, msg: 'please enter your name' })
    }
    res.status(201).json({ succes: true, data: [...people, name] })
}

const updatepeople= (req, res) => {
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
}

const deletepeople=(req,res)=>{
    
    const {name}=req.body

    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person){
        return res.status(404).json({ success: false, msg: 'no person with this id ${req.params}' })
    }

    const newperson=people.filter((person)=>person.id !==Number(req.params.id));
    return res.status(200).json({success:true,date:newperson})
}

module.exports={
    getpeople,
    creatpeople,
    creatpeoplepostmane,
    updatepeople,
    deletepeople
}