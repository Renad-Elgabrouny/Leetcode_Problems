1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {boolean}
5 */
6var isAnagram = function(s, t) {
7    if (s.length !== t.length) return false;
8
9    let count = {};
10
11    for (let char of s) {
12        count[char] = (count[char] || 0) + 1;
13    }
14
15    for (let char of t) {
16        if (!count[char]) return false;
17        count[char]--;
18    }
19
20    return true;
21};
22