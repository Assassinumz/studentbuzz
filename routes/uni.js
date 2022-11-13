const express = require('express')

const fs = require('fs')
const csv = require('fast-csv');
const pCont = require('../controllers/postsController')
const pfCont = require('../controllers/profileController')
const uCont = require('../controllers/userController')
const { uploadCSV } = require('../middleware/upload')
const { getCurrentUni } = require('../middleware/auth')
const Faculty = require('../models/faculty')
const University = require('../models/university');
const sCont = require('../controllers/searchController');


const router = express.Router()

router.use(getCurrentUni)

router.get('/getUniversity', async (req, res) => {
  res.json(req.user)
})
//faculty
router.post('/create-faculty', uCont.create_faculty)

router.get('/get-all-unis', uCont.all_uni)

router.get('/get-all-fac', async (req, res) => {
  try {
    const faculties = await Faculty.find({ university: req.user._id })
    res.json({
      faculties
    })
    return
  }
  catch (e) {
    console.log(e)
    res.status(400).res.json(e)
  }
})

//posts
router.get('/posts', pCont.get_uni_posts)


//profile
router.patch('/editProfile', pfCont.edit_uni_profile)



//students
/*
router.get('/get-all-students', async(req, res)=>{
  try{
    const students = await Students
  }
  catch(e){
    console.log(e)
    res.status(400).res.json(e)
  }
})
*/
router.post('/add-student-file', uploadCSV.single('studentscsv'), async (req, res) => {
  let data = req.body
  try {

    var usns = []
    fs.createReadStream(`${process.cwd()}/uploads/studentscsv/${req.file.filename}`)
      .pipe(csv.parse({ headers: true }))
      .on('error', error => console.error(error))
      .on('data', row => {
        usns.push(row.USN)
      })
      .on('end', async (rowCount) => {
        //console.log(data.uid)
        var all_ussns = await University.findOne({ uuid: data.uid })

        var temp = all_ussns.students
        temp.push(...usns)
        await University.findOneAndUpdate({ uuid: data.uid }, { students: temp })
        fs.unlinkSync(`${process.cwd()}/uploads/studentscsv/${req.file.filename}`)
      });



  } catch (e) {
    console.log(e.message)
  }
  res.json({ 'msg': 'added' })

})

router.patch('/edit-student-file', uCont.edit_stud_file)

module.exports = router