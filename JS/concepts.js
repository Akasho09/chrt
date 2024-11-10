let x = {
    flag : 1 ,
    toString : function(){
        return this.flag++;
    }
};

if(x==1 && x==2 && x==3) {
    console.log("x==1 && x==2 && x==3")
}
else {
    console.log("Stfu")
} 


if(x==2 && x==1) {
    console.log("x==2 && x==1")
}
else {
    console.log("Stfu")
} 


let y = {
    flag : 1 ,
    toString : ()=>{
        return this.flag++;
    }
};

if(y==1 && y==2 ) {
    console.log("How??")
}
else {
    console.log("Stfu")
} 


//
let a=1;
let b=true;
let c="1";
let d = {
    flag : 1,
    toString : function(){
        return 0
    }
}

if(a==b) {
    console.log("a==b")
} 

if(a===b) {
    console.log("a===b")
}

if(a==c) {
    console.log("a==c")
}

if(b==c) {
    console.log("b==c")
}

if(d==0) {
    console.log("d==0")
}

/*
In JavaScript, when an object is compared with a primitive (like 1 or 2 in the if condition), the object’s toString() or valueOf() method is called to convert the object into a primitive value. Let's break down the behavior for both x and y:


First Comparison (x == 1):

JavaScript attempts to convert x to a primitive using its toString() method.
x.toString() is called, which returns 1 (since flag was initially 1).
So, x == 1 evaluates to true (because 1 == 1).
Second Comparison (x == 2):

Since the && condition requires both comparisons to be true, JavaScript proceeds to check x == 2.
x.toString() is called again, and this time flag is 2 (since it was incremented in the previous step).
So, x == 2 also evaluates to true (because 2 == 2).


In this case, the toString method is defined as an arrow function, which does not have its own this context. 
Instead, it inherits this from the outer lexical scope, which is likely the global scope in this case.


*/