let multiply=function(x,y){
    console.log(x*y);
}

let mulby2=multiply.bind(this,2);
mulby2(10);

/*function sum(a,b,c){
    return a+b+c;
}
sum(1,2,3);*/    //normal function

//curried version

function sum(a){
    return(b)=>{
        return(c)=>{
            return a+b+c;
        }
    }
}
console.log(sum(1)(2)(3));