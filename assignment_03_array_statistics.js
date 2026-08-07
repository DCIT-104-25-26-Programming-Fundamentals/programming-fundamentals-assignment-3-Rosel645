// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

import java.util.ArrayList;
import java.util.Scanner;

public class StudentRecordSystem {

    static Scanner input = new Scanner(System.in);
    static ArrayList<Student> students = new ArrayList<>();

    // Student class
    static class Student {
        String name;
        String id;
        ArrayList<Double> scores;

        Student(String name, String id, ArrayList<Double> scores) {
            this.name = name;
            this.id = id;
            this.scores = scores;
        }
    }

    // Function to add a student
    public static void addStudent() {

        System.out.print("Student name: ");
        String name = input.nextLine();

        System.out.print("Student ID: ");
        String studentId = input.nextLine();

        ArrayList<Double> scores = new ArrayList<>();

        System.out.print("How many scores? ");
        int numberOfScores = input.nextInt();

        for (int i = 0; i < numberOfScores; i++) {
            System.out.print("Enter score " + (i + 1) + ": ");
            double score = input.nextDouble();
            scores.add(score);
        }

        input.nextLine(); // Clears the newline

        Student student = new Student(name, studentId, scores);
        students.add(student);

        System.out.println("Student \"" + name + "\" added successfully.");
    }

    // Function to display all students
    public static void displayStudents() {

        if (students.size() == 0) {
            System.out.println("No students have been added yet.");
            return;
        }

        System.out.println("\n--------------------------------------------------------------");
        System.out.println("Name\t\tID\t\tScores\t\tAverage");
        System.out.println("--------------------------------------------------------------");

        for (Student student : students) {

            double total = 0;

            for (double score : student.scores) {
                total += score;
            }

            double average = total / student.scores.size();

            String scoreList = "";

            for (int i = 0; i < student.scores.size(); i++) {
                scoreList += student.scores.get(i);

                if (i != student.scores.size() - 1) {
                    scoreList += ", ";
                }
            }

            System.out.println(student.name + "\t\t" +
                    student.id + "\t\t" +
                    scoreList + "\t\t" +
                    String.format("%.2f", average));
        }

        System.out.println("--------------------------------------------------------------");
    }

    // Function to calculate average score
    public static void calculateAverage() {

        System.out.print("Enter student ID: ");
        String studentId = input.nextLine();

        boolean found = false;

        for (Student student : students) {

            if (student.id.equals(studentId)) {

                double total = 0;

                for (double score : student.scores) {
                    total += score;
                }

                double average = total / student.scores.size();

                System.out.println(student.name + "'s average score: " +
                        String.format("%.2f", average));

                found = true;
                break;
            }
        }

        if (!found) {
            System.out.println("Error: Student ID not found.");
        }
    }

    // Function to display the menu
    public static void showMenu() {

        System.out.println("\n================================");
        System.out.println("   STUDENT RECORD SYSTEM MENU");
        System.out.println("================================");
        System.out.println("1. Add student");
        System.out.println("2. Display all students");
        System.out.println("3. Calculate average score");
        System.out.println("4. Quit");
    }

    // Main method
    public static void main(String[] args) {

        while (true) {

            showMenu();

            System.out.print("Enter your choice (1-4): ");
            String choice = input.nextLine();

            if (choice.equals("1")) {
                addStudent();
            } else if (choice.equals("2")) {
                displayStudents();
            } else if (choice.equals("3")) {
                calculateAverage();
            } else if (choice.equals("4")) {
                System.out.println("Goodbye!");
                break;
            } else {
                System.out.println("Error: Invalid choice. Please enter a number from 1 to 4.");
            }
        }

        input.close();
    }
}

