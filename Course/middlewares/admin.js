const { admin } = require ("../db")

function adminmiddleware(req,res,next) {
        const username = req.body.username;
        const password = req.body.password;
        admin.findOne({
            username:username,
            password:password
        })
        .then(function (value) {
        if(value) {
            next()
        }
        else {
            res.status(403)
            .json({
              "msg":"invalid admin"
        }
        )
        }
        }) 
        }

module.exports = adminmiddleware;