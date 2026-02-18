1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(nums, target) {
7    let def=null;
8    let indx={};
9    for(let i=0;i<nums.length;i++){
10        def=target-nums[i];
11        if(indx.hasOwnProperty(def)){
12            return [indx[def], i];
13            
14        }
15        indx[nums[i]] = i;
16    };
17    return indx;
18};