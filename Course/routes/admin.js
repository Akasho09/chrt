const express = require('express');
const adminmiddleware = require('../middlewares/admin');
const router = express.Router();
const {courses} = require('../db')
// const {admin} = require('../db')

router.get('/', (req, res) => {
  res.send('Admin homepage');
});

router.post('/courses', async (req, res) => {
const name = req.body.name;
const description =req.body.description;
const price = req.body.price ;
const newcourse = await courses.create ({
  name:name,
  description:description,
  price:price
})
res.send("new course created " + newcourse._id)
console.log("added course" , newcourse._id );
});

// Export the router, not an object
module.exports = router;