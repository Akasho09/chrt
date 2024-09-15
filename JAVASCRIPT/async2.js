// ASYNC function e.g
// ????  WHY DOES ASYNC FUNCTIONS EXECUTE AT LAST
// file.readfile  --> Async function
const fs = require("fs");
fs.readFile("readfile.txt" , "utf-8" , function(err, data){
    console.log(data);
});     //run with node readfile.js command

console.log("see who ran first");

//async function
function f1 (name) {
    console.log("my name is " , name , " Timeout function 1")
    }
 setTimeout(f1,3000,"akash");

//sync function
function syncfexample(){
    let a=1;
    for (let i=0;i<10000000000;i++){
    a++;
    }
    console.log(a);
    }
    syncfexample();

    console.log("see who ran first 1");

   setTimeout(f1,5000,"akash. Timeout function 2");

    console.log("see who ran first 2");
    console.log("see who ran first 3");
//FS.READFILE runs at last after being interrupted by loop so does settimeout function

syncfexample();



