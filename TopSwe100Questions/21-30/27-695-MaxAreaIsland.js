/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxIsland = 0;

    const dfs = (row, column, grid, count) => {

        if(grid[row] === undefined || grid[row][column] === undefined || grid[row][column] !== 1) return count;

        grid[row][column] = 2;
        count++;
        count = dfs(row + 1, column, grid, count);
        count = dfs(row - 1, column, grid, count);
        count = dfs(row, column + 1, grid, count);
        count = dfs(row, column - 1, grid, count);

        return count;

    }

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === 1) {
                let count = dfs(i, j, grid, 0);
                maxIsland = Math.max(count, maxIsland);
            }
        }
    }

    return maxIsland;
};
