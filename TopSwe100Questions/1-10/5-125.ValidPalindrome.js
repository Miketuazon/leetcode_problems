/**
 * @param {string} s
 * @return {boolean}

 Understand the problem
 - Return true if sentence is palindrome

 Make a plan
 - lower the string to make sure no uppercases
 - Create two pointers
 - Need a way to ONLY include letters
  - Might need helper function
  - Need to see if char is a-z and not a num
  - Move pointers until they are letters
 - then can finally check if letters at pointers are equal
    - If not return false
    - if so, increment left, decrement right
 - Return true if we outside while loop
 */
 var isPalindrome = function (s) {
    // console.log('a' >'b' < 'c') // true
    // console.log('0' > 'b' < '9') // true
    const loweredStr = s.toLowerCase();

    let left = 0;
    let right = loweredStr.length - 1;

    while (left < right) {
        while (left < right && !(isALetter(loweredStr[left]))) {
            left++;
        }

        while (left < right && !(isALetter(loweredStr[right]))) {
            right--;
        }

        if (loweredStr[left] !== loweredStr[right]) {
            return false;
        }

        left++;
        right--;
    }
    return true;
}

function isALetter(char) {
    return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
}
