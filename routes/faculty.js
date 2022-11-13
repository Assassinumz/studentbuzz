const express = require('express')
const { getCurrentFaculty } = require('../middleware/auth')
const Faculty = require('../models/faculty')
const University = require('../models/university')
const Class = require('../models/class')
const Student = require('../models/student')
const Post = require('../models/post')
const { uploadPost } = require('../middleware/upload')
const fs = require('fs')
var mime = require('mime-types')


const { storage } = require('../firebase.js')
const { getDownloadURL, ref, uploadString } = require('firebase/storage')

const sCont = require('../controllers/searchController')
const uCont = require('../controllers/userController')
const pCont = require('../controllers/postsController')
const pfCont = require('../controllers/profileController')
const cCont = require('../controllers/clubController')
const clCont = require('../controllers/classController')

const router = express.Router()

router.use(getCurrentFaculty)

//posts
router.get('/posts', pCont.get_posts)

router.post('/create-post-faculty', uploadPost.single('banner'), async (req, res) => {
  try {
    const data = req.body
    let mimeType = mime.contentType(req.file.filename)
    let imageRef = ref(storage, `posts/` + req.file.filename);
    let imageData = fs.readFileSync(`${process.cwd()}/uploads/posts/${req.file.filename}`, { encoding: 'base64' })
    let snapshot = await uploadString(imageRef, imageData, 'base64', { contentType: mimeType })
    let urlImage = await getDownloadURL(imageRef)
    // const uni = await University.findOne({ name: "MSRIT" })
    // const faculty = await Faculty.findOne({ name: "Lincy" })
    // const classroom = await Class.findOne({ name: "CSE 1" })
    const post = await Post.create({
      author: req.user._id,
      authorName: req.user.name,
      content: data.content,
      title: data.title,
      image: {
        url: urlImage,
        imageName: req.file.filename
      },
      university: req.user.university,
      category: req.user.category,
    })
    fs.unlinkSync(`${process.cwd()}/uploads/posts/${req.file.filename}`)

    res.status(200).json({
      msg: 'post created',
      post: post
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
    return
  }
})
/*
router.get('/get-all-faculties' , async (req , res) => {

  const body = req.body
  const fac_id = await Faculty.findOne({"university":body.university})
  const 
  res{
    
  }
  
}) */

router.get('/getUniStudents', async (req, res) => {
  try {
    const uniStud = await University.findOne({ _id: req.user.university }).select("students")
    res.json(
      uniStud
    )
  }
  catch (e) {
    res.status(400).json(e)
  }
})

/*
router.get('/getClassStuds', async(req, res)={
  try{
    const classroom = await Class.findOne({"_id": {"$in": req.user.classes}})
    
  }
  catch(e){
    
  }
})
*/

router.post('/addStudentClass', async (req, res) => {
  try {
    const data = req.body;
    // const oldclass = await Class.find({

    //   })
    const classroom = await Class.findOneAndUpdate({ faculty: req.user.uuid }, { students: data.students }, { new: true })
    res.json(
      classroom
    )
    return
  }
  catch (e) {
    console.log(e)
    res.status(400).json(e)
  }


})

router.get('/get-faculty', async (req, res) => {
  res.json(
    req.user
  )
})

router.delete('/delete-post/:pid', pCont.del_posts)

//search
router.get('/search', sCont.gen_search)

//messages
/*
router.post('/sendMessage/:sid', async(req, res)=>{
  try{
    const faculty = await findOneAndUpdate({_id: req.user._id}, {})
  }
  catch(e){
    console.log(e)
  }
})
*/
//profile
router.patch('/editProfile', pfCont.edit_profile)

//clubs
router.get('/allclubs', sCont.all_clubs)


//clubs (HOD methods)
router.get('/club-approval-requests', cCont.appr_req)

router.post('/approve-club', cCont.appr_club)

//class
router.get('/getClass', clCont.get_classes)

router.get('/allClasses', clCont.get_all_classes)

router.post('/createClass', clCont.create_class)

router.patch('/editClass/:cid', clCont.edit_class)

router.delete('/deleteClass/:cid', clCont.delete_class)

module.exports = router