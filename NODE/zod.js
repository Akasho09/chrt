const zod=require('zod');

const schema =zod.array(zod.number());

function validatearray(arr){
let a=schema.safeParse(arr);
console.log(a);
}

let a=[1,2,3];
let b=2;
validatearray(a);
validatearray(b);