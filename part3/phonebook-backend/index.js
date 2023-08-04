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

// 3.1
app.get('/', (request, response) => {
    response.send(`<h1>Test</h1>`)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

// 3.2: display # of contacts in phonebook and date and time request was made
app.get('/info', (request, response) => {
    response.send(
        `<p>Phonebook has info for ${persons.length} people</p>
        <br />        
        <p>${date}</p>`
    )
})

// 3.3: returns information of given ID in URL
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

// 3.4: delete requested contact with given ID in URL
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

// 3.5: add contacts in backend
app.use(express.json())

const generateId = () => {
    const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
    return maxId + 1
}

// 3.6: error handling    
app.post('/api/persons', (request, response) => {
    const body = request.body

    // name or number is missing
    if (!body.name) {
        return response.status(400).json({ 
            error: 'name missing' 
        })
    }

    if (!body.number) {
        return response.status(400).json({
            error: 'number missing'
        })
    }

    // name already exists in phonebook
    if (persons.find(person => person.name === body.name)) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }
    
    const person = {
        name: body.name,
        number: body.number,
        id: generateId(),
    }

    persons = persons.concat(person)

    response.json(person)
})
  
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})