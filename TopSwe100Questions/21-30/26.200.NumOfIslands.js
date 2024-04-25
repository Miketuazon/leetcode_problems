/**
 * @param {character[][]} grid
 * @return {number}

 Understand the problem
 - Given a 2d array, return number of islands

 Make a plan
 - Go through array and track location of 1s
 - Find a way to see if 1s are connected
 -
 */
 var numIslands = function (grid) {
    let count = 0;

	function callDFS(grid, i, j) {
		if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == '0') {
			return;
		}

		grid[i][j] = '0';

		callDFS(grid, i + 1, j); // down
		callDFS(grid, i - 1, j); // up
		callDFS(grid, i, j + 1); // right
		callDFS(grid, i, j - 1); // left
	}

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] == '1') {
				count += 1;
				callDFS(grid, i, j);
			}
		}
	}

	return count;
};
