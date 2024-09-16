// console.log("hello world");
// console.log(a);

// var a=1;
// a=2;
// console.log(a);

// let b=2;
// b=3;
// console.log(b);

// const c=2;
// c=3;
// console.log(c);

// let firstname= "aakash";
// let age=19;
// let ismarried=false;

// console.log( "this persons name 
// is " + firstname + " and their age is " + age );

// const names = ["akash " , "ahmad " , "malik" ];
// console.log(names[1]);

// let person1 = {
//     firstname : "akash",
//     gender : "male",
//     age : 20
// }
// console.log(person1);
// console.log(person1.firstname);
// console.log(person1["firstname"]);
// console.log(person1[1]);

//OBJECTS  
const persons = [
     {
firstname:"akash",
age:21,
metadata:{
    yob:2022,
    class:12,
    arr: [4,3,2,1,0],
    hobbies: ["reading", "coding", "hiking"]
    }
},
{
    firstname:"ahmad",
    age:22,
    metadata:{
        yob:2021,
        class:13,
        arr: [4,3,2,1] // array inside a object
    }
}
]
console.log(persons[1].metadata.arr[1]);
// console.log(persons[1]);
// console.log(persons[1].firstname);
// console.log(persons[1].metadata.class);

const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person);

// Create an Object
const person2 = new Object()
{
// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
}

console.log(person2); // {}