/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.

 Understand problem
 - Modify string in place and reverse it

 Make a plan
 - Use 2 pointers
    - Swap places until middle
 */
var reverseString = function (s) {
    let left = 0
    let right = s.length - 1

    while (left < right) {
        let tempLeft = s[left]
        s[left] = s[right]
        s[right] = tempLeft

        left++
        right--
    }
};
