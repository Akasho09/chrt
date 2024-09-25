/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// function sleep(milliseconds) {
//     let a=Date.now();
//     while(1){
//     if(Date.now()-a<milliseconds) {}
//     else return;
//     }
// }

// sleep(3000);


function sleep(milliseconds) {
   return new Promise (function(resolve){
    const start = Date.now();
    while (Date.now() - start < milliseconds) {
      // Busy wait
    }
    resolve(Date.now() - start);
   })
}

sleep(3000).then((result)=>{
    console.log("busied for " + result);
})
