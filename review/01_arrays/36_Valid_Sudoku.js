/**
 * @param {character[][]} board
 * @return {boolean}

    Understand the problem
    - Return true or false depending if the sudoku board is valid
    Make a plan
    - 3 rules for valid sudoku board
        1. Each row 1-9, no repeating
        2. Each col 1-9 ....
        3. Each 3x3 square...
    - Create vars to keep count of:
        1. Rows
        2. Cols
        3. Squares

    - Each subArr represents a row
    - If the char is not a ".":
        - Use the coordinate and place inside row col and square
        - If the num is already in the row col or square, return false
    - Return true at the end
 */
    var isValidSudoku = function (board) {
        // Create holders for rows, cols, and squares
        let rowHolder = {}
        let colHolder = {}
        let squareHolder = {}

        // Iterate thru board
        for (let row = 0; row < board.length; row++) {
            // Iterate thru row
            for (let col = 0; col < board[row].length; col++) {
                let num = board[row][col]
                // console.log('num', num)
                if (num === ".") continue

                // Create vars to hold row, col and coordinate
                let squareRow = Math.floor(row / 3)
                let squareCol = Math.floor(col / 3)
                let squareKey = squareRow + "-" + squareCol

                // console.log('squareKey', squareKey)
                // Check to see if row, col, or square has num, return false
                if (rowHolder[row]?.has(num) ||
                    colHolder[col]?.has(num) ||
                    squareHolder[squareKey]?.has(num)) {
                    return false
                }

                // Create new Set if there isnt one
                rowHolder[row] = rowHolder[row] || new Set()
                colHolder[col] = colHolder[col] || new Set()
                squareHolder[squareKey] = squareHolder[squareKey] || new Set()

                // Add num to each set
                rowHolder[row].add(num);
                colHolder[col].add(num);
                squareHolder[squareKey].add(num);
                // console.log('rowHolder', rowHolder)
                // console.log('colHolder', colHolder)
                // console.log('squareHolder', squareHolder)
            }
        }

        return true;
    };
