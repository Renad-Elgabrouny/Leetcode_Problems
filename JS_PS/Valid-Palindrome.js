1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function(s) {
6    let left = 0;
7    let right = s.length - 1;
8
9    while (left < right) {
10
11        while (left < right && !isAlphaNum(s[left])) {
12            left++;
13        }
14        while (left < right && !isAlphaNum(s[right])) {
15            right--;
16        }
17        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
18            return false;
19        }
20
21        left++;
22        right--;
23    }
24
25    return true;
26};
27
28function isAlphaNum(char) {
29    return /[a-z0-9]/i.test(char);
30}