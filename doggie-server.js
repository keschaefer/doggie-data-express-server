const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require('body-parser')
const cors = require('cors')
let locations = require('./data.json')
const queries = require('./queries.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req, res) => {
   queries.listAll().then(locations => {res.send(locations)
   })
})

app.post('/', (req, res) => {
   queries.addLocation(req.body).then(location => {res.send(location)
   })
})

app.delete('/', (req, res) => {
   queries.deleteLocation(req.body.id).then(res.send({'message': 'location deleted'}))
})

// app.post('/', (req, res, next) => {
//    let newLocation = req.body 
//    locations.push(newLocation)
//    res.send(newLocation)
// })

// app.get('/:id', (req, res) =>{
//    let id = Number(req.params.id)
//    let locationById = locations.find(location => {
//       return location.id === id
//    })
//    if (locationById) {
//    res.send({location: locationById})
//    } else {
//       res.status(404).send({ error: { message: "Sorry that ID does not exist" }})
//    }
// })

// app.put('/:id', (req, res, next) => {
//    let { id } = req.params
//    let { description } = req.body
//    let newObj = locations.map(location => {
//       if (location.id == id) {
//          location.description = description
//       }
//       return location
//    })
//    location = newObj 
//    res.send({locations})
// })



app.use((req, res, next) => {
   res.status(404).json({ error: { message: 'data not found' }})
 })

app.use((err, req, res, next) => {
   const status = err.status || 500
   res.status(status).json({ error: err})
 })
 
const listener = () => `Listening on port ${port}!`
app.listen(port, listener)


module.exports = app