/**
 * @param {number} n
 * @return {number}
 */
/*
*/
var climbStairs = function(n) {
    let one = 1
    let two = 1
        // 3        3 < 4
    for (let i = 0; i < n - 1; i++) {
        tempOne = one   // 5
        one = one + two // 8
        two = tempOne   // 5
    }
    return one
};

var minCostClimbingStairs = function(cost) {
   cost.push(0)
    for(let i=cost.length-4;i>=0;i--){
        cost[i]+=Math.min(cost[i+1],cost[i+2])
    }
      return Math.min(cost[0],cost[1])

};
