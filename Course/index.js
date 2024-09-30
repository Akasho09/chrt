const express= require("express");
const bodyParser=require("body-parser");
const app = express();
const adminrouter=require("./routes/admin");
const userrouter=require("./routes/user")

app.use(bodyParser.json());
app.use('/admin' , adminrouter);
app.use('/user' , userrouter);


app.listen(3000, ()=>{
    console.log("server started");
})