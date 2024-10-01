const express = require('express');
const adminmiddleware = require('../middlewares/admin');
const router = express.Router();
const {courses} = require('../db')
// const {admin} = require('../db')

router.get('/', adminmiddleware ,(req, res) => {
  res.send('Admin homepage');
});

router.post('/courses', adminmiddleware , async (req, res) => {
const coursename = req.body.coursename;
const description =req.body.description;
const price = req.body.price ;
const newcourse = await courses.create ({
  coursename, //same as name : name ,
  description,
  price
})
res.send("new course created " + newcourse._id)
console.log("added course" , newcourse._id );
});

router.get("/courses" , adminmiddleware ,(req,res)=>{
courses.find({})
.then((response)=>{
  res.json({
    "courses": response
})
})
})
// Export the router, not an object
module.exports = router;