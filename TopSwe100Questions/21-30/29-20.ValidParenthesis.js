/**
 * @param {string} s
 * @return {boolean}

 Understand the problem
 - Return true of false depending if brackets are properly closed in the right order

 Make a plan
 - Create an empty queue
 - Go through the string
    - If the char is an opening bracket, add the closing one to the
- Queue should be empty, so return true if length is 0
 */
var isValid = function (s) {
    // Create empty arr
    let stackOfBrackets = []

    for (let currBracket of s) {
        // If bracket is open, add closing to arr
        if (currBracket === "(") stackOfBrackets.push(")")
        else if (currBracket === "{") stackOfBrackets.push("}")
        else if (currBracket === "[") stackOfBrackets.push("]")

        // If brack is closing, it should match last char
        else if (stackOfBrackets.pop() !== currBracket) return false
    }
    return stackOfBrackets.length === 0
};
