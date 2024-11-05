const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
	type: String,
	brand: String,
	model: String,
	color: String,
	year: Number,
})

const Cars = mongoose.model('Cars', carSchema)
module.exports = Cars
