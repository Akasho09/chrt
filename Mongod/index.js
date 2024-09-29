const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose"); //mongoose library export
const jwtPassword = "123456";
const app=express();
app.use(express.json());
mongoose.connect(
  "mongodb+srv://akash:sJazfPDF1ZOHB6C2@cluster0.ku3wj.mongodb.net/akash",
);

//model for user object 
const user = mongoose.model( 'users'  ,{name : String , email : String , Password : String} );

//create a new user
// const user1 = new user ( { name : "malik" });
// // save user
// user1.save().then(()=>{
//     console.log("Added user")
// });

app.post("/" , async (req,res)=>{
const name1 = req.headers.name;
const email1 = req.headers.email;
const password1 = req.headers.password;

const existing= await user.findOne({email : email1 });
console.log(existing)
if(existing) {
    res.status(400).json("User with this email already exists");
}
else {
const newuser= new user ({
    email :email1,
    name : name1,
    Password : password1
})
newuser.save().then(()=>{
        console.log("Added user");
        res.send("added user")
})
}
})

app.listen(3000);