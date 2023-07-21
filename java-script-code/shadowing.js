//if we have same name ouside the block inside variable shadows the outside variable
 var a=10;
 {
    var a=100;
    let b=200;
    const c=300;
    console.log(a);
 }
 console.log(a);

 // both will print 100 because they point to same memory locations
 //incase of let 
let b=10;
 {
    var a=100;
    let b=200;
    const c=300;
    console.log(b);
 }
 console.log(b);
//output will be  200 10 because both have different memory location
//inside b will point to block Scope
//outside b will point to script scope