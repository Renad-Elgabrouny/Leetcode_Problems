1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var containsDuplicate = function(nums) {
6    let map={};
7    for(let i=0;i<nums.length;i++){
8        if(map[nums[i]])return true;
9        map[nums[i]]=1;
10
11    }
12    return false
13    
14};