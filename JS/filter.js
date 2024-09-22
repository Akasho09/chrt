const arr=[1,2,3,4,5,6];

function ifeven(i){
if (i%2==0){
    return true;
}
else 
return false;
}

const arr2 = arr.filter(ifeven);

console.log(arr2);