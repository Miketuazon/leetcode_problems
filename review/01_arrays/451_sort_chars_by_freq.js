/**
 * @param {string} s
 * @return {string}
    Understand problem
    - Return string w/ highest freq to lowest freq of characters
    Make a plan
    - Create an obj to hold letters
    - Iterate through string
        - If letter is not in obj, create new count
        - Else add 1 to the count
    - Sort the obj by frequency
    - Create new string
    - Iterate through counts and add onto string
 */
    var frequencySort = function(s) {
        // Create obj
        let obj = {}
        // Iterate through string
        for (let char of s) {
            // console.log('char', char)
            // Make new count, if not then add to count
            if (!obj[char]) obj[char] = 1
            else {
                obj[char] += 1
            }
        }

        // Sort count in obj
        let sortedObj = Object.keys(obj).sort((a,b) => obj[b] - obj[a])
        // Initiate new string
        let res = ""

        // Iterate through characters
        for (let char of sortedObj) {
            // console.log('char', char)
            let count = obj[char]
            // Iterate through count, and add the char
            for (let i = 0; i < count; i++) {
                // console.log('char inner', char)
                res += char
            }
        }

        return res
    };
