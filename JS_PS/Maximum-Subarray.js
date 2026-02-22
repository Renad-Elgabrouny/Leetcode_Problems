1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var maxSubArray = function(nums) {
6    let current = nums[0];
7    let maxSum = nums[0];
8
9    for (let i = 1; i < nums.length; i++) {
10        current = Math.max(nums[i], current + nums[i]);
11        maxSum = Math.max(maxSum, current);
12    }
13
14    return maxSum;
15};