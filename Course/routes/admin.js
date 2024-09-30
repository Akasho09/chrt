const express = require('express');
const adminmiddleware = require('../middlewares/admin');
const router = express.Router();
// const {admin} = require('../db')

router.get('/', (req, res) => {
  res.send('Admin homepage');
});

// Export the router, not an object
module.exports = router;
