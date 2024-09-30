const {user} = require ("../db")

function usermiddleware(req,res,next) {
        const username = req.body.username;
        const password = req.body.password;
        user.findOne({
            username:username,
            password:password
        })
        .then(function (value) {
        if(value) {
            console.log("User" , username , " logged in \n");
            next()
        }
        else {
            console.log("User" , username , "is trying to logg in \n");
            res.status(403)
            .json({
              "msg":"invalid username or password"
        }
        )
        }
        }) 
        }

module.exports = usermiddleware;