setTimeout(function(){
    console.log("timer");
},3000);
function x(y){
    console.log("x functions");
    y();
}
x(function y(){
    console.log("y functions");
});