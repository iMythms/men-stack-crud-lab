require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')

const app = express()

const PORT = process.env.PORT
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
	console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(methodOverride('_method'))

app.listen(PORT, () => {
	console.log(`Running on localhost:${PORT}`)
})
