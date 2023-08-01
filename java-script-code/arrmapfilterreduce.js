let arr=[1,2,3,4,5,6,7,8];
arr.forEach(n =>{
    console.log(n);
});

//filter
console.log(arr.filter(n => n%2==0));

//returns the elements of an array that meet the conditions specified in a callback functions

//map takes a value and change the value
arr.filter(n => n%2==0)
   .map(n => n*2)
   .forEach(n => {
    console.log(n);
   });

let fer = arr.filter(n => n%2==0)
   .map(n => n*2)
   .reduce((a,b) => a-b);

console.log(fer);