/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let totalBits = 0
    const bitString = n.toString(2)
    console.log(bitString)
    for (let char of bitString) {
        if (char === "1") totalBits++
    }

    return totalBits
};
