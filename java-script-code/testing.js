
// var twoSum = function(nums, target) {
//     var i,j,sum;
//     for(i=0;i<nums.length;i++){
//         for(j=0;j<nums.length;i++){
//                 sum = nums[i]+nums[j];
//                 if(target==sum){
//                     console.log("["+j+","+i+"]");
//                 }
//         }
//     }
// };

// console.log(twoSum([2,7,11,15],9));





var convert = function(s, numRows) {
    if (numRows == 1)
    {
        return s;
    }
    let str1 = s.split("");

    let len = s.length;

    let arr = new Array(numRows);
    for(let i=0;i<numRows;i++)
    {
        arr[i]="";
    }

    let row = 0;
    let down = true; 

    for (let i = 0; i < len; ++i)
    {

        arr[row] += (str1[i]);

        if (row == numRows - 1)
        {
            down = false;
        }

        else if (row == 0)
        {
            down = true;
        }

        if (down)
        {
            row++;
        }
        else
        {
            row--;
        }
    }
    let stt= arr.join('');
    console.log(stt);
    return  arr;
};
console.log(convert("PAYPALISHIRING",3)) ;