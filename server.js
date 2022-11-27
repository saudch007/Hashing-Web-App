const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))

hashRoute = require('./routes/hashPage')
app.use('/', hashRoute)

app.listen(port, (req,res) => {
    console.log(`Server running at port: ${port}`)
})