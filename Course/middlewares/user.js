const {user} = require ("../db")

function usermiddleware(req,res,next) {
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
              "msg":"invalid username or password"
        }
        )
        }
        }) 
        }

module.exports = usermiddleware;