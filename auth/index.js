const express = require('express');
const bp = require('body-parser');
const jwt = require('jsonwebtoken');
const jwtPassword = "akashjwtpass";

const app=express();
app.use(bp.json());
const zod= require("zod");

const allusers = [
{
    username : "akash",
    password : "Akashmalik"
},
{
    username : "ahmad",
    password : "MalikAhmad"
},
{
    username : 'smmalik',
    password : "ShahidMalik"
}
]

// const validpass2 = zod.string().min(8).charAt(0)(/^[A-Z]/);
// The Zod library does not have a method like .startsWith that accepts multiple values.

// Schema for a password -- has min 8 letters and starts with a cpaitala letter
const validPass = zod.string()
.min(8 ,{ message : "Password length must be 8 minimum"})
// .startsWith("A" , "B" , "C" , {message : " First letter must be Capital "})
.refine(val => /^[A-Z]/.test(val), { message: "First letter must be A, B, or C" });


function userexists (user,passw){
for(let i=0;i<allusers.length;i++) {
        if (allusers[i].username==user && allusers[i].password==passw) {
return true;
    }
}
return false;
}

// sends username & password , gets returned by a token in jwt , can be used to extrac t values back
app.post("/" , (req,res)=>{
    const user=req.headers.username;
    const passw=req.headers.password;
    if(validPass.safeParse(passw).success) {
    if(userexists(user,passw)){
        const tokenn = jwt.sign({ username : user } , jwtPassword);
        res.status(200).send("Hello User , here is your token \n" + tokenn);
    }
    else 
    res.status(403).send("User doesnt Exist");
    }
    else {
        res.status(403).send(validPass.safeParse(passw))
    }
})

// needs input the authorization token of user and password 
app.get("/users" , (req,res)=>{
const token =req.headers.auth;
const auth = jwt.verify(token,jwtPassword);

res.json({ 
    users : allusers.filter((value)=>{
   if(value.username==auth.username) return false;
      else return true;
    })
})

// console.log(auth); // decorded token

})



app.listen(3000,()=>{
console.log('server started')
});

