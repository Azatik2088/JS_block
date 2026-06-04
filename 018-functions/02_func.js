function hello(){
    console.log("hello")
}


function phello(niclname){
    console.log(`hello ${niclname}`)
}
phello(niclname="sasa")


function prHello(){
    return "Hello"
}


function priHello(niclname){
    return "Hello"
}


//Пример замыкания
function outFun(){
    let outVar = "I'm outside";
    function innerFun(){
        console.log(outVar);
    }

    return innerFun
}
const myFun=outFun();
myFun()


function add(x,y){
    return x+y;
}
//same
const add = (x,y) => x+y;


//anonim fun
const anon = function(x, y){
    return x+y;
}