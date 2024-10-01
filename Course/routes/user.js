const express = require('express');
const usermiddleware = require('../middlewares/user.js');
const router = express.Router();
const {user ,courses}= require("../db")
const { default: mongoose } = require('mongoose');

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


router.post('/courses' ,usermiddleware, async (req,res)=> {
   const  courseId = req.query.courseId; //:cid ?cid=>query
   const cn = await courses.findOne({
    _id:courseId
   })
   console.log(cn)
   const username= req.body.username;
   try {
   await user.updateOne({
    username:username
   },{
        "$push" : {
            purchasedcourses : courseId
    }
   })
   }
   catch(e){
    console.log(e)
   }
   res.send( " Course " + cn.coursename + " with CourseId " + courseId + " and price " +cn.price + " Purchased Sucessfully " );
})

router.get('/courses' , (req,res)=> {
    courses.find({})
    .then((response)=>{
res.json (
    {
        courses : response
    }
)
    })
})

router.get('/info' , usermiddleware , async (req,res)=> {
const username =await user.findOne({
    username:req.body.username
});
console.log(username.purchasedcourses)

const coursesenrolled = await courses.find({
_id:username.purchasedcourses
})

res.json( {
    "courses you are enrollef in are " : coursesenrolled
})
})



module.exports = router;