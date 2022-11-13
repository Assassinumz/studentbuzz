const Student = require('../models/student')
const Faculty = require('../models/faculty')
const Class = require('../models/class')
const Club = require('../models/club')
const Image = require('../models/image')
const University = require('../models/university')

const create_class = async (req, res) => {
	try {
		var data = req.body
		console.log(data, 'mydataa')
		//const faculty = await Faculty.findOne({name: "Lincy"})
		//const uni = await University.findOne({name: "MSRIT"})
		//const students = await Student.find({university: uni._id})
		var classroom = await Class.create({
			name: data.name,
			faculty: data.faculty,
			students: [],
			university: req.user.university
		})

		var fac = await Faculty.findOneAndUpdate({ uuid: data.faculty }, { classes: [classroom._id] })

		console.log(classroom)
		res.json({
			classroom,
			msg: 'class created'
		})

	} catch (error) {
		res.status(400).json({ error: error.message })
		return
	}
	// console.log(req.body)

}

const edit_class = async (req, res) => {
	console.log(req.params.cid, req.body)
	res.json({
		msg: 'class edited'
	})
}

const delete_class = async (req, res) => {
	console.log(req.params.cid)
	res.json({
		msg: 'class deleted'
	})
}


const get_classes = async (req, res) => {
	try {

		const classroom = await Class.findOne({ 'faculty': req.user.uuid })
		res.json(
			classroom
		)
		return
	}
	catch (e) {
		res.status(400).json(e)
	}

}

const get_all_classes = async (req, res) => {

	const univ_id = req.user.university
	console.log(univ_id, 'classss')
	const classes = await Class.find({ 'university': univ_id })

	res.json({
		classes
	})
}

module.exports = {

	get_classes,
	get_all_classes,
	delete_class,
	create_class,
	edit_class,
}