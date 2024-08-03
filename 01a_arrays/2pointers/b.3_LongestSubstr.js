var lengthOfLongestSubstring = function(s) {
    // Create 2 pointers that represent window size
    let left = 0
    let right = 0
    // Max_length to return 
    let max_length = 0
    // Using set to keep track of unique characters
    let window = new Set()
    // Use while loop to iterate through string
    while (right < s.length) {
        console.log("R", right, 'L', left, "W ", window)
        console.log('val R ->', s[right], 'ML', max_length)
        console.log(max_length, right-left+1)
        console.log("________")
        // Inner loop runs if right indicator is in the window
        while (window.has(s[right])) {
            // delete duplicate
            window.delete(s[left])
            // move left pointer up by 1
            left += 1
        }
        // Update max length, add unique val, and move right pointer
        max_length = Math.max(max_length, right-left+1)
        window.add(s[right])
        right += 1
    }
    return max_length
};