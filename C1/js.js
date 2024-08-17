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

const persons = [
     {
firstname:"akash",
age:21,
metadata:{
    yob:2022,
    class:12
}
},
{
    firstname:"ahmad",
    age:22,
    metadata:{
        yob:2021,
        class:13
    }
}
]

// console.log(persons);
// console.log(persons[1]);
console.log(persons[1].firstname);
console.log(persons[1].metadata.class);