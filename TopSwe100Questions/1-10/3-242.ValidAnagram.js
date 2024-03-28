/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
 Understand the problem
 - If both words have the same amount of letters, return true. Else false

 Make a plan
 - If length of both are not equal, return false
 - Create an obj
 - Go through s
    - If s[i] is not in obj, create new key val pair as -> s[i]: 1
    - If it is, add 1 to the s[i] in the obj
- Go through t
    - If s[i] is in obj, minus 1
    - If s[i] isnt, return false
    - If s[i] is in obj but has no amount, return false
*/
var isAnagram = function (s, t) {
    if (s.length != t.length) return false

    let obj = {}

    for (let i = 0; i < s.length; i++) {
        let currLetter = s[i]

        if (!obj[currLetter]) obj[currLetter] = 1
        else obj[currLetter]++
    }

    // console.log('obj', obj)

    for (let i = 0; i < t.length; i++) {
        let currLetter = t[i]

        if (!obj[currLetter] || obj[currLetter] === 0) return false
        else obj[currLetter]--
    }
    return true
}
