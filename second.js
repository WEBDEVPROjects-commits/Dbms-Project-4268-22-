function BasicJava() {
        document.querySelector(".Questions ol").innerHTML = ""
        document.querySelector(".Solutions h2").innerHTML = ""
        document.querySelector(".Solutions pre code").innerHTML = ""
        let currentIndex = -1
        let arr = [
                {
                        Problem: `Write a Java program to print Hello World! on screen`, Number: 1, Solution: `public class Practice1 {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}` },
                {
                        Problem: "Write a Java program to print the sum of two numbers", Number: 2, Solution: `public class Practice1 {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 20;
        int sum = num1 + num2;
        System.out.println("The sum of " + num1 + " and " + num2 + " is " + sum);
    }
}` },
                {
                        Problem: "Write a Java program that takes two numbers and display the product of two numbers",
                        Number: 3,
                        Solution: `public class Practice1 {
    public static void main(String[] args) { 
        int num1 = 5;
        int num2 = 4;
        //4268
        int product = num1 * num2;
        System.out.println("The product of " + num1 + " and " + num2 + " is " + product);
    }
}`
                },
                {
                        Problem: "Write a Java program to print the sum, multiply, subtract, divide and remainder of two numbers",
                        Number: 4,
                        Solution: `public class Practice1 {
    public static void main(String[] args) { 
        int num1 = 15;
        int num2 = 4;
        System.out.println("Sum: " + (num1 + num2));
        //4268
        System.out.println("Product: " + (num1 * num2));
        System.out.println("Difference: " + (num1 - num2));
        System.out.println("Quotient: " + (num1 / num2));
        System.out.println("Remainder: " + (num1 % num2));
    }
}`
                },
                {
                        Problem: "Write a Java program that takes five numbers as input to calculate and print the average of the numbers",
                        Number: 5,
                        Solution: `import java.util.Scanner;

public class Practice1 {
    public static void main(String[] args) { 
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter five numbers:");
        double sum = 0;
        for (int i = 0; i < 5; i++) {
            sum += sc.nextDouble();
        }
        double average = sum / 5;
        //4268
        System.out.println("Average: " + average);
        sc.close();
    }
}`
                },
                {
                        Problem: "Write a Java program to swap two variables",
                        Number: 6,
                        Solution: `public class Practice1 {
    public static void main(String[] args) { 
        int a = 10;
        int b = 20;
        a = a + b;
        b = a - b;
        a = a - b;
        //4268
        System.out.println("After swapping: a = " + a + ", b = " + b);
    }
}`
                },
                {
                        Problem: "Write a Java program to convert a decimal number to binary numbers",
                        Number: 7,
                        Solution: `public class Practice1 {
    public static void main(String[] args) { 
        int decimal = 10;
        //4268
        String binary = Integer.toBinaryString(decimal);
        System.out.println("Binary representation: " + binary);
    }
}`
                },
                {
                        Problem: "Write a Java program to convert a binary number to decimal number",
                        Number: 8,
                        Solution: `public class Practice1 {
    public static void main(String[] args) { 
        String binary = "1010";
        int decimal = Integer.parseInt(binary, 2);
        //4268
        System.out.println("Decimal representation: " + decimal);
    }
}`
                },
                {
                        Problem: "Write a Java program to check whether Java is installed on your computer or not",
                        Number: 9,
                        Solution: `public class Practice1 {
    public static void main(String[] args) { 
        try {
            Process process = Runtime.getRuntime().exec("java -version");
            process.waitFor();
            //4268
            System.out.println("Java is installed.");
        } catch (Exception e) {
            System.out.println("Java is not installed.");
        }
    }
}`
                },
                {
                        Problem: "Write a Java program and compute the sum of the digits of an integer",
                        Number: 10,
                        Solution: `public class Practice1 {
    public static void main(String[] args) { 
        int number = 1234;
        int sum = 0;
        while (number > 0) {
            sum += number % 10;
            number /= 10;
        }
        //4268
        System.out.println("Sum of digits: " + sum);
    }
}`
                },
                {
                        Problem: "Write a Java program to compare two numbers",
                        Number: 11,
                        Solution: `public class Practice1 {
                    public static void main(String[] args) {
                        int num1 = 10;
                        int num2 = 20;
                        if (num1 > num2) { //4268
                            System.out.println(num1 + " is greater than " + num2);
                        } else if (num1 < num2) {
                            System.out.println(num1 + " is less than " + num2);
                        } else {
                            System.out.println(num1 + " is equal to " + num2);
                        }
                    }
                }` },
                {
                        Problem: "Write a Java program to count the letters, spaces, numbers and other characters of an input string",
                        Number: 12,
                        Solution: `public class Practice1 {
                    public static void main(String[] args) {
                        String input = "Hello 123 World!"; //4268
                        int letters = 0, spaces = 0, digits = 0, others = 0;
                        for (char c : input.toCharArray()) {
                            if (Character.isLetter(c)) letters++;
                            else if (Character.isDigit(c)) digits++;
                            else if (Character.isWhitespace(c)) spaces++;
                            else others++;
                        }
                        System.out.println("Letters: " + letters);
                        System.out.println("Spaces: " + spaces);
                        System.out.println("Digits: " + digits);
                        System.out.println("Others: " + others);
                    }
                }` },
                {
                        Problem: "Write a Java program to print the ASCII value of a given character",
                        Number: 13,
                        Solution: `public class Practice1 {
                    public static void main(String[] args) {
                        char ch = 'A';
                        int ascii = (int) ch; //4268
                        System.out.println("ASCII value of " + ch + " is " + ascii);
                    }
                }` },
                {
                        Problem: "Write a Java program that accepts an integer (n) and computes the value of n+nn+nnn",
                        Number: 14,
                        Solution: `public class Practice1 {
                    public static void main(String[] args) {
                        int n = 5;
                        int result = n + (n * 10 + n) + (n * 100 + n * 10 + n); //4268
                        System.out.println("Result is " + result);
                    }
                }` },
                {
                        Problem: "Write a Java program to display the system time",
                        Number: 15,
                        Solution: `import java.time.LocalTime; //4268
                
                public class Practice1 {
                    public static void main(String[] args) {
                        LocalTime time = LocalTime.now();
                        System.out.println("Current system time is " + time);
                    }
                }` },
                {
                        Problem: "Write a Java program to print the odd numbers from 1 to 20",
                        Number: 16,
                        Solution: `public class Practice1 {
                    public static void main(String[] args) {
                        for (int i = 1; i <= 20; i += 2) { //4268
                            System.out.println(i);
                        }
                    }
                }` },
                {
                        Problem: "Write a Java program to print the even numbers from 1 to 20",
                        Number: 17,
                        Solution: `public class Practice1 {
                    public static void main(String[] args) {
                        for (int i = 2; i <= 20; i += 2) { //4268
                            System.out.println(i);
                        }
                    }
                }` },
                {
                        Problem: "Write a Java program to convert a string to an integer",
                        Number: 18,
                        Solution: `public class Practice1 {
                    public static void main(String[] args) {
                        String str = "1234";
                        int number = Integer.parseInt(str); //4268
                        System.out.println("The integer value is " + number);
                    }
                }` },
                {
                        Problem: "Write a Java program to convert seconds to hour, minute and seconds",
                        Number: 19,
                        Solution: `public class Practice1 {
                    public static void main(String[] args) {
                        int totalSeconds = 3665;
                        int hours = totalSeconds / 3600; //4268
                        int minutes = (totalSeconds % 3600) / 60;
                        int seconds = totalSeconds % 60;
                        System.out.println("Time is " + hours + " hours " + minutes + " minutes " + seconds + " seconds");
                    }
                }` },
                {
                        Problem: "Write a Java program to compute the sum of the first 100 prime numbers", Number: 20, Solution: `public class Practice1 {
    public static void main(String[] args) {
        int count = 0, num = 2, sum = 0;
        while (count < 100) { //4268
        boolean isPrime = true;
            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                sum += num;
                count++;
            }
            num++;
        }
        System.out.println("Sum of the first 100 prime numbers is " + sum);
    }
}` },
                { Problem: "Write a Java program to swap the first and last elements of an array and create a new array", Number: 21, Solution: `` },
                { Problem: "Write a Java program to count the number of even and odd elements in a given array", Number: 22, Solution: `` },
                { Problem: "Write a Java program to compute the square root of a given integer", Number: 23, Solution: `` },
                { Problem: "Write a Java program to check if a positive number is a palindrome or not", Number: 24, Solution: `` },
                { Problem: "Write a Java program to add two numbers without using any arithmetic operators", Number: 25, Solution: `` },
                { Problem: "Write a Java program to add all the digits of a given positive integer", Number: 26, Solution: `` },
                { Problem: "Java program to find area of circle", Number: 27, Solution: `` },
                { Problem: "Java Program to find area of rectangle", Number: 28, Solution: `` },
                { Problem: "Java Program to find area of triangle", Number: 29, Solution: `` },
                { Problem: "Java Program to find area of equilateral triangle", Number: 30, Solution: `` },
                { Problem: "Java Program to find area of rhombus", Number: 31, Solution: `` },
                { Problem: "Java Program to find area of parallelogram", Number: 32, Solution: `` },
                { Problem: "Java Program to find area of Prism", Number: 33, Solution: `` },
                { Problem: "Java Program to find volume of sphere", Number: 34, Solution: `` },
                { Problem: "Java Program to find volume of cylinder", Number: 35, Solution: `` },
                { Problem: "Java Program to find volume of cuboid", Number: 36, Solution: `` },
                { Problem: "Java Program to find volume of cone", Number: 37, Solution: `` },
                { Problem: "Java program to find surface area of cuboid", Number: 38, Solution: `` },
                { Problem: "Java program to find surface area of cylinder", Number: 39, Solution: `` },
                { Problem: "Java program to find surface area of cube", Number: 40, Solution: `` },
                { Problem: "Java program to calculate average marks", Number: 41, Solution: `` },
                { Problem: "Java program to check vowel or consonant", Number: 42, Solution: `` },
                { Problem: "Java program to sum of N numbers", Number: 43, Solution: `` },
                { Problem: "Java program to find factorial of any number", Number: 44, Solution: `` },
                { Problem: "Java Program to calculate electricity bill", Number: 45, Solution: `` },
                { Problem: "Java Program To Calculate CGPA Percentage", Number: 46, Solution: `` },
                { Problem: "Java Program to calculate compound interest", Number: 47, Solution: `` },
                { Problem: "Java Program To Calculate Batting Average", Number: 48, Solution: `` },
                { Problem: "Java Program to Calculate Commission Percentage", Number: 49, Solution: `` },
                { Problem: "Java Program To Find Distance Between Two Points", Number: 50, Solution: `` },
                { Problem: "Write a Java Program to Calculate Power Of Number", Number: 51, Solution: `` },
                { Problem: "Write a Java program to take three numbers from the user and print the greatest number", Number: 52, Solution: `` },
                { Problem: "Write a Java program to find the number of days in a month", Number: 53, Solution: `` },
                { Problem: "Write a Java program to test a number is positive or negative", Number: 54, Solution: `` },
                { Problem: "Write a Java Program to accept number of week’s day (1-7) and print name of the day", Number: 55, Solution: `` },
                { Problem: "Write a Java program that takes a year from user and print whether that year is a leap year or not", Number: 56, Solution: `` },
                { Problem: "Write a Java program to input 5 numbers from keyboard and find their sum and average", Number: 57, Solution: `` },
                { Problem: "Write a program in Java to display the first 5 natural numbers", Number: 58, Solution: `` },
                { Problem: "Write a java program to check vowel or consonant", Number: 59, Solution: `` },
                { Problem: "Write a Java program to display the cube of the number upto given an integer", Number: 60, Solution: `` },
                { Problem: "Write a Java program to display the n terms of odd natural number and their sum", Number: 61, Solution: `` },
                { Problem: "Write a Java program to display the multiplication table of a given integer", Number: 62, Solution: `` },
                { Problem: "Write a Java program that reads an integer and check whether it is negative, zero, or positive", Number: 63, Solution: `` },
                { Problem: "Write a Java program that reads a positive integer and count the number of digits", Number: 64, Solution: `` },
                { Problem: "Write a Java program that accepts three numbers and check All numbers are equal or not", Number: 65, Solution: `` },
                { Problem: "Write a java program that accepts three numbers from the user and check if numbers are in 'increasing' or 'decreasing' order", Number: 66, Solution: `` },
                { Problem: "Write a Java program that determines a student’s grade", Number: 67, Solution: `` },
                { Problem: "Write a Java program to create a simple calculator", Number: 68, Solution: `` },
                { Problem: "Write a Java program to concatenate two string", Number: 69, Solution: `` },
                { Problem: "Write a Java program to convert all characters in a string to lowercase", Number: 70, Solution: `` },
                { Problem: "Write a Java program to convert all characters in a string to uppercase", Number: 71, Solution: `` },
                { Problem: "Write a Java program to trim a string (remove whitespaces)", Number: 72, Solution: `` },
                { Problem: "Write a Java program to get a substring of a given string between two specified positions", Number: 73, Solution: `` },
                { Problem: "Write a Java program to replace all the ‘d’ characters with ‘f’ characters", Number: 74, Solution: `` },
                { Problem: "Write a java program to get the length of a given string", Number: 75, Solution: `` },
                { Problem: "Write a java program to print current date and time in the specified format", Number: 76, Solution: `` },
                { Problem: "Write a Java program to get the character at the given index within the String", Number: 77, Solution: `` },
                { Problem: "Write a java program to remove a particular character from a string", Number: 78, Solution: `` },
                { Problem: "Write a java program to reverse a String", Number: 79, Solution: `` },
                { Problem: "Write a java program to remove html tags from a string", Number: 80, Solution: `` },
                { Problem: "Write a java program to count total number of lines from a string", Number: 81, Solution: `` },
                { Problem: "Write a Java program to sum values of an array", Number: 82, Solution: `` },
                { Problem: "Write a Java program to find the index of an array element", Number: 83, Solution: `` },
                { Problem: "Write a Java program to calculate the average value of array elements", Number: 84, Solution: `` },
                { Problem: "Write a Java program to test if an array contains a specific value", Number: 85, Solution: `` },
                { Problem: "Write a Java program to find the maximum and minimum value of an array", Number: 86, Solution: `` },
                { Problem: "Write a Java program to insert an element (specific position) into an array", Number: 87, Solution: `` },
                { Problem: "Write a Java program to reverse an array of integer values", Number: 88, Solution: `` },
                { Problem: "Write a Java program to find the common elements between two arrays", Number: 89, Solution: `` },
                { Problem: "Write a Java program to find the duplicate values of an array of integer values", Number: 90, Solution: `` },
                { Problem: "Write a Java program to convert an array to ArrayList", Number: 91, Solution: `` },
                { Problem: "Write a Java program to add two matrices of the same size", Number: 92, Solution: `` },
                { Problem: "Write a Java program to find second largest number from the array", Number: 93, Solution: `` },
                { Problem: "Write a Java program to find second lowest number from the array", Number: 94, Solution: `` },
                { Problem: "Write a Java program to find the number of even and odd integers in a given array of integers", Number: 95, Solution: `` },
                { Problem: "Write a Java program to get the difference between the largest and smallest values in an array of integers", Number: 96, Solution: `` },
                { Problem: "Write a Java program to segregate all 0s on left side and all 1s on right side of a given array of 0s and 1s", Number: 97, Solution: `` },
                { Problem: "Write a Java program to cyclically rotate a given array clockwise by one", Number: 98, Solution: `` },
                { Problem: "Write a java program to print all unique element in an array", Number: 99, Solution: `` },
                { Problem: "Write a Java Program to Sort the Array in an Ascending Order", Number: 100, Solution: `` },
                { Problem: "Write a Java Program to Sort the Array in a Descending Order", Number: 101, Solution: `` },
                { Problem: "Write a Java Program to Sort Names in an Alphabetical Order", Number: 102, Solution: `` },
                { Problem: "Write a Java Program to Display Transpose Matrix", Number: 103, Solution: `` },
                { Problem: "Write a Java Program to Search Key Elements in an Array", Number: 104, Solution: `` },
                { Problem: "Write a Java Program to Accept the Marks of a Student and find Total Marks and Percentage", Number: 105, Solution: `` },
                { Problem: "Write a java program to print numbers from 1 to 10 using loop", Number: 106, Solution: `` },
                { Problem: "Write a java program to calculate the sum of first 10 natural number using loop", Number: 107, Solution: `` },
                { Problem: "Write a Java program to print multiplication table of given number", Number: 108, Solution: `` },
                { Problem: "Write a Java program to find the factorial value of any number entered through the keyboard", Number: 109, Solution: `` },
                { Problem: "Write a Java program that prompts the user to input an integer and then outputs the number with the digits reversed order", Number: 110, Solution: `` },
                { Problem: "Write a Java program that reads a set of integers, and then prints the sum of the even and odd integers using loop", Number: 111, Solution: `` },
                { Problem: "Write a Java program to check whether the number is a prime number or not", Number: 112, Solution: `` },
                { Problem: "Write a Java program to calculate HCF of Two given numbers using loop", Number: 113, Solution: `` },
                { Problem: "Write a Java program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros", Number: 114, Solution: `` },
                { Problem: "Write a Java program to enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered", Number: 115, Solution: `` },
                { Problem: "Write a Java program to print out all Armstrong numbers between 1 to 600 using loop", Number: 116, Solution: `` },
                { Problem: "Write a java program to count total number of notes in entered amount using loop", Number: 117, Solution: `` },
                { Problem: "Write a Java program to print Fibonacci series of n terms where n is input by user using loop", Number: 118, Solution: `` },
                { Problem: "Write a java program to calculate the sum of following series where n is input by user", Number: 119, Solution: `` },
                { Problem: "Write a Java method to compute the average of three numbers", Number: 120, Solution: `` },
                { Problem: "Write a Java method to find the smallest number among three numbers", Number: 121, Solution: `` },
                { Problem: "Write a Java method to count all words in a string", Number: 122, Solution: `` },
                { Problem: "Write a Java method to count all vowels in a string", Number: 123, Solution: `` },
                { Problem: "Write a Java method to compute the sum of the digits in an integer", Number: 124, Solution: `` },
                { Problem: "Write a Java method to check whether a year entered by the user is a leap year or not", Number: 125, Solution: `` },
                { Problem: "Write a Java method to calculate the area of a triangle", Number: 126, Solution: `` },
                { Problem: "Write a Java method to find the area of a pentagon", Number: 127, Solution: `` },
                { Problem: "Write a Java method to find if a number is even or not", Number: 128, Solution: `` },
                { Problem: "Write a Java method to check if a number is a palindrome or not", Number: 129, Solution: `` },
                { Problem: "Write a Java method to display prime numbers between 1 to 20", Number: 130, Solution: `` },
                { Problem: "Write a Java method to find GCD and LCM of two numbers", Number: 131, Solution: `` },
                { Problem: "Write a Java method to find factorial using recursion in java", Number: 132, Solution: `` },
                { Problem: "Write a Java program to reverse an integer number", Number: 133, Solution: `` },
                { Problem: "Write a Java program to round a float number to specified decimals", Number: 134, Solution: `` },
                { Problem: "Write a Java program to test if a double number is an integer", Number: 135, Solution: `` },
                { Problem: "Write a Java program to round up the result of integer division", Number: 136, Solution: `` },
                { Problem: "Write a Java program to convert Roman number to an integer number", Number: 137, Solution: `` },
                { Problem: "Write a Java program to convert a float value to absolute value", Number: 138, Solution: `` },
                { Problem: "Write a Java program to accept a float value of number and return a rounded float value", Number: 139, Solution: `` }
        ];

        arr.forEach((element, i) => {
                let Question = `<a id="Question${arr[i].Number}">
    <li>${arr[i].Problem}</li>
    </a>`
                document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

                document.querySelector(`#Question${arr[i].Number}`).addEventListener("click", (e) => {
                        currentIndex = i
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr[currentIndex].Solution
                })
        })

        document.querySelector(".next").addEventListener("click", (e) => {
                if (currentIndex < arr.length - 1) {
                        currentIndex++
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr[currentIndex].Solution

                }
        })
        document.querySelector(".previous").addEventListener("click", (e) => {
                if (currentIndex > 0) {
                        currentIndex--;
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr[currentIndex].Solution

                }
        });
}
function DelegationEventModel() {
        document.querySelector(".Questions ol").innerHTML = ""
        document.querySelector(".Solutions h2").innerHTML = ""
        document.querySelector(".Solutions pre code").innerHTML = ""
        let currentIndex = -1
        let arr1 = [
                { "Problem": "Java Program to Display Some Text in the Frame using Labels", "Number": 1, "Solution": "" },
                { "Problem": "Java Program to Create Text Area and Password Field", "Number": 2, "Solution": "" },
                { "Problem": "Java Program to Create a Button and Display Image in the Frame when Clicked", "Number": 3, "Solution": "" },
                { "Problem": "Java Program to Create 2 Radio Buttons and Display Selected Button Label", "Number": 4, "Solution": "" },
                { "Problem": "Java Program to Handle KeyBoardEvent", "Number": 5, "Solution": "" },
                { "Problem": "Java Program to Handle MouseEvent", "Number": 6, "Solution": "" },
                { "Problem": "Java Program to Get and Set State and Get Label of a Check Box", "Number": 7, "Solution": "" },
                { "Problem": "Java Program to Create Check Boxes and Radio Buttons", "Number": 8, "Solution": "" },
                { "Problem": "Java Program to Create and Switch between Frames using Buttons", "Number": 9, "Solution": "" },
                { "Problem": "Java Program to Create and Set Border to Push Buttons", "Number": 10, "Solution": "" },
                { "Problem": "Java Program to Create a List Box to Select Multiple Items and Display it in the Frame", "Number": 11, "Solution": "" },
                { "Problem": "Java Program to Display a Message in a New Frame", "Number": 12, "Solution": "" },
                { "Problem": "Java Program to Close the Frame using WindowAdapter Class", "Number": 13, "Solution": "" },
                { "Problem": "Java Program to Check Which Fonts are Available in a Local System", "Number": 14, "Solution": "" },
                { "Problem": "Java Program to Display Text in Different Fonts", "Number": 15, "Solution": "" },
                { "Problem": "Java Program to Change Frame Background Color as Cyan", "Number": 16, "Solution": "" },
                { "Problem": "Java Program to Change the Applet Background Colour when Button Clicked", "Number": 17, "Solution": "" },
                { "Problem": "Java Program to Display Several Dots on the Screen Continuously", "Number": 18, "Solution": "" },
                { "Problem": "Java Program to Validate the TextField for only entering numbers using KeyListener", "Number": 19, "Solution": "" },
                { "Problem": "Java Program to Validate the TextField for only entering email id using KeyAdapter", "Number": 20, "Solution": "" }
        ]
        arr1.forEach((element, i) => {
                let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
                document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

                document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
                        currentIndex = i
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                })
        })

        document.querySelector(".next").addEventListener("click", (e) => {
                if (currentIndex < arr1.length - 1) {
                        currentIndex++
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution

                }
        })
        document.querySelector(".previous").addEventListener("click", (e) => {
                if (currentIndex > 0) {
                        currentIndex--;
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                }
        });
}
function Twodarray() {
        document.querySelector(".Questions ol").innerHTML = ""
        document.querySelector(".Solutions h2").innerHTML = ""
        document.querySelector(".Solutions pre code").innerHTML = ""
        let currentIndex = -1
        let arr1 = [{
                Problem: "Enter the Matrix of rows and columns entered by the user and print in matrix format", Number: 1, Solution: `package OnlyPractice;
import java.util.*;
class TwoDArray{
        public void input(){
                System.out.println("Enter the number of rows:");
                Scanner obj=new Scanner(System.in);
                int row=obj.nextInt();
                System.out.println("Enter the number of colums:");
                Scanner obj1=new Scanner(System.in);
                int column=obj1.nextInt();
                int [][] arr1=new int[row][column];

                for (int i=0;i&ltrow;i++){
                        for (int j=0;j&ltcolumn;j++){
                                Scanner obj3=new Scanner(System.in);
                                arr1[i][j]=obj3.nextInt();
                                //#4268
                        }
                }
                for (int i=0;i&ltrow;i++){
                        for (int j=0;j&ltcolumn;j++){
                                System.out.print(arr1[i][j]+" ");
                        }
                        System.out.println();
                }
        }
}
public class Practice1{
        public static void main(String []args){
                TwoDArray obj1=new TwoDArray();
                obj1.input();
        }
}` }, {
                Problem: " Program to Add Two Matrices", Number: 2, Solution: `package OnlyPractice;
import java.util.*;
public class Practice1{
        public static void main(String []args){
                int[][] arr1= {{1,2},{4,5},{45,6}};
                int[][] arr2= {{2,6},{7,8},{9,10}};
                int [][] result=new int[3][2];
                for (int i=0;i<3;i++){
                for (int j=0;j<2;j++){
                        result[i][j]=arr1[i][j]+arr2[i][j];
                        //#4268
                }
                }
                for (int i=0;i<3;i++){
                for (int j=0;j<2;j++){
                        System.out.print(result[i][j]+" ");
                }
                        System.out.println();
                }
        }
}`}, {
                Problem: "Program to Multiply Two Matrices", Number: 3, Solution: `package OnlyPractice;
import java.util.*;
public class Practice1{
        public static void main(String []args){
                int[][] arr1= {{1,2},{4,5},{45,6}};
                int[][] arr2= {{2,6,8},{7,8,9}};
                int [][] result=new int[3][3];
                for (int i=0;i<3;i++){
                for (int j=0;j<3;j++){
                        result[i][j]=0;
                        for (int k=0;k<2;k++){
                                result[i][j]+=arr1[i][k]*arr2[k][j];
                        }
                }
                }
                for (int i=0;i<3;i++){
                for (int j=0;j<3;j++){
                        System.out.print(result[i][j]+" ");
                        //#4268
                }
                        System.out.println();
                }
        }
}` }, {
                Problem: "Program to subtract the two matrices", Number: 4, Solution: `package OnlyPractice;
import java.util.*;
public class Practice1{
        public static void main(String []args){
                int[][] arr1= {{1,2},{4,5},{45,6}};
                int[][] arr2= {{2,6},{7,8},{5,6}};
                int [][] result=new int[3][2];
                for (int i=0;i<3;i++){
                for (int j=0;j<2;j++) {
                        result[i][j]=arr1[i][j]-arr2[i][j];
                }
                }
                for (int i=0;i<3;i++){
                for (int j=0;j<2;j++){
                        System.out.print(result[i][j]+" ");
                        //#4268
                }
                        System.out.println();
                }
        }
}` }, {
                Problem: "Program to determine whether two matrices are equal", Number: 5, Solution: `package OnlyPractice;
import java.util.*;
public class Practice1{
        public static void main(String []args) {
                int[][] arr1= {{1,1},{4,5},{45,6}};
                int[][] arr2= {{1,2},{4,5},{45,6}};
//                int[][] arr2= {{2,3},{7,8}};
                int arr1row=arr1.length;
                int arr1col=arr1[0].length;
                int arr2row=arr2.length;
                int arr2col=arr2[0].length;
                boolean para=true;
                if(arr1row==arr2row && arr1col==arr2col){
                        for (int i=0;i&lt;arr1row;i++){
                                for (int j=0;j&lt;arr1col;j++){
                                        if(arr1[i][j]!=arr2[i][j]){
                                                para=false;
                                                break;
                                        }
                                }
                        }
                        if(para){
                                System.out.println("Both Matrices are equal");
                        }
                        else{
                                System.out.println("both matrices are not equal");
                                //#4268
                        }

                }
                else{
                        System.out.println("The matrices are not equal");
                }
        }
}` }, {
                Problem: "Program to display the lower triangular matrix", Number: 6, Solution: ``
        }, {
                Problem: "Program to display the upper triangular matrix", Number: 7, Solution: ``
        }, {
                Problem: "Program to find the frequency of odd & even numbers in the given matrix", Number: 8, Solution: ``
        }, {
                Problem: "Program to find the sum of each row and each column of a matrix", Number: 9, Solution: ``
        }, {
                Problem: "Program to find the transpose of a given matrix", Number: 10, Solution: ``
        }, {
                Problem: "Program to determine whether a given matrix is an identity matrix", Number: 11, Solution: ``
        }, {
                Problem: " Program to Transpose matrix", Number: 12, Solution: ``
        }]

        arr1.forEach((element, i) => {
                let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
                document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

                document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
                        currentIndex = i
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                })
        })

        document.querySelector(".next").addEventListener("click", (e) => {
                if (currentIndex < arr1.length - 1) {
                        currentIndex++
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution

                }
        })
        document.querySelector(".previous").addEventListener("click", (e) => {
                if (currentIndex > 0) {
                        currentIndex--;
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                }
        });
}
function DataConversion() {
        document.querySelector(".Questions ol").innerHTML = ""
        document.querySelector(".Solutions h2").innerHTML = ""
        document.querySelector(".Solutions pre code").innerHTML = ""
        let currentIndex = -1
        let arr1 = [{
                Problem: "How to convert String to int", Number: 1, Solution: `package OnlyPractice;
import java.util.*;
public class Practice1{
        public static void main(String []args) {
                String a = "12345";
                System.out.println(a);
                int num= Integer.parseInt(a);
                int c=10;
                //4268
                System.out.println(num+c);

        }
}`}, {
                Problem: " How to convert int to String", Number: 2, Solution: `package OnlyPractice;
import java.util.*;
public class Practice1{
        public static void main(String []args) {
                int a=19;
                System.out.println(String.valueOf(a)+20);
                //4268    
        }
}`
        }, {
                Problem: "How to convert String to long", Number: 3, Solution: `package OnlyPractice;
import java.util.*;
public class Practice1{
        public static void main(String []args) {
                String a="1234456";
                long b=Long.parseLong(a);
                System.out.println(b+1);
                //4268
        }
}`
        }, {
                Problem: "How to convert Long to String", Number: 4, Solution: `package OnlyPractice;
import java.util.*;
//long to string
public class Practice1{
        public static void main(String []args) {
                long a=1234456;
                String b=String.valueOf(a);
                //4268
                System.out.println(b+1);
        }
}`
        }, {
                Problem: "How to convert String to float", Number: 5, Solution: `package OnlyPractice;
import java.util.*;
//String to float
public class Practice1{
        public static void main(String []args) {
                String a="100";
                Float b= Float.parseFloat(a);
                System.out.println(b);
                //4268
        }
}`
        }, {
                Problem: "How to convert float to String", Number: 6, Solution: `package OnlyPractice;
import java.util.*;
public class Practice1{
        public static void main(String []args) {
                Float a=56.31F;
                String b=String.valueOf(a);
                System.out.println(b+31);
                //4268
        }
}`
        }, {
                Problem: "How to convert String to double", Number: 7, Solution: `package OnlyPractice;
import java.util.*;
public class Practice1{
        public static void main(String []args) {
                String a="123";
                Double b=Double.parseDouble(a);
                System.out.println(b);
                //4268
        }
}`
        }, {
                Problem: "How to convert double to String", Number: 8, Solution: `package OnlyPractice;
import java.util.*;
// Double to String
public class Practice1{
        public static void main(String []args) {
                Double a=458584.2D;
                System.out.println(String.valueOf(a)+10);
                //4268
        }
}`
        }, { "Problem": "How to convert String to Date", "Number": 9, "Solution": "" },
        { "Problem": "How to convert Date to String", "Number": 10, "Solution": "" },
        { "Problem": "How to convert String to char", "Number": 11, "Solution": "" },
        { "Problem": "How to convert char to String", "Number": 12, "Solution": "" },
        { "Problem": "How to convert String to Object", "Number": 13, "Solution": "" },
        { "Problem": "How to convert Object to String", "Number": 14, "Solution": "" },
        { "Problem": "How to convert int to long", "Number": 15, "Solution": "" },
        { "Problem": "How to convert long to int", "Number": 16, "Solution": "" },
        { "Problem": "How to convert int to double", "Number": 17, "Solution": "" },
        { "Problem": "How to convert double to int", "Number": 18, "Solution": "" },
        { "Problem": "How to convert char to int", "Number": 19, "Solution": "" },
        { "Problem": "How to convert int to char", "Number": 20, "Solution": "" },
        { "Problem": "How to convert String to boolean", "Number": 21, "Solution": "" },
        { "Problem": "How to convert boolean to String", "Number": 22, "Solution": "" },
        { "Problem": "How to convert Date to Timestamp", "Number": 23, "Solution": "" },
        { "Problem": "How to convert Timestamp to Date", "Number": 24, "Solution": "" },
        { "Problem": "How to convert Binary to Decimal", "Number": 25, "Solution": "" },
        { "Problem": "How to convert Decimal to Binary", "Number": 26, "Solution": "" },
        { "Problem": "How to convert Hex to Decimal", "Number": 27, "Solution": "" },
        { "Problem": "How to convert Decimal to Hex", "Number": 28, "Solution": "" },
        { "Problem": "How to convert Octal to Decimal", "Number": 29, "Solution": "" },
        { "Problem": "How to convert Decimal to Octal", "Number": 30, "Solution": "" }]

        arr1.forEach((element, i) => {
                let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
                document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

                document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
                        currentIndex = i
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                })
        })

        document.querySelector(".next").addEventListener("click", (e) => {
                if (currentIndex < arr1.length - 1) {
                        currentIndex++
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution

                }
        })
        document.querySelector(".previous").addEventListener("click", (e) => {
                if (currentIndex > 0) {
                        currentIndex--;
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                }
        });
}
function ExceptionHandling() {
        document.querySelector(".Questions ol").innerHTML = ""
        document.querySelector(".Solutions h2").innerHTML = ""
        document.querySelector(".Solutions pre code").innerHTML = ""
        let currentIndex = -1
        let arr1 = [{
                Problem: "Write a Java program that throws an exception and catch it using a try-catch block", Number: 1, Solution: `package OnlyPractice;
import java.util.*;
public class Practice1{
        public static void main(String []args) {
               int a=10;
               int b=0;
               try{
                       int c=a/b;
                       System.out.println("Your number is:"+c);
               }catch(Exception e){
                       System.out.println("We got an exception :"+e);
               }
                System.out.println("This is the end of my program");
        }
}`}, {
                Problem: "Write a Java program to create a method that takes an integer as a parameter and throws an exception if the number is odd", Number: 2, Solution: `package OnlyPractice;
import java.util.*;
//Write a Java program to create a method that takes an integer as a parameter and throws an exception if the number is odd
class OddException extends Exception{
    @Override
    public String getMessage() {
        return "Hey the number is odd";
    }
}
public class Practice1{
        public static void main(String []args) {
            Scanner sc=new Scanner(System.in);
            int number=sc.nextInt();
            if(number%2!=0) {
                try {
                    throw new OddException();
                }catch (Exception e) {
                    System.out.println(e.getMessage());
                }
            }
        }
}`
        }, {
                Problem: "Write a Java program to create a method that reads a file and throws an exception if the file is not found", Number: 3, Solution: `import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class File_Read {
  public static void main(String[] args) {
    try {
      readFile("test1.txt");
    } catch (FileNotFoundException e) {
      System.out.println("Error: " + e.getMessage());//4268
    }
  }

  public static void readFile(String fileName) throws FileNotFoundException {
    File file = new File(fileName);
    Scanner scanner = new Scanner(file);
    while (scanner.hasNextLine()) {
      String line = scanner.nextLine();
      System.out.println(line);
    }

    scanner.close();
  }
}`
        }, {
                "Problem": "Write a Java program that reads a list of numbers from a file and throws an exception if any of the numbers are positive", "Number": 4, "Solution": `import java.io.BufferedReader; 
                import java.io.FileReader; 
                import java.io.IOException;
                
                public class Practice1 {
                    public static void main(String[] args) {
                        try {
                            BufferedReader reader = new BufferedReader(new FileReader("numbers.txt")); //4268
                            String line;
                            while ((line = reader.readLine()) != null) {
                                int number = Integer.parseInt(line);
                                if (number > 0) {
                                    throw new Exception("Number is positive");
                                }
                            }
                            reader.close();
                        } catch (IOException e) {
                            e.printStackTrace();
                        } catch (Exception e) {
                            System.out.println(e.getMessage());
                        }
                    }
                }` },
        {
                "Problem": "Write a Java program that reads a file and throws an exception if the file is empty", "Number": 5, "Solution": `import java.io.File; 
                import java.io.FileReader; 
                import java.io.IOException;
                
                public class Practice1 {
                    public static void main(String[] args) {
                        try {
                            File file = new File("file.txt");
                            FileReader reader = new FileReader(file);
                            int ch;
                            boolean isEmpty = true; //4268
                            while ((ch = reader.read()) != -1) {
                                isEmpty = false;
                                break;
                            }
                            reader.close();
                            if (isEmpty) {
                                throw new Exception("File is empty");
                            }
                        } catch (IOException e) {
                            e.printStackTrace();
                        } catch (Exception e) {
                            System.out.println(e.getMessage());
                        }
                    }
                }` },
        {
                "Problem": "Write a Java program that reads a list of integers from the user and throws an exception if any numbers are duplicates", "Number": 6, "Solution": `import java.util.HashSet; 
                import java.util.Scanner;
                import java.util.Set;
                
                public class Practice1 {
                    public static void main(String[] args) {
                        Scanner scanner = new Scanner(System.in);
                        Set<Integer> numbers = new HashSet<>();
                        System.out.println("Enter integers (type 'done' to finish):");
                        while (scanner.hasNext()) {
                            if (scanner.hasNextInt()) {
                                int number = scanner.nextInt(); //4268
                                if (!numbers.add(number)) {
                                    System.out.println("Duplicate number found: " + number);
                                    scanner.close();
                                    return;
                                }
                            } else {
                                break;
                            }
                        }
                        scanner.close();
                    }
                }` },
        {
                "Problem": "Write a Java program to create a method that takes a string as input and throws an exception if the string does not contain vowels", "Number": 7, "Solution": `public class Practice1 {
                    public static void main(String[] args) {
                        try {
                            checkVowels("hello");
                            checkVowels("bcdf");
                        } catch (Exception e) {
                            System.out.println(e.getMessage()); //4268
                        }
                    }
                
                    public static void checkVowels(String str) throws Exception {
                        if (!str.matches(".*[aeiouAEIOU].*")) {
                            throw new Exception("String does not contain vowels");
                        }
                    }
                }` },
        {
                "Problem": "Write a Java program to connect the Java API to Database, if connection not successful then throw an exception", "Number": 8, "Solution": `import java.sql.Connection;
                import java.sql.DriverManager;
                import java.sql.SQLException;
                
                public class Practice1 {
                    public static void main(String[] args) {
                        String url = "jdbc:mysql://localhost:3306/mydatabase";
                        String username = "root";
                        String password = "password";
                        try {
                            Connection connection = DriverManager.getConnection(url, username, password); //4268
                            System.out.println("Database connected successfully");
                        } catch (SQLException e) {
                            System.out.println("Failed to connect to the database");
                            e.printStackTrace();
                        }
                    }
                }` },
        {
                "Problem": "Write a Java program to manage the driver with path, username and password, if not successful then throw an exception", "Number": 9, "Solution": `import java.sql.DriverManager;
                import java.sql.SQLException;
                
                public class Practice1 {
                    public static void main(String[] args) {
                        String driver = "com.mysql.cj.jdbc.Driver";
                        String url = "jdbc:mysql://localhost:3306/mydatabase";
                        String username = "root"; //4268
                        String password = "password";
                        try {
                            Class.forName(driver);
                            DriverManager.getConnection(url, username, password);
                            System.out.println("Driver and connection managed successfully");
                        } catch (ClassNotFoundException | SQLException e) {
                            System.out.println("Failed to manage driver or connection");
                            e.printStackTrace();
                        }
                    }
                }` },
        {
                "Problem": "Write a Java program to throw the SQL Query, insert, delete, update, if not successful then throw an exception", "Number": 10, "Solution": `import java.sql.Connection;
                import java.sql.DriverManager;
                import java.sql.SQLException;
                import java.sql.Statement;
                
                public class Practice1 {
                    public static void main(String[] args) {
                        String url = "jdbc:mysql://localhost:3306/mydatabase";
                        String username = "root";
                        String password = "password";
                        try (Connection connection = DriverManager.getConnection(url, username, password);
                             Statement statement = connection.createStatement()) {
                            statement.executeUpdate("INSERT INTO mytable (column1) VALUES ('value')");
                            statement.executeUpdate("DELETE FROM mytable WHERE column1 = 'value'");
                            statement.executeUpdate("UPDATE mytable SET column1 = 'newvalue' WHERE column1 = 'value'"); //4268
                            System.out.println("SQL operations successful");
                        } catch (SQLException e) {
                            System.out.println("SQL operation failed");
                            e.printStackTrace();
                        }
                    }
                }` },
        {
                "Problem": "Write a Java program to show an example of throws Keyword", "Number": 11, "Solution": `public class Practice1 {
                    public static void main(String[] args) {
                        try {
                            mayThrowException();
                        } catch (Exception e) {
                            System.out.println(e.getMessage()); //4268
                        }
                    }
                
                    public static void mayThrowException() throws Exception {
                        throw new Exception("This is an exception thrown using throws keyword");
                    }
                }` },
        {
                "Problem": "Write a Java program to show an example of multiple catch", "Number": 12, "Solution": `public class Practice1 {
                    public static void main(String[] args) {
                        try {
                            int result = 10 / 0; //4268
                        } catch (ArithmeticException e) {
                            System.out.println("Arithmetic Exception occurred: " + e.getMessage());
                        } catch (Exception e) {
                            System.out.println("Exception occurred: " + e.getMessage());
                        }
                    }
                }` },
        {
                "Problem": "Write a Java program to show an example of nested try block", "Number": 13, "Solution": `public class Practice1 {
                    public static void main(String[] args) {
                        try {
                            try {
                                int[] array = new int[5];
                                array[10] = 1; //4268
                            } catch (ArrayIndexOutOfBoundsException e) {
                                System.out.println("Inner try block exception: " + e.getMessage());
                            }
                        } catch (Exception e) {
                            System.out.println("Outer try block exception: " + e.getMessage());
                        }
                    }
                }` }]

        arr1.forEach((element, i) => {
                let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
                document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

                document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
                        currentIndex = i
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                })
        })

        document.querySelector(".next").addEventListener("click", (e) => {
                if (currentIndex < arr1.length - 1) {
                        currentIndex++
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution

                }
        })
        document.querySelector(".previous").addEventListener("click", (e) => {
                if (currentIndex > 0) {
                        currentIndex--;
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                }
        });
}
function Functions() {
        document.querySelector(".Questions ol").innerHTML = ""
        document.querySelector(".Solutions h2").innerHTML = ""
        document.querySelector(".Solutions pre code").innerHTML = ""
        let currentIndex = -1
        let arr1 = [
                {
                        "Problem": "Write a Java method to find the smallest number among three numbers.", "Number": 1, "Solution": `public class Practice1 {
                public static void main(String[] args) {
                    int a = 5; //4268
                    int b = 10;
                    int c = 3;
                    int smallest = (a < b) ? (a < c ? a : c) : (b < c ? b : c);
                    System.out.println("Smallest number is: " + smallest);
                }
            }` },
                {
                        "Problem": "Write a Java method to compute the average of three numbers.", "Number": 2, "Solution": `public class Practice1 {
                public static void main(String[] args) {
                    double num1 = 4.5; 
                    double num2 = 5.5;
                    double num3 = 6.0; //4268
                    double average = (num1 + num2 + num3) / 3;
                    System.out.println("Average is: " + average);
                }
            }` },
                {
                        "Problem": "Write a Java method to display the middle character of a string. Note: a) If the length of the string is odd there will be two middle characters. b) If the length of the string is even there will be one middle character.", "Number": 3, "Solution": `public class Practice1 {
                public static void main(String[] args) {
                    String str = "abcdef";
                    int length = str.length(); 
                    int mid = length / 2; //4268
                    if (length % 2 == 0) {
                        System.out.println("Middle character is: " + str.charAt(mid - 1));
                    } else {
                        System.out.println("Middle characters are: " + str.charAt(mid - 1) + str.charAt(mid));
                    }
                }
            }` },
                {
                        "Problem": "Write a Java method to count all the words in a string.", "Number": 4, "Solution": `public class Practice1 {
                public static void main(String[] args) {
                    String sentence = "This is a sample sentence";
                    String[] words = sentence.split("\\s+");
                    int count = words.length; //4268
                    System.out.println("Number of words: " + count);
                }
            }` },
                {
                        "Problem": "Write a Java method to compute the future investment value at a given interest rate for a specified number of years.", "Number": 5, "Solution": `public class Practice1 {
                public static void main(String[] args) {
                    double principal = 1000;
                    double rate = 0.05; //4268
                    int years = 10;
                    double futureValue = principal * Math.pow(1 + rate, years);
                    System.out.println("Future investment value: " + futureValue);
                }
            }` },
                {
                        "Problem": "Write a Java method to print characters between two characters (i.e. A to P).", "Number": 6, "Solution": `public class Practice1 {
                public static void main(String[] args) {
                    char start = 'A'; 
                    char end = 'P'; //4268
                    for (char c = start; c <= end; c++) {
                        System.out.print(c + " ");
                    }
                }
            }` },
                {
                        "Problem": "Write a Java method to check whether a string is a valid password.", "Number": 7, "Solution": `public class Practice1 {
                public static void main(String[] args) {
                    String password = "Passw0rd!";
                    boolean isValid = password.length() >= 8 && password.matches(".*\\d.*") && password.matches(".*[!@#$%^&*()_+].*");
                    System.out.println("Password is valid: " + isValid); //4268
                }
            }` },
                {
                        "Problem": "Write a Java method to display the current date and time.", "Number": 8, "Solution": `import java.time.LocalDateTime; 
            import java.time.format.DateTimeFormatter;
            
            public class Practice1 {
                public static void main(String[] args) {
                    LocalDateTime now = LocalDateTime.now(); //4268
                    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
                    System.out.println("Current date and time: " + now.format(formatter));
                }
            }` },
                {
                        "Problem": "Write a Java method to find all twin prime numbers less than 100.", "Number": 9, "Solution": `public class Practice1 {
                public static void main(String[] args) {
                    for (int i = 2; i < 100; i++) {
                        if (isPrime(i) && isPrime(i + 2)) {
                            System.out.println("Twin prime: " + i + " and " + (i + 2));
                        }
                    } //4268
                }
            
                public static boolean isPrime(int num) {
                    if (num <= 1) return false;
                    for (int i = 2; i <= Math.sqrt(num); i++) {
                        if (num % i == 0) return false;
                    }
                    return true;
                }
            }` },
                {
                        "Problem": "Write a Java method to count the number of digits in an integer with the value 2. The integer may be assumed to be non-negative.", "Number": 10, "Solution": `public class Practice1 {
                public static void main(String[] args) {
                    int number = 23456;
                    int count = Integer.toString(number).length(); //4268
                    System.out.println("Number of digits: " + count);
                }
            }` },
                {
                        "Problem": "Write a Java method that accepts three integers and checks whether they are consecutive or not. Returns true or false.", "Number": 11, "Solution": `public class Practice1 {
                public static void main(String[] args) {
                    int a = 5; 
                    int b = 6; //4268
                    int c = 7;
                    boolean areConsecutive = (b == a + 1) && (c == b + 1);
                    System.out.println("Are consecutive: " + areConsecutive);
                }
            }` },
                {
                        "Problem": "Write a Java method that accepts three integers and returns true if one is the middle point between the other two integers, otherwise false.", "Number": 12, "Solution": `public class Practice1 {
                public static void main(String[] args) {
                    int a = 5;
                    int b = 10;
                    int c = 15; //4268
                    boolean isMiddle = (b == (a + c) / 2);
                    System.out.println("Is middle point: " + isMiddle);
                }
            }` },
                {
                        "Problem": "Write a Java method that checks whether all the characters in a given string are vowels (a, e, i, o, u) or not. Return true if each character in the string is a vowel, otherwise return false.", "Number": 13, "Solution": `public class Practice1 {
                public static void main(String[] args) {
                    String str = "aeiou";
                    boolean allVowels = str.matches("[aeiou]+"); //4268
                    System.out.println("All characters are vowels: " + allVowels);
                }
            }` }
        ];


        arr1.forEach((element, i) => {
                let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
                document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

                document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
                        currentIndex = i
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                })
        })

        document.querySelector(".next").addEventListener("click", (e) => {
                if (currentIndex < arr1.length - 1) {
                        currentIndex++
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution

                }
        })
        document.querySelector(".previous").addEventListener("click", (e) => {
                if (currentIndex > 0) {
                        currentIndex--;
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                }
        });
}
function Applets() {
        document.querySelector(".Questions ol").innerHTML = ""
        document.querySelector(".Solutions h2").innerHTML = ""
        document.querySelector(".Solutions pre code").innerHTML = ""
        let currentIndex = -1
        let arr1 = [{ "Problem": "Create an applet showing the string 'Hello World' which is embedded in the HTML page.", "Number": 1, "Solution": "" },
        { "Problem": "Create an applet showing the string 'Hello World' which is executed by an appletviewer.", "Number": 2, "Solution": "" },
        { "Problem": "Create an applet in Java to draw a circle.", "Number": 3, "Solution": "" },
        { "Problem": "Create an applet in Java to draw a polygon.", "Number": 4, "Solution": "" },
        { "Problem": "Create an applet in Java to draw a rectangle.", "Number": 5, "Solution": "" },
        { "Problem": "Create an applet in Java to draw a square.", "Number": 6, "Solution": "" },
        { "Problem": "Create an applet in Java to draw 4 concentric circles.", "Number": 7, "Solution": "" },
        { "Problem": "Create an applet in Java to draw a line.", "Number": 8, "Solution": "" },
        { "Problem": "Create an applet in Java to draw an oval.", "Number": 9, "Solution": "" },
        { "Problem": "Create an applet in Java to draw an arc.", "Number": 10, "Solution": "" },
        { "Problem": "Create an applet in Java to change the background color.", "Number": 11, "Solution": "" },
        { "Problem": "Create an applet in Java to draw a rounded rectangle.", "Number": 12, "Solution": "" },
        { "Problem": "Create an applet in Java to set font.", "Number": 13, "Solution": "" },
        { "Problem": "Create an applet to display a digital clock.", "Number": 14, "Solution": "" },
        { "Problem": "Java Program to Draw a Smiling Face using Graphics Class Methods.", "Number": 15, "Solution": "" }]
        arr1.forEach((element, i) => {
                let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
                document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

                document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
                        currentIndex = i
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                })
        })

        document.querySelector(".next").addEventListener("click", (e) => {
                if (currentIndex < arr1.length - 1) {
                        currentIndex++
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution

                }
        })
        document.querySelector(".previous").addEventListener("click", (e) => {
                if (currentIndex > 0) {
                        currentIndex--;
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                }
        });
}
function AWT() {
        document.querySelector(".Questions ol").innerHTML = ""
        document.querySelector(".Solutions h2").innerHTML = ""
        document.querySelector(".Solutions pre code").innerHTML = ""
        let currentIndex = -1
        let arr1 = [{ "Problem": "Create a simple AWT application that displays a button with FlowLayout manager.", "Number": 1, "Solution": "" },
        { "Problem": "Create a simple AWT application that displays a button with Custom Layout.", "Number": 2, "Solution": "" },
        { "Problem": "Create a simple AWT application that displays multiple buttons with BorderLayout manager (North, East, West, South, Center).", "Number": 3, "Solution": "" },
        { "Problem": "Create a simple AWT application that displays a TextField with FlowLayout manager.", "Number": 4, "Solution": "" },
        { "Problem": "Create a simple AWT application that displays a TextField with Custom Layout.", "Number": 5, "Solution": "" },
        { "Problem": "Create a simple AWT application that displays a Checkbox with FlowLayout manager.", "Number": 6, "Solution": "" },
        { "Problem": "Create a simple AWT application that displays a Checkbox with Custom Layout.", "Number": 7, "Solution": "" },
        { "Problem": "Create a simple AWT application that displays a Label with FlowLayout manager.", "Number": 8, "Solution": "" },
        { "Problem": "Create a simple AWT application that displays a Label with Custom Layout.", "Number": 9, "Solution": "" },
        { "Problem": "Create a simple AWT application that displays a Choice with FlowLayout manager.", "Number": 10, "Solution": "" },
        { "Problem": "Create a simple AWT application that displays a Choice with Custom Layout.", "Number": 11, "Solution": "" },
        { "Problem": "Create a simple AWT application that displays a CheckboxGroup with FlowLayout manager.", "Number": 12, "Solution": "" },
        { "Problem": "Create a simple AWT application that displays a CheckboxGroup with Custom Layout.", "Number": 13, "Solution": "" },
        { "Problem": "Create a simple AWT application that displays a List with FlowLayout manager.", "Number": 14, "Solution": "" },
        { "Problem": "Create a simple AWT application that displays a List with Custom Layout.", "Number": 15, "Solution": "" },
        { "Problem": "Create a simple AWT application that displays a TextArea with FlowLayout manager.", "Number": 16, "Solution": "" },
        { "Problem": "Create a simple AWT application that displays a TextArea with Custom Layout.", "Number": 17, "Solution": "" },
        { "Problem": "Create a simple AWT application to design a calculator that displays buttons and a TextField with GridLayout manager.", "Number": 18, "Solution": "" }]
        arr1.forEach((element, i) => {
                let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
                document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

                document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
                        currentIndex = i
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                })
        })

        document.querySelector(".next").addEventListener("click", (e) => {
                if (currentIndex < arr1.length - 1) {
                        currentIndex++
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution

                }
        })
        document.querySelector(".previous").addEventListener("click", (e) => {
                if (currentIndex > 0) {
                        currentIndex--;
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                }
        });
}
function Swings() {
        document.querySelector(".Questions ol").innerHTML = ""
        document.querySelector(".Solutions h2").innerHTML = ""
        document.querySelector(".Solutions pre code").innerHTML = ""
        let currentIndex = -1
        let arr1 = []
        arr1.forEach((element, i) => {
                let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
                document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

                document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
                        currentIndex = i
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                })
        })

        document.querySelector(".next").addEventListener("click", (e) => {
                if (currentIndex < arr1.length - 1) {
                        currentIndex++
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution

                }
        })
        document.querySelector(".previous").addEventListener("click", (e) => {
                if (currentIndex > 0) {
                        currentIndex--;
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                }
        });
}
function Inheritance() {
        document.querySelector(".Questions ol").innerHTML = ""
        document.querySelector(".Solutions h2").innerHTML = ""
        document.querySelector(".Solutions pre code").innerHTML = ""
        let currentIndex = -1
        let arr1 = [
                {
                        "Problem": "Write a Java program to create a class called Animal with a method called makeSound(). Create a subclass called Cat that overrides the makeSound() method to bark.", "Number": 1, "Solution": `class Animal {
                void makeSound() {
                    System.out.println("Some sound");
                }
            }
            
            class Cat extends Animal {
                @Override
                void makeSound() {
                    System.out.println("Bark"); //4268
                }
            
                public static void main(String[] args) {
                    Cat cat = new Cat();
                    cat.makeSound();
                }
            }` },
                {
                        "Problem": "Write a Java program to create a class called Vehicle with a method called drive(). Create a subclass called Car that overrides the drive() method to print 'Repairing a car'.", "Number": 2, "Solution": `class Vehicle {
                void drive() {
                    System.out.println("Driving");
                }
            }
            
            class Car extends Vehicle {
                @Override
                void drive() {
                    System.out.println("Repairing a car"); //4268
                }
            
                public static void main(String[] args) {
                    Car car = new Car();
                    car.drive();
                }
            }` },
                {
                        "Problem": "Write a Java program to create a class called Shape with a method called getArea(). Create a subclass called Rectangle that overrides the getArea() method to calculate the area of a rectangle.", "Number": 3, "Solution": `class Shape {
                double getArea() {
                    return 0;
                }
            }
            
            class Rectangle extends Shape {
                double length = 5.0;
                double width = 3.0;
            
                @Override
                double getArea() {
                    return length * width; //4268
                }
            
                public static void main(String[] args) {
                    Rectangle rectangle = new Rectangle();
                    System.out.println("Area: " + rectangle.getArea());
                }
            }` },
                {
                        "Problem": "Write a Java program to create a class called Employee with methods called work() and getSalary(). Create a subclass called HRManager that overrides the work() method and adds a new method called addEmployee().", "Number": 4, "Solution": `class Employee {
                void work() {
                    System.out.println("Working");
                }
            
                double getSalary() {
                    return 50000;
                }
            }
            
            class HRManager extends Employee {
                @Override
                void work() {
                    System.out.println("Managing HR tasks"); //4268
                }
            
                void addEmployee() {
                    System.out.println("Adding new employee");
                }
            
                public static void main(String[] args) {
                    HRManager hrManager = new HRManager();
                    hrManager.work();
                    hrManager.addEmployee();
                    System.out.println("Salary: " + hrManager.getSalary());
                }
            }` },
                {
                        "Problem": "Write a Java program to create a class known as 'BankAccount' with methods called deposit() and withdraw(). Create a subclass called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred.", "Number": 5, "Solution": `class BankAccount {
                double balance = 500;
            
                void deposit(double amount) {
                    balance += amount;
                }
            
                void withdraw(double amount) {
                    balance -= amount;
                }
            }
            
            class SavingsAccount extends BankAccount {
                @Override
                void withdraw(double amount) {
                    if (balance - amount < 100) {
                        System.out.println("Insufficient funds to withdraw. Minimum balance should be 100."); //4268
                    } else {
                        balance -= amount;
                    }
                }
            
                public static void main(String[] args) {
                    SavingsAccount account = new SavingsAccount();
                    account.deposit(200);
                    account.withdraw(600);
                    System.out.println("Balance: " + account.balance);
                }
            }` },
                {
                        "Problem": "Write a Java program to create a class called Animal with a method named move(). Create a subclass called Cheetah that overrides the move() method to run.", "Number": 6, "Solution": `class Animal {
                void move() {
                    System.out.println("Moving");
                }
            }
            
            class Cheetah extends Animal {
                @Override
                void move() {
                    System.out.println("Running"); //4268
                }
            
                public static void main(String[] args) {
                    Cheetah cheetah = new Cheetah();
                    cheetah.move();
                }
            }` },
                {
                        "Problem": "Write a Java program to create a class known as Person with methods called getFirstName() and getLastName(). Create a subclass called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title.", "Number": 7, "Solution": `class Person {
                String firstName = "John";
                String lastName = "Doe";
            
                String getFirstName() {
                    return firstName;
                }
            
                String getLastName() {
                    return lastName;
                }
            }
            
            class Employee extends Person {
                String employeeId = "E123";
            
                String getEmployeeId() {
                    return employeeId;
                }
            
                @Override
                String getLastName() {
                    return lastName + " - Software Engineer"; //4268
                }
            
                public static void main(String[] args) {
                    Employee emp = new Employee();
                    System.out.println("First Name: " + emp.getFirstName());
                    System.out.println("Last Name: " + emp.getLastName());
                    System.out.println("Employee ID: " + emp.getEmployeeId());
                }
            }` },
                {
                        "Problem": "Write a Java program to create a class called Shape with methods called getPerimeter() and getArea(). Create a subclass called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.", "Number": 8, "Solution": `class Shape {
                double getPerimeter() {
                    return 0;
                }
            
                double getArea() {
                    return 0;
                }
            }
            
            class Circle extends Shape {
                double radius = 7.0;
            
                @Override
                double getPerimeter() {
                    return 2 * Math.PI * radius; //4268
                }
            
                @Override
                double getArea() {
                    return Math.PI * radius * radius;
                }
            
                public static void main(String[] args) {
                    Circle circle = new Circle();
                    System.out.println("Perimeter: " + circle.getPerimeter());
                    System.out.println("Area: " + circle.getArea());
                }
            }` },
                {
                        "Problem": "Write a Java program to create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car, and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.", "Number": 9, "Solution": `class Vehicle {
                String make;
                String model;
                int year;
                String fuelType;
            
                Vehicle(String make, String model, int year, String fuelType) {
                    this.make = make;
                    this.model = model;
                    this.year = year;
                    this.fuelType = fuelType;
                }
            
                double calculateFuelEfficiency() {
                    return 0;
                }
            
                double calculateDistanceTraveled(double fuel) {
                    return 0;
                }
            
                double calculateMaxSpeed() {
                    return 0;
                }
            }
            
            class Truck extends Vehicle {
                Truck(String make, String model, int year, String fuelType) {
                    super(make, model, year, fuelType);
                }
            
                @Override
                double calculateFuelEfficiency() {
                    return 10; //4268
                }
            
                @Override
                double calculateDistanceTraveled(double fuel) {
                    return fuel * calculateFuelEfficiency();
                }
            
                @Override
                double calculateMaxSpeed() {
                    return 80;
                }
            }
            
            class Car extends Vehicle {
                Car(String make, String model, int year, String fuelType) {
                    super(make, model, year, fuelType);
                }
            
                @Override
                double calculateFuelEfficiency() {
                    return 25;
                }
            
                @Override
                double calculateDistanceTraveled(double fuel) {
                    return fuel * calculateFuelEfficiency();
                }
            
                @Override
                double calculateMaxSpeed() {
                    return 120;
                }
            }
            
            class Motorcycle extends Vehicle {
                Motorcycle(String make, String model, int year, String fuelType) {
                    super(make, model, year, fuelType);
                }
            
                @Override
                double calculateFuelEfficiency() {
                    return 40;
                }
            
                @Override
                double calculateDistanceTraveled(double fuel) {
                    return fuel * calculateFuelEfficiency();
                }
            
                @Override
                double calculateMaxSpeed() {
                    return 160;
                }
            }` },
                {
                        "Problem": "Write a Java program that creates a class hierarchy for employees of a company. The base class should be Employee, with subclasses Manager, Developer, and Programmer. Each subclass should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.", "Number": 10, "Solution": `class Employee {
                String name;
                String address;
                double salary;
                String jobTitle;
            
                Employee(String name, String address, double salary, String jobTitle) {
                    this.name = name;
                    this.address = address;
                    this.salary = salary;
                    this.jobTitle = jobTitle;
                }
            
                double calculateBonus() {
                    return salary * 0.10;
                }
            
                void generatePerformanceReport() {
                    System.out.println(name + " Performance Report");
                }
            }
            
            class Manager extends Employee {
                Manager(String name, String address, double salary) {
                    super(name, address, salary, "Manager"); //4268
                }
            
                void manageProjects() {
                    System.out.println(name + " is managing projects.");
                }
            }
            
            class Developer extends Employee {
                Developer(String name, String address, double salary) {
                    super(name, address, salary, "Developer");
                }
            
                void developSoftware() {
                    System.out.println(name + " is developing software.");
                }
            }
            
            class Programmer extends Employee {
                Programmer(String name, String address, double salary) {
                    super(name, address, salary, "Programmer");
                }
            
                void writeCode() {
                    System.out.println(name + " is writing code.");
                }
            }` },
                {
                        "Problem": "Create a program, showing an example of super keyword.", "Number": 11, "Solution": `class Parent {
                String name = "Parent";
            
                void display() {
                    System.out.println("Name: " + name);
                }
            }
            
            class Child extends Parent {
                String name = "Child";
            
                void display() {
                    System.out.println("Child Name: " + name); //4268
                    System.out.println("Parent Name: " + super.name);
                }
            
                public static void main(String[] args) {
                    Child child = new Child();
                    child.display();
                }
            }` },
                {
                        "Problem": "Create a program, showing an example of super function.", "Number": 12, "Solution": `class Animal {
                Animal() {
                    System.out.println("Animal constructor"); //4268
                }
            }
            
            class Dog extends Animal {
                Dog() {
                    super();
                    System.out.println("Dog constructor");
                }
            
                public static void main(String[] args) {
                    Dog dog = new Dog();
                }
            }` },
                {
                        "Problem": "Create a program, showing an example of method overriding.", "Number": 13, "Solution": `class Parent {
                void show() {
                    System.out.println("Parent show()");
                }
            }
            
            class Child extends Parent {
                @Override
                void show() {
                    System.out.println("Child show()"); //4268
                }
            
                public static void main(String[] args) {
                    Parent obj = new Child();
                    obj.show();
                }
            }` },
                {
                        "Problem": "Create a program, showing an example of dynamic method dispatch.", "Number": 14, "Solution": `class Animal {
                void makeSound() {
                    System.out.println("Animal sound");
                }
            }
            
            class Dog extends Animal {
                @Override
                void makeSound() {
                    System.out.println("Bark"); //4268
                }
            }
            
            class Main {
                public static void main(String[] args) {
                    Animal myDog = new Dog();
                    myDog.makeSound();
                }
            }` },
                {
                        "Problem": "Write a Java program to create an abstract class Animal with an abstract method called sound(). Create subclasses Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.", "Number": 15, "Solution": `abstract class Animal {
                abstract void sound();
            }
            
            class Lion extends Animal {
                @Override
                void sound() {
                    System.out.println("Roar"); //4268
                }
            }
            
            class Tiger extends Animal {
                @Override
                void sound() {
                    System.out.println("Growl");
                }
            
                public static void main(String[] args) {
                    Lion lion = new Lion();
                    Tiger tiger = new Tiger();
                    lion.sound();
                    tiger.sound();
                }
            }` },
                {
                        "Problem": "Write a Java program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create subclasses Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape.", "Number": 16, "Solution": `abstract class Shape {
                abstract double calculateArea();
                abstract double calculatePerimeter();
            }
            
            class Circle extends Shape {
                double radius = 5.0;
            
                @Override
                double calculateArea() {
                    return Math.PI * radius * radius; //4268
                }
            
                @Override
                double calculatePerimeter() {
                    return 2 * Math.PI * radius;
                }
            }
            
            class Triangle extends Shape {
                double side1 = 3.0;
                double side2 = 4.0;
                double side3 = 5.0;
            
                @Override
                double calculateArea() {
                    double s = (side1 + side2 + side3) / 2;
                    return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
                }
            
                @Override
                double calculatePerimeter() {
                    return side1 + side2 + side3;
                }
            }` },
                {
                        "Problem": "Write a Java program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create subclasses: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.", "Number": 17, "Solution": `abstract class BankAccount {
                double balance;
            
                abstract void deposit(double amount);
                abstract void withdraw(double amount);
            }
            
            class SavingsAccount extends BankAccount {
                @Override
                void deposit(double amount) {
                    balance += amount;
                }
            
                @Override
                void withdraw(double amount) {
                    if (balance - amount < 0) {
                        System.out.println("Insufficient balance");
                    } else {
                        balance -= amount; //4268
                    }
                }
            }
            
            class CurrentAccount extends BankAccount {
                @Override
                void deposit(double amount) {
                    balance += amount;
                }
            
                @Override
                void withdraw(double amount) {
                    if (balance - amount < -1000) {
                        System.out.println("Overdraft limit exceeded");
                    } else {
                        balance -= amount;
                    }
                }
            }` },
                {
                        "Problem": "Write a Java program to create an abstract class Animal with abstract methods eat() and sleep(). Create subclasses Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior.", "Number": 18, "Solution": `abstract class Animal {
                abstract void eat();
                abstract void sleep();
            }
            
            class Lion extends Animal {
                @Override
                void eat() {
                    System.out.println("Lion eats meat");
                }
            
                @Override
                void sleep() {
                    System.out.println("Lion sleeps in the den"); //4268
                }
            }
            
            class Tiger extends Animal {
                @Override
                void eat() {
                    System.out.println("Tiger eats meat");
                }
            
                @Override
                void sleep() {
                    System.out.println("Tiger sleeps in the jungle");
                }
            }
            
            class Deer extends Animal {
                @Override
                void eat() {
                    System.out.println("Deer eats plants");
                }
            
                @Override
                void sleep() {
                    System.out.println("Deer sleeps in the forest");
                }
            }` },
                {
                        "Problem": "Write a Java program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create subclasses Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.", "Number": 19, "Solution": `abstract class Employee {
                abstract double calculateSalary();
                abstract void displayInfo();
            }
            
            class Manager extends Employee {
                double baseSalary = 60000;
                double bonus = 10000;
            
                @Override
                double calculateSalary() {
                    return baseSalary + bonus; //4268
                }
            
                @Override
                void displayInfo() {
                    System.out.println("Manager Salary: " + calculateSalary());
                }
            }
            
            class Programmer extends Employee {
                double baseSalary = 50000;
            
                @Override
                double calculateSalary() {
                    return baseSalary;
                }
            
                @Override
                void displayInfo() {
                    System.out.println("Programmer Salary: " + calculateSalary());
                }
            }` },
                {
                        "Problem": "Write a Java program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create subclasses Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape.", "Number": 20, "Solution": `abstract class Shape3D {
                abstract double calculateVolume();
                abstract double calculateSurfaceArea();
            }
            
            class Sphere extends Shape3D {
                double radius = 5.0;
            
                @Override
                double calculateVolume() {
                    return (4/3) * Math.PI * Math.pow(radius, 3); //4268
                }
            
                @Override
                double calculateSurfaceArea() {
                    return 4 * Math.PI * Math.pow(radius, 2);
                }
            }
            
            class Cube extends Shape3D {
                double side = 4.0;
            
                @Override
                double calculateVolume() {
                    return Math.pow(side, 3);
                }
            
                @Override
                double calculateSurfaceArea() {
                    return 6 * Math.pow(side, 2);
                }
            }` },
                {
                        "Problem": "Write a Java program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create subclasses Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type.", "Number": 21, "Solution": `abstract class Vehicle {
                abstract void startEngine();
                abstract void stopEngine();
            }
            
            class Car extends Vehicle {
                @Override
                void startEngine() {
                    System.out.println("Car engine started"); //4268
                }
            
                @Override
                void stopEngine() {
                    System.out.println("Car engine stopped");
                }
            }
            
            class Motorcycle extends Vehicle {
                @Override
                void startEngine() {
                    System.out.println("Motorcycle engine started");
                }
            
                @Override
                void stopEngine() {
                    System.out.println("Motorcycle engine stopped");
                }
            }` },
                {
                        "Problem": "Write a Java program to create an abstract class Person with abstract methods eat() and exercise(). Create subclasses Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.", "Number": 22, "Solution": `abstract class Person {
                abstract void eat();
                abstract void exercise();
            }
            
            class Athlete extends Person {
                @Override
                void eat() {
                    System.out.println("Athlete eats a balanced diet");
                }
            
                @Override
                void exercise() {
                    System.out.println("Athlete exercises regularly"); //4268
                }
            }
            
            class LazyPerson extends Person {
                @Override
                void eat() {
                    System.out.println("Lazy person eats junk food");
                }
            
                @Override
                void exercise() {
                    System.out.println("Lazy person does not exercise");
                }
            }` },
                {
                        "Problem": "Write a Java program to create an abstract class Instrument with abstract methods play() and tune(). Create subclasses for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument.", "Number": 23, "Solution": `abstract class Instrument {
                abstract void play();
                abstract void tune();
            }
            
            class Glockenspiel extends Instrument {
                @Override
                void play() {
                    System.out.println("Playing the Glockenspiel"); //4268
                }
            
                @Override
                void tune() {
                    System.out.println("Tuning the Glockenspiel");
                }
            }
            
            class Violin extends Instrument {
                @Override
                void play() {
                    System.out.println("Playing the Violin");
                }
            
                @Override
                void tune() {
                    System.out.println("Tuning the Violin");
                }
            }` },
                {
                        "Problem": "Write a Java program to create an abstract class Shape2D with abstract methods draw() and resize(). Create subclasses Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.", "Number": 24, "Solution": `abstract class Shape2D {
                abstract void draw();
                abstract void resize();
            }
            
            class Rectangle extends Shape2D {
                @Override
                void draw() {
                    System.out.println("Drawing a Rectangle"); //4268
                }
            
                @Override
                void resize() {
                    System.out.println("Resizing the Rectangle");
                }
            }
            
            class Circle extends Shape2D {
                @Override
                void draw() {
                    System.out.println("Drawing a Circle");
                }
            
                @Override
                void resize() {
                    System.out.println("Resizing the Circle");
                }
            }` },
                {
                        "Problem": "Write a Java program to create an abstract class Bird with abstract methods fly() and makeSound(). Create subclasses Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound.", "Number": 25, "Solution": `abstract class Bird {
                abstract void fly();
                abstract void makeSound();
            }
            
            class Eagle extends Bird {
                @Override
                void fly() {
                    System.out.println("Eagle soars high in the sky"); //4268
                }
            
                @Override
                void makeSound() {
                    System.out.println("Eagle screeches");
                }
            }
            
            class Hawk extends Bird {
                @Override
                void fly() {
                    System.out.println("Hawk glides through the air");
                }
            
                @Override
                void makeSound() {
                    System.out.println("Hawk screeches");
                }
            }` },
                {
                        "Problem": "Write a Java program to create an abstract class GeometricShape with abstract methods area() and perimeter(). Create subclasses Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape.", "Number": 26, "Solution": `abstract class GeometricShape {
                abstract double area();
                abstract double perimeter();
            }
            
            class Triangle extends GeometricShape {
                double side1 = 3.0;
                double side2 = 4.0;
                double side3 = 5.0;
            
                @Override
                double area() {
                    double s = (side1 + side2 + side3) / 2;
                    return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3)); //4268
                }
            
                @Override
                double perimeter() {
                    return side1 + side2 + side3;
                }
            }
            
            class Square extends GeometricShape {
                double side = 4.0;
            
                @Override
                double area() {
                    return side * side;
                }
            
                @Override
                double perimeter() {
                    return 4 * side;
                }
            }` }]

        arr1.forEach((element, i) => {
                let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
                document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

                document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
                        currentIndex = i
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                })
        })

        document.querySelector(".next").addEventListener("click", (e) => {
                if (currentIndex < arr1.length - 1) {
                        currentIndex++
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution

                }
        })
        document.querySelector(".previous").addEventListener("click", (e) => {
                if (currentIndex > 0) {
                        currentIndex--;
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                }
        });
}
function InputOutput() {
        document.querySelector(".Questions ol").innerHTML = ""
        document.querySelector(".Solutions h2").innerHTML = ""
        document.querySelector(".Solutions pre code").innerHTML = ""
        let currentIndex = -1
        let arr1 = [{ "Problem": "Enter the character from user using InputStreamReader.", "Number": 1, "Solution": "" },
        { "Problem": "Enter the string from user using BufferedStreamReader.", "Number": 2, "Solution": "" },
        { "Problem": "Enter the integer from user using Scanner class.", "Number": 3, "Solution": "" },
        { "Problem": "Enter the float from user using Scanner class.", "Number": 4, "Solution": "" },
        { "Problem": "Enter the double from user using Scanner class.", "Number": 5, "Solution": "" },
        { "Problem": "Enter the boolean from user using Scanner class.", "Number": 6, "Solution": "" },
        { "Problem": "Enter the short integer from user using Scanner class.", "Number": 7, "Solution": "" },
        { "Problem": "Enter the long integer from user using Scanner class.", "Number": 8, "Solution": "" },
        { "Problem": "Get all characters from the file and display on the screen.", "Number": 9, "Solution": "" },
        { "Problem": "Get all characters from the file, count number of lines, words, characters and display on the screen.", "Number": 10, "Solution": "" }]
        arr1.forEach((element, i) => {
                let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
                document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

                document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
                        currentIndex = i
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                })
        })

        document.querySelector(".next").addEventListener("click", (e) => {
                if (currentIndex < arr1.length - 1) {
                        currentIndex++
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution

                }
        })
        document.querySelector(".previous").addEventListener("click", (e) => {
                if (currentIndex > 0) {
                        currentIndex--;
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                }
        });
}
function Interfaces() {
        document.querySelector(".Questions ol").innerHTML = ""
        document.querySelector(".Solutions h2").innerHTML = ""
        document.querySelector(".Solutions pre code").innerHTML = ""
        let currentIndex = -1
        let arr1 = [{ "Problem": "Write a Java program to create an interface Shape with the getArea() method. Create three classes Rectangle, Circle, and Triangle that implement the Shape interface. Implement the getArea() method for each of the three classes.", "Number": 1, "Solution": "" },
        { "Problem": "Write a Java program to create an Animal interface with a method called bark() that takes no arguments and returns void. Create a Dog class that implements Animal and overrides bark() to print 'Dog is barking'.", "Number": 2, "Solution": "" },
        { "Problem": "Write a Java program to create an interface Flyable with a method called fly_obj(). Create three classes Spacecraft, Airplane, and Helicopter that implement the Flyable interface. Implement the fly_obj() method for each of the three classes.", "Number": 3, "Solution": "" },
        { "Problem": "Write a Java programming to create a banking system with three classes - Bank, Account, SavingsAccount, and CurrentAccount. The bank should have a list of accounts and methods for adding them. Accounts should be an interface with methods to deposit, withdraw, calculate interest, and view balances. SavingsAccount and CurrentAccount should implement the Account interface and have their own unique methods.", "Number": 4, "Solution": "" },
        { "Problem": "Write a Java program to create an interface Resizable with methods resizeWidth(int width) and resizeHeight(int height) that allow an object to be resized. Create a class Rectangle that implements the Resizable interface and implements the resize methods.", "Number": 5, "Solution": "" },
        { "Problem": "Write a Java program to create an interface Drawable with a method draw() that takes no arguments and returns void. Create three classes Circle, Rectangle, and Triangle that implement the Drawable interface and override the draw() method to draw their respective shapes.", "Number": 6, "Solution": "" },
        { "Problem": "Write a Java program to create an interface Sortable with a method sort() that sorts an array of integers in ascending order. Create two classes BubbleSort and SelectionSort that implement the Sortable interface and provide their own implementations of the sort() method.", "Number": 7, "Solution": "" },
        { "Problem": "Write a Java program to create an interface Playable with a method play() that takes no arguments and returns void. Create three classes Football, Volleyball, and Basketball that implement the Playable interface and override the play() method to play the respective sports.", "Number": 8, "Solution": "" },
        { "Problem": "Write a Java program to create an interface Searchable with a method search(String keyword) that searches for a given keyword in a text document. Create two classes Document and WebPage that implement the Searchable interface and provide their own implementations of the search() method.", "Number": 9, "Solution": "" },
        { "Problem": "Write a Java program to create an interface Encryptable with methods encrypt(String data) and decrypt(String encryptedData) that define encryption and decryption operations. Create two classes AES and RSA that implement the Encryptable interface and provide their own encryption and decryption algorithms.", "Number": 10, "Solution": "" },
        { "Problem": "Write a Java program to create an interface Sortable with a method sort(int[] array) that sorts an array of integers in descending order. Create two classes QuickSort and MergeSort that implement the Sortable interface and provide their own implementations of the sort() method.", "Number": 11, "Solution": "" }]
        arr1.forEach((element, i) => {
                let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
                document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

                document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
                        currentIndex = i
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                })
        })

        document.querySelector(".next").addEventListener("click", (e) => {
                if (currentIndex < arr1.length - 1) {
                        currentIndex++
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution

                }
        })
        document.querySelector(".previous").addEventListener("click", (e) => {
                if (currentIndex > 0) {
                        currentIndex--;
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                }
        });
}
function JDBC() {
        document.querySelector(".Questions ol").innerHTML = ""
        document.querySelector(".Solutions h2").innerHTML = ""
        document.querySelector(".Solutions pre code").innerHTML = ""
        let currentIndex = -1
        let arr1 = [{ "Problem": "Create the connection with MySQL Database and manage the driver.", "Number": 1, "Solution": "" },
        { "Problem": "Create the table in the database from Java API.", "Number": 2, "Solution": "" },
        { "Problem": "Insert the row in the table in the database from Java API.", "Number": 3, "Solution": "" },
        { "Problem": "Update the row in the table in the database from Java API.", "Number": 4, "Solution": "" },
        { "Problem": "Delete the row in the table in the database from Java API.", "Number": 5, "Solution": "" },
        { "Problem": "Select multiple rows from the database table in Java API and show the result on the screen.", "Number": 6, "Solution": "" },
        { "Problem": "Create a Scrollable Readonly Resultset and ask the row number from the user and display that row on the screen.", "Number": 7, "Solution": "" },
        { "Problem": "Create a Scrollable Updateable Resultset and insert a new row, update an existing row and delete the row from Resultset and also the changes should be made to the database also. The values should be inserted, updated and deleted by the user only.", "Number": 8, "Solution": "" },
        { "Problem": "Create a Java Program to show, insert, update, delete of the table in Java API through PreparedStatement.", "Number": 9, "Solution": "" }]
        arr1.forEach((element, i) => {
                let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
                document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

                document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
                        currentIndex = i
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                })
        })

        document.querySelector(".next").addEventListener("click", (e) => {
                if (currentIndex < arr1.length - 1) {
                        currentIndex++
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution

                }
        })
        document.querySelector(".previous").addEventListener("click", (e) => {
                if (currentIndex > 0) {
                        currentIndex--;
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                }
        });
}
function Multithreading() {
        document.querySelector(".Questions ol").innerHTML = ""
        document.querySelector(".Solutions h2").innerHTML = ""
        document.querySelector(".Solutions pre code").innerHTML = ""
        let currentIndex = -1
        let arr1 = [{ "Problem": "Write a Java program to create a basic Java thread that prints 'Hello, World!' when executed.", "Number": 1, "Solution": "" },
        { "Problem": "Write a Java program that creates two threads to find and print even and odd numbers from 1 to 20.", "Number": 2, "Solution": "" },
        { "Problem": "Write a Java program that sorts an array of integers using multiple threads.", "Number": 3, "Solution": "" },
        { "Problem": "Write a Java program that performs matrix multiplication using multiple threads.", "Number": 4, "Solution": "" },
        { "Problem": "Write a Java program that calculates the sum of all prime numbers up to a given limit using multiple threads.", "Number": 5, "Solution": "" },
        { "Problem": "Write a Java program to implement a concurrent web crawler that crawls multiple websites simultaneously using threads.", "Number": 6, "Solution": "" },
        { "Problem": "Write a Java program that creates a bank account with concurrent deposits and withdrawals using threads.", "Number": 7, "Solution": "" },
        { "Problem": "Create the program to create multiple threads by using Runnable interface.", "Number": 8, "Solution": "" },
        { "Problem": "Create the program to create multiple threads by using Thread class.", "Number": 9, "Solution": "" },
        { "Problem": "Create the program to create multiple threads, set its name and its priority.", "Number": 10, "Solution": "" },
        { "Problem": "Create the program to create multiple threads, show an example of synchronization keyword.", "Number": 11, "Solution": "" },
        { "Problem": "Create the program to create multiple threads, show an example of notify, notifyAll, wait, resume, sleep methods.", "Number": 12, "Solution": "" },
        { "Problem": "Create the program to create multiple threads, show an example of join and yield methods.", "Number": 13, "Solution": "" }]
        arr1.forEach((element, i) => {
                let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
                document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

                document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
                        currentIndex = i
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                })
        })

        document.querySelector(".next").addEventListener("click", (e) => {
                if (currentIndex < arr1.length - 1) {
                        currentIndex++
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution

                }
        })
        document.querySelector(".previous").addEventListener("click", (e) => {
                if (currentIndex > 0) {
                        currentIndex--;
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                }
        });
}
function OOP() {
        document.querySelector(".Questions ol").innerHTML = ""
        document.querySelector(".Solutions h2").innerHTML = ""
        document.querySelector(".Solutions pre code").innerHTML = ""
        let currentIndex = -1
        let arr1 = [{
                "Problem": "Write a Java program to create a class called 'Person' with a name and age attribute. Create two instances of the 'Person' class, set their attributes using the constructor, and print their name and age.",
                "Number": 1,
                "Solution": `
                class Person {
                        String name;
                        int age;

                        Person(String name, int age) {
                            this.name = name;
                            this.age = age;
                        }
            
                        void printInfo() {
                            System.out.println("Name: " + name + ", Age: " + age); //4268
                        }
            
                        public static void main(String[] args) {
                            Person person1 = new Person("Alice", 30);
                            Person person2 = new Person("Bob", 25);
                            person1.printInfo();
                            person2.printInfo();
                        }
                    }
                `
        },
        {
                "Problem": "Write a Java program to create a class called 'Dog' with a name and breed attribute. Create two instances of the 'Dog' class, set their attributes using the constructor and modify the attributes using the setter methods, and print the updated values.",
                "Number": 2,
                "Solution": `
                class Dog {
                        private String name;
                        private String breed;
            
                        Dog(String name, String breed) {
                            this.name = name;
                            this.breed = breed;
                        }
            
                        void setName(String name) {
                            this.name = name;
                        }
            
                        void setBreed(String breed) {
                            this.breed = breed;
                        }
            
                        void printInfo() {
                            System.out.println("Name: " + name + ", Breed: " + breed); //4268
                        }
            
                        public static void main(String[] args) {
                            Dog dog1 = new Dog("Max", "Labrador");
                            Dog dog2 = new Dog("Bella", "Poodle");
                            dog1.setName("Buddy");
                            dog1.setBreed("Golden Retriever");
                            dog1.printInfo();
                            dog2.printInfo();
                        }
                    }
                `
        },
        {
                "Problem": "Write a Java program to create a class called 'Rectangle' with width and height attributes. Calculate the area and perimeter of the rectangle.",
                "Number": 3,
                "Solution": `
                    class Rectangle {
                        double width;
                        double height;
            
                        Rectangle(double width, double height) {
                            this.width = width;
                            this.height = height;
                }
            
                        double calculateArea() {
                            return width * height; //4268
                }
            
                        double calculatePerimeter() {
                            return 2 * (width + height);
                        }
            
                        public static void main(String[] args) {
                            Rectangle rect = new Rectangle(5.0, 3.0);
                            System.out.println("Area: " + rect.calculateArea());
                            System.out.println("Perimeter: " + rect.calculatePerimeter());
                        }
                    }
                `
        },
        {
                "Problem": "Write a Java program to create a class called 'Circle' with a radius attribute. You can access and modify this attribute. Calculate the area and circumference of the circle.",
                "Number": 4,
                "Solution": `
                    class Circle {
                private double radius;
            
                        Circle(double radius) {
                            this.radius = radius;
                        }
                        void setRadius(double radius) {
                            this.radius = radius;
                        }
                        double calculateArea() {
                            return Math.PI * radius * radius; //4268
                        }
                        double calculateCircumference() {
                            return 2 * Math.PI * radius;
                        }
            
                        public static void main(String[] args) {
                            Circle circle = new Circle(4.0);
                            circle.setRadius(5.0);
                            System.out.println("Area: " + circle.calculateArea());
                            System.out.println("Circumference: " + circle.calculateCircumference());
                        }
                    }
                `
        },
        {
                "Problem": "Write a Java program to create a class called 'Book' with attributes for title, author, and ISBN, and methods to add and remove books from a collection.",
                "Number": 5,
                "Solution": `
                    import java.util.ArrayList;
                    import java.util.List;
            
                class Book {
                        String title;
                        String author;
                        String ISBN;
                        Book(String title, String author, String ISBN) {
                            this.title = title;
                            this.author = author;
                            this.ISBN = ISBN;
                        }
                    }
            
                    class BookCollection {
                        private List<Book> books = new ArrayList<>();
            
                        void addBook(Book book) {
                            books.add(book); //4268
                        }
            
                        void removeBook(Book book) {
                            books.remove(book);
                        }
            
                        void printBooks() {
                            for (Book book : books) {
                                System.out.println("Title: " + book.title + ", Author: " + book.author + ", ISBN: " + book.ISBN);
                            }
                        }
            
                        public static void main(String[] args) {
                            BookCollection collection = new BookCollection();
                            Book book1 = new Book("Java Basics", "John Doe", "123456789");
                            Book book2 = new Book("Advanced Java", "Jane Smith", "987654321");
                            collection.addBook(book1);
                            collection.addBook(book2);
                            collection.printBooks();
                            collection.removeBook(book1);
                            collection.printBooks();
                        }
                    }
                `
        },
        {
                "Problem": "Write a Java program to create a class called 'Employee' with a name, job title, and salary attributes, and methods to calculate and update salary.",
                "Number": 6,
                "Solution": `
                    class Employee {
                        String name;
                        String jobTitle;
                        double salary;
            
                        Employee(String name, String jobTitle, double salary) {
                            this.name = name;
                            this.jobTitle = jobTitle;
                            this.salary = salary;
                        }
            
                        void updateSalary(double newSalary) {
                            salary = newSalary; //4268
                        }
            
                        void printInfo() {
                            System.out.println("Name: " + name + ", Job Title: " + jobTitle + ", Salary: $" + salary);
                        }
            
                        public static void main(String[] args) {
                            Employee emp = new Employee("Alice", "Developer", 60000);
                            emp.printInfo();
                            emp.updateSalary(65000);
                            emp.printInfo();
                        }
                    }
                `
        },
        {
                "Problem": "Write a Java program to create a class called 'Bank' with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called 'Account' to maintain account details of a particular customer.",
                "Number": 7,
                "Solution": `
                    import java.util.ArrayList;
                    import java.util.List;
            
                    class Account {
                        String accountNumber;
                        double balance;
            
                        Account(String accountNumber, double balance) {
                            this.accountNumber = accountNumber;
                            this.balance = balance;
                        }
            
                        void deposit(double amount) {
                            balance += amount; //4268
                        }
            
                        void withdraw(double amount) {
                            if (balance >= amount) {
                                balance -= amount;
                            } else {
                                System.out.println("Insufficient balance");
                            }
                        }
            
                        @Override
                        public String toString() {
                            return "Account Number: " + accountNumber + ", Balance: $" + balance;
                        }
                    }
            
                    class Bank {
                        private List<Account> accounts = new ArrayList<>();
            
                        void addAccount(Account account) {
                            accounts.add(account);
                        }
            
                        void removeAccount(Account account) {
                            accounts.remove(account);
                        }
            
                        void printAccounts() {
                            for (Account account : accounts) {
                                System.out.println(account);
                            }
                        }
            
                        public static void main(String[] args) {
                            Bank bank = new Bank();
                            Account acc1 = new Account("1001", 5000);
                            Account acc2 = new Account("1002", 3000);
                            bank.addAccount(acc1);
                            bank.addAccount(acc2);
                            acc1.deposit(1000);
                            acc2.withdraw(500);
                            bank.printAccounts();
                        }
                    }
                `
        },
        {
                "Problem": "Write a Java program to create a class called 'TrafficLight' with attributes for color and duration, and methods to change the color and check for red or green.",
                "Number": 8,
                "Solution": `
                    class TrafficLight {
                        private String color;
                        private int duration;
            
                        TrafficLight(String color, int duration) {
                            this.color = color;
                            this.duration = duration;
                        }
            
                        void changeColor(String newColor) {
                            color = newColor; //4268
                        }
            
                        boolean isRed() {
                            return color.equalsIgnoreCase("Red");
                        }
            
                        boolean isGreen() {
                            return color.equalsIgnoreCase("Green");
                        }
            
                        void printInfo() {
                            System.out.println("Color: " + color + ", Duration: " + duration + " seconds");
                        }
            
                        public static void main(String[] args) {
                            TrafficLight light = new TrafficLight("Red", 30);
                            light.printInfo();
                            light.changeColor("Green");
                            System.out.println("Is Red: " + light.isRed());
                            System.out.println("Is Green: " + light.isGreen());
                            light.printInfo();
                        }
                    }
                `
        },
        { "Problem": "Write a Java program to create a class called 'Employee' with a name, salary, and hire date attributes, and a method to calculate years of service.", "Number": 9, "Solution": "" },
        { "Problem": "Write a Java program to create a class called 'Student' with a name, grade, and courses attributes, and methods to add and remove courses.", "Number": 10, "Solution": "" },
        { "Problem": "Write a Java program to create a class called 'Library' with a collection of books and methods to add and remove books.", "Number": 11, "Solution": "" },
        { "Problem": "Write a Java program to create a class called 'Airplane' with a flight number, destination, and departure time attributes, and methods to check flight status and delay.", "Number": 12, "Solution": "" },
        { "Problem": "Write a Java program to create a class called 'Inventory' with a collection of products and methods to add and remove products, and to check for low inventory.", "Number": 13, "Solution": "" },
        { "Problem": "Write a Java program to create a class called 'School' with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes.", "Number": 14, "Solution": "" },
        { "Problem": "Write a Java program to create a class called 'MusicLibrary' with a collection of songs and methods to add and remove songs, and to play a random song.", "Number": 15, "Solution": "" },
        { "Problem": "Write a Java program to create a class called 'Shape' with abstract methods for calculating area and perimeter, and subclasses for 'Rectangle', 'Circle', and 'Triangle'.", "Number": 16, "Solution": "" },
        { "Problem": "Write a Java program to create a class called 'Movie' with attributes for title, director, actors, and reviews, and methods for adding and retrieving reviews.", "Number": 17, "Solution": "" },
        { "Problem": "Write a Java program to create a class called 'Restaurant' with attributes for menu items, prices, and ratings, and methods to add and remove items, and to calculate average rating.", "Number": 18, "Solution": "" },
        { "Problem": "Write a Java program to create a class with methods to search for flights and hotels, and to book and cancel reservations.", "Number": 19, "Solution": "" },
        { "Problem": "Create a class showing an example of a default constructor.", "Number": 20, "Solution": "" },
        { "Problem": "Create a class showing an example of a parameterized constructor.", "Number": 21, "Solution": "" },
        { "Problem": "Create a class showing an example of a copy constructor.", "Number": 22, "Solution": "" },
        { "Problem": "Create a class entering the roll number, name, and class of the student from the user, but the roll number should be automatically generated as we enter the information of 10 students.", "Number": 23, "Solution": "" },
        { "Problem": "Create a class showing the area of a circle and rectangle by method overloading.", "Number": 24, "Solution": "" },
        { "Problem": "Create a class, entering the command line arguments from the user and showing all the arguments as output.", "Number": 25, "Solution": "" },
        { "Problem": "Write a Java program to create a class called 'Person' with private instance variables name, age, and country. Provide public getter and setter methods to access and modify these variables.", "Number": 26, "Solution": "" },
        { "Problem": "Write a Java program to create a class called 'BankAccount' with private instance variables accountNumber and balance. Provide public getter and setter methods to access and modify these variables.", "Number": 27, "Solution": "" },
        { "Problem": "Write a Java program to create a class called 'Rectangle' with private instance variables length and width. Provide public getter and setter methods to access and modify these variables.", "Number": 28, "Solution": "" },
        { "Problem": "Write a Java program to create a class called 'Employee' with private instance variables employee_id, employee_name, and employee_salary. Provide public getter and setter methods to access and modify the id and name variables, but provide a getter method for the salary variable that returns a formatted string.", "Number": 29, "Solution": "" },
        { "Problem": "Write a Java program to create a class called 'Circle' with a private instance variable radius. Provide public getter and setter methods to access and modify the radius variable. However, provide two methods called calculateArea() and calculatePerimeter() that return the calculated area and perimeter based on the current radius value.", "Number": 30, "Solution": "" },
        { "Problem": "Write a Java program to create a class called 'Car' with private instance variables company_name, model_name, year, and mileage. Provide public getter and setter methods to access and modify the company_name, model_name, and year variables. However, only provide a getter method for the mileage variable.", "Number": 31, "Solution": "" },
        { "Problem": "Write a Java program to create a class called 'Student' with private instance variables student_id, student_name, and grades. Provide public getter and setter methods to access and modify the student_id and student_name variables. However, provide a method called addGrade() that allows adding a grade to the grades variable while performing additional validation.", "Number": 32, "Solution": "" }]
        arr1.forEach((element, i) => {
                let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
                document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

                document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
                        currentIndex = i
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                })
        })

        document.querySelector(".next").addEventListener("click", (e) => {
                if (currentIndex < arr1.length - 1) {
                        currentIndex++
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution

                }
        })
        document.querySelector(".previous").addEventListener("click", (e) => {
                if (currentIndex > 0) {
                        currentIndex--;
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                }
        });
}
function Packages() {
        document.querySelector(".Questions ol").innerHTML = ""
        document.querySelector(".Solutions h2").innerHTML = ""
        document.querySelector(".Solutions pre code").innerHTML = ""
        let currentIndex = -1
        let arr1 = [{ "Problem": "Create a Java program to access the java.util.Date class through the import keyword and print the current date of the system.", "Number": 1, "Solution": "" },
        { "Problem": "Create a Java program to access the java.util.Date class through a qualified way and print the current date of the system.", "Number": 2, "Solution": "" },
        { "Problem": "Create a Java program to access the java.util.Date class through the import keyword and print the current date of the system, but inherit the Date class.", "Number": 3, "Solution": "" },
        { "Problem": "Create a Java program to access the java.util.Date class through a qualified way and print the current date of the system, but inherit the Date class.", "Number": 4, "Solution": "" },
        { "Problem": "Create a Java program to create a package with multiple default classes.", "Number": 5, "Solution": "" },
        { "Problem": "Create a Java program to create a package with 4 public classes, create the object in another file and call the function created in those classes.", "Number": 6, "Solution": "" },
        { "Problem": "Write a Java program to perform employee payroll processing using packages. In the file Emp.java, create a package 'employee' and a class 'Emp'. Declare variables: name, empid, category, bpay, hra, da, npay, pf, grosspay, incometax, allowance. Calculate the values in methods. Create another java file Emppay.java. Create an object to call methods and print values.", "Number": 7, "Solution": "" },
        { "Problem": "Create a Java program to create a package with a public class and protected members to be accessed in another class.", "Number": 8, "Solution": "" },
        { "Problem": "Create a Java program to create a nested package i.e. c4.sample with a public class and protected members to be accessed in another class.", "Number": 9, "Solution": "" },
        { "Problem": "Create a Java program to create a package with a public class and public members to be accessed in another class.", "Number": 10, "Solution": "" }]
        arr1.forEach((element, i) => {
                let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
                document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

                document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
                        currentIndex = i
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                })
        })

        document.querySelector(".next").addEventListener("click", (e) => {
                if (currentIndex < arr1.length - 1) {
                        currentIndex++
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution

                }
        })
        document.querySelector(".previous").addEventListener("click", (e) => {
                if (currentIndex > 0) {
                        currentIndex--;
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                }
        });
}
function Onedarray() {
        document.querySelector(".Questions ol").innerHTML = ""
        document.querySelector(".Solutions h2").innerHTML = ""
        document.querySelector(".Solutions pre code").innerHTML = ""
        let currentIndex = -1
        let arr1 = [{
                "Problem": "Program to copy all elements of one array into another array.",
                "Number": 1,
                "Solution": `
                    public class ArrayCopy {
                        public static void main(String[] args) {
                            int[] originalArray = {1, 2, 3, 4, 5};
                            int[] copiedArray = new int[originalArray.length]; //4268
        
                            System.arraycopy(originalArray, 0, copiedArray, 0, originalArray.length);
        
                            System.out.println("Copied Array:");
                            for (int element : copiedArray) {
                                System.out.print(element + " ");
                            }
                        }
                    }
                `
        },
        {
                "Problem": "Program to find the frequency of each element in the array.",
                "Number": 2,
                "Solution": `
                    import java.util.HashMap;
                    import java.util.Map;
        
                    public class FrequencyCounter {
                        public static void main(String[] args) {
                            int[] array = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4};
                            Map<Integer, Integer> frequencyMap = new HashMap<>(); //4268
        
                            for (int num : array) {
                                frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
                            }
        
                            System.out.println("Frequency of each element:");
                            for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
                                System.out.println(entry.getKey() + ": " + entry.getValue());
                            }
                        }
                    }
                `
        },
        {
                "Problem": "Program to left rotate the elements of an array.",
                "Number": 3,
                "Solution": `
                    public class LeftRotateArray {
                        public static void main(String[] args) {
                            int[] array = {1, 2, 3, 4, 5};
                            int n = array.length;
                            int k = 2; // Number of rotations
        
                            // Rotate array left by k positions
                            for (int i = 0; i < k; i++) {
                                int first = array[0];
                                for (int j = 0; j < n - 1; j++) {
                                    array[j] = array[j + 1]; //4268
                                }
                                array[n - 1] = first;
                            }
        
                            System.out.println("Array after left rotation:");
                            for (int element : array) {
                                System.out.print(element + " ");
                            }
                        }
                    }
                `
        },
        {
                "Problem": "Program to print the duplicate elements of an array.",
                "Number": 4,
                "Solution": `
                    import java.util.HashSet;
                    import java.util.Set;
        
                    public class PrintDuplicates {
                        public static void main(String[] args) {
                            int[] array = {1, 2, 2, 3, 4, 4, 5};
                            Set<Integer> duplicates = new HashSet<>(); //4268
                            Set<Integer> seen = new HashSet<>();
        
                            for (int num : array) {
                                if (!seen.add(num)) {
                                    duplicates.add(num);
                                }
                            }
        
                            System.out.println("Duplicate elements:");
                            for (int num : duplicates) {
                                System.out.print(num + " ");
                            }
                        }
                    }
                `
        },
        {
                "Problem": "Program to print the elements of an array.",
                "Number": 5,
                "Solution": `
                    public class PrintArray {
                        public static void main(String[] args) {
                            int[] array = {1, 2, 3, 4, 5}; //4268
        
                            System.out.println("Elements of the array:");
                            for (int element : array) {
                                System.out.print(element + " ");
                            }
                        }
                    }
                `
        },
        {
                "Problem": "Program to print the elements of an array in reverse order.",
                "Number": 6,
                "Solution": `
                    public class ReverseArray {
                        public static void main(String[] args) {
                            int[] array = {1, 2, 3, 4, 5};
        
                            System.out.println("Elements of the array in reverse order:");
                            for (int i = array.length - 1; i >= 0; i--) { //4268
                                System.out.print(array[i] + " ");
                            }
                        }
                    }
                `
        },
        {
                "Problem": "Program to print the elements of an array present on even positions.",
                "Number": 7,
                "Solution": `
                    public class EvenPositionElements {
                        public static void main(String[] args) {
                            int[] array = {1, 2, 3, 4, 5};
        
                            System.out.println("Elements at even positions:");
                            for (int i = 0; i < array.length; i += 2) { //4268
                                System.out.print(array[i] + " ");
                            }
                        }
                    }
                `
        },
        {
                "Problem": "Program to print the elements of an array present on odd positions.",
                "Number": 8,
                "Solution": `
                    public class OddPositionElements {
                        public static void main(String[] args) {
                            int[] array = {1, 2, 3, 4, 5};
        
                            System.out.println("Elements at odd positions:");
                            for (int i = 1; i < array.length; i += 2) { //4268
                                System.out.print(array[i] + " ");
                            }
                        }
                    }
                `
        },
        {
                "Problem": "Program to print the largest element in an array.",
                "Number": 9,
                "Solution": `
                    public class LargestElement {
                        public static void main(String[] args) {
                            int[] array = {1, 2, 3, 4, 5};
                            int largest = array[0];
        
                            for (int i = 1; i < array.length; i++) {
                                if (array[i] > largest) {
                                    largest = array[i]; //4268
                                }
                            }
        
                            System.out.println("Largest element: " + largest);
                        }
                    }
                `
        },
        {
                "Problem": "Program to print the smallest element in an array.",
                "Number": 10,
                "Solution": `
                    public class SmallestElement {
                        public static void main(String[] args) {
                            int[] array = {1, 2, 3, 4, 5};
                            int smallest = array[0];
        
                            for (int i = 1; i < array.length; i++) {
                                if (array[i] < smallest) {
                                    smallest = array[i]; //4268
                                }
                            }
        
                            System.out.println("Smallest element: " + smallest);
                        }
                    }
                `
        },
        {
                "Problem": "Program to print the number of elements present in an array.",
                "Number": 11,
                "Solution": `
                    public class ArraySize {
                        public static void main(String[] args) {
                            int[] array = {1, 2, 3, 4, 5};
        
                            System.out.println("Number of elements in the array: " + array.length); //4268
                        }
                    }
                `
        },
        {
                "Problem": "Program to print the sum of all the items of the array.",
                "Number": 12,
                "Solution": `
                    public class SumOfArray {
                        public static void main(String[] args) {
                            int[] array = {1, 2, 3, 4, 5};
                            int sum = 0;
        
                            for (int num : array) {
                                sum += num; //4268
                            }
        
                            System.out.println("Sum of all elements: " + sum);
                        }
                    }
                `
        },
        {
                "Problem": "Program to right rotate the elements of an array.",
                "Number": 13,
                "Solution": `
                    public class RightRotateArray {
                        public static void main(String[] args) {
                            int[] array = {1, 2, 3, 4, 5};
                            int n = array.length;
                            int k = 2; // Number of rotations
        
                            // Rotate array right by k positions
                            for (int i = 0; i < k; i++) {
                                int last = array[n - 1];
                                for (int j = n - 1; j > 0; j--) {
                                    array[j] = array[j - 1]; //4268
                                }
                                array[0] = last;
                            }
        
                            System.out.println("Array after right rotation:");
                            for (int element : array) {
                                System.out.print(element + " ");
                            }
                        }
                    }
                `
        },
        {
                "Problem": "Program to sort the elements of an array in ascending order.",
                "Number": 14,
                "Solution": `
                    import java.util.Arrays;
        
                    public class SortAscending {
                        public static void main(String[] args) {
                            int[] array = {5, 3, 4, 1, 2};
        
                            Arrays.sort(array); //4268
        
                            System.out.println("Array in ascending order:");
                            for (int element : array) {
                                System.out.print(element + " ");
                            }
                        }
                    }
                `
        },
        { "Problem": "Program to sort the elements of an array in descending order.", "Number": 15, "Solution": "" },
        { "Problem": "Program to find the 3rd largest number in an array.", "Number": 16, "Solution": "" },
        { "Problem": "Program to find the 2nd largest number in an array.", "Number": 17, "Solution": "" },
        { "Problem": "Program to find the largest number in an array.", "Number": 18, "Solution": "" },
        { "Problem": "Program to find the 2nd smallest number in an array.", "Number": 19, "Solution": "" },
        { "Problem": "Program to find the smallest number in an array.", "Number": 20, "Solution": "" },
        { "Problem": "Program to remove duplicate elements in an array.", "Number": 21, "Solution": "" },
        { "Problem": "Program to print odd and even numbers from an array.", "Number": 22, "Solution": "" },
        { "Problem": "How to sort an array in Java.", "Number": 23, "Solution": "" }]
        arr1.forEach((element, i) => {
                let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
                document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

                document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
                        currentIndex = i
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                })
        })

        document.querySelector(".next").addEventListener("click", (e) => {
                if (currentIndex < arr1.length - 1) {
                        currentIndex++
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution

                }
        })
        document.querySelector(".previous").addEventListener("click", (e) => {
                if (currentIndex > 0) {
                        currentIndex--;
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                }
        });
}
function Strings() {
        document.querySelector(".Questions ol").innerHTML = ""
        document.querySelector(".Solutions h2").innerHTML = ""
        document.querySelector(".Solutions pre code").innerHTML = ""
        let currentIndex = -1
        let arr1 = [
                {
                        "Problem": "Program to check if a string contains only digits.",
                        "Number": 1,
                        "Solution": `
                        public class CheckDigits {
                            public static void main(String[] args) {
                                String str = "123456";
                                
                                if (str.matches("\\d+")) { //426
                                    System.out.println("The string contains only digits.");
                                } else {
                                    System.out.println("The string contains non-digit characters.");
                                }
                            }
                        }
                    `
                },
                {
                        "Problem": "Program to perform deep copy for a string.",
                        "Number": 2,
                        "Solution": `
                        public class DeepCopyString {
                            public static void main(String[] args) {
                                String original = "Hello, World!";
                                String deepCopy = new String(original); //4268
            
                                System.out.println("Original String: " + original);
                                System.out.println("Deep Copy String: " + deepCopy);
                            }
                        }
                    `
                },
                {
                        "Problem": "Program to prove string immutability programmatically.",
                        "Number": 3,
                        "Solution": `
                        public class StringImmutability {
                            public static void main(String[] args) {
                                String original = "Hello";
                                String modified = original.concat(" World"); //4268
            
                                System.out.println("Original String: " + original);
                                System.out.println("Modified String: " + modified);
                            }
                        }
                    `
                },
                {
                        "Problem": "Program to remove all occurrences of a given character from input string.",
                        "Number": 4,
                        "Solution": `
                        public class RemoveCharacter {
                            public static void main(String[] args) {
                                String input = "Hello, World!";
                                char charToRemove = 'o'; 
            
                                String result = input.replace(Character.toString(charToRemove), "");
            
                                System.out.println("String after removal: " + result);
                            }
                        }
                    `
                },
                {
                        "Problem": "Program to append the string using StringBuffer class.",
                        "Number": 5,
                        "Solution": `
                        public class AppendStringBuffer {
                            public static void main(String[] args) {
                                StringBuffer sb = new StringBuffer("Hello");
                                sb.append(" World!"); //4268
            
                                System.out.println("Appended String: " + sb.toString());
                            }
                        }
                    `
                },
                {
                        "Problem": "Program to insert a string using StringBuffer class.",
                        "Number": 6,
                        "Solution": `
                        public class InsertStringBuffer {
                            public static void main(String[] args) {
                                StringBuffer sb = new StringBuffer("Hello World!");
                                sb.insert(6, "Beautiful "); //4268
            
                                System.out.println("String after insertion: " + sb.toString());
                            }
                        }
                    `
                }
                ,
                { "Problem": "Program to add characters to a string.", "Number": 7, "Solution": "" },
                { "Problem": "Program to check anagram.", "Number": 8, "Solution": "Explanation: Two strings are anagrams if they contain the same characters but in a different order." },
                { "Problem": "Program to check whether a string is a palindrome.", "Number": 9, "Solution": "" },
                { "Problem": "Program to convert enum to string.", "Number": 10, "Solution": "" },
                { "Problem": "Program to convert string to string array.", "Number": 11, "Solution": "" },
                { "Problem": "Program to count the number of words in a string.", "Number": 12, "Solution": "" },
                { "Problem": "Program to count the total number of characters in a string.", "Number": 13, "Solution": "" },
                { "Problem": "Program to count the total number of punctuation characters in a string.", "Number": 14, "Solution": "" },
                { "Problem": "Program to count the total number of vowels and consonants in a string.", "Number": 15, "Solution": "" },
                { "Problem": "Program to determine whether a string is a palindrome.", "Number": 16, "Solution": "" },
                { "Problem": "Program to determine whether one string is a rotation of another.", "Number": 17, "Solution": "" },
                { "Problem": "Program to divide a string into 'N' equal parts.", "Number": 18, "Solution": "" },
                { "Problem": "Program to find all subsets of a string.", "Number": 19, "Solution": "" },
                { "Problem": "Program to find all permutations of a string.", "Number": 20, "Solution": "" },
                { "Problem": "Program to find the maximum and minimum occurring characters in a string.", "Number": 21, "Solution": "" },
                { "Problem": "Program to reverse a string.", "Number": 22, "Solution": "" },
                { "Problem": "Program to find duplicate characters in a string.", "Number": 23, "Solution": "" },
                { "Problem": "Program to find duplicate words in a string.", "Number": 24, "Solution": "" },
                { "Problem": "Program to find the frequency of characters in a string.", "Number": 25, "Solution": "" },
                { "Problem": "Program to find the largest and smallest words in a string.", "Number": 26, "Solution": "" },
                { "Problem": "Program to find the longest repeating sequence in a string.", "Number": 27, "Solution": "" },
                { "Problem": "Program to find the most repeated word in a text file.", "Number": 28, "Solution": "" },
                { "Problem": "Program to find the number of words in a text file.", "Number": 29, "Solution": "" },
                { "Problem": "Program to get a character from a string.", "Number": 30, "Solution": "" },
                { "Problem": "Program to insert a string into another string.", "Number": 31, "Solution": "" },
                { "Problem": "Program to iterate over characters in a string.", "Number": 32, "Solution": "" },
                { "Problem": "Program to print a new line in a string.", "Number": 33, "Solution": "" },
                { "Problem": "Program to print even-length words in a string.", "Number": 34, "Solution": "" },
                { "Problem": "Program to print the smallest and biggest palindrome words in a string.", "Number": 35, "Solution": "" },
                { "Problem": "Program to remove all white spaces from a string.", "Number": 36, "Solution": "" },
                { "Problem": "Program to replace lowercase characters with uppercase and vice-versa.", "Number": 37, "Solution": "" },
                { "Problem": "Program to replace spaces in a string with a specific character.", "Number": 38, "Solution": "" },
                { "Problem": "Program to separate individual characters from a string.", "Number": 39, "Solution": "" },
                { "Problem": "Program to split a string into sub-strings.", "Number": 40, "Solution": "" },
                { "Problem": "Program to swap two string variables without using a third variable.", "Number": 41, "Solution": "" },
                { "Problem": "Program to swap pairs of characters in a string.", "Number": 42, "Solution": "Explanation: Enter the string and characters you want to swap with one another." },
                { "Problem": "Program to check if one string contains another.", "Number": 43, "Solution": "" },
                { "Problem": "Program to reverse a string without using the reverse() function.", "Number": 44, "Solution": "" },
                { "Problem": "Program to reverse a string word by word.", "Number": 45, "Solution": "" },
                { "Problem": "Program to check if two strings are created with the same characters.", "Number": 46, "Solution": "" },
                { "Problem": "Program to find the first non-repeated character in a string.", "Number": 47, "Solution": "" },
                { "Problem": "Program to reverse a string using StringBuffer class.", "Number": 48, "Solution": "" },
                { "Problem": "Program to show the functionality of insert, append, delete, and replace functions using StringBuffer class.", "Number": 49, "Solution": "" }]
        arr1.forEach((element, i) => {
                let Question = `<a id="Question${arr1[i].Number}">
    <li>${arr1[i].Problem}</li>
    </a>`
                document.querySelector(".Questions ol").insertAdjacentHTML("beforeend", Question)

                document.querySelector(`#Question${arr1[i].Number}`).addEventListener("click", (e) => {
                        currentIndex = i
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                })
        })

        document.querySelector(".next").addEventListener("click", (e) => {
                if (currentIndex < arr1.length - 1) {
                        currentIndex++
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution

                }
        })
        document.querySelector(".previous").addEventListener("click", (e) => {
                if (currentIndex > 0) {
                        currentIndex--;
                        document.querySelector(".Solutions h2").innerHTML = `Example ${arr1[currentIndex].Number} :`
                        document.querySelector(".Solutions pre code").innerHTML = arr1[currentIndex].Solution
                }
        });
}

