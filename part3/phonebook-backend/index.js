// import http from 'http'
const http = require('http')
// import express from 'express'
const express = require('express')
// export express as a function in app variable
const app = express()

// hardcoded contact info
let persons = [
    { 
        id: 1,
        name: "Arto Hellas", 
        number: "040-123456"
    },
    { 
        id: 2,
        name: "Ada Lovelace", 
        number: "39-44-5323523"
    },
    { 
        id: 3,
        name: "Dan Abramov", 
        number: "12-43-234345"
    },
    { 
        id: 4,
        name: "Mary Poppendieck", 
        number: "39-23-6423122"
    }
]

const date = Date();

app.get('/', (request, response) => {
    response.send('<h1>Test</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

app.get('/info', (request, response) => {
    response.send(
        `<p>Phonebook has info for ${persons.length} people</p>
        <p>${date}</p>`
    )
})
  
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})