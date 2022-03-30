const express = require('express')
const router = express.Router()



const {
    getpeople,
    creatpeople,
    creatpeoplepostmane,
    updatepeople,
    deletepeople
} = require('../controller/people.js')




router.route('/').get(getpeople).post(creatpeople)
router.route('/postman').post(creatpeoplepostmane)
router.route('/postman/:id').put(updatepeople).delete(deletepeople)

module.exports = router