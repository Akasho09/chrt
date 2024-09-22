const express = require('express');
const bodyparser=require('body-parser');
const app = express();
app.use(bodyparser.json());

function cube (n){
  return n*n*n;
}
//get request
// app.get('/', (req, res) => {
//   console.log("request recieved");
//   // for loop runs synchrously while if its dbase call then asynchroulsly
//   // let a=0;
//   // for (let i=0;i<10000000000;i++){
//   //   a++;
//   // } 
//   res.send('Hello, world!');
// });

//get request with a query 
app.get('/' , (req,res)=>{
const n=req.query.n; //?n=40&k=2
console.log(n);
res.send('Hello, the cube of the number is  ' + cube(n));
});


// post request
app.post('/' , (req,res)=>{
    // console.log(req.headers["password"]);
    console.log(req.body);
    // console.log(req.params);
    res.send('<b> post request recieved <b>')
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
