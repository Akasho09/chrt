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
    password : "Bmajsnmso"
},
{
    username : 'malik',
    password : "Cjsjjsndn"
}
]

// const validpass = zod.string().min(8).charAt(0)(/^[A-Z]/);
const validPass = zod.string()
.min(8 ,{ message : "Password length must be 8 minimum"})
.startsWith("A" , {message : " First letter must be Capital "})
.refine((value) =>{/} )


function userexists (user,passw){
for(let i=0;i<allusers.length;i++) {
        if (allusers[i].username==user && allusers[i].password==passw) {
return true;
    }
}
return false;
}

app.post("/" , (req,res)=>{
    const user=req.body.username;
    const passw=req.body.password;
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

