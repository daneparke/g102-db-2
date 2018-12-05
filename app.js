const express = require('express')
const app = express()
const port = process.env.PORT || 3005
const bodyParser = require('body-parser')
const cors = require('cors')
const students = require('./routes/students_routes')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/students', students)



const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)