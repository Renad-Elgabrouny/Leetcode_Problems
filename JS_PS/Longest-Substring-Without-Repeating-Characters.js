1/**
2 * @param {string} s
3 * @return {number}
4 */
5function lengthOfLongestSubstring(s) {
6  let seen = new Set();
7  let left = 0;
8  let maxLength = 0;
9
10  for (let right = 0; right < s.length; right++) {
11    
12    while (seen.has(s[right])) {
13      seen.delete(s[left]);
14      left++;
15    }
16
17    seen.add(s[right]);
18    maxLength = Math.max(maxLength, right - left + 1);
19  }
20
21  return maxLength;
22}