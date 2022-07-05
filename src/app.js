const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const routes = require('./routes')
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

console.log('a message with console.log')
console.info('a message with console.info')

routes(app)

module.exports = app