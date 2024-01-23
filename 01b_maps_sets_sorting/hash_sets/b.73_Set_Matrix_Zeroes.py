class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        '''
        matrix = [
            [1,1,1],
            [1,0,1],
            [1,1,1]
                ]
        '''
        # Understand problem:
        #   - If we find a 0, must set its rows and columns to 0
        # Make a plan
        #   - Create a hash set to store location of 0s, by using
        #       - rows and columns
        #   - Go through array once
        #       - Record the location of where the 0 is
        #   - Create a way to modify the 0's row and col
        #   - Return the changed arr

        # Creating the rows/col as a set
        row_list = set()
        col_list = set()
        # Iterating through for the first time
        # Goin thru the row
        for row in range(len(matrix)):
            # print('row', row)

            # Going through the column
            for col in range(len(matrix[0])):
                # print('col', col)
                # print([row, col])
                # If the 'coordinates' are a 0, we add them
                if matrix[row][col] == 0:
                    row_list.add(row)
                    col_list.add(col)

        # print(row_list)
        # print(col_list)

        # Iterating through a second time
        for row in range(len(matrix)):
            for col in range(len(matrix[0])):
                # Checking now to see if the curr coordinate's
                # row OR col is in either set, reassign as 0
                if row in row_list or col in col_list:
                    matrix[row][col] = 0

        # Return the modified matrix :D
        return matrix
