const express = require('express');
const usermiddleware = require('../middlewares/user.js');
const router = express.Router();
const {user}= require("../db")
const {courses}=require("../db")

router.post('/signup', (req,res)=> {
const username = req.body.username;
const password = req.body.password;

user.findOne({
    username:username,
    password:password
})
.then( (value)=> {
if (value) {
    console.log("User" , username , " logged in \n");
    res.status(200).json("YOUR ACCOUNT IS LOGGED IN")
}
else {
    const newuser= new user ({
    username:username,
    password:password
})
newuser.save().then(()=>{
    console.log("new user created");
    res.status(200).json("YOUR ACCOUNT HAS BEEN CREATED")
})
}
})
})

// - POST /users/courses/:courseId
//   Description: Purchases a course. courseId in the URL path should 
// be replaced with the ID of the course to be purchased.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { message: 'Course purchased successfully' }
router.post('/courses' ,usermiddleware, (req,res)=> {



})
// - GET /users/courses
//   Description: Lists all the courses.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { courses: [ { id: 1, title: 'course title', description: 
// 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }

router.get('/courses', (req,res)=> {
})

module.exports = router;