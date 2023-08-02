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

function sum(a) {
    let b = (b) => {
        let c = (c)=> {
            return a+b+c;
        };
        return c;
    };
    return b;
}
console.log(sum(1)(2)(3));
//b(2)(3)
//c(3)