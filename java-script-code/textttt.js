var addTwoNumbers = function(l1, l2) {

const num=parseInt(l1.reverse().join(""));
const num1=parseInt(l2.reverse().join(""));
let sum=num+num1;
var ans=Array.from(sum.toString(), Number);
let final=ans.reverse();
console.log(final);
};
addTwoNumbers( [ 9,9,9,9,9,9,9],[9,9,9,9]);
















// var twoSum = function(nums, target) {
//     var i,j;
//     for (i = 0; i < nums.length; i++) {
//         for ( j = i + 1; j < nums.length; j++) {
//             if (nums[j] == target - nums[i]) {
//                 let output=[];
//                 output.push(i);
//                 output.push(j);
//                 return output;
//             }
//         }
//     }
// }
// console.log(twoSum([2,7,11,15],9));