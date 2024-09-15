// async functions without promises
const fs = require("fs");
function asyncfn (cb){
fs.readFile("readfile.txt" ,"utf-8",function (err,data){
cb(data);
});
}

function ondone(data){
console.log(data)
}

// callback function
asyncfn(ondone);



//  using promises  
// no arguments
function asyncfn2 (){
return new Promise(function(resolve){
    fs.readFile("readfile.txt" , "utf-8" ,function(err,data){
        resolve(data);
    })
})
}
// no callback
asyncfn2().then(ondone);

let a =asyncfn2(); // a= promise returned by asyncfn2
console.log(a);
// a.then(ondone);