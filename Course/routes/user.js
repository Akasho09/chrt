const express = require('express');
const usermiddleware = require('../middlewares/user.js');
const router = express.Router();

router.post('/signup',usermiddleware, (req,res)=> {
const username = req.body.username;
const password = req.body.password;


})

router.post('/courses' , (req,res)=> {

})

router.get('/courses', (req,res)=> {
    res.send("COURSES PAGE")

})

module.exports = router;