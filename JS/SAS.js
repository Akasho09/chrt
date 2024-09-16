//sync1 , async , sync 2
function sync1 () {
    console.log("sync 1");
}

function sync2 () {
    console.log("sync 2");
}

sync1 ();

setTimeout(function(){
    sync2();
}, 3000 );


