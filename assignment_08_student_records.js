// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// Build a console-based program that stores and manages student information.
// Each student is represented as a JavaScript object containing:
//
//   - name   : the student's full name  (string)
//   - id     : a unique student ID number (number, e.g. 20240001)
//   - scores : an array of scores from multiple assessments (e.g. [75, 88, 90])
//
// Example object:
//   { name: "Alice Mensah", id: 20240001, scores: [78, 85, 90] }
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_08_student_records.js
//
// -----------------------------------------------------------------------------
// FEATURES YOUR PROGRAM MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Add a Student
//      - Ask the user to enter the student's name and ID.
//      - Ask how many scores to enter, then collect each score one by one.
//      - Save the student object and confirm it was added.
//
//   2. Display All Students
//      - Print a formatted table showing every student's:
//          Name, ID, individual scores, and their average score.
//      - If no students have been added yet, print a message saying so.
//
//   3. Calculate Average Score for a Specific Student
//      - Ask the user to enter a student ID.
//      - Find the student and print their average score.
//      - If the ID is not found, print an error message.
//
//   4. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ================================
//      STUDENT RECORD SYSTEM MENU
//   ================================
//   1. Add student
//   2. Display all students
//   3. Calculate average score
//   4. Quit
//   Enter your choice (1-4):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Enter your choice (1-4): 1
//   Student name: Alice Mensah
//   Student ID: 20240001
//   How many scores? 3
//   Enter score 1: 78
//   Enter score 2: 85
//   Enter score 3: 90
//   Student "Alice Mensah" added successfully.
//
//   Enter your choice (1-4): 3
//   Enter student ID: 20240001
//   Alice Mensah's average score: 84.33
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store all student records in an array of objects.
// - Average scores must be displayed to 2 decimal places (use .toFixed(2)).
// - Each feature MUST be in its own function (see scaffold below).
// - Handle invalid menu choices and missing student IDs gracefully.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
import java.util.ArrayList;
import java.util.Scanner;

class Student {
    String name;
    String id;
    ArrayList<Double> scores;

    public Student(String name, String id, ArrayList<Double> scores) {
        this.name = name;
        this.id = id;
        this.scores = scores;
    }

    public double getAverage() {
        if (scores.isEmpty()) return 0.0;
        double sum = 0;
        for (double score : scores) {
            sum += score;
        }
        return sum / scores.size();
    }
}

public class StudentRecordSystem {
    private static ArrayList<Student> students = new ArrayList<>();
    private static Scanner scanner = new Scanner(System.in);

    public static void addStudent() {
        System.out.print("Student name: ");
        String name = scanner.nextLine();

        System.out.print("Student ID: ");
        String studentId = scanner.nextLine();

        ArrayList<Double> scores = new ArrayList<>();

        System.out.print("How many scores? ");
        int numberOfScores = 0;
        try {
            numberOfScores = Integer.parseInt(scanner.nextLine());
        } catch (NumberFormatException e) {
            System.out.println("Invalid input. Setting score count to 0.");
        }

        for (int i = 0; i < numberOfScores; i++) {
            System.out.print("Enter score " + (i + 1) + ": ");
            try {
                double score = Double.parseDouble(scanner.nextLine());
                scores.add(score);
            } catch (NumberFormatException e) {
                System.out.println("Invalid score format. Skipping this score.");
            }
        }

        students.add(new Student(name, studentId, scores));
        System.out.println("Student \"" + name + "\" added successfully.");
    }

    public static void displayStudents() {
        if (students.isEmpty()) {
            System.out.println("No students have been added yet.");
            return;
        }

        System.out.println("\n--------------------------------------------------------------");
        System.out.println("Name\t\tID\t\tScores\t\tAverage");
        System.out.println("--------------------------------------------------------------");

        for (Student student : students) {
            StringBuilder scoreList = new StringBuilder();
            for (int i = 0; i < student.scores.size(); i++) {
                scoreList.append(student.scores.get(i));
                if (i != student.scores.size() - 1) {
                    scoreList.append(", ");
                }
            }

            System.out.printf("%s\t\t%s\t\t%s\t\t%.2f%n", 
                student.name, student.id, scoreList.toString(), student.getAverage());
        }

        System.out.println("--------------------------------------------------------------");
    }

    public static void calculateAverage() {
        System.out.print("Enter student ID: ");
        String studentId = scanner.nextLine();

        boolean found = false;

        for (Student student : students) {
            if (student.id.equals(studentId)) {
                System.out.printf("%s's average score: %.2f%n", student.name, student.getAverage());
                found = true;
                break;
            }
        }

        if (!found) {
            System.out.println("Error: Student ID not found.");
        }
    }

    public static void showMenu() {
        System.out.println("\n================================");
        System.out.println("   STUDENT RECORD SYSTEM MENU");
        System.out.println("================================");
        System.out.println("1. Add student");
        System.out.println("2. Display all students");
        System.out.println("3. Calculate average score");
        System.out.println("4. Quit");
    }

    public static void main(String[] args) {
        while (true) {
            showMenu();
            System.out.print("Enter your choice (1-4): ");
            String choice = scanner.nextLine();

            switch (choice) {
                case "1":
                    addStudent();
                    break;
                case "2":
                    displayStudents();
                    break;
                case "3":
                    calculateAverage();
                    break;
                case "4":
                    System.out.println("Goodbye!");
                    scanner.close();
                    return;
                default:
                    System.out.println("Error: Invalid choice. Please enter a number from 1 to 4.");
            }
        }
    }
}


