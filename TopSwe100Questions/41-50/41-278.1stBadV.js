/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let last = n, first = Math.floor((2 + last) / 2);
        if (isBadVersion(n) && !isBadVersion(n - 1)) return n;
        while (!(isBadVersion(first) && !isBadVersion(first - 1))) {
            if (isBadVersion(first)) {
                last = first;
                first = 1;
            }
            first = Math.floor((first + last) / 2);
        }
        return first;
    };
};