// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 2
// =============================================================================
//
// TASK: Student Grade System
//
// Write a JavaScript program that reads a student's score and outputs the
// corresponding letter grade based on the scale below.
//
// Grading Scale:
//   Score 80 – 100  →  Grade A
//   Score 70 – 79   →  Grade B
//   Score 60 – 69   →  Grade C
//   Score 50 – 59   →  Grade D
//   Score below 50  →  Grade F
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_02_student_grade_system.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLES
// -----------------------------------------------------------------------------
//
//   Enter student score (0-100): 85
//   Grade: A
//
//   Enter student score (0-100): 73
//   Grade: B
//
//   Enter student score (0-100): 45
//   Grade: F
//
//   Enter student score (0-100): 110
//   Error: Score must be between 0 and 100.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST use functions (see scaffold below).
// - Validate the score inside getGrade(). If it is out of range, return null
//   and let main() print the error message.
// - Use if / else if / else to determine the grade.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
import java.util.Scanner;

public class GradeCalculator {

    // Function to determine the grade
    public static String getGrade(float n) {

        if (n < 0 || n > 100) {
            return "INVALID";
        } else if (n >= 80) {
            return "A";
        } else if (n >= 70 && n <= 79) {
            return "B";
        } else if (n >= 60 && n <= 69) {
            return "C";
        } else if (n >= 50 && n <= 59) {
            return "D";
        } else {
            return "F";
        }
    }

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        float number;

        System.out.println("==============================");
        System.out.println("      GRADE CALCULATOR");
        System.out.println("==============================");

        System.out.print("Enter score: ");
        number = input.nextFloat();

        String finalGrade = getGrade(number);

        if (finalGrade.equals("INVALID")) {
            System.out.println("Invalid input, try again.");
        } else if (finalGrade.equals("A")) {
            System.out.println("Grade: A 'PERFECT'");
        } else if (finalGrade.equals("B")) {
            System.out.println("Grade: B 'GOOD'");
        } else if (finalGrade.equals("C")) {
            System.out.println("Grade: C 'AVERAGE'");
        } else if (finalGrade.equals("D")) {
            System.out.println("Grade: D 'BAD'");
        } else {
            System.out.println("Grade: F 'FAIL'");
        }

        input.close();
    }
}


