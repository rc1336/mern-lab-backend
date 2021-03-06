const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(express.static('client/build'))

const routes = require('./route/animalRoute')

app.use('/', routes)


app.listen(3001, () => {
    console.log('animals are listening on port 3001')
})