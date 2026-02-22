1/**
2 * @param {number[][]} intervals
3 * @return {number[][]}
4 */
5var merge = function(intervals) {
6    intervals.sort((a, b) => a[0] - b[0]);
7
8    let result = [];
9    let current = intervals[0];
10
11    for (let i = 1; i < intervals.length; i++) {
12        let next = intervals[i];
13        if (current[1] >= next[0]) {
14            current[1] = Math.max(current[1], next[1]);
15        } else {
16            result.push(current);
17            current = next;
18        }
19    }
20    result.push(current);
21
22    return result;
23};