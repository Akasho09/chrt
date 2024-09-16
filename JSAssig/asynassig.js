/* 
## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks. 
*/
console.clear();

let newcontent="this is the new added content";
const fs=require('fs');
fs.writeFile("file.txt",newcontent,(err,data)=>{
    if (err)console.log(err);
    else console.log("data replaced ");
} );

let toaddtext="\n to add text";
fs.appendFile("file.txt", toaddtext , (err)=>{
    if (err) {
        console.log(err);
    }
    else
    console.log("added data");
})