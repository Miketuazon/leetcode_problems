/**
 * @param {string[]} strs
 * @return {string}

 Understand the problem
 - Find longest common prefix amongst ALL strings

 Make a plan
 - Go through each string
 - Go through each letter
 */
 var longestCommonPrefix = function (strs) {
    if (strs.length == 1) return strs[0];

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);

            if (prefix.length == 0) return '';
        }
    }
    return prefix;
};
