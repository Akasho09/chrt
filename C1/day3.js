/*
JavaScript strings are also immutable.
 This means that once a string is created, 
 its value cannot be changed directly.
*/

// Length  -->str.length
function getLength(str) {
    console.log("Original String:", str);
    console.log("Length:", str.length);
  }
  getLength("Hello World");
console.log("\n");

// indexOf() , lastIndexOf()
function findIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index of " , target , ": ", str.indexOf(target));
  }
  findIndexOf("Hello World", "World");
  findIndexOf("Hello World", "o");
  console.log("Index ", "HELLO WORLD".lastIndexOf("O"));
  findIndexOf("Hello World", "A");
  console.log("\n");

// slice --> str.slice(s,e)
function getSlice(str, start, end) {
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
  }
  getSlice("Hello World", 1, 7); // between 0 and 5
  console.log("\n");

  // substring--->str.substr(start, end)n 
function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substr(start, end));
  }
  getSubstring("Hello World", 1, 7); //from 1 , of length 7
  console.log("\n");


  // replace --->str.replace(target, replacement)
  let str="hello world";
  console.log(str.replace("hello" , "hi"));
  console.log(str);
  console.log("\n");

  // split --> str.split(separator)
str="hello,duniya. how are you, my friend";
console.log(str.split(" "));
console.log(str.split(","));


  // trim
function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
  }
  trimString(" Hello World ");
  
  // toUpperCase
  function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
  }
  toUpper("Hello World");
  
  // toLowerCase
  function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
  }
  toLower("Hello World");