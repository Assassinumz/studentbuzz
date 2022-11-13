const Student = require('../models/student')
//const Class = require('../models/class')
//const Club = require('../models/club')
const Image = require('../models/image')
const University = require('../models/university')
const Faculty = require('../models/faculty')
const { CreatingUserFirebase, LoginFirebaseUser } = require('../firebase.js')
const nodemailer = require('nodemailer')
//common

const create_student = async (req, res) => {
	console.log(req.body, 'bodyyyyy')

	try {
		var uni = await University.findOne({ uuid: req.body.university })


		let user = await CreatingUserFirebase(req.body.email, req.body.password)
		var student = await Student.create({
			uuid: user.uid,
			usn: req.body.usn,
			name: req.body.name,
			email: req.body.email,
			university: uni._id,
			department: req.body.department,
		})
		res.json({
			msg: 'student created',
			student: student
		})
	}
	catch (error) {
		console.log(error)
		res.status(400).json({ error: error.message })
		return
	}


}

const all_uni = async (req, res) => {
	var uni = await University.find({}).select('name students uuid')


	res.json({
		uni
	})
}

const delete_docs = async (req, res) => {
	await Student.deleteMany()
	// await Parent.deleteMany()
	// await Child.deleteMany()
	await Image.deleteMany()
	res.json({ msg: 'deleted' })
}

//uni
const create_faculty = async (req, res) => {
	console.log(req.body)
	let data = req.body
	let name = data.name
	let email = data.email
	let type = data.type
	let department = data.department

	let uniId = data.university

	try {

		const uni = await University.findOne({ uuid: uniId })
		console.log(uni)
		var user = await CreatingUserFirebase(email, '87654321')
		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'assassinumz@gmail.com',
				pass: 'bwwmhajplpozrhvw'
			}
		});

		var mailOptions = {
			from: 'assassinumz@gmail.com',
			to: data.email,
			subject: 'Studentbuzz University Created!',
			text: `University Login:\nEmail: ${email}\n Password: 87654321`
		};

		transporter.sendMail(mailOptions, function(error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
			}
		});
		const faculty = await Faculty.create({
			uuid: user.uid,
			name: name,
			email: email,
			university: uni._id,
			department: department,
			type: type
		})
		/*
				var uniObj = await University.findOne({ uuid: uniId })
		
				var all_fac = uniObj.faculties
			console.log(uniId, "uni body id")
				console.log(user.uid)
			console.log(all_fac)
				all_fac.push(user.uid)
			console.log(all_fac)
				await University.findOneAndUpdate({ uuid: uniId }, { faculties: all_fac })
		*/

	} catch (error) {
		console.log(error)
		res.status(400).json({ error: error.message })
		return
	}
	res.json({ msg: 'faculty created' })
}

const add_stud_file = async (req, res) => {
	console.log(req.body)
	res.json({
		msg: 'students added'
	})
}

const edit_stud_file = async (req, res) => {
	//empty all dbs except college
	res.json({
		msg: 'student file edited'
	})
}

module.exports = {
	create_student,
	delete_docs,
	create_faculty,
	add_stud_file,
	edit_stud_file,
	all_uni

}