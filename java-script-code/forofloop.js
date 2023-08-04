let num=[2,3,5,6,7,3,1,34,5,4,3,21,123,34];
num[70]=34;

//forof
// for(let n of num){
//     console.log(n);
// }

// //forin
// for(let key in num){
//     console.log(num);

// }


let alien = {
    name:'priya',
    tech: 'c',
    laptop:{
        brand:"mi",
        charge:'good'
    }
}

for(let key in alien){
    console.log(key,alien);
}