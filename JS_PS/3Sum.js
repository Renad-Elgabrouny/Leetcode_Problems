1var threeSum = function(nums) {
2    const result = [];
3    const count = new Map();
4    
5    for (let num of nums) {
6        count.set(num, (count.get(num) || 0) + 1);
7    }
8    
9    const uniqueNums = Array.from(count.keys()).sort((a, b) => a - b);
10    
11    for (let i = 0; i < uniqueNums.length; i++) {
12        for (let j = i; j < uniqueNums.length; j++) {
13            
14            const a = uniqueNums[i];
15            const b = uniqueNums[j];
16            const c = -a - b;
17            
18            if (c < b) continue;
19            if (!count.has(c)) continue;
20            
21            if (a === b && b === c) {
22                if (count.get(a) >= 3) {
23                    result.push([a, b, c]);
24                }
25            }
26            else if (a === b) {
27                if (count.get(a) >= 2) {
28                    result.push([a, b, c]);
29                }
30            }
31            else if (b === c) {
32                if (count.get(b) >= 2) {
33                    result.push([a, b, c]);
34                }
35            }
36            else {
37                result.push([a, b, c]);
38            }
39        }
40    }
41    
42    return result;
43};