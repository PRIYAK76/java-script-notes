// var addTwoNumbers = function(l1, l2) {

// const num=parseInt(l1.reverse().join(""));
// const num1=parseInt(l2.reverse().join(""));
// let sum=num+num1;
// var ans=Array.from(sum.toString(), Number);
// let final=ans.reverse();
// console.log(final);
// };
// addTwoNumbers( [ 9,9,9,9,9,9,9],[9,9,9,9]);




// var lengthOfLongestSubstring = function(s) {
//     if(s.length==0)
//         return 0;
//     const n=s.length;
//     let i=1;
//     let len=1;
//     let maxLen=1;
//     const s1=new Set();
//     s1.add(s[0]);
//     while(i<n){
//         if((s[i]!=s[i-1]) && !s1.has(s[i]))
//         {
//             s1.add(s[i]);
//             len++;
//             i++;

//             if(len>maxLen){
//                 maxLen=len;
//             }
//         }
//         else{
//             if(len==1)
//                 {i++;}
//             s1.clear();
//             i=i-len+1;
//             len=0;
//         }
//     }
//     return maxLen||len;
// };

// console.log(lengthOfLongestSubstring("aab"));

var findMedianSortedArrays = function(nums1, nums2) {
    let conarr = nums1.concat(nums2);
    let sortarr = conarr.sort((a, b) => a - b);
    console.log(sortarr);
    const len=sortarr.length;
    if(len%2==0){
        let sum=(sortarr[len/2]+sortarr[(len/2)-1])/2;
        if(Number.isInteger(sum))
            return sum+'00000';
        return sum+'0000';
    }
    let ans=(sortarr[Math.trunc(len/2)]);
    return ans;

};

console.log(findMedianSortedArrays([3],[4,1]));











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