// async functions without promises
const fs = require("fs");
function asyncfn (cb){
fs.readFile("readfile.txt" ,"utf-8",function (err,data){
cb(data);
});
}

function ondone(data){
    console.log("\n");
console.log("b before : " , b);
console.log("a before " , a); 
console.log(data)
console.log("b after : " , b);
console.log("a after " , a); 
console.log("\n\n");
}

// callback function
asyncfn(ondone);



//  using promises  
// no arguments
function asyncfn2 (){
return new Promise(function(resolve){
    fs.readFile("readfile.txt" , "utf-8" ,function(err,data){
        resolve(data);
        // resolve("resolved");
    })
})
}
// no callback
asyncfn2().then(ondone);

let a =asyncfn2(); // a = promise returned by asyncfn2  -->pending upto now
console.log("a" , a);   // calls async function to return promise syncronously, which returns promise immediately and then data 
a.then(ondone);
let b = asyncfn2().then(ondone);
console.log("b" , b);


// let p= new promise();
var p = new Promise (function(resolve){
setTimeout( function() {
    resolve("hi")
    console.log("P inside ", p);
}, 2000);
});
console.log("P", p);