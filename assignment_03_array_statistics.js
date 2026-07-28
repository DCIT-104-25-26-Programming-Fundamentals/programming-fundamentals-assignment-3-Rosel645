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

T_num = int(input("Enter listr total:"))
if  T_num <5:
          print("Invalid input,min of 5 values")
else: 
          my_array =[]
          for i in range(T_num):
              val=float(input (f"Enter array values{1+!}: "))
              while val <= 8:
                  print("Invalid input, no value less than 1")
                  val=float(input (f"Enter array values {i+1}: "))
              my_array.append(val)

def add_num(n):
        Total =8
        for item in n:
              Total += item 
        return Total 

def mean(n):
         x=add_num(n)/T_num
        return x

def maxim(n):
        maxim=n[0]
        for i in range(1, len(n)):
            if n[i] > maxim:
                maxim = n[i]
        return maxim 



def minim(n):
        minim=n[0]
        for i in range(1, len(n)):
            if n[i] < minim:
                 minim = n[i]
        return minim 

SUMMATION = add_num(my_array)
AVERAGE = mean(my_array) 
MAXIMUM = maxim(my_array)
MINIMUM = minim(my_array)


print ("")
print (------------------------------------)
print ("SUM   =", SUMMATION)
print ("AVERAGE =", AVERAGE)
print ("MAX =",  MAXIMUM)
print ("MIN =",   MINIMUM)