document.querySelector(".Applets").addEventListener("click", (e) => {
        Applets();
})
document.querySelector(".BasicJava").addEventListener("click", (e) => {
        BasicJava();
})
document.querySelector(".DEM").addEventListener("click", (e) => {
        DelegationEventModel();
})
document.querySelector(".Twodarray").addEventListener("click", (e) => {
        Twodarray();
})
document.querySelector(".DataConversion").addEventListener("click", (e) => {
        DataConversion();
})
document.querySelector(".ExceptionHandling").addEventListener("click", (e) => {
        ExceptionHandling();
})
document.querySelector(".Functions").addEventListener("click", (e) => {
        Functions();
})
document.querySelector(".AWT").addEventListener("click", (e) => {
        AWT();
})
document.querySelector(".Swings").addEventListener("click", (e) => {
        Swings();
})
document.querySelector(".Inheritance").addEventListener("click", (e) => {
        Inheritance();
})
document.querySelector(".InputOutput").addEventListener("click", (e) => {
        InputOutput();
})
document.querySelector(".Interfaces").addEventListener("click", (e) => {
        Interfaces();
})
document.querySelector(".JDBC").addEventListener("click", (e) => {
        JDBC();
})
document.querySelector(".Multithreading").addEventListener("click", (e) => {
        Multithreading();
})
document.querySelector(".OOP").addEventListener("click", (e) => {
        OOP();
})
document.querySelector(".Packages").addEventListener("click", (e) => {
        Packages();
})
document.querySelector(".Onedarray").addEventListener("click", (e) => {
        Onedarray();
})
document.querySelector(".Strings").addEventListener("click", (e) => {
        Strings();
})