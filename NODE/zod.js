const zod=require('zod');

const schema =zod.array(zod.number());

const password = zod.string().min(8 , { message : " Minimum length must be 8" }).startsWith("A","B" ,"C" ,"D" , {message : " First letter must be capital "})



function validatearray(arr){
let a=schema.safeParse(arr);
console.log(a);
}

let a=[1,2,3];
let b=2;
validatearray(a);
validatearray(b);


let passw= "Dkashmalik";
console.log(password.safeParse(passw));
