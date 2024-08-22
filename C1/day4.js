// arr handbook

// arr:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

let arr=[1,2,3];
arr.push(4); 
console.log(arr);
arr.pop();
console.log(arr);
arr.shift(); //pops front element 
console.log(arr);
arr.unshift(5); //pushes to front
console.log(arr);

//concat
let arr2=[7,8,9];
let arr3=arr.concat(arr2);
console.log(arr);
console.log(arr3);

//forEach()  ---> arr.forEach(callbackfunction) 
// with arguments arr elements
function display (argument){
    console.log(argument);
}
arr3.forEach(display);

// Classes in JavaScript blueprint for creating objects
// 
class animal {
    constructor(name, legCount) {
      this.name = name,
      this.legCount = legCount
    }
legCountt(){
    console.log("Animal " , this.name , " has " , this.legCount , " legs");
}
static mykingdom(){
    console.log("My kingdom is idk");
}  
  }

  let dog = new animal ('doggy1' , 4 ); // create object
  let cat = new animal ('catty1' , 4 );
  let duck = new animal ('ducky' , 2 );
  console.log(cat);
  cat.legCountt() ; //call functions on object
  duck.legCountt();
animal.mykingdom(); // static function of class  
