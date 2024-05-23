/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/*
    Understand the problem
    - With an arr a str, return subArrs where each one has a unique anagram

    Make a plan
    - Create an obj
    - Go through strs arr
        - For each str, create a sortedStr and use it as unique anagram
        - If the anagram is not in obj,
            - Create key val pair
            - Key = anagram
            - Val = str
        - If it is
            - Add the str onto val
    - Return the values of the obj
*/

var groupAnagrams = function (strs) {
    // For Exs 2 and 3
    if (strs.length === 1) return [strs];
    // Create holder
    let obj = {};

    // Iterate thru loop
    for (let i = 0; i < strs.length; i++) {
        // Create var for string and sorted str
        let str = strs[i];
        let anagram = str.split('').sort().join('');
        // console.log('anagram', anagram);

        // If the object doesn't have the anagram
        if (!obj[anagram]) obj[anagram] = [str]
        // If it does, push str onto value
        else {
            obj[anagram].push(str)
        };
    };

    return Object.values(obj)
};
