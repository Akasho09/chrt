// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

console.clear();
const fs = require('fs');
fs.readFile('file.txt',"utf-8",(err,data)=>{
   if (err) console.log(err);
   else {
    let n=data.length;
    let text=data;
    fs.writeFile("file.txt","",(err)=>{
    })
    for (let i=0;i<n;i++){
if (text[i]!= " " || text[i+1]!= " ") {
    fs.appendFileSync('file.txt', text[i] , (err)=>{
    if (err) console.log(err);
 } )
}
}
}
})

// ?? handle of start new line 2 spaces
