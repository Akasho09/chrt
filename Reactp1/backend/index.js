const express = require ("express");
const {createtype,puttype} = require("./types")
const zod=require("zod")
const app=express();

app.use(express.json())

app.get("/todo" , (req,res)=>{
const inputbody= req.body;
zod.parse(createtype);

})


app.post("/todo" , () => {

})


app.put("/todo" , ( ) => {

})

app.listen(3000)