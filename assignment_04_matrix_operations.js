// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

# =============================================================================
# PROGRAMMING FUNDAMENTALS — Assignment 4
# Topic: Multi-dimensional Arrays (2D Lists), Nested Loops, and Functions
# =============================================================================
#
# TASK: Matrix Operations
#
# Write a Python program that performs three operations on matrices (2D lists),
# each implemented in its own function.
#
# -----------------------------------------------------------------------------
# PART A — Transpose a Matrix
# -----------------------------------------------------------------------------
# - Read an M x N matrix from the user.
# - Compute and display its transpose (rows become columns, columns become rows).
#
# Example (2 x 3 input):
#
#   Original Matrix:      Transposed Matrix:
#   1  2  3               1  4
#   4  5  6               2  5
#                         3  6
#
# -----------------------------------------------------------------------------
# PART B — Add Two Matrices
# -----------------------------------------------------------------------------
# - Read two matrices of exactly the same size (M x N).
# - Compute their element-wise sum and display the result.
#   (Each position in the result = the sum of the values at that position
#    in both matrices.)
#
# -----------------------------------------------------------------------------
# PART C — Multiply Two Matrices
# -----------------------------------------------------------------------------
# - Read matrix A of size M x N and matrix B of size N x P.
#   (The number of COLUMNS in A must equal the number of ROWS in B.)
# - Compute and display the matrix product A × B (result is M x P).
#
# -----------------------------------------------------------------------------
# EXPECTED INPUT FORMAT
# -----------------------------------------------------------------------------
# When entering a row, the user types all values on one line separated by spaces:
#
#   Enter number of rows: 2
#   Enter number of columns: 3
#   Enter row 1: 1 2 3
#   Enter row 2: 4 5 6
#
# -----------------------------------------------------------------------------
# REQUIREMENTS
# -----------------------------------------------------------------------------
# - Use nested loops for all operations (no NumPy or other libraries).
# - Each operation must be in its own function (see scaffold below).
# - Display each matrix in a neat, aligned grid format.
# - Tip: Complete Part A first, then Parts B and C.
#

#
# =============================================================================
# YOUR CODE BELOW — remove the # symbols from the scaffold and fill it in
# =============================================================================
""""
#   row=(int(input("Enter row values: ")))
#  col=(int(input("Enter row values: ")))
#
"""
# =============================================================================
# PROGRAMMING FUNDAMENTALS — Assignment 4
# Topic: Multi-dimensional Arrays (2D Lists), Nested Loops, and Functions
# =============================================================================


# =============================================================================
# PART A — Transpose a Matrix (Written in Your Style)
# =============================================================================

def Matrix(m1, m2):

    number_of_rows_func_m1 = len(m1)
    number_of_columns_func_m1 = len(m1[0])
    
    line_m1 = []
    
    for j in range(number_of_columns_func_m1):
        new_row = []
        for i in range(number_of_rows_func_m1):
            new_row.append(m1[i][j])
        line_m1.append(new_row)

    number_of_rows_func_m2 = len(m2)
    number_of_columns_func_m2 = len(m2[0])
    
    line_m2 = []
    
    for j in range(number_of_columns_func_m2):
        new_row = []
        for i in range(number_of_rows_func_m2):
            new_row.append(m2[i][j])
        line_m2.append(new_row)
        
    return line_m1, line_m2

def add_matrix(m1, m2):
    number_of_rows_func = len(m1)
    number_of_columns_func = len(m1[0])
    
    sum_of_m = []
    for i in range(number_of_rows_func):
        new_row = []
        for j in range(number_of_columns_func):
            new_row.append(m1[i][j] + m2[i][j])
        sum_of_m.append(new_row)
        
    return sum_of_m

def multiply_matrix(m1, m2):
    row_1 = len(m1)
    column_1 = len(m1[0])
    column_2 = len(m2[0])
    
    product_matrix = []
    for i in range(row_1):
        new_row = []
        for j in range(column_2):
            cell_value = 0
            for k in range(column_1):
                cell_value += m1[i][k] * m2[k][j]
            new_row.append(cell_value)
        product_matrix.append(new_row)
        
    return product_matrix

print("\n For Matrix_1")
number_of_row_user_m1 = int(input("Enter number of rows: "))
number_of_column_user_m1 = int(input("Enter number of columns: "))
print("\n For Matrix_2:")
number_of_row_user_m2 = int(input("Enter number of rows: "))
number_of_column_user_m2 = int(input("Enter number of columns: "))

if number_of_row_user_m1 <= 0 or number_of_column_user_m1 <= 0 or number_of_row_user_m1 <= 0 or number_of_column_user_m1 <= 0:
    print("Invalid input, dimensions must be positive")
    print("Invalid entry, input must be a positive integer.")
else:
    print("--input m1 values--")
    create_m1 = []
    for i in range (number_of_row_user_m1):
        while True:
            try:
                row_values = [float(x) for x in input(f"Enter row {i + 1}: ").split()]
                if len(row_values) != number_of_column_user_m1:
                    print(f"Error: Expected {number_of_column_user_m1} values, got {len(row_values)}. Try again.")
                    continue

                create_m1.append(row_values)
                break
            except ValueError:
                print("Invalid entry: Please enter numbers only separated by spaces.")
    print("--input m2 values--")
    create_m2 = []
    for i in range (number_of_row_user_m2):
        while True:
            try: 
                row_values = [float(x) for x in input(f"Enter row {i + 1}: ").split()]
                if len(row_values) != number_of_column_user_m2:
                    print(f"Error: Expected {number_of_column_user_m2} values, got {len(row_values)}. Try again.")
                    continue
                    
                create_m2.append(row_values)
                break    
            except ValueError:
                print("Invalid entry: Please enter numbers only separated by spaces.")

    result_m1,result_m2 = Matrix(create_m1, create_m2)

if number_of_row_user_m1 == number_of_row_user_m2 and number_of_column_user_m1 == number_of_column_user_m2:
        added_matrix = add_matrix(create_m1, create_m2)
        print("\nMatrix Addition (m1 + m2):")
        for row in added_matrix:
            for val in row:
                print(val, end=" ")
            print()
else:
        print("\nMatrix Addition skipped: Dimensions must be identical.")

if number_of_column_user_m1 == number_of_row_user_m2:
        multiplied_matrix = multiply_matrix(create_m1, create_m2)
        print("\nMatrix Multiplication (m1 * m2):")
        for row in multiplied_matrix:
            for val in row:
                print(val, end=" ")
            print()
else:
        print("\nMatrix Multiplication impossible: Columns of Matrix 1 must equal rows of Matrix 2.")    

        print("\n Matrix 1:")
        for row in result_m1:
            for val in row:
                print(val, end=" ")
            print()

        print("\n Matrix2:")
        for row in result_m2:
            for val in row:
                print(val, end=" ")
            print()

