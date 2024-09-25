/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const fs= require ('fs');
const { resolve } = require('path');

async function f1 (n) {
    return new Promise ( function (resolve){
        setTimeout(() => { 
        fs.readFile("file.txt" , "utf-8" ,function(err,data){
            resolve(data);
    })
}, n*1000)
});
}
let a=f1(5);
console.log(a);

// ????

f1(3).then((err,result)=>{
    console.log(result)
});