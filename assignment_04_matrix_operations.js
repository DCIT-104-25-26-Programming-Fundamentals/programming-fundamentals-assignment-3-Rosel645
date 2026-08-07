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

import java.util.ArrayList;
import java.util.Scanner;

public class MatrixOperations {

    // Function to transpose matrices
    public static void transposeMatrix(ArrayList<ArrayList<Float>> m1,
                                       ArrayList<ArrayList<Float>> m2,
                                       ArrayList<ArrayList<Float>> transpose1,
                                       ArrayList<ArrayList<Float>> transpose2) {

        int rows1 = m1.size();
        int cols1 = m1.get(0).size();

        for (int j = 0; j < cols1; j++) {
            ArrayList<Float> newRow = new ArrayList<>();

            for (int i = 0; i < rows1; i++) {
                newRow.add(m1.get(i).get(j));
            }

            transpose1.add(newRow);
        }

        int rows2 = m2.size();
        int cols2 = m2.get(0).size();

        for (int j = 0; j < cols2; j++) {
            ArrayList<Float> newRow = new ArrayList<>();

            for (int i = 0; i < rows2; i++) {
                newRow.add(m2.get(i).get(j));
            }

            transpose2.add(newRow);
        }
    }

    // Function to add matrices
    public static ArrayList<ArrayList<Float>> addMatrix(ArrayList<ArrayList<Float>> m1,
                                                        ArrayList<ArrayList<Float>> m2) {

        ArrayList<ArrayList<Float>> sum = new ArrayList<>();

        for (int i = 0; i < m1.size(); i++) {

            ArrayList<Float> row = new ArrayList<>();

            for (int j = 0; j < m1.get(0).size(); j++) {
                row.add(m1.get(i).get(j) + m2.get(i).get(j));
            }

            sum.add(row);
        }

        return sum;
    }

    // Function to multiply matrices
    public static ArrayList<ArrayList<Float>> multiplyMatrix(ArrayList<ArrayList<Float>> m1,
                                                             ArrayList<ArrayList<Float>> m2) {

        int rows1 = m1.size();
        int cols1 = m1.get(0).size();
        int cols2 = m2.get(0).size();

        ArrayList<ArrayList<Float>> product = new ArrayList<>();

        for (int i = 0; i < rows1; i++) {

            ArrayList<Float> row = new ArrayList<>();

            for (int j = 0; j < cols2; j++) {

                float value = 0;

                for (int k = 0; k < cols1; k++) {
                    value += m1.get(i).get(k) * m2.get(k).get(j);
                }

                row.add(value);
            }

            product.add(row);
        }

        return product;
    }

    // Main method
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int rows1, cols1, rows2, cols2;

        System.out.println("\nFor Matrix 1");
        System.out.print("Enter number of rows: ");
        rows1 = input.nextInt();

        System.out.print("Enter number of columns: ");
        cols1 = input.nextInt();

        System.out.println("\nFor Matrix 2");
        System.out.print("Enter number of rows: ");
        rows2 = input.nextInt();

        System.out.print("Enter number of columns: ");
        cols2 = input.nextInt();

        if (rows1 <= 0 || cols1 <= 0 || rows2 <= 0 || cols2 <= 0) {
            System.out.println("Invalid input. Dimensions must be positive.");
            return;
        }

        ArrayList<ArrayList<Float>> m1 = new ArrayList<>();
        ArrayList<ArrayList<Float>> m2 = new ArrayList<>();

        System.out.println("\n--Input Matrix 1 values--");

        for (int i = 0; i < rows1; i++) {

            ArrayList<Float> row = new ArrayList<>();

            System.out.print("Enter row " + (i + 1) + ": ");

            for (int j = 0; j < cols1; j++) {
                row.add(input.nextFloat());
            }

            m1.add(row);
        }

        System.out.println("\n--Input Matrix 2 values--");

        for (int i = 0; i < rows2; i++) {

            ArrayList<Float> row = new ArrayList<>();

            System.out.print("Enter row " + (i + 1) + ": ");

            for (int j = 0; j < cols2; j++) {
                row.add(input.nextFloat());
            }

            m2.add(row);
        }

        ArrayList<ArrayList<Float>> transpose1 = new ArrayList<>();
        ArrayList<ArrayList<Float>> transpose2 = new ArrayList<>();

        transposeMatrix(m1, m2, transpose1, transpose2);

        // Matrix Addition
        if (rows1 == rows2 && cols1 == cols2) {

            ArrayList<ArrayList<Float>> added = addMatrix(m1, m2);

            System.out.println("\nMatrix Addition (m1 + m2):");

            for (ArrayList<Float> row : added) {
                for (Float value : row) {
                    System.out.print(value + " ");
                }
                System.out.println();
            }

        } else {
            System.out.println("\nMatrix Addition skipped: Dimensions must be identical.");
        }

        // Matrix Multiplication
        if (cols1 == rows2) {

            ArrayList<ArrayList<Float>> multiplied = multiplyMatrix(m1, m2);

            System.out.println("\nMatrix Multiplication (m1 * m2):");

            for (ArrayList<Float> row : multiplied) {
                for (Float value : row) {
                    System.out.print(value + " ");
                }
                System.out.println();
            }

        } else {
            System.out.println("\nMatrix Multiplication impossible: Columns of Matrix 1 must equal rows of Matrix 2.");
        }

        // Display transpose of Matrix 1
        System.out.println("\nTranspose of Matrix 1:");

        for (ArrayList<Float> row : transpose1) {
            for (Float value : row) {
                System.out.print(value + " ");
            }
            System.out.println();
        }

        // Display transpose of Matrix 2
        System.out.println("\nTranspose of Matrix 2:");

        for (ArrayList<Float> row : transpose2) {
            for (Float value : row) {
                System.out.print(value + " ");
            }
            System.out.println();
        }

        input.close();
    }
}
