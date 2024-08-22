/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculatetimedifference (ftocall,n) {
    let s1=new Date();
    let s11=s1.getTime();
    ftocall(n);
    let s2=new Date();
    let s22=s2.getTime();
    console.log("time taken to execute the function is : " , s22-s11 , " ms " );
}
function bigtimef(n){
let a=0;
for (let i=0;i<n;i++){
    a++;
}
}

// calculatetimedifference(bigtimef,100);
// calculatetimedifference(bigtimef,1000);
// calculatetimedifference(bigtimef,10000);
// calculatetimedifference(bigtimef,100000);
// calculatetimedifference(bigtimef,1000000);
// calculatetimedifference(bigtimef,10000000);
// calculatetimedifference(bigtimef,100000000);
// calculatetimedifference(bigtimef,1000000000);
// calculatetimedifference(bigtimef,10000000000);



// COUNTDOWN
function COUNTDOWN(n){
   let b= n+1-new Date().getSeconds()+t;
   if(b>0)
    console.log(b);
}
let t = new Date().getSeconds();
setInterval(COUNTDOWN,1000,15);
// setInterval(COUNTDOWN,1000,60);
