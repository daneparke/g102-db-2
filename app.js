const express = require('express')
const app = express()
const port = process.env.PORT || 3005
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)