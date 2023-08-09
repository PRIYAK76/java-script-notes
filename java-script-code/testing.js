
var twoSum = function(nums, target) {
    var i,j,sum;
    for(i=0;i<nums.length;i++){
        for(j=0;j<nums.length;i++){
                sum = nums[i]+nums[j];
                if(target==sum){
                    console.log("["+j+","+i+"]");
                }
        }
    }
};

console.log(twoSum([2,7,11,15],9));