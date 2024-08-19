// FUNCTIONS IN JS

// function sum (num1,num2){
// return num1 + num2 ;
// };
// console.log(sum(12,13));
// let b=12;
// console.log(sum(a,b));


//PASS BY VALUE JS ARGUMENTS INTERGER
let a=18;
// function add (num1){
//     num1=num1+10 ;
//     };
//     add(a);
//     console.log(a);

// //PASS BY REFERENCE JS ARRAYS AND OBJECTS
//     let arr= [1,2,3,4];
//     function arrfunc(arr){
//         arr.push(arr[0]);
//         arr[0]=0;
//     }
//     arrfunc(arr);
//     console.log(arr);


// //SINGLE CPU CORE GETS USED BY 99+%  
// for (let i=0;i<100000000000;i++){
// a+=i;
// }


//CALLBACK FUNCTION

// function Arithmetics (num1,num2, functocall){
// let result = functocall(num1,num2);
// };

// function sum (num1,num2){
//     console.log(num1+num2)
// }

// function sub (num1,num2){
//     console.log(num1-num2)
// }

// Arithmetics(90,80,sub);
// console.log(Arithmetics(80,90,sum)); //undefined
// console.log( console.log("akash"));  //undefined

function greet (){
    console.log("hello ji ");
}

setTimeout(greet,2*1000);
setTimeout (function greet2 () { console.log("hello ji"); } ,3*1000);