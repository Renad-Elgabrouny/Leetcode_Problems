1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var productExceptSelf = function(nums) {
6    let n = nums.length;
7    let answer = new Array(n).fill(1);
8
9    let left = 1;
10    for (let i = 0; i < n; i++) {
11        answer[i] = left;
12        left *= nums[i];
13    }
14
15    let right = 1;
16    for (let i = n - 1; i >= 0; i--) {
17        answer[i] *= right;
18        right *= nums[i];
19    }
20
21    return answer;
22};