1function maxArea(height) {
2  let left = 0;
3  let right = height.length - 1;
4  let maxWater = 0;
5
6  while (left < right) {
7    const width = right - left;
8    const h = Math.min(height[left], height[right]);
9    const area = width * h;
10
11    maxWater = Math.max(maxWater, area);
12    if (height[left] < height[right]) {
13      left++;
14    } else {
15      right--;
16    }
17  }
18
19  return maxWater;
20}