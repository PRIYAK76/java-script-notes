 getName =()=>{
    console.log("hiii guys");
}
getName();
console.log(getName);
//arrow function will behave like a variable 
//only when called gets executed
//this is hoisting only proper function declaration gets the whole functions
// hosting means calling a function before it gets declared 
var x=10;
a();
function a(){
    var x=1;
    console.log(a);
}