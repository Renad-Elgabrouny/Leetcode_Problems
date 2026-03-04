1var characterReplacement = function(s, k) {
2    let longest = 0;
3    const freq = new Map();
4    let maxFreq = 0;
5    let left = 0;
6
7    for (let right = 0; right < s.length; right++) {
8        const currentRight = s[right];
9        freq.set(currentRight, (freq.get(currentRight) || 0) + 1);
10        maxFreq = Math.max(maxFreq, freq.get(currentRight));
11
12        while ((right - left + 1) - maxFreq > k) {
13            const currentLeft = s[left];
14            freq.set(currentLeft, freq.get(currentLeft) - 1);
15            left++;
16        }
17        
18        longest = Math.max(longest, right - left + 1);
19    }
20
21    return longest;
22};