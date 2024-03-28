/**
 * @param {number[]} asteroids
 * @return {number[]}

    Understand the problem
    - Return altered array depending if asteroids destroy each other

    Make a plan
    - Create a res array 
    - Go through asteroids arr 
        - If the ast is positive, push the currAst and keep going
        - If not:
            - If negative asteroid abs val is greater than last ast, keep destroying
            - If negative ast abs val is equal to last ast, destroy both
            - If negative ast abs val is less than last ast, destroy negative ast
    - Return res array
 */
    var asteroidCollision = function (asteroids) {
        let stack = [];
    
        for (let ast of asteroids) {
            // If stack is not empty, current ast is negative
            // and last ast in stack is positive
            while (stack.length && ast < 0 && stack[stack.length - 1] > 0) {
                // If last ast beats current
                if (Math.abs(stack[stack.length - 1]) > Math.abs(ast)) {
                    ast = 0;
                }
                // If last ast loses to current
                else if (Math.abs(stack[stack.length - 1]) < Math.abs(ast)) {
                    stack.pop();
                }
                // If both asts are equal
                else {
                    ast = 0;
                    stack.pop();
                }
            }
            // If asteroid is positive
            if (ast) {
                stack.push(ast);
            }
        }
    
        return stack;
    }