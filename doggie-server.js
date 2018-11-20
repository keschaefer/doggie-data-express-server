const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require('body-parser')
const cors = require('cors')
const locations = require('./data.json')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req, res) =>{
   res.send({locations: locations})
})

app.post('/', (req, res, next) => {
   let newLocation = req.body 
   locations.push(newLocation)
   res.send(newLocation)
})

app.use((req, res, next) => {
   res.status(404).json({ error: { message: 'data not found' }})
 })

app.use((err, req, res, next) => {
   const status = err.status || 500
   res.status(status).json({ error: err })
 })
 
const listener = () => `Listening on port ${port}!`
app.listen(port, listener)

module.exports = app