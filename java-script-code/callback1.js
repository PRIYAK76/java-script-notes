function modifyArray(arr, callback) {
    // do something to arr here
    arr.push(100);
    arr.push(108);
    arr.push(150);
    // then execute the callback function that was passed
    callback();
  }
  
  var arr = [1, 2, 3, 4, 5];
  
  modifyArray(arr, function() {
    console.log("array has been modified", arr);
  });

var x = 3;
var y = "3";
console.log(x+y);