const express = require(`express`)
const bodyParser = require('body-parser')
const app = express()


const api = require('./server/routes/api')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', api)

const port = 3000
app.listen(port, function () {
    console.log(`Node server created at port ${port}`)
})