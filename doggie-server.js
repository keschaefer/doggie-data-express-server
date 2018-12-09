const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require('body-parser')
const cors = require('cors')
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

app.delete('/:id', (req, res) => {
   queries.deleteLocation(req.params.id).then(res.status(204).send())
})

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