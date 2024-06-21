#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    new = []
    for row in matrix:
        # Create a new row with squared values
        new_row = [x ** 2 for x in row]
        # Append the new row to the new matrix
        new_matrix.append(new_row)
    
    return new_matrix
