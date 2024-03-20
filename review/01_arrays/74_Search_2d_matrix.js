/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}

 Understand the problem
 - Return true if target is in matrix, else false

 make a plan
 - Treat matrix as a map, vals as coordinates
 - Create vars for rows, cols, L and R pointers
    - Rows -> len of matrix
        - Left => matrix[0]
        - Right -> matrix[rows][cols-1]
    - Binary search on whole matrix
    - Midpoint w/ L/R pointers
 */
    var searchMatrix = function(matrix, target) {
        // Get rows and cols of matrix
        let rows = matrix.length // 3
        let cols = matrix[0].length // 4
        // console.log('rows', rows)
        // console.log('cols', cols)

        // Left should be 0, right should be 11 (4x3 - 1)
        let left = 0
        let right = rows*cols-1
        // console.log('right', right)

        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2)
            // console.log('mid', mid) //mid would be 5 at 1st iteration

            // Get coordinates of midVal
            //        x  y
            // matrix[1][1]
            let x = Math.floor(mid / cols) // 5/3 = 1
            let y = mid % cols // 5 % 4 =  1
            // console.log('x', x)
            // console.log('y', y)

            let midVal = matrix[x][y] // 11
            // console.log('midVal', midVal)

            if (midVal === target) return true
            else if (midVal < target) left = mid + 1
            else if (midVal > target) right = mid - 1
        }

        return false
    };
