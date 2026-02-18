1/**
2 * @param {number[]} prices
3 * @return {number}
4 */
5var maxProfit = function(prices) {
6    let indx1 = 0;   
7    let indx2 = 1; 
8    let maxProfit = 0;
9
10    while (indx2 < prices.length) {
11        if (prices[indx2] > prices[indx1]) {
12            let profit = prices[indx2] - prices[indx1];
13            maxProfit = Math.max(maxProfit, profit);
14        } else {
15            indx1 = indx2;
16        }
17        indx2++;
18    }
19
20    return maxProfit;
21};