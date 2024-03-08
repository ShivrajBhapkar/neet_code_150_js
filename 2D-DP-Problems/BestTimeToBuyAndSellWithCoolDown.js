// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: prices = [1,2,3,0,2]
// Output: 3
// Explanation: transactions = [buy, sell, cooldown, buy, sell]
function FindProfit(stocks) {
   
    // First apporoach
    function FindMaxProfit(indx, buy) {
        if (indx >= stocks.length) {
            return 0;
        }
        let profit = Number.MIN_SAFE_INTEGER;
        if (buy === 1) {
            let buykaro = -stocks[indx] + FindMaxProfit(indx + 1, 0);
            let buymatKaro = 0 + FindMaxProfit(indx + 1, 1);
            profit = Math.max(buykaro, buymatKaro);
        } else {
            let sellKaro = FindMaxProfit(indx + 2, 1) + stocks[indx];
            let sellMatkaro = FindMaxProfit(indx + 1, 0) + 0;
            profit = Math.max(sellKaro, sellMatkaro);
        }
        return profit;
    }

    // Second apporoach
     const len = stocks.length;
    const dp = Array.from({ length: len },()=> Array(2).fill(-1));
    function FindMaxProfitUtil(buy, dp, indx) {
        if (indx >= stocks.length) {
            return 0;
        }
        if (dp[indx][buy] !== -1) {
            return dp[indx][buy];
        }
        let max = Number.MIN_SAFE_INTEGER;
        if (buy === 1) {
            let buyKaro = -stocks[indx] + FindMaxProfitUtil(0, dp, indx + 1);
            let buymatKaro = 0 + FindMaxProfitUtil(1, dp, indx + 1);
            max = Math.max(buyKaro, buymatKaro);
        } else {
            let sellKaro = stocks[indx] + FindMaxProfitUtil(1, dp, indx + 2);
            let sellmatKaro = 0 + FindMaxProfitUtil(0, dp, indx + 1);
            max = Math.max(sellKaro, sellmatKaro);
        }
        dp[indx][buy] = max;
        return max;
    }
    // return FindMaxProfit(0, 1);
    return FindMaxProfitUtil(1, dp, 0);
}
const result = FindProfit([1, 2, 3, 0, 2]);
console.log(result);
