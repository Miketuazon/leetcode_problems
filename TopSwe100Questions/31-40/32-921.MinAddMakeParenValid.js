/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let validLength = 0
    let open = 0

    for(let i = 0; i < S.length; i++) {
        if (S[i] === '(')
            open += 1
        else {
            if (open === 0)
                validLength += 1
            else
                open -= 1
        }
    }

    return validLength + open
};
