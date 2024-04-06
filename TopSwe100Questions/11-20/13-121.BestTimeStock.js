/**
 * @param {number[]} prices
 * @return {number}
 */
 /*
 1. Understand problem
    - Given an arr of prices, choose 1 day and sell for max profit for a FUTURE day
 2. Create a plan
    - have a holder for maxProfit
    a.  We will go through each number
        - compare number with future numbers
        - if future number > currNum, we will hold the profit we make from number - currNum
        - if currProfit > maxProfit, maxProfit = currProfit
        - if we CANNOT make a profit, default to 0
 3. Carry out plan

 4. Revise plan

 */

const maxProfit = (prices) => {
    let left = 0; // Buy // 1
    let right = 1; // sell // 3
    let max_profit = 0;
    // 3 < 6
    while (right < prices.length) {
        // 1 < 3
      if (prices[left] < prices[right]) {
          // 3 - 1 = 2 curr prof
        let profit = prices[right] - prices[left]; // our current profit
          // 4 || 2 = 4
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
      right++;
    }
    return max_profit;
  };

  Input: prices = [7,1,5,3,6,4] //6
  Output: 5
