// const a= () => console.log("a") ;
// const b= () =>  console.log("b")
// const c = () => console.log("c")

// const start= ()=>{
// console.log("start")
// setImmediate(b);

// new Promise ((resolve,reject)=>{
// resolve("d")
// }).then(resolve => {
//     console.log(resolve)
//     process.nextTick(c)
// })
// process.nextTick(b)

// };
// start() ;



// function f2 (f1) {
// f1();
// }


class Workers {
    constructor(n, a) {
        this.name = n;
        this.age = a;
        this.eyes = 2;
    }
    greet(phrase) {
        console.log(phrase + this.name);
    }
}


const w1 = new  Workers ("akash" , 19) ;
console.log(w1);
