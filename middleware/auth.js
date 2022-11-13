const University = require("../models/university")
const Faculty = require("../models/faculty")
const Student = require("../models/student")

const getCurrentStudent = async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' })
  }
  console.log("cute")
  req.user = await Student.findOne({ uuid: authorization })
  console.log(req.user, "hello000")
  next()
}

const getCurrentUni = async (req, res, next) => {

  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' })
  }

  req.user = await University.findOne({ uuid: authorization })
  next()
}

const getCurrentFaculty = async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' })
  }
  req.user = await Faculty.findOne({ uuid: authorization })

  next()
}



module.exports = {
  getCurrentStudent,
  getCurrentUni,
  getCurrentFaculty
}