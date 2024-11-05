const Cars = require('../models/cars')
const addCar = (req, res) => {
	res.render('cars/addCar.ejs')
}

const create = async (req, res) => {
	await Cars.create(req.body)
	res.redirect('/cars/addCar')
}

const index = async (req, res) => {
	const cars = await Cars.find()
	res.render('cars/index.ejs', { cars })
}

const show = async (req, res) => {
	const id = req.params.id
	const car = await Cars.findById(id)
	res.render('cars/showCar.ejs', { car })
}

const edit = async (req, res) => {
	const id = req.params.id
	const car = await Cars.findById(id)
	res.render('cars/editCar.ejs', { car })
}

const update = async (req, res) => {
	const id = req.params.id
	await Cars.findByIdAndUpdate(id, req.body)
	res.redirect(`/cars/${id}`)
}

const deleteCar = async (req, res) => {
	const id = req.params.id
	await Cars.findByIdAndDelete(id)
	res.redirect('/cars/')
}

module.exports = {
	addCar,
	create,
	index,
	show,
	edit,
	update,
	deleteCar,
}
