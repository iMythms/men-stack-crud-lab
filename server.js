require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const carRoute = require('./routes/cars')
const morgan = require('morgan')

const app = express()

const PORT = process.env.PORT
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
	console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(methodOverride('_method'))

app.use(carRoute)

app.get('/', async (req, res) => {
	res.render('index.ejs')
})

app.get('/cars/addCar', (req, res) => {
	res.render('cars/addCar.ejs')
})

app.listen(PORT, () => {
	console.log(`Running on localhost:${PORT}`)
})
