let a=10;
let i;
for ( i=0;i<10;i++){
a+=i;
}
console.log(i); //i==10
console.log("\n");

// A CALLBACK is a function passed as an argument to another function.
// solves Don't Repeat Yourself (DRY) of functions.
//e.g myCalculator(5, 5, myDisplayer);

function square (a) {
    return a*a;
}
function cube (a) {
    return a*a*a;
}
function quad (a) {
    return a*a*a*a;
}

function callbackexample (a,callbackfunction){
    let b=callbackfunction(a);
    console.log(a);
    console.log(callbackfunction);
    console.log(b);
    console.log("\n");
    return b;
}

callbackexample(2,square);
callbackexample(2,cube);
callbackexample(2,quad);

//ANONYMOUS FUNCTION
const ans = callbackexample(2, function(n){
return n*n*n;
});
console.log(ans); 
console.log("\n");

const ans2 = callbackexample(2, function cube2 (n){
    return n*n*n;
    });
    console.log(ans2); 
    console.log("\n");
