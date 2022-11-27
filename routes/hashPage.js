const express = require('express')
const router = express.Router()
const {createHash} = require('crypto')

function hashAble(string){
    return createHash('sha256').update(string).digest('hex')
}

router.get('/', (req,res) => {
    res.render('getHash')
})

router.post('/hash' , (req,res) => {
    hashedString = req.body.fstring
    hashResult = hashAble(hashedString)
    res.redirect('/showHash')
})

router.get('/showHash', (req,res) => {
    res.render('Encrypt', {value : hashResult})
})

module.exports = router