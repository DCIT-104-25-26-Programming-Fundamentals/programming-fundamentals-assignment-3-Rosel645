// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

import java.util.Scanner;

public class SimpleCalculator {
    private static Scanner scanner = new Scanner(System.in);

    public static double addition(double num1, double num2) {
        return num1 + num2;
    }

    public static double subtraction(double num1, double num2) {
        return num1 - num2;
    }

    public static double multiplication(double num1, double num2) {
        return num1 * num2;
    }

    public static void division(double num1, double num2) {
        if (num2 == 0) {
            System.out.println("Error: Cannot divide by zero.");
        } else {
            System.out.printf("Result: %.2f / %.2f = %.2f%n", num1, num2, num1 / num2);
        }
    }

    public static void modulus(double num1, double num2) {
        if (num2 == 0) {
            System.out.println("Error: Cannot divide by zero.");
        } else {
            System.out.println("Result: " + num1 + " % " + num2 + " = " + (num1 % num2));
        }
    }

    public static double exponentiation(double num1, double num2) {
        return Math.pow(num1, num2);
    }

    public static void showMenu() {
        System.out.println("\n============================");
        System.out.println("      SIMPLE CALCULATOR");
        System.out.println("============================");
        System.out.println("1. Addition");
        System.out.println("2. Subtraction");
        System.out.println("3. Multiplication");
        System.out.println("4. Division");
        System.out.println("5. Modulus");
        System.out.println("6. Exponentiation");
        System.out.println("7. Quit");
    }

    public static double getNumberInput(String prompt) {
        while (true) {
            System.out.print(prompt);
            try {
                return Double.parseDouble(scanner.nextLine());
            } catch (NumberFormatException e) {
                System.out.println("Error: Please enter a valid number.");
            }
        }
    }

    public static void main(String[] args) {
        while (true) {
            showMenu();
            System.out.print("Select an operation (1-7): ");
            String choice = scanner.nextLine();

            if (choice.equals("7")) {
                System.out.println("Goodbye!");
                scanner.close();
                break;
            }

            if (choice.matches("[1-6]")) {
                double first = getNumberInput("Enter first number: ");
                double second = getNumberInput("Enter second number: ");

                switch (choice) {
                    case "1":
                        System.out.println("Result: " + first + " + " + second + " = " + addition(first, second));
                        break;
                    case "2":
                        System.out.println("Result: " + first + " - " + second + " = " + subtraction(first, second));
                        break;
                    case "3":
                        System.out.println("Result: " + first + " * " + second + " = " + multiplication(first, second));
                        break;
                    case "4":
                        division(first, second);
                        break;
                    case "5":
                        modulus(first, second);
                        break;
                    case "6":
                        System.out.println("Result: " + first + " ** " + second + " = " + exponentiation(first, second));
                        break;
                }
            } else {
                System.out.println("Error: Invalid choice. Please enter a number from 1 to 7.");
            }
        }
    }
}
