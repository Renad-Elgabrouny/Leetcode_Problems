1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function(s) {
6  const cleaned = s
7  .toLowerCase()
8  .replace(/[^a-z0-9]/g, "");
9  let n=cleaned.length
10  let mid=Math.floor(n/2)
11  for(let i=0;i<mid;i++)
12  {
13    if(cleaned[i]!==cleaned[n-i-1])
14    {
15       return false
16    }
17  }
18  return true
19
20
21};