// //  COUNTDOWN

// function display(a){
//     console.log(a);
// }

// for (let i=30;i>=0;i--){
//     setTimeout(console.log(i),30000-i*1000);
// }

// // works
// for (let i=30;i>=0;i--){
//     setTimeout(()=>{
//         console.log(i);
//     },30000-i*1000);
//     }

// for (let i=30;i>=0;i--) {
//     setInterval(console.log(i),30000-i*1000);
// }


// // calculate difference 
// let end,e,s,s2;
// let start;
// function greet () {
//     console.log("hello ji ");
//     let date=new Date();
// s2=date.getTime();
// }

// function f1 () {
//     start=performance.now();
// let date1=new Date();
// s=date1.getTime();
//     setTimeout(greet,3*1000);
//     let date2=new Date();
//     e=date2.getTime();    
//     end=performance.now();
// }

// let date1=new Date();
// s=date1.getTime();
// f1();


// console.log(end-start); //time difference btwen settimeout
// // and total execution of function by performance.now()
// console.log(e-s);//time difference btwen settimeout call 
// // and execution of next function 
// console.log(end-start);//time difference btwen settimeout
// // and total execution of function by getTime()
// console.log(s2-s);  // s2 is date after settimeout console call 


function bigtime() {
let a=10;
for ( let i=0;i<1000000000;i++){
a+=i;
}
}

let date1=new Date();
s=date1.getTime();
bigtime();
let date2=new Date();
e=date2.getTime();
console.log(e-s, "milliseconds");