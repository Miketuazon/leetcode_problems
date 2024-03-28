/**
 * @param {number} n
 * @return {string[]}

Understand the problem
- Give array of strings where 1-n is divisible 3, 5, or both

Make a plan
- Create a string
- Go through numbers 1-n
    - n / 3 and 5? -> Fizzbuzz
    - n / 3 -> Fizz
    - n / 5 -> Buzz
    - none of the above? - stringify
 */
var fizzBuzz = function (n) {
    let res = []

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) res.push('FizzBuzz')
        else if (i % 3 === 0 && i % 5 != 0) res.push('Fizz')
        else if (i % 3 != 0 && i % 5 === 0) res.push('Buzz')
        else res.push(i.toString())
    }

    return res
};
