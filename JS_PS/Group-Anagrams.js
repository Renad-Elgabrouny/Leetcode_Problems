1/**
2 * @param {string[]} strs
3 * @return {string[][]}
4 */
5var groupAnagrams = function(strs) {
6    const map = {}; 
7    for (let i = 0; i < strs.length; i++) {
8        let sorted = strs[i].split('').sort().join('');
9        if (!map[sorted]) {
10            map[sorted] = []; 
11        }
12        map[sorted].push(strs[i]); 
13    }
14    
15    return Object.values(map);
16};
17
18