// async fns using promises without await
function asyncfn (){
let p =  new Promise (function(resolve){
    setTimeout(function() {
        console.log("p inside asyncfn b4",p);
        resolve("resolvedd")
        console.log("p inside asyncfn after",p);
        console.log("\n\n")
    }, 2000);
})
return p;
}

function main (){
let a = asyncfn();
console.log("a inside main ",a);

}

main();

// async fns using promises and async await

 function asyncfn2 (){
    let p =  new Promise (function(resolve){
        setTimeout(function() {
            console.log("p inside asyncfn2 b4",p);
            resolve("resolvedd")
            console.log("p inside asyncfn2 after",p);
            console.log("\n\n")
        }, 2000);
    })
    return p;
    }
    
    async function main2 (){
    let a2 = await asyncfn2();
    console.log("a2 inside main2 ",a2);
    }
    
    main2();

    console.log("out of main functions"); //outside the async await the code runs when awaiting for promise


const fs= require ('fs');
fs.readFile("readfile.txt" ,"utf-8" , (err,data)=>{
console.log(data);
})


fs.readFile("readfile.txt" , "utf-8").then(function (data){
    console.log(data);
})