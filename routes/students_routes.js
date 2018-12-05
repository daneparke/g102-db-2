const express = require('express')
const router = express.Router()
const queries = require('../queries/students_queries')

router.get('/', (req, res) => {
    queries.readAllStudents().then(students => res.status(200).send({ students }))
})

router.get('/:id', (req, res) => {
    queries.readStudentById(req.params.id).then(student => res.status(200).send(student))
})

router.post('/', (req, res) => {
    queries.createStudent(req.body).then(newStudent => res.status(201).send(newStudent))
})

app.use((req, res, next) => {
    res.status(404).json({ message: 'Not found.' })
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err })
})


module.exports = router