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
}` }, {
            Problem: `Write a Java program to swap the first and last elements of an array and create a new array.`,
            Number: 21,
            Solution: `
import java.util.Arrays;
import java.util.Scanner;
public class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int n = sc.nextInt();
        int[] arr = new int[n];
        System.out.println("Enter elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int temp = arr[0];
        arr[0] = arr[n - 1];
        arr[n - 1] = temp;
        System.out.println("Array after swapping: " + Arrays.toString(arr));
    }
}
`
        },
        {
            Problem: `Write a Java program to count the number of even and odd elements in a given array.`,
            Number: 22,
            Solution: `
import java.util.Scanner;
public class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int n = sc.nextInt();
        int[] arr = new int[n];
        System.out.println("Enter elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int evenCount = 0, oddCount = 0;
        for (int i = 0; i < n; i++) {
            if (arr[i] % 2 == 0) evenCount++;
            else oddCount++;
        }
        System.out.println("Even elements: " + evenCount);
        System.out.println("Odd elements: " + oddCount);
    }
}
`
        },
        {
            Problem: `Write a Java program to compute the square root of a given integer.`,
            Number: 23,
            Solution: `
import java.util.Scanner;
public class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int num = sc.nextInt();
        double sqrt = Math.sqrt(num);
        System.out.println("Square root: " + sqrt);
    }
}
`
        },
        {
            Problem: `Write a Java program to check if a positive number is a palindrome or not.`,
            Number: 24,
            Solution: `
import java.util.Scanner;
public class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a positive number: ");
        int num = sc.nextInt();
        int original = num, reverse = 0;
        while (num != 0) {
            int digit = num % 10;
            reverse = reverse * 10 + digit;
            num /= 10;
        }
        if (original == reverse) System.out.println("Palindrome");
        else System.out.println("Not a palindrome");
    }
}
`
        },
        {
            Problem: `Write a Java program to add two numbers without using any arithmetic operators.`,
            Number: 25,
            Solution: `
import java.util.Scanner;
public class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter two numbers: ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        while (b != 0) {
            int carry = a & b;
            a = a ^ b;
            b = carry << 1;
        }
        System.out.println("Sum: " + a);
    }
}
`
        },
        {
            Problem: `Write a Java program to add all the digits of a given positive integer.`,
            Number: 26,
            Solution: `
import java.util.Scanner;
public class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a positive integer: ");
        int num = sc.nextInt();
        int sum = 0;
        while (num != 0) {
            sum += num % 10;
            num /= 10;
        }
        System.out.println("Sum of digits: " + sum);
    }
}
`
        },
        {
            Problem: `Java program to find the area of a circle.`,
            Number: 27,
            Solution: `
import java.util.Scanner;
public class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the radius: ");
        double radius = sc.nextDouble();
        double area = Math.PI * radius * radius;
        System.out.println("Area of Circle: " + area);
    }
}
`
        },
        {
            Problem: `Java Program to find area of rectangle.`,
            Number: 28,
            Solution: `
import java.util.Scanner;
public class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter length and breadth: ");
        double length = sc.nextDouble();
        double breadth = sc.nextDouble();
        double area = length * breadth;
        System.out.println("Area of Rectangle: " + area);
    }
}
`}, {
            Problem: `Java Program to find the area of a triangle.`,
            Number: 29,
            Solution: `
import java.util.Scanner;
public class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter base and height: ");
        double base = sc.nextDouble();
        double height = sc.nextDouble();
        double area = 0.5 * base * height;
        System.out.println("Area of Triangle: " + area);
    }
}
`
        },
        {
            Problem: `Java Program to find the area of an equilateral triangle.`,
            Number: 30,
            Solution: `
import java.util.Scanner;
public class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the side length: ");
        double side = sc.nextDouble();
        double area = (Math.sqrt(3) / 4) * side * side;
        System.out.println("Area of Equilateral Triangle: " + area);
    }
}
`
        },
        {
            Problem: `Java Program to find the area of a rhombus.`,
            Number: 31,
            Solution: `
import java.util.Scanner;
public class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the lengths of diagonals: ");
        double d1 = sc.nextDouble();
        double d2 = sc.nextDouble();
        double area = (d1 * d2) / 2;
        System.out.println("Area of Rhombus: " + area);
    }
}
`
        },
        {
            Problem: `Java Program to find the area of a parallelogram.`,
            Number: 32,
            Solution: `
import java.util.Scanner;
public class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter base and height: ");
        double base = sc.nextDouble();
        double height = sc.nextDouble();
        double area = base * height;
        System.out.println("Area of Parallelogram: " + area);
    }
}
`
        },
        {
            Problem: `Java Program to find the area of a prism.`,
            Number: 33,
            Solution: `
import java.util.Scanner;
public class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter base area and height of the prism: ");
        double baseArea = sc.nextDouble();
        double height = sc.nextDouble();
        double volume = baseArea * height;
        System.out.println("Volume of Prism: " + volume);
    }
}
`
        },
        {
            Problem: `Java Program to find the volume of a sphere.`,
            Number: 34,
            Solution: `
import java.util.Scanner;
public class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the radius: ");
        double radius = sc.nextDouble();
        double volume = (4.0 / 3) * Math.PI * Math.pow(radius, 3);
        System.out.println("Volume of Sphere: " + volume);
    }
}
`
        },
        {
            Problem: `Java Program to find the volume of a cylinder.`,
            Number: 35,
            Solution: `
import java.util.Scanner;
public class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter radius and height: ");
        double radius = sc.nextDouble();
        double height = sc.nextDouble();
        double volume = Math.PI * radius * radius * height;
        System.out.println("Volume of Cylinder: " + volume);
    }
}
`
        },
        {
            Problem: `Java Program to find the volume of a cuboid.`,
            Number: 36,
            Solution: `
import java.util.Scanner;
public class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter length, breadth, and height: ");
        double length = sc.nextDouble();
        double breadth = sc.nextDouble();
        double height = sc.nextDouble();
        double volume = length * breadth * height;
        System.out.println("Volume of Cuboid: " + volume);
    }
}
`
        },
        {
            Problem: `Java Program to find the volume of a cone.`,
            Number: 37,
            Solution: `
import java.util.Scanner;
public class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter radius and height: ");
        double radius = sc.nextDouble();
        double height = sc.nextDouble();
        double volume = (1.0 / 3) * Math.PI * radius * radius * height;
        System.out.println("Volume of Cone: " + volume);
    }
}
`
        },
        {
            Problem: `Java program to find the surface area of a cuboid.`,
            Number: 38,
            Solution: `
import java.util.Scanner;
public class Practice1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter length, breadth, and height: ");
        double length = sc.nextDouble();
        double breadth = sc.nextDouble();
        double height = sc.nextDouble();
        double surfaceArea = 2 * (length * breadth + breadth * height + height * length);
        System.out.println("Surface Area of Cuboid: " + surfaceArea);
    }
}
`
        }, {
            Problem: `Java Program to find the surface area of a cylinder.`,
            Number: 39,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter radius and height: ");
                  double radius = sc.nextDouble();
                  double height = sc.nextDouble();
                  double surfaceArea = 2 * Math.PI * radius * (radius + height);
                  System.out.println("Surface Area of Cylinder: " + surfaceArea);
              }
          }
          `
        },
        {
            Problem: `Java program to find the surface area of a cube.`,
            Number: 40,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the side length: ");
                  double side = sc.nextDouble();
                  double surfaceArea = 6 * side * side;
                  System.out.println("Surface Area of Cube: " + surfaceArea);
              }
          }
          `
        },
        {
            Problem: `Java program to calculate average marks.`,
            Number: 41,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the number of subjects: ");
                  int n = sc.nextInt();
                  int sum = 0;
                  for (int i = 0; i < n; i++) {
                      System.out.print("Enter marks for subject " + (i + 1) + ": ");
                      sum += sc.nextInt();
                  }
                  double average = (double) sum / n;
                  System.out.println("Average Marks: " + average);
              }
          }
          `
        },
        {
            Problem: `Java program to check if a character is a vowel or consonant.`,
            Number: 42,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a character: ");
                  char ch = sc.next().toLowerCase().charAt(0);
                  if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                      System.out.println(ch + " is a vowel");
                  } else {
                      System.out.println(ch + " is a consonant");
                  }
              }
          }
          `
        },
        {
            Problem: `Java program to calculate the sum of the first N natural numbers.`,
            Number: 43,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a number: ");
                  int n = sc.nextInt();
                  int sum = (n * (n + 1)) / 2;
                  System.out.println("Sum of first " + n + " natural numbers: " + sum);
              }
          }
          `
        },
        {
            Problem: `Java program to find the factorial of a given number.`,
            Number: 44,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a number: ");
                  int n = sc.nextInt();
                  long factorial = 1;
                  for (int i = 2; i <= n; i++) {
                      factorial *= i;
                  }
                  System.out.println("Factorial: " + factorial);
              }
          }
          `
        },
        {
            Problem: `Java Program to calculate electricity bill.`,
            Number: 45,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter total units consumed: ");
                  double units = sc.nextDouble();
                  double bill = 0;
                  if (units <= 100) {
                      bill = units * 1.5;
                  } else if (units <= 200) {
                      bill = 100 * 1.5 + (units - 100) * 2.5;
                  } else {
                      bill = 100 * 1.5 + 100 * 2.5 + (units - 200) * 4.0;
                  }
                  System.out.println("Total Bill: " + bill);
              }
          }
          `
        },
        {
            Problem: `Java Program to calculate CGPA Percentage.`,
            Number: 46,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter total number of subjects: ");
                  int subjects = sc.nextInt();
                  double totalPoints = 0;
                  for (int i = 0; i < subjects; i++) {
                      System.out.print("Enter grade points for subject " + (i + 1) + ": ");
                      totalPoints += sc.nextDouble();
                  }
                  double cgpa = totalPoints / subjects;
                  double percentage = cgpa * 9.5;
                  System.out.println("CGPA: " + cgpa);
                  System.out.println("Percentage: " + percentage);
              }
          }
          `
        },
        {
            Problem: `Java Program to calculate compound interest.`,
            Number: 47,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter principal amount: ");
                  double principal = sc.nextDouble();
                  System.out.print("Enter rate of interest: ");
                  double rate = sc.nextDouble();
                  System.out.print("Enter time in years: ");
                  int time = sc.nextInt();
                  System.out.print("Enter number of times interest applied per time period: ");
                  int n = sc.nextInt();
                  double amount = principal * Math.pow(1 + (rate / (n * 100)), n * time);
                  double compoundInterest = amount - principal;
                  System.out.println("Compound Interest: " + compoundInterest);
              }
          }
          `
        }, {
            Problem: `Java Program To Calculate Batting Average.`,
            Number: 48,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter total runs scored: ");
                  int runs = sc.nextInt();
                  System.out.print("Enter number of times out: ");
                  int outs = sc.nextInt();
                  double average = (outs == 0) ? runs : (double) runs / outs;
                  System.out.println("Batting Average: " + average);
              }
          }
          `
        },
        {
            Problem: `Java Program to Calculate Commission Percentage.`,
            Number: 49,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter total sales amount: ");
                  double sales = sc.nextDouble();
                  System.out.print("Enter commission rate (%): ");
                  double rate = sc.nextDouble();
                  double commission = (sales * rate) / 100;
                  System.out.println("Commission Amount: " + commission);
              }
          }
          `
        },
        {
            Problem: `Java Program To Find Distance Between Two Points.`,
            Number: 50,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter x1, y1: ");
                  double x1 = sc.nextDouble(), y1 = sc.nextDouble();
                  System.out.print("Enter x2, y2: ");
                  double x2 = sc.nextDouble(), y2 = sc.nextDouble();
                  double distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                  System.out.println("Distance: " + distance);
              }
          }
          `
        },
        {
            Problem: `Java Program To Calculate Power Of Number.`,
            Number: 51,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter base: ");
                  int base = sc.nextInt();
                  System.out.print("Enter exponent: ");
                  int exponent = sc.nextInt();
                  long result = 1;
                  for (int i = 0; i < exponent; i++) {
                      result *= base;
                  }
                  System.out.println("Result: " + result);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to take three numbers from the user and print the greatest number.`,
            Number: 52,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter three numbers: ");
                  int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();
                  int max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
                  System.out.println("Greatest Number: " + max);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to find the number of days in a month.`,
            Number: 53,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter month number (1-12): ");
                  int month = sc.nextInt();
                  int days;
                  switch (month) {
                      case 4, 6, 9, 11 -> days = 30;
                      case 2 -> {
                          System.out.print("Enter year: ");
                          int year = sc.nextInt();
                          days = (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? 29 : 28;
                      }
                      default -> days = 31;
                  }
                  System.out.println("Days: " + days);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to test if a number is positive or negative.`,
            Number: 54,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a number: ");
                  int num = sc.nextInt();
                  if (num > 0) {
                      System.out.println("Positive Number");
                  } else if (num < 0) {
                      System.out.println("Negative Number");
                  } else {
                      System.out.println("Zero");
                  }
              }
          }
          `
        },
        {
            Problem: `Write a Java Program to accept number of week's day (1-7) and print the name of the day.`,
            Number: 55,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter day number (1-7): ");
                  int day = sc.nextInt();
                  switch (day) {
                      case 1 -> System.out.println("Sunday");
                      case 2 -> System.out.println("Monday");
                      case 3 -> System.out.println("Tuesday");
                      case 4 -> System.out.println("Wednesday");
                      case 5 -> System.out.println("Thursday");
                      case 6 -> System.out.println("Friday");
                      case 7 -> System.out.println("Saturday");
                      default -> System.out.println("Invalid day");
                  }
              }
          }
          `
        },
        {
            Problem: `Write a Java program that takes a year from user and print whether that year is a leap year or not.`,
            Number: 56,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a year: ");
                  int year = sc.nextInt();
                  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                      System.out.println("Leap Year");
                  } else {
                      System.out.println("Not a Leap Year");
                  }
              }
          }
          `
        }, {
            Problem: `Write a Java program to input 5 numbers from keyboard and find their sum and average.`,
            Number: 57,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  int sum = 0;
                  System.out.println("Enter 5 numbers: ");
                  for (int i = 0; i < 5; i++) {
                      sum += sc.nextInt(); //4268
                  }
                  double average = sum / 5.0;
                  System.out.println("Sum: " + sum + ", Average: " + average);
              }
          }
          `
        },
        {
            Problem: `Write a program in Java to display the first 5 natural numbers.`,
            Number: 58,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("First 5 natural numbers:");
                  for (int i = 1; i <= 5; i++) { //4268
                      System.out.println(i);
                  }
              }
          }
          `
        },
        {
            Problem: `Write a Java program to check if a character is a vowel or consonant.`,
            Number: 59,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a character: ");
                  char ch = sc.next().toLowerCase().charAt(0);
                  if ("aeiou".indexOf(ch) != -1) {
                      System.out.println("Vowel");
                  } else {
                      System.out.println("Consonant");
                  }
              }
          }
          `
        },
        {
            Problem: `Write a Java program to display the cube of the number up to a given integer.`,
            Number: 60,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a number: ");
                  int n = sc.nextInt();
                  for (int i = 1; i <= n; i++) {
                      System.out.println("Cube of " + i + " is " + (i * i * i)); //4268
                  }
              }
          }
          `
        },
        {
            Problem: `Write a Java program to display the n terms of odd natural numbers and their sum.`,
            Number: 61,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter number of terms: ");
                  int n = sc.nextInt();
                  int sum = 0;
                  for (int i = 1, count = 0; count < n; i += 2, count++) {
                      System.out.println(i);
                      sum += i;
                  }
                  System.out.println("Sum: " + sum);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to display the multiplication table of a given integer.`,
            Number: 62,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a number: ");
                  int num = sc.nextInt();
                  for (int i = 1; i <= 10; i++) {
                      System.out.println(num + " x " + i + " = " + (num * i)); //4268
                  }
              }
          }
          `
        },
        {
            Problem: `Write a Java program that reads an integer and checks whether it is negative, zero, or positive.`,
            Number: 63,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter an integer: ");
                  int num = sc.nextInt();
                  if (num > 0) {
                      System.out.println("Positive");
                  } else if (num < 0) {
                      System.out.println("Negative");
                  } else {
                      System.out.println("Zero");
                  }
              }
          }
          `
        },
        {
            Problem: `Write a Java program that reads a positive integer and counts the number of digits.`,
            Number: 64,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a positive integer: ");
                  int num = sc.nextInt();
                  int count = 0;
                  while (num > 0) {
                      num /= 10; //4268
                      count++;
                  }
                  System.out.println("Number of digits: " + count);
              }
          }
          `
        },
        {
            Problem: `Write a Java program that accepts three numbers and checks if all numbers are equal.`,
            Number: 65,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter three numbers: ");
                  int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();
                  if (a == b && b == c) {
                      System.out.println("All numbers are equal");
                  } else {
                      System.out.println("Numbers are not equal");
                  }
              }
          }
          `
        },
        {
            Problem: `Write a Java program that accepts three numbers and checks if numbers are in increasing or decreasing order.`,
            Number: 66,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter three numbers: ");
                  int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();
                  if (a < b && b < c) {
                      System.out.println("Increasing Order");
                  } else if (a > b && b > c) {
                      System.out.println("Decreasing Order");
                  } else {
                      System.out.println("Neither Increasing nor Decreasing");
                  }
              }
          }
          `
        }, {
            Problem: `Write a Java program that determines a student’s grade.`,
            Number: 67,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter marks: ");
                  int marks = sc.nextInt();
                  char grade;
                  if (marks >= 90) grade = 'A';
                  else if (marks >= 80) grade = 'B';
                  else if (marks >= 70) grade = 'C';
                  else if (marks >= 60) grade = 'D';
                  else grade = 'F';
                  System.out.println("Grade: " + grade); //4268
              }
          }
          `
        },
        {
            Problem: `Write a Java program to create a simple calculator.`,
            Number: 68,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter first number: ");
                  double num1 = sc.nextDouble();
                  System.out.print("Enter second number: ");
                  double num2 = sc.nextDouble();
                  System.out.print("Choose operation (+, -, *, /): ");
                  char op = sc.next().charAt(0);
                  double result = 0;
                  switch (op) {
                      case '+': result = num1 + num2; break;
                      case '-': result = num1 - num2; break;
                      case '*': result = num1 * num2; break;
                      case '/': result = (num2 != 0) ? num1 / num2 : Double.NaN; break;
                      default: System.out.println("Invalid operator"); return;
                  }
                  System.out.println("Result: " + result); //4268
              }
          }
          `
        },
        {
            Problem: `Write a Java program to concatenate two strings.`,
            Number: 69,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter first string: ");
                  String str1 = sc.nextLine();
                  System.out.print("Enter second string: ");
                  String str2 = sc.nextLine();
                  System.out.println("Concatenated String: " + str1 + str2); //4268
              }
          }
          `
        },
        {
            Problem: `Write a Java program to convert all characters in a string to lowercase.`,
            Number: 70,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a string: ");
                  String input = sc.nextLine();
                  System.out.println("Lowercase: " + input.toLowerCase()); //4268
              }
          }
          `
        },
        {
            Problem: `Write a Java program to convert all characters in a string to uppercase.`,
            Number: 71,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a string: ");
                  String input = sc.nextLine();
                  System.out.println("Uppercase: " + input.toUpperCase());
              }
          }
          `
        },
        {
            Problem: `Write a Java program to trim a string (remove whitespaces).`,
            Number: 72,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a string: ");
                  String input = sc.nextLine();
                  System.out.println("Trimmed String: " + input.trim()); //4268
              }
          }
          `
        },
        {
            Problem: `Write a Java program to get a substring of a given string between two specified positions.`,
            Number: 73,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a string: ");
                  String str = sc.nextLine();
                  System.out.print("Enter starting index: ");
                  int start = sc.nextInt();
                  System.out.print("Enter ending index: ");
                  int end = sc.nextInt();
                  System.out.println("Substring: " + str.substring(start, end));
              }
          }
          `
        },
        {
            Problem: `Write a Java program to replace all the ‘d’ characters with ‘f’ characters.`,
            Number: 74,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a string: ");
                  String input = sc.nextLine();
                  System.out.println("Modified String: " + input.replace('d', 'f')); //4268
              }
          }
          `
        },
        {
            Problem: `Write a Java program to get the length of a given string.`,
            Number: 75,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a string: ");
                  String input = sc.nextLine();
                  System.out.println("Length: " + input.length()); //4268
              }
          }
          `
        },
        {
            Problem: `Write a Java program to print the current date and time in the specified format.`,
            Number: 76,
            Solution: `
          import java.text.SimpleDateFormat;
          import java.util.Date;
          public class Practice1 {
              public static void main(String[] args) {
                  SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
                  Date date = new Date();
                  System.out.println("Current Date and Time: " + formatter.format(date)); //4268
              }
          }
          `
        }, {
            Problem: `Write a Java program to get the character at the given index within the String.`,
            Number: 77,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a string: ");
                  String str = sc.nextLine();
                  System.out.print("Enter index: ");
                  int index = sc.nextInt();
                  if (index >= 0 && index < str.length()) {
                      System.out.println("Character at index " + index + ": " + str.charAt(index)); //4268
                  } else {
                      System.out.println("Index out of bounds");
                  }
              }
          }
          `
        },
        {
            Problem: `Write a Java program to remove a particular character from a string.`,
            Number: 78,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a string: ");
                  String input = sc.nextLine();
                  System.out.print("Enter character to remove: ");
                  char ch = sc.next().charAt(0);
                  String result = input.replace(Character.toString(ch), "");
                  System.out.println("String after removal: " + result); //4268
              }
          }
          `
        },
        {
            Problem: `Write a Java program to reverse a String.`,
            Number: 79,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a string: ");
                  String input = sc.nextLine();
                  String reversed = new StringBuilder(input).reverse().toString();
                  System.out.println("Reversed String: " + reversed); //4268
              }
          }
          `
        },
        {
            Problem: `Write a Java program to remove HTML tags from a string.`,
            Number: 80,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  String html = "<h1>Hello <b>World</b></h1>";
                  String result = html.replaceAll("<[^>]*>", ""); // Remove HTML tags
                  System.out.println("String without HTML tags: " + result); //4268
              }
          }
          `
        },
        {
            Problem: `Write a Java program to count total number of lines from a string.`,
            Number: 81,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.println("Enter a multi-line string (type 'END' to stop):");
                  String input;
                  int lines = 0;
                  while (!(input = sc.nextLine()).equals("END")) {
                      lines++; //4268
                  }
                  System.out.println("Total lines: " + lines);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to sum values of an array.`,
            Number: 82,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the size of the array: ");
                  int n = sc.nextInt();
                  int[] arr = new int[n];
                  int sum = 0;
                  System.out.println("Enter array elements:");
                  for (int i = 0; i < n; i++) {
                      arr[i] = sc.nextInt();
                      sum += arr[i]; //4268
                  }
                  System.out.println("Sum of array elements: " + sum);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to find the index of an array element.`,
            Number: 83,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  int[] arr = {10, 20, 30, 40, 50};
                  System.out.print("Enter element to find index: ");
                  int element = sc.nextInt();
                  int index = -1;
                  for (int i = 0; i < arr.length; i++) {
                      if (arr[i] == element) {
                          index = i; //4268
                          break;
                      }
                  }
                  if (index != -1) System.out.println("Element found at index: " + index);
                  else System.out.println("Element not found");
              }
          }
          `
        },
        {
            Problem: `Write a Java program to calculate the average value of array elements.`,
            Number: 84,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the size of the array: ");
                  int n = sc.nextInt();
                  int[] arr = new int[n];
                  double sum = 0;
                  System.out.println("Enter array elements:");
                  for (int i = 0; i < n; i++) {
                      arr[i] = sc.nextInt();
                      sum += arr[i];
                  }
                  double average = sum / n; //4268
                  System.out.println("Average value: " + average);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to test if an array contains a specific value.`,
            Number: 85,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  int[] arr = {1, 2, 3, 4, 5};
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter value to search: ");
                  int value = sc.nextInt();
                  boolean found = false;
                  for (int num : arr) {
                      if (num == value) {
                          found = true; //4268
                          break;
                      }
                  }
                  if (found) System.out.println("Value found in array.");
                  else System.out.println("Value not found.");
              }
          }
          `
        }, {
            Problem: `Write a Java program to find the maximum and minimum value of an array.`,
            Number: 86,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the size of the array: ");
                  int n = sc.nextInt();
                  int[] arr = new int[n];
                  System.out.println("Enter array elements:");
                  for (int i = 0; i < n; i++) {
                      arr[i] = sc.nextInt();
                  }
                  int max = arr[0], min = arr[0];
                  for (int i = 1; i < n; i++) {
                      if (arr[i] > max) max = arr[i];
                      if (arr[i] < min) min = arr[i]; //4268
                  }
                  System.out.println("Maximum value: " + max);
                  System.out.println("Minimum value: " + min);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to insert an element at a specific position in an array.`,
            Number: 87,
            Solution: `
          import java.util.Scanner;
          import java.util.Arrays;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the size of the array: ");
                  int n = sc.nextInt();
                  int[] arr = new int[n + 1]; // Extra space for new element
                  System.out.println("Enter array elements:");
                  for (int i = 0; i < n; i++) {
                      arr[i] = sc.nextInt();
                  }
                  System.out.print("Enter the element to insert: ");
                  int element = sc.nextInt();
                  System.out.print("Enter the position to insert: ");
                  int position = sc.nextInt();
                  for (int i = n; i > position; i--) {
                      arr[i] = arr[i - 1];
                  }
                  arr[position] = element; //4268
                  System.out.println("Array after insertion: " + Arrays.toString(arr));
              }
          }
          `
        },
        {
            Problem: `Write a Java program to reverse an array of integer values.`,
            Number: 88,
            Solution: `
          import java.util.Scanner;
          import java.util.Arrays;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the size of the array: ");
                  int n = sc.nextInt();
                  int[] arr = new int[n];
                  System.out.println("Enter array elements:");
                  for (int i = 0; i < n; i++) {
                      arr[i] = sc.nextInt();
                  }
                  for (int i = 0; i < n / 2; i++) {
                      int temp = arr[i];
                      arr[i] = arr[n - i - 1];
                      arr[n - i - 1] = temp; //4268
                  }
                  System.out.println("Reversed array: " + Arrays.toString(arr));
              }
          }
          `
        },
        {
            Problem: `Write a Java program to find the common elements between two arrays.`,
            Number: 89,
            Solution: `
          import java.util.HashSet;
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the size of the first array: ");
                  int n1 = sc.nextInt();
                  int[] arr1 = new int[n1];
                  System.out.println("Enter elements of first array:");
                  for (int i = 0; i < n1; i++) arr1[i] = sc.nextInt();
          
                  System.out.print("Enter the size of the second array: ");
                  int n2 = sc.nextInt();
                  int[] arr2 = new int[n2];
                  System.out.println("Enter elements of second array:");
                  for (int i = 0; i < n2; i++) arr2[i] = sc.nextInt();
          
                  HashSet<Integer> set = new HashSet<>();
                  for (int i : arr1) set.add(i);
                  System.out.print("Common elements: ");
                  for (int j : arr2) {
                      if (set.contains(j)) System.out.print(j + " "); //4268
                  }
              }
          }
          `
        },
        {
            Problem: `Write a Java program to find the duplicate values of an array of integer values.`,
            Number: 90,
            Solution: `
          import java.util.HashSet;
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the size of the array: ");
                  int n = sc.nextInt();
                  int[] arr = new int[n];
                  System.out.println("Enter array elements:");
                  for (int i = 0; i < n; i++) {
                      arr[i] = sc.nextInt();
                  }
                  HashSet<Integer> set = new HashSet<>();
                  System.out.println("Duplicate elements:");
                  for (int i = 0; i < n; i++) {
                      if (!set.add(arr[i])) {
                          System.out.println(arr[i]); //4268
                      }
                  }
              }
          }
          `
        }, {
            Problem: `Write a Java program to convert an array to ArrayList.`,
            Number: 91,
            Solution: `
          import java.util.ArrayList;
          import java.util.Arrays;
          public class Practice1 {
              public static void main(String[] args) {
                  Integer[] arr = {1, 2, 3, 4, 5};
                  ArrayList<Integer> arrayList = new ArrayList<>(Arrays.asList(arr)); //4268
                  System.out.println("ArrayList: " + arrayList);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to add two matrices of the same size.`,
            Number: 92,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the number of rows and columns: ");
                  int rows = sc.nextInt();
                  int cols = sc.nextInt();
                  int[][] matrix1 = new int[rows][cols];
                  int[][] matrix2 = new int[rows][cols];
                  int[][] sumMatrix = new int[rows][cols];
          
                  System.out.println("Enter elements of matrix 1:");
                  for (int i = 0; i < rows; i++) {
                      for (int j = 0; j < cols; j++) {
                          matrix1[i][j] = sc.nextInt();
                      }
                  }
          
                  System.out.println("Enter elements of matrix 2:");
                  for (int i = 0; i < rows; i++) {
                      for (int j = 0; j < cols; j++) {
                          matrix2[i][j] = sc.nextInt();
                      }
                  }
          
                  for (int i = 0; i < rows; i++) {
                      for (int j = 0; j < cols; j++) {
                          sumMatrix[i][j] = matrix1[i][j] + matrix2[i][j]; //4268
                      }
                  }
          
                  System.out.println("Sum of the two matrices:");
                  for (int i = 0; i < rows; i++) {
                      for (int j = 0; j < cols; j++) {
                          System.out.print(sumMatrix[i][j] + " ");
                      }
                      System.out.println();
                  }
              }
          }
          `
        },
        {
            Problem: `Write a Java program to find the second largest number from the array.`,
            Number: 93,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the size of the array: ");
                  int n = sc.nextInt();
                  int[] arr = new int[n];
                  System.out.println("Enter array elements:");
                  for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
          
                  int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
                  for (int num : arr) {
                      if (num > first) {
                          second = first;
                          first = num;
                      } else if (num > second && num != first) {
                          second = num; //4268
                      }
                  }
                  System.out.println("Second largest number is: " + second);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to find the second lowest number from the array.`,
            Number: 94,
            Solution: `
          import java.util.Scanner;
          import java.util.Arrays;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the size of the array: ");
                  int n = sc.nextInt();
                  int[] arr = new int[n];
                  System.out.println("Enter array elements:");
                  for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
          
                  Arrays.sort(arr); //4268
                  System.out.println("Second lowest number is: " + arr[1]);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to find the number of even and odd integers in a given array of integers.`,
            Number: 95,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the size of the array: ");
                  int n = sc.nextInt();
                  int[] arr = new int[n];
                  System.out.println("Enter array elements:");
                  for (int i = 0; i < n; i++) {
                      arr[i] = sc.nextInt();
                  }
                  int evenCount = 0, oddCount = 0;
                  for (int num : arr) {
                      if (num % 2 == 0) evenCount++;
                      else oddCount++; //4268
                  }
                  System.out.println("Even numbers: " + evenCount);
                  System.out.println("Odd numbers: " + oddCount);
              }
          }
          `
        }, {
            Problem: `Write a Java program to get the difference between the largest and smallest values in an array of integers.`,
            Number: 96,
            Solution: `
          import java.util.Scanner;
          import java.util.Arrays;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the size of the array: ");
                  int n = sc.nextInt();
                  int[] arr = new int[n];
                  System.out.println("Enter array elements:");
                  for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
                  
                  int max = Arrays.stream(arr).max().getAsInt();
                  int min = Arrays.stream(arr).min().getAsInt(); //4268
                  System.out.println("Difference between largest and smallest: " + (max - min));
              }
          }
          `
        },
        {
            Problem: `Write a Java program to segregate all 0s on left side and all 1s on right side of a given array of 0s and 1s.`,
            Number: 97,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the size of the binary array: ");
                  int n = sc.nextInt();
                  int[] arr = new int[n];
                  System.out.println("Enter binary elements (0s and 1s):");
                  for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
                  
                  int left = 0;
                  for (int i = 0; i < n; i++) {
                      if (arr[i] == 0) {
                          int temp = arr[left];
                          arr[left] = arr[i];
                          arr[i] = temp;
                          left++; //4268
                      }
                  }
                  
                  System.out.print("Segregated Array: ");
                  for (int num : arr) System.out.print(num + " ");
              }
          }
          `
        },
        {
            Problem: `Write a Java program to cyclically rotate a given array clockwise by one.`,
            Number: 98,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the size of the array: ");
                  int n = sc.nextInt();
                  int[] arr = new int[n];
                  System.out.println("Enter array elements:");
                  for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
                  
                  int last = arr[n - 1];
                  for (int i = n - 1; i > 0; i--) arr[i] = arr[i - 1];
                  arr[0] = last; //4268
                  
                  System.out.print("Rotated Array: ");
                  for (int num : arr) System.out.print(num + " ");
              }
          }
          `
        },
        {
            Problem: `Java program to print all unique elements in an array.`,
            Number: 99,
            Solution: `
          import java.util.HashSet;
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the size of the array: ");
                  int n = sc.nextInt();
                  int[] arr = new int[n];
                  System.out.println("Enter array elements:");
                  for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
                  
                  HashSet<Integer> uniqueElements = new HashSet<>();
                  for (int num : arr) uniqueElements.add(num); //4268
                  
                  System.out.println("Unique elements: " + uniqueElements);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to sort the array in an ascending order.`,
            Number: 100,
            Solution: `
          import java.util.Arrays;
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the size of the array: ");
                  int n = sc.nextInt();
                  int[] arr = new int[n];
                  System.out.println("Enter array elements:");
                  for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
                  
                  Arrays.sort(arr); //4268
                  
                  System.out.print("Sorted Array in Ascending Order: ");
                  for (int num : arr) System.out.print(num + " ");
              }
          }
          `
        }, {
            Problem: `Write a Java Program to Sort the Array in Descending Order.`,
            Number: 101,
            Solution: `
          import java.util.Arrays;
          import java.util.Collections;
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the size of the array: ");
                  int n = sc.nextInt();
                  Integer[] arr = new Integer[n];
                  System.out.println("Enter array elements:");
                  for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
                  
                  Arrays.sort(arr, Collections.reverseOrder()); //4268
                  
                  System.out.print("Sorted Array in Descending Order: ");
                  for (int num : arr) System.out.print(num + " ");
              }
          }
          `
        },
        {
            Problem: `Write a Java Program to Sort Names in Alphabetical Order.`,
            Number: 102,
            Solution: `
          import java.util.Arrays;
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the number of names: ");
                  int n = sc.nextInt();
                  String[] names = new String[n];
                  sc.nextLine(); // Consume newline
                  System.out.println("Enter names:");
                  for (int i = 0; i < n; i++) names[i] = sc.nextLine();
                  
                  Arrays.sort(names); //4268
                  
                  System.out.println("Names in Alphabetical Order:");
                  for (String name : names) System.out.println(name);
              }
          }
          `
        },
        {
            Problem: `Write a Java Program to Display Transpose Matrix.`,
            Number: 103,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter number of rows: ");
                  int rows = sc.nextInt();
                  System.out.print("Enter number of columns: ");
                  int cols = sc.nextInt();
                  
                  int[][] matrix = new int[rows][cols];
                  System.out.println("Enter matrix elements:");
                  for (int i = 0; i < rows; i++)
                      for (int j = 0; j < cols; j++)
                          matrix[i][j] = sc.nextInt();
                  
                  System.out.println("Transpose of the Matrix:");
                  for (int i = 0; i < cols; i++) {
                      for (int j = 0; j < rows; j++)
                          System.out.print(matrix[j][i] + " ");
                      System.out.println(); //4268
                  }
              }
          }
          `
        },
        {
            Problem: `Write a Java Program to Search Key Elements in an Array.`,
            Number: 104,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the size of the array: ");
                  int n = sc.nextInt();
                  int[] arr = new int[n];
                  System.out.println("Enter array elements:");
                  for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
                  
                  System.out.print("Enter the key element to search: ");
                  int key = sc.nextInt();
                  
                  boolean found = false;
                  for (int num : arr) {
                      if (num == key) {
                          found = true; //4268
                          break;
                      }
                  }
                  if (found)
                      System.out.println("Key element found in the array.");
                  else
                      System.out.println("Key element not found.");
              }
          }
          `
        },
        {
            Problem: `Write a Java Program to Accept the Marks of a Student and find Total Marks and Percentage.`,
            Number: 105,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the number of subjects: ");
                  int n = sc.nextInt();
                  int[] marks = new int[n];
                  System.out.println("Enter marks for each subject:");
                  int total = 0;
                  for (int i = 0; i < n; i++) {
                      marks[i] = sc.nextInt();
                      total += marks[i]; //4268
                  }
                  
                  double percentage = (double) total / n;
                  System.out.println("Total Marks: " + total);
                  System.out.println("Percentage: " + percentage + "%");
              }
          }
          `
        }, {
            Problem: `Write a java program to print numbers from 1 to 10 using loop.`,
            Number: 106,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  for (int i = 1; i <= 10; i++) {
                      System.out.print(i + " "); //4268
                  }
              }
          }
          `
        },
        {
            Problem: `Write a java program to calculate the sum of first 10 natural numbers using loop.`,
            Number: 107,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  int sum = 0;
                  for (int i = 1; i <= 10; i++) {
                      sum += i; //4268
                  }
                  System.out.println("Sum of first 10 natural numbers: " + sum);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to print the multiplication table of a given number.`,
            Number: 108,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a number: ");
                  int num = sc.nextInt();
                  for (int i = 1; i <= 10; i++) {
                      System.out.println(num + " x " + i + " = " + (num * i)); //4268
                  }
              }
          }
          `
        },
        {
            Problem: `Write a Java program to find the factorial value of any number entered through the keyboard.`,
            Number: 109,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a number: ");
                  int n = sc.nextInt();
                  int factorial = 1;
                  for (int i = 1; i <= n; i++) {
                      factorial *= i; //4268
                  }
                  System.out.println("Factorial: " + factorial);
              }
          }
          `
        },
        {
            Problem: `Write a Java program that prompts the user to input an integer and then outputs the number with the digits reversed order.`,
            Number: 110,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter an integer: ");
                  int num = sc.nextInt();
                  int reversed = 0;
                  while (num != 0) {
                      reversed = reversed * 10 + num % 10;
                      num /= 10; //4268
                  }
                  System.out.println("Reversed Number: " + reversed);
              }
          }
          `
        },
        {
            Problem: `Write a Java program that reads a set of integers, and then prints the sum of the even and odd integers using loop.`,
            Number: 111,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the number of elements: ");
                  int n = sc.nextInt();
                  int evenSum = 0, oddSum = 0;
                  System.out.println("Enter the numbers:");
                  for (int i = 0; i < n; i++) {
                      int num = sc.nextInt();
                      if (num % 2 == 0) evenSum += num;
                      else oddSum += num; //4268
                  }
                  System.out.println("Sum of even numbers: " + evenSum);
                  System.out.println("Sum of odd numbers: " + oddSum);
              }
          }
          `
        }, {
            Problem: `Write a Java program to check whether the number is a prime number or not.`,
            Number: 112,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a number: ");
                  int num = sc.nextInt();
                  boolean isPrime = true;
                  for (int i = 2; i <= Math.sqrt(num); i++) {
                      if (num % i == 0) {
                          isPrime = false;
                          break; //4268
                      }
                  }
                  if (isPrime && num > 1) {
                      System.out.println(num + " is a prime number.");
                  } else {
                      System.out.println(num + " is not a prime number.");
                  }
              }
          }
          `
        },
        {
            Problem: `Write a Java program to calculate HCF of Two given numbers using loop.`,
            Number: 113,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter first number: ");
                  int num1 = sc.nextInt();
                  System.out.print("Enter second number: ");
                  int num2 = sc.nextInt();
                  int hcf = 1;
                  for (int i = 1; i <= num1 && i <= num2; i++) {
                      if (num1 % i == 0 && num2 % i == 0) {
                          hcf = i; //4268
                      }
                  }
                  System.out.println("HCF: " + hcf);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros.`,
            Number: 114,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  int positive = 0, negative = 0, zeros = 0;
                  while (true) {
                      System.out.print("Enter a number (or '0' to stop): ");
                      int num = sc.nextInt();
                      if (num == 0) break;
                      if (num > 0) positive++;
                      else if (num < 0) negative++;
                      else zeros++; //4268
                  }
                  System.out.println("Positive: " + positive);
                  System.out.println("Negative: " + negative);
                  System.out.println("Zeros: " + zeros);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered.`,
            Number: 115,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  int largest = Integer.MIN_VALUE, smallest = Integer.MAX_VALUE;
                  while (true) {
                      System.out.print("Enter a number (or '0' to stop): ");
                      int num = sc.nextInt();
                      if (num == 0) break;
                      if (num > largest) largest = num;
                      if (num < smallest) smallest = num; //4268
                  }
                  System.out.println("Largest: " + largest);
                  System.out.println("Smallest: " + smallest);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to print out all Armstrong numbers between 1 to 600 using loop.`,
            Number: 116,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("Armstrong numbers between 1 and 600:");
                  for (int i = 1; i <= 600; i++) {
                      int sum = 0, temp = i, digits = String.valueOf(i).length();
                      while (temp != 0) {
                          int rem = temp % 10;
                          sum += Math.pow(rem, digits); //4268
                          temp /= 10;
                      }
                      if (sum == i) {
                          System.out.println(i);
                      }
                  }
              }
          }
          `
        },
        {
            Problem: `Write a java program to count total number of notes in entered amount using loop.`,
            Number: 117,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the amount: ");
                  int amount = sc.nextInt();
                  int[] notes = {2000, 500, 100, 50, 20, 10, 5, 1};
                  for (int note : notes) {
                      int count = amount / note;
                      if (count > 0) {
                          System.out.println(note + " : " + count); //4268
                          amount %= note;
                      }
                  }
              }
          }
          `
        },
        {
            Problem: `Write a Java program to print Fibonacci series of n terms where n is input by user using loop.`,
            Number: 118,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the number of terms: ");
                  int n = sc.nextInt();
                  int a = 0, b = 1;
                  System.out.print("Fibonacci series: ");
                  for (int i = 1; i <= n; i++) {
                      System.out.print(a + " ");
                      int next = a + b;
                      a = b;
                      b = next; //4268
                  }
              }
          }
          `
        }, {
            Problem: `Write a java program to calculate the sum of following series where n is input by user.`,
            Number: 119,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter the value of n: ");
                  int n = sc.nextInt();
                  double sum = 0;
                  for (int i = 1; i <= n; i++) {
                      sum += (1.0 / i); //4268
                  }
                  System.out.println("Sum of the series: " + sum);
              }
          }
          `
        },
        {
            Problem: `Write a Java method to compute the average of three numbers.`,
            Number: 120,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("Average: " + average(5, 10, 15)); //4268
              }
          
              public static double average(int num1, int num2, int num3) {
                  return (num1 + num2 + num3) / 3.0;
              }
          }
          `
        },
        {
            Problem: `Write a Java method to find the smallest number among three numbers.`,
            Number: 121,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("Smallest number: " + smallest(5, 10, 3)); //4268
              }
          
              public static int smallest(int num1, int num2, int num3) {
                  return Math.min(num1, Math.min(num2, num3));
              }
          }
          `
        },
        {
            Problem: `Write a Java method to count all words in a string.`,
            Number: 122,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("Word count: " + countWords("This is a test string.")); //4268
              }
          
              public static int countWords(String str) {
                  String[] words = str.split("\\s+");
                  return words.length;
              }
          }
          `
        },
        {
            Problem: `Write a Java method to count all vowels in a string.`,
            Number: 123,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("Vowel count: " + countVowels("This is a test string.")); //4268
              }
          
              public static int countVowels(String str) {
                  int count = 0;
                  str = str.toLowerCase();
                  for (int i = 0; i < str.length(); i++) {
                      if ("aeiou".indexOf(str.charAt(i)) != -1) {
                          count++;
                      }
                  }
                  return count;
              }
          }
          `
        },
        {
            Problem: `Write a Java method to compute the sum of the digits in an integer.`,
            Number: 124,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("Sum of digits: " + sumOfDigits(12345)); //4268
              }
          
              public static int sumOfDigits(int num) {
                  int sum = 0;
                  while (num > 0) {
                      sum += num % 10;
                      num /= 10;
                  }
                  return sum;
              }
          }
          `
        },
        {
            Problem: `Write a Java method to check whether a year entered by the user is a leap year or not.`,
            Number: 125,
            Solution: `
          import java.util.Scanner;
          public class Practice1 {
              public static void main(String[] args) {
                  Scanner sc = new Scanner(System.in);
                  System.out.print("Enter a year: ");
                  int year = sc.nextInt();
                  if (isLeapYear(year)) {
                      System.out.println(year + " is a leap year."); //4268
                  } else {
                      System.out.println(year + " is not a leap year.");
                  }
              }
          
              public static boolean isLeapYear(int year) {
                  return (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
              }
          }
          `
        }, {
            Problem: `Write a Java method to calculate the area of a triangle.`,
            Number: 126,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("Area of triangle: " + areaOfTriangle(5, 10)); //4268
              }
          
              public static double areaOfTriangle(double base, double height) {
                  return 0.5 * base * height;
              }
          }
          `
        },
        {
            Problem: `Write a Java method to find the area of a pentagon.`,
            Number: 127,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("Area of pentagon: " + areaOfPentagon(6)); //4268
              }
          
              public static double areaOfPentagon(double side) {
                  return (5 * side * side) / (4 * Math.tan(Math.PI / 5));
              }
          }
          `
        },
        {
            Problem: `Write a Java method to find number is even number or not.`,
            Number: 128,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("Is 4 even? " + isEven(4)); //4268
                  System.out.println("Is 7 even? " + isEven(7));
              }
          
              public static boolean isEven(int num) {
                  return num % 2 == 0;
              }
          }
          `
        },
        {
            Problem: `Write a Java method to check numbers is palindrome number or not.`,
            Number: 129,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("Is 121 palindrome? " + isPalindrome(121)); //4268
                  System.out.println("Is 123 palindrome? " + isPalindrome(123));
              }
          
              public static boolean isPalindrome(int num) {
                  int original = num, reversed = 0;
                  while (num != 0) {
                      reversed = reversed * 10 + num % 10;
                      num /= 10;
                  }
                  return original == reversed;
              }
          }
          `
        },
        {
            Problem: `Write a Java method to displays prime numbers between 1 to 20.`,
            Number: 130,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  displayPrimes(1, 20); //4268
              }
          
              public static void displayPrimes(int start, int end) {
                  for (int num = start; num <= end; num++) {
                      if (isPrime(num)) {
                          System.out.println(num);
                      }
                  }
              }
          
              public static boolean isPrime(int num) {
                  if (num <= 1) return false;
                  for (int i = 2; i <= Math.sqrt(num); i++) {
                      if (num % i == 0) return false;
                  }
                  return true;
              }
          }
          `
        },
        {
            Problem: `Write a Java method to find GCD and LCM of Two Numbers.`,
            Number: 131,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  int num1 = 12, num2 = 15;
                  System.out.println("GCD of " + num1 + " and " + num2 + ": " + findGCD(num1, num2)); //4268
                  System.out.println("LCM of " + num1 + " and " + num2 + ": " + findLCM(num1, num2));
              }
          
              public static int findGCD(int num1, int num2) {
                  while (num2 != 0) {
                      int temp = num2;
                      num2 = num1 % num2;
                      num1 = temp;
                  }
                  return num1;
              }
          
              public static int findLCM(int num1, int num2) {
                  return (num1 * num2) / findGCD(num1, num2);
              }
          }
          `
        },
        {
            Problem: `Write a Java method to find factorial using recursion in java.`,
            Number: 132,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("Factorial of 5: " + factorial(5)); //4268
              }
          
              public static int factorial(int num) {
                  if (num == 0) {
                      return 1;
                  }
                  return num * factorial(num - 1);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to reverse an integer number.`,
            Number: 133,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("Reversed number: " + reverse(12345)); //4268
              }
          
              public static int reverse(int num) {
                  int reversed = 0;
                  while (num != 0) {
                      reversed = reversed * 10 + num % 10;
                      num /= 10;
                  }
                  return reversed;
              }
          }
          `
        },
        {
            Problem: `Write a Java program to round a float number to specified decimals.`,
            Number: 134,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("Rounded number: " + roundToDecimals(3.14159, 2)); //4268
              }
          
              public static double roundToDecimals(double num, int decimals) {
                  double factor = Math.pow(10, decimals);
                  return Math.round(num * factor) / factor;
              }
          }
          `
        },
        {
            Problem: `Write a Java program to test if a double number is an integer.`,
            Number: 135,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("Is 5.0 an integer? " + isInteger(5.0)); //4268
                  System.out.println("Is 3.14 an integer? " + isInteger(3.14));
              }
          
              public static boolean isInteger(double num) {
                  return num == Math.floor(num);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to round up the result of integer division.`,
            Number: 136,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("Rounded division result: " + roundUpDivision(7, 3)); //4268
              }
          
              public static int roundUpDivision(int dividend, int divisor) {
                  return (int) Math.ceil((double) dividend / divisor);
              }
          }
          `
        }, {
            Problem: `Write a Java program to convert Roman number to an integer number.`,
            Number: 137,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("Roman 'IX' to integer: " + romanToInt("IX")); //4268
              }
          
              public static int romanToInt(String roman) {
                  int result = 0;
                  int prevValue = 0;
                  for (int i = roman.length() - 1; i >= 0; i--) {
                      int value = romanCharToInt(roman.charAt(i));
                      if (value < prevValue) {
                          result -= value;
                      } else {
                          result += value;
                      }
                      prevValue = value;
                  }
                  return result;
              }
          
              public static int romanCharToInt(char ch) {
                  switch (ch) {
                      case 'I': return 1;
                      case 'V': return 5;
                      case 'X': return 10;
                      case 'L': return 50;
                      case 'C': return 100;
                      case 'D': return 500;
                      case 'M': return 1000;
                      default: return 0;
                  }
              }
          }
          `
        },
        {
            Problem: `Write a Java program to convert a float value to absolute value.`,
            Number: 138,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("Absolute value of -3.14: " + absoluteValue(-3.14)); //4268
                  System.out.println("Absolute value of 4.5: " + absoluteValue(4.5));
              }
          
              public static double absoluteValue(double num) {
                  return Math.abs(num);
              }
          }
          `
        },
        {
            Problem: `Write a Java program to accept a float value of number and return a rounded float value.`,
            Number: 139,
            Solution: `
          public class Practice1 {
              public static void main(String[] args) {
                  System.out.println("Rounded value of 3.14159: " + roundFloat(3.14159)); //4268
              }
          
              public static float roundFloat(float num) {
                  return Math.round(num * 100.0f) / 100.0f; // rounding to two decimal places
              }
          }
          `
        }];

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
        {
            Problem: "Java Program to Display Some Text in the Frame using Labels",
            Number: 1,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Label Example");
                        Label label = new Label("Welcome to Java!");
                        f.add(label);
                        f.setSize(300, 200);
                        f.setLayout(new FlowLayout());
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Java Program to Create Text Area and Password Field",
            Number: 2,
            Solution: `
                import java.awt.*;
                import javax.swing.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        JFrame frame = new JFrame("Text Area and Password Field Example");
                        JTextArea textArea = new JTextArea(5, 20);
                        JPasswordField passwordField = new JPasswordField(20);
                        frame.add(textArea, BorderLayout.CENTER);
                        frame.add(passwordField, BorderLayout.SOUTH);
                        frame.setSize(300, 200);
                        frame.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Java Program to Create a Button and Display Image in the Frame when Clicked",
            Number: 3,
            Solution: `
                import java.awt.*;
                import java.awt.event.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Button Image Example");
                        Button b = new Button("Click Me");
                        f.add(b);
                        b.addActionListener(new ActionListener() {
                            public void actionPerformed(ActionEvent e) {
                                f.add(new Label(new ImageIcon("image.jpg")));
                                f.repaint();
                            }
                        });
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Java Program to Create 2 Radio Buttons and Display Selected Button Label",
            Number: 4,
            Solution: `
                import java.awt.*;
                import java.awt.event.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Radio Button Example");
                        CheckboxGroup group = new CheckboxGroup();
                        Checkbox radio1 = new Checkbox("Option 1", group, false);
                        Checkbox radio2 = new Checkbox("Option 2", group, false);
                        f.add(radio1);
                        f.add(radio2);
                        f.setLayout(new FlowLayout());
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Java Program to Handle KeyBoardEvent",
            Number: 5,
            Solution: `
                import java.awt.event.*;
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Key Event Example");
                        f.addKeyListener(new KeyAdapter() {
                            public void keyPressed(KeyEvent e) {
                                System.out.println("Key Pressed: " + e.getKeyChar());
                            }
                        });
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Java Program to Handle MouseEvent",
            Number: 6,
            Solution: `
                import java.awt.event.*;
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Mouse Event Example");
                        f.addMouseListener(new MouseAdapter() {
                            public void mouseClicked(MouseEvent e) {
                                System.out.println("Mouse Clicked at: " + e.getX() + ", " + e.getY());
                            }
                        });
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Java Program to Get and Set State and Get Label of a Check Box",
            Number: 7,
            Solution: `
                import java.awt.*;
                import java.awt.event.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Checkbox Example");
                        Checkbox checkbox = new Checkbox("Accept Terms and Conditions");
                        f.add(checkbox);
                        checkbox.addItemListener(new ItemListener() {
                            public void itemStateChanged(ItemEvent e) {
                                System.out.println("Checkbox State: " + e.getStateChange());
                                System.out.println("Checkbox Label: " + checkbox.getLabel());
                            }
                        });
                        f.setLayout(new FlowLayout());
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Java Program to Create Check Boxes and Radio Buttons",
            Number: 8,
            Solution: `
                import java.awt.*;
                import java.awt.event.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Checkbox and Radio Buttons Example");
                        Checkbox checkbox1 = new Checkbox("Check Box 1");
                        Checkbox checkbox2 = new Checkbox("Check Box 2");
                        CheckboxGroup group = new CheckboxGroup();
                        Checkbox radio1 = new Checkbox("Radio 1", group, false);
                        Checkbox radio2 = new Checkbox("Radio 2", group, false);
                        f.add(checkbox1);
                        f.add(checkbox2);
                        f.add(radio1);
                        f.add(radio2);
                        f.setLayout(new FlowLayout());
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Java Program to Create and Switch between Frames using Buttons",
            Number: 9,
            Solution: `
                import java.awt.*;
                import java.awt.event.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame frame1 = new Frame("Frame 1");
                        Frame frame2 = new Frame("Frame 2");
                        Button button1 = new Button("Switch to Frame 2");
                        button1.addActionListener(new ActionListener() {
                            public void actionPerformed(ActionEvent e) {
                                frame1.setVisible(false);
                                frame2.setVisible(true);
                            }
                        });
                        frame1.add(button1);
                        frame1.setSize(300, 200);
                        frame1.setVisible(true);
                        frame2.setSize(300, 200);
                        frame2.setVisible(false);
                    }
                }`
        }, {
            Problem: "Java Program to Create and Set Border to Push Buttons",
            Number: 10,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Push Button with Border");
                        Button b = new Button("Click Me");
                        b.setBounds(100, 100, 100, 50);
                        b.setBorder(new java.awt.BorderLayout());
                        f.add(b);
                        f.setSize(300, 200);
                        f.setLayout(null);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Java Program to Create a List Box to Select Multiple Items and Display it in the Frame",
            Number: 11,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("List Box Example");
                        List list = new List();
                        list.add("Item 1");
                        list.add("Item 2");
                        list.add("Item 3");
                        list.add("Item 4");
                        list.setMultipleMode(true);
                        f.add(list);
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Java Program to Display a Message in a New Frame",
            Number: 12,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame frame1 = new Frame("Message Frame");
                        Label message = new Label("This is a new frame!");
                        frame1.add(message);
                        frame1.setSize(300, 200);
                        frame1.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Java Program to Close the Frame using WindowAdapter Class",
            Number: 13,
            Solution: `
                import java.awt.*;
                import java.awt.event.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("WindowAdapter Example");
                        f.addWindowListener(new WindowAdapter() {
                            public void windowClosing(WindowEvent we) {
                                System.exit(0);
                            }
                        });
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Java Program to Check Which Fonts are Available in a Local System",
            Number: 14,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        GraphicsEnvironment ge = GraphicsEnvironment.getLocalGraphicsEnvironment();
                        String[] fonts = ge.getAvailableFontFamilyNames();
                        for(String font : fonts) {
                            System.out.println(font);
                        }
                    }
                }`
        },
        {
            Problem: "Java Program to Display Text in Different Fonts",
            Number: 15,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Font Example");
                        Label label = new Label("Hello World!");
                        label.setFont(new Font("Serif", Font.BOLD, 24));
                        f.add(label);
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Java Program to Change Frame Background Color as Cyan",
            Number: 16,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Background Color Example");
                        f.setBackground(Color.CYAN);
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Java Program to Change the Applet Background Colour when Button Clicked",
            Number: 17,
            Solution: `
                import java.applet.*;
                import java.awt.*;
                import java.awt.event.*;
                public class Practice1 extends Applet {
                    Button button;
                    public void init() {
                        button = new Button("Change Color");
                        add(button);
                        button.addActionListener(new ActionListener() {
                            public void actionPerformed(ActionEvent e) {
                                setBackground(Color.CYAN);
                            }
                        });
                    }
                }`
        },
        {
            Problem: "Java Program to Display Several Dots on the Screen Continuously",
            Number: 18,
            Solution: `
                import java.awt.*;
                public class Practice1 extends Frame {
                    public void paint(Graphics g) {
                        for(int i = 0; i < 10; i++) {
                            g.drawOval(i * 20, 100, 5, 5);
                        }
                    }
                    public static void main(String[] args) {
                        Practice1 p = new Practice1();
                        p.setSize(300, 200);
                        p.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Java Program to Validate the TextField for only entering numbers using KeyListener",
            Number: 19,
            Solution: `
                import java.awt.*;
                import java.awt.event.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("TextField Number Validation");
                        TextField textField = new TextField();
                        textField.addKeyListener(new KeyAdapter() {
                            public void keyTyped(KeyEvent e) {
                                char c = e.getKeyChar();
                                if(!Character.isDigit(c)) {
                                    e.consume();
                                }
                            }
                        });
                        f.add(textField);
                        f.setSize(300, 200);
                        f.setLayout(new FlowLayout());
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Java Program to Validate the TextField for only entering email id using KeyAdapter",
            Number: 20,
            Solution: `
                import java.awt.*;
                import java.awt.event.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("TextField Email Validation");
                        TextField textField = new TextField();
                        textField.addKeyListener(new KeyAdapter() {
                            public void keyTyped(KeyEvent e) {
                                char c = e.getKeyChar();
                                if(Character.isLetterOrDigit(c) || c == '@' || c == '.') {
                                    e.consume();
                                }
                            }
                        });
                        f.add(textField);
                        f.setSize(300, 200);
                        f.setLayout(new FlowLayout());
                        f.setVisible(true);
                    }
                }`
        }
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
    let arr1 = [
        {
            Problem: "How to convert String to int",
            Number: 1,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        String str = "123";
                        int num = Integer.parseInt(str);
                        System.out.println(num);
                    }
                }`
        },
        {
            Problem: "How to convert int to String",
            Number: 2,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        int num = 123;
                        String str = String.valueOf(num);
                        System.out.println(str);
                    }
                }`
        },
        {
            Problem: "How to convert String to long",
            Number: 3,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        String str = "123456789";
                        long num = Long.parseLong(str);
                        System.out.println(num);
                    }
                }`
        },
        {
            Problem: "How to convert long to String",
            Number: 4,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        long num = 123456789;
                        String str = String.valueOf(num);
                        System.out.println(str);
                    }
                }`
        },
        {
            Problem: "How to convert String to float",
            Number: 5,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        String str = "123.45";
                        float num = Float.parseFloat(str);
                        System.out.println(num);
                    }
                }`
        },
        {
            Problem: "How to convert float to String",
            Number: 6,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        float num = 123.45f;
                        String str = String.valueOf(num);
                        System.out.println(str);
                    }
                }`
        },
        {
            Problem: "How to convert String to double",
            Number: 7,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        String str = "123.45";
                        double num = Double.parseDouble(str);
                        System.out.println(num);
                    }
                }`
        },
        {
            Problem: "How to convert double to String",
            Number: 8,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        double num = 123.45;
                        String str = String.valueOf(num);
                        System.out.println(str);
                    }
                }`
        },
        {
            Problem: "How to convert String to Date",
            Number: 9,
            Solution: `
                import java.text.SimpleDateFormat;
                import java.util.Date;
                public class Practice1 {
                    public static void main(String[] args) throws Exception {
                        String str = "2023-11-11";
                        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                        Date date = sdf.parse(str);
                        System.out.println(date);
                    }
                }`
        },
        {
            Problem: "How to convert Date to String",
            Number: 10,
            Solution: `
                import java.text.SimpleDateFormat;
                import java.util.Date;
                public class Practice1 {
                    public static void main(String[] args) {
                        Date date = new Date();
                        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                        String str = sdf.format(date);
                        System.out.println(str);
                    }
                }`
        },
        {
            Problem: "How to convert String to char",
            Number: 11,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        String str = "Hello";
                        char c = str.charAt(0);
                        System.out.println(c);
                    }
                }`
        },
        {
            Problem: "How to convert char to String",
            Number: 12,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        char c = 'H';
                        String str = String.valueOf(c);
                        System.out.println(str);
                    }
                }`
        },
        {
            Problem: "How to convert String to Object",
            Number: 13,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        String str = "Hello World";
                        Object obj = (Object)str;
                        System.out.println(obj);
                    }
                }`
        },
        {
            Problem: "How to convert Object to String",
            Number: 14,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        Object obj = "Hello World";
                        String str = (String) obj;
                        System.out.println(str);
                    }
                }`
        },
        {
            Problem: "How to convert int to long",
            Number: 15,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        int num = 123;
                        long lnum = (long) num;
                        System.out.println(lnum);
                    }
                }`
        },
        {
            Problem: "How to convert long to int",
            Number: 16,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        long lnum = 123456789;
                        int num = (int) lnum;
                        System.out.println(num);
                    }
                }`
        },
        {
            Problem: "How to convert int to double",
            Number: 17,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        int num = 123;
                        double dnum = (double) num;
                        System.out.println(dnum);
                    }
                }`
        },
        {
            Problem: "How to convert double to int",
            Number: 18,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        double dnum = 123.45;
                        int num = (int) dnum;
                        System.out.println(num);
                    }
                }`
        },
        {
            Problem: "How to convert char to int",
            Number: 19,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        char c = 'A';
                        int num = (int) c;
                        System.out.println(num);
                    }
                }`
        },
        {
            Problem: "How to convert int to char",
            Number: 20,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        int num = 65;
                        char c = (char) num;
                        System.out.println(c);
                    }
                }`
        },
        {
            Problem: "How to convert String to boolean",
            Number: 21,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        String str = "true";
                        boolean b = Boolean.parseBoolean(str);
                        System.out.println(b);
                    }
                }`
        },
        {
            Problem: "How to convert boolean to String",
            Number: 22,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        boolean b = true;
                        String str = String.valueOf(b);
                        System.out.println(str);
                    }
                }`
        },
        {
            Problem: "How to convert Date to Timestamp",
            Number: 23,
            Solution: `
                import java.sql.Timestamp;
                import java.util.Date;
                public class Practice1 {
                    public static void main(String[] args) {
                        Date date = new Date();
                        Timestamp timestamp = new Timestamp(date.getTime());
                        System.out.println(timestamp);
                    }
                }`
        },
        {
            Problem: "How to convert Timestamp to Date",
            Number: 24,
            Solution: `
                import java.sql.Timestamp;
                import java.util.Date;
                public class Practice1 {
                    public static void main(String[] args) {
                        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
                        Date date = new Date(timestamp.getTime());
                        System.out.println(date);
                    }
                }`
        },
        {
            Problem: "How to convert Binary to Decimal",
            Number: 25,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        String binary = "1011";
                        int decimal = Integer.parseInt(binary, 2);
                        System.out.println(decimal);
                    }
                }`
        },
        {
            Problem: "How to convert Decimal to Binary",
            Number: 26,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        int decimal = 11;
                        String binary = Integer.toBinaryString(decimal);
                        System.out.println(binary);
                    }
                }`
        },
        {
            Problem: "How to convert Hex to Decimal",
            Number: 27,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        String hex = "A";
                        int decimal = Integer.parseInt(hex, 16);
                        System.out.println(decimal);
                    }
                }`
        }, {
            Problem: "How to convert Decimal to Hex",
            Number: 28,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        int decimal = 10;
                        String hex = Integer.toHexString(decimal);
                        System.out.println(hex);
                    }
                }`
        },
        {
            Problem: "How to convert Octal to Decimal",
            Number: 29,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        String octal = "12";
                        int decimal = Integer.parseInt(octal, 8);
                        System.out.println(decimal);
                    }
                }`
        },
        {
            Problem: "How to convert Decimal to Octal",
            Number: 30,
            Solution: `
                public class Practice1 {
                    public static void main(String[] args) {
                        int decimal = 10;
                        String octal = Integer.toOctalString(decimal);
                        System.out.println(octal);
                    }
                }`
        }


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
    let arr1 = [
        {
            Problem: `Create an applet showing the string "Hello World" which is embedded in the HTML page.`,
            Number: 1,
            Solution: `
          import java.applet.Applet;
          import java.awt.Graphics;
          
          public class HelloWorldApplet extends Applet {
              public void paint(Graphics g) {
                  g.drawString("Hello World", 50, 50);
              }
          }
          `
        },
        {
            Problem: `Create an applet showing the string "Hello World" which is executed by an appletviewer.`,
            Number: 2,
            Solution: `
          import java.applet.Applet;
          import java.awt.Graphics;
          
          public class HelloWorldAppletViewer extends Applet {
              public void paint(Graphics g) {
                  g.drawString("Hello World", 20, 30);
              }
          }
          `
        },
        {
            Problem: `Create an applet in Java to draw a circle.`,
            Number: 3,
            Solution: `
          import java.applet.Applet;
          import java.awt.Graphics;
          
          public class CircleApplet extends Applet {
              public void paint(Graphics g) {
                  g.drawOval(50, 50, 100, 100);
              }
          }
          `
        },
        {
            Problem: `Create an applet in Java to draw a polygon.`,
            Number: 4,
            Solution: `
          import java.applet.Applet;
          import java.awt.Graphics;
          
          public class PolygonApplet extends Applet {
              public void paint(Graphics g) {
                  int[] xPoints = {50, 100, 150, 120, 80};
                  int[] yPoints = {50, 20, 50, 100, 100};
                  g.drawPolygon(xPoints, yPoints, 5);
              }
          }
          `
        },
        {
            Problem: `Create an applet in Java to draw a rectangle.`,
            Number: 5,
            Solution: `
          import java.applet.Applet;
          import java.awt.Graphics;
          
          public class RectangleApplet extends Applet {
              public void paint(Graphics g) {
                  g.drawRect(30, 30, 200, 100);
              }
          }
          `
        },
        {
            Problem: `Create an applet in Java to draw a square.`,
            Number: 6,
            Solution: `
          import java.applet.Applet;
          import java.awt.Graphics;
          
          public class SquareApplet extends Applet {
              public void paint(Graphics g) {
                  g.drawRect(50, 50, 100, 100);
              }
          }
          `
        },
        {
            Problem: `Create an applet in Java to draw 4 concentric circles.`,
            Number: 7,
            Solution: `
          import java.applet.Applet;
          import java.awt.Graphics;
          
          public class ConcentricCirclesApplet extends Applet {
              public void paint(Graphics g) {
                  for (int i = 0; i < 4; i++) {
                      g.drawOval(50 - (i * 10), 50 - (i * 10), 100 + (i * 20), 100 + (i * 20));
                  }
              }
          }
          `
        },
        {
            Problem: `Create an applet in Java to draw a line.`,
            Number: 8,
            Solution: `
          import java.applet.Applet;
          import java.awt.Graphics;
          
          public class LineApplet extends Applet {
              public void paint(Graphics g) {
                  g.drawLine(20, 20, 180, 180);
              }
          }
          `
        },
        {
            Problem: `Create an applet in Java to draw an oval.`,
            Number: 9,
            Solution: `
          import java.applet.Applet;
          import java.awt.Graphics;
          
          public class OvalApplet extends Applet {
              public void paint(Graphics g) {
                  g.drawOval(50, 50, 150, 100);
              }
          }
          `
        },
        {
            Problem: `Create an applet in Java to draw an arc.`,
            Number: 10,
            Solution: `
          import java.applet.Applet;
          import java.awt.Graphics;
          
          public class ArcApplet extends Applet {
              public void paint(Graphics g) {
                  g.drawArc(30, 40, 100, 100, 0, 180);
              }
          }
          `
        },
        {
            Problem: `Create an applet in Java to change the background color.`,
            Number: 11,
            Solution: `
          import java.applet.Applet;
          import java.awt.Color;
          
          public class BackgroundColorApplet extends Applet {
              public void init() {
                  setBackground(Color.CYAN);
              }
          }
          `
        },
        {
            Problem: `Create an applet in Java to draw a rounded rectangle.`,
            Number: 12,
            Solution: `
          import java.applet.Applet;
          import java.awt.Graphics;
          
          public class RoundedRectangleApplet extends Applet {
              public void paint(Graphics g) {
                  g.drawRoundRect(30, 30, 200, 100, 50, 50);
              }
          }
          `
        },
        {
            Problem: `Create an applet in Java to set font.`,
            Number: 13,
            Solution: `
          import java.applet.Applet;
          import java.awt.Graphics;
          import java.awt.Font;
          
          public class FontApplet extends Applet {
              public void paint(Graphics g) {
                  g.setFont(new Font("Serif", Font.BOLD, 24));
                  g.drawString("Hello World", 50, 50);
              }
          }
          `
        },
        {
            Problem: `Create an applet to display a digital clock.`,
            Number: 14,
            Solution: `
          import java.applet.Applet;
          import java.awt.Graphics;
          import java.util.Date;
          
          public class DigitalClockApplet extends Applet implements Runnable {
              Thread t;
              public void start() {
                  t = new Thread(this);
                  t.start();
              }
              public void run() {
                  while (true) {
                      repaint();
                      try { Thread.sleep(1000); } catch (Exception e) {}
                  }
              }
              public void paint(Graphics g) {
                  g.drawString(new Date().toString(), 20, 30);
              }
          }
          `
        },
        {
            Problem: `Java Program to Draw a Smiling Face using Graphics Class Methods.`,
            Number: 15,
            Solution: `
          import java.applet.Applet;
          import java.awt.Graphics;
          
          public class SmilingFaceApplet extends Applet {
              public void paint(Graphics g) {
                  g.drawOval(50, 50, 150, 150);
                  g.fillOval(85, 100, 20, 20);
                  g.fillOval(145, 100, 20, 20);
                  g.drawArc(90, 130, 70, 50, 0, -180);
              }
          }
          `
        }
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
function AWT() {
    document.querySelector(".Questions ol").innerHTML = ""
    document.querySelector(".Solutions h2").innerHTML = ""
    document.querySelector(".Solutions pre code").innerHTML = ""
    let currentIndex = -1
    let arr1 = [
        {
            Problem: "Create a simple AWT application that displays a button with FlowLayout manager",
            Number: 1,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Button with FlowLayout");
                        Button b = new Button("Click Me");
                        f.setLayout(new FlowLayout());
                        f.add(b);
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Create a simple AWT application that displays a button with Custom Layout",
            Number: 2,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Button with Custom Layout");
                        Button b = new Button("Click Me");
                        f.setLayout(new BorderLayout());
                        f.add(b, BorderLayout.CENTER);
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Create a simple AWT application that displays multiple buttons with BorderLayout manager (North, East, West, South, Center)",
            Number: 3,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Multiple Buttons with BorderLayout");
                        f.setLayout(new BorderLayout());
                        f.add(new Button("North"), BorderLayout.NORTH);
                        f.add(new Button("East"), BorderLayout.EAST);
                        f.add(new Button("West"), BorderLayout.WEST);
                        f.add(new Button("South"), BorderLayout.SOUTH);
                        f.add(new Button("Center"), BorderLayout.CENTER);
                        f.setSize(400, 400);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Create a simple AWT application that displays a TextField with FlowLayout manager",
            Number: 4,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("TextField with FlowLayout");
                        TextField tf = new TextField("Enter Text");
                        f.setLayout(new FlowLayout());
                        f.add(tf);
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Create a simple AWT application that displays a TextField with Custom Layout",
            Number: 5,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("TextField with Custom Layout");
                        TextField tf = new TextField("Enter Text");
                        f.setLayout(new BorderLayout());
                        f.add(tf, BorderLayout.CENTER);
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Create a simple AWT application that displays a Checkbox with FlowLayout manager",
            Number: 6,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Checkbox with FlowLayout");
                        Checkbox cb = new Checkbox("Accept Terms");
                        f.setLayout(new FlowLayout());
                        f.add(cb);
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Create a simple AWT application that displays a Checkbox with Custom Layout",
            Number: 7,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Checkbox with Custom Layout");
                        Checkbox cb = new Checkbox("Accept Terms");
                        f.setLayout(new BorderLayout());
                        f.add(cb, BorderLayout.CENTER);
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Create a simple AWT application that displays a Label with FlowLayout manager",
            Number: 8,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Label with FlowLayout");
                        Label lbl = new Label("This is a label");
                        f.setLayout(new FlowLayout());
                        f.add(lbl);
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Create a simple AWT application that displays a Label with Custom Layout",
            Number: 9,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Label with Custom Layout");
                        Label lbl = new Label("This is a label");
                        f.setLayout(new BorderLayout());
                        f.add(lbl, BorderLayout.CENTER);
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Create a simple AWT application that displays a Choice with FlowLayout manager",
            Number: 10,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Choice with FlowLayout");
                        Choice ch = new Choice();
                        ch.add("Option 1");
                        ch.add("Option 2");
                        ch.add("Option 3");
                        f.setLayout(new FlowLayout());
                        f.add(ch);
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Create a simple AWT application that displays a Choice with Custom Layout",
            Number: 11,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("Choice with Custom Layout");
                        Choice ch = new Choice();
                        ch.add("Option 1");
                        ch.add("Option 2");
                        ch.add("Option 3");
                        f.setLayout(new BorderLayout());
                        f.add(ch, BorderLayout.CENTER);
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Create a simple AWT application that displays a CheckboxGroup with FlowLayout manager",
            Number: 12,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("CheckboxGroup with FlowLayout");
                        CheckboxGroup group = new CheckboxGroup();
                        Checkbox cb1 = new Checkbox("Option 1", group, false);
                        Checkbox cb2 = new Checkbox("Option 2", group, false);
                        f.setLayout(new FlowLayout());
                        f.add(cb1);
                        f.add(cb2);
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Create a simple AWT application that displays a CheckboxGroup with Custom Layout",
            Number: 13,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("CheckboxGroup with Custom Layout");
                        CheckboxGroup group = new CheckboxGroup();
                        Checkbox cb1 = new Checkbox("Option 1", group, false);
                        Checkbox cb2 = new Checkbox("Option 2", group, false);
                        f.setLayout(new BorderLayout());
                        f.add(cb1, BorderLayout.NORTH);
                        f.add(cb2, BorderLayout.SOUTH);
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Create a simple AWT application that displays a List with FlowLayout manager",
            Number: 14,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("List with FlowLayout");
                        List list = new List();
                        list.add("Item 1");
                        list.add("Item 2");
                        list.add("Item 3");
                        f.setLayout(new FlowLayout());
                        f.add(list);
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Create a simple AWT application that displays a List with Custom Layout",
            Number: 15,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("List with Custom Layout");
                        List list = new List();
                        list.add("Item 1");
                        list.add("Item 2");
                        list.add("Item 3");
                        f.setLayout(new BorderLayout());
                        f.add(list, BorderLayout.CENTER);
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },
        {
            Problem: "Create a simple AWT application that displays a TextArea with FlowLayout manager",
            Number: 16,
            Solution: `
                import java.awt.*;
                public class Practice1 {
                    public static void main(String[] args) {
                        Frame f = new Frame("TextArea with FlowLayout");
                        TextArea ta = new TextArea();
                        f.setLayout(new FlowLayout());
                        f.add(ta);
                        f.setSize(300, 200);
                        f.setVisible(true);
                    }
                }`
        },

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
    let arr1 = [
        {
            Problem: "Enter the character from user using InputStreamReader",
            Number: 1,
            Solution: `
                import java.io.*;
                public class Practice1 {
                    public static void main(String[] args) throws IOException {
                        InputStreamReader isr = new InputStreamReader(System.in);
                        BufferedReader br = new BufferedReader(isr);
                        System.out.print("Enter a character: ");
                        char ch = (char) br.read();
                        System.out.println("You entered: " + ch);
                    }
                }`
        },
        {
            Problem: "Enter the string from user using BufferedStreamReader",
            Number: 2,
            Solution: `
                import java.io.*;
                public class Practice1 {
                    public static void main(String[] args) throws IOException {
                        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
                        System.out.print("Enter a string: ");
                        String str = br.readLine();
                        System.out.println("You entered: " + str);
                    }
                }`
        },
        {
            Problem: "Enter the integer from user using Scanner class",
            Number: 3,
            Solution: `
                import java.util.Scanner;
                public class Practice1 {
                    public static void main(String[] args) {
                        Scanner sc = new Scanner(System.in);
                        System.out.print("Enter an integer: ");
                        int num = sc.nextInt();
                        System.out.println("You entered: " + num);
                    }
                }`
        },
        {
            Problem: "Enter the float from user using Scanner class",
            Number: 4,
            Solution: `
                import java.util.Scanner;
                public class Practice1 {
                    public static void main(String[] args) {
                        Scanner sc = new Scanner(System.in);
                        System.out.print("Enter a float number: ");
                        float num = sc.nextFloat();
                        System.out.println("You entered: " + num);
                    }
                }`
        },
        {
            Problem: "Enter the double from user using Scanner class",
            Number: 5,
            Solution: `
                import java.util.Scanner;
                public class Practice1 {
                    public static void main(String[] args) {
                        Scanner sc = new Scanner(System.in);
                        System.out.print("Enter a double number: ");
                        double num = sc.nextDouble();
                        System.out.println("You entered: " + num);
                    }
                }`
        },
        {
            Problem: "Enter the boolean from user using Scanner class",
            Number: 6,
            Solution: `
                import java.util.Scanner;
                public class Practice1 {
                    public static void main(String[] args) {
                        Scanner sc = new Scanner(System.in);
                        System.out.print("Enter a boolean value (true/false): ");
                        boolean bool = sc.nextBoolean();
                        System.out.println("You entered: " + bool);
                    }
                }`
        },
        {
            Problem: "Enter the short integer from user using Scanner class",
            Number: 7,
            Solution: `
                import java.util.Scanner;
                public class Practice1 {
                    public static void main(String[] args) {
                        Scanner sc = new Scanner(System.in);
                        System.out.print("Enter a short integer: ");
                        short num = sc.nextShort();
                        System.out.println("You entered: " + num);
                    }
                }`
        },
        {
            Problem: "Enter the long integer from user using Scanner class",
            Number: 8,
            Solution: `
                import java.util.Scanner;
                public class Practice1 {
                    public static void main(String[] args) {
                        Scanner sc = new Scanner(System.in);
                        System.out.print("Enter a long integer: ");
                        long num = sc.nextLong();
                        System.out.println("You entered: " + num);
                    }
                }`
        },
        {
            Problem: "Get all characters from the file and display on the screen",
            Number: 9,
            Solution: `
                import java.io.*;
                public class Practice1 {
                    public static void main(String[] args) throws IOException {
                        BufferedReader br = new BufferedReader(new FileReader("input.txt"));
                        int ch;
                        while ((ch = br.read()) != -1) {
                            System.out.print((char) ch);
                        }
                        br.close();
                    }
                }`
        },
        {
            Problem: "Get all characters from the file, count number of lines, words, characters and display on the screen",
            Number: 10,
            Solution: `
                import java.io.*;
                public class Practice1 {
                    public static void main(String[] args) throws IOException {
                        BufferedReader br = new BufferedReader(new FileReader("input.txt"));
                        int lines = 0, words = 0, chars = 0;
                        String line;
                        while ((line = br.readLine()) != null) {
                            lines++;
                            chars += line.length();
                            words += line.split("\\s+").length;
                        }
                        System.out.println("Lines: " + lines);
                        System.out.println("Words: " + words);
                        System.out.println("Characters: " + chars);
                        br.close();
                    }
                }`
        }
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
function Interfaces() {
    document.querySelector(".Questions ol").innerHTML = ""
    document.querySelector(".Solutions h2").innerHTML = ""
    document.querySelector(".Solutions pre code").innerHTML = ""
    let currentIndex = -1
    let arr1 = [
        {
            Problem: `Write a Java program to create an interface Shape with the getArea() method. Create three classes Rectangle, Circle, and Triangle that implement the Shape interface. Implement the getArea() method for each of the three classes.`,
            Number: 1,
            Solution: `interface Shape {
        double getArea();
    }
    
    class Rectangle implements Shape {
        double width, height;
    
        Rectangle(double width, double height) {
            this.width = width;
            this.height = height;
        }
    
        public double getArea() {
            return width * height;
        }
    }
    
    class Circle implements Shape {
        double radius;
    
        Circle(double radius) {
            this.radius = radius;
        }
    
        public double getArea() {
            return Math.PI * radius * radius;
        }
    }
    
    class Triangle implements Shape {
        double base, height;
    
        Triangle(double base, double height) {
            this.base = base;
            this.height = height;
        }
    
        public double getArea() {
            return 0.5 * base * height;
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            Shape rectangle = new Rectangle(5, 7);
            Shape circle = new Circle(3);
            Shape triangle = new Triangle(6, 4);
    
            System.out.println("Rectangle Area: " + rectangle.getArea());
            System.out.println("Circle Area: " + circle.getArea());
            System.out.println("Triangle Area: " + triangle.getArea());
        }
    }`
        },
        {
            Problem: `Write a Java program to create an Animal interface with a method called bark() that takes no arguments and returns void. Create a Dog class that implements Animal and overrides bark() to print "Dog is barking".`,
            Number: 2,
            Solution: `interface Animal {
        void bark();
    }
    
    class Dog implements Animal {
        public void bark() {
            System.out.println("Dog is barking");
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            Animal dog = new Dog();
            dog.bark();
        }
    }`
        },
        {
            Problem: `Write a Java program to create an interface Flyable with a method called fly_obj(). Create three classes Spacecraft, Airplane, and Helicopter that implement the Flyable interface. Implement the fly_obj() method for each of the three classes.`,
            Number: 3,
            Solution: `interface Flyable {
        void fly_obj();
    }
    
    class Spacecraft implements Flyable {
        public void fly_obj() {
            System.out.println("Spacecraft is flying in space");
        }
    }
    
    class Airplane implements Flyable {
        public void fly_obj() {
            System.out.println("Airplane is flying in the air");
        }
    }
    
    class Helicopter implements Flyable {
        public void fly_obj() {
            System.out.println("Helicopter is flying above the ground");
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            Flyable spacecraft = new Spacecraft();
            Flyable airplane = new Airplane();
            Flyable helicopter = new Helicopter();
    
            spacecraft.fly_obj();
            airplane.fly_obj();
            helicopter.fly_obj();
        }
    }`
        },
        {
            Problem: `Write a Java programming to create a banking system with three classes - Bank, Account, SavingsAccount, and CurrentAccount. The bank should have a list of accounts and methods for adding them. Accounts should be an interface with methods to deposit, withdraw, calculate interest, and view balances. SavingsAccount and CurrentAccount should implement the Account interface and have their own unique methods.`,
            Number: 4,
            Solution: `interface Account {
        void deposit(double amount);
        void withdraw(double amount);
        double calculateInterest();
        double getBalance();
    }
    
    class SavingsAccount implements Account {
        double balance;
    
        public SavingsAccount(double balance) {
            this.balance = balance;
        }
    
        public void deposit(double amount) {
            balance += amount;
        }
    
        public void withdraw(double amount) {
            if (amount <= balance) {
                balance -= amount;
            }
        }
    
        public double calculateInterest() {
            return balance * 0.04; // 4% interest
        }
    
        public double getBalance() {
            return balance;
        }
    }
    
    class CurrentAccount implements Account {
        double balance;
    
        public CurrentAccount(double balance) {
            this.balance = balance;
        }
    
        public void deposit(double amount) {
            balance += amount;
        }
    
        public void withdraw(double amount) {
            if (amount <= balance) {
                balance -= amount;
            }
        }
    
        public double calculateInterest() {
            return balance * 0.02; // 2% interest
        }
    
        public double getBalance() {
            return balance;
        }
    }
    
    class Bank {
        List<Account> accounts = new ArrayList<>();
    
        public void addAccount(Account account) {
            accounts.add(account);
        }
    
        public void showAccounts() {
            for (Account account : accounts) {
                System.out.println("Account Balance: " + account.getBalance());
            }
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            Bank bank = new Bank();
    
            Account savings = new SavingsAccount(1000);
            Account current = new CurrentAccount(1500);
    
            bank.addAccount(savings);
            bank.addAccount(current);
    
            bank.showAccounts();
        }
    }`
        },
        {
            Problem: `Write a Java program to create an interface Resizable with methods resizeWidth(int width) and resizeHeight(int height) that allow an object to be resized. Create a class Rectangle that implements the Resizable interface and implements the resize methods.`,
            Number: 5,
            Solution: `interface Resizable {
        void resizeWidth(int width);
        void resizeHeight(int height);
    }
    
    class Rectangle implements Resizable {
        int width, height;
    
        public Rectangle(int width, int height) {
            this.width = width;
            this.height = height;
        }
    
        public void resizeWidth(int width) {
            this.width = width;
        }
    
        public void resizeHeight(int height) {
            this.height = height;
        }
    
        public void displayDimensions() {
            System.out.println("Width: " + width + ", Height: " + height);
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            Rectangle rectangle = new Rectangle(5, 7);
            rectangle.displayDimensions();
    
            rectangle.resizeWidth(10);
            rectangle.resizeHeight(14);
            rectangle.displayDimensions();
        }
    }`
        },
        {
            Problem: `Write a Java program to create an interface Drawable with a method draw() that takes no arguments and returns void. Create three classes Circle, Rectangle, and Triangle that implement the Drawable interface and override the draw() method to draw their respective shapes.`,
            Number: 6,
            Solution: `interface Drawable {
        void draw();
    }
    
    class Circle implements Drawable {
        public void draw() {
            System.out.println("Drawing a Circle");
        }
    }
    
    class Rectangle implements Drawable {
        public void draw() {
            System.out.println("Drawing a Rectangle");
        }
    }
    
    class Triangle implements Drawable {
        public void draw() {
            System.out.println("Drawing a Triangle");
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            Drawable circle = new Circle();
            Drawable rectangle = new Rectangle();
            Drawable triangle = new Triangle();
    
            circle.draw();
            rectangle.draw();
            triangle.draw();
        }
    }`
        }, {
            Problem: `Write a Java program to create an interface Sortable with a method sort() that sorts an array of integers in ascending order. Create two classes BubbleSort and SelectionSort that implement the Sortable interface and provide their own implementations of the sort() method.`,
            Number: 7,
            Solution: `interface Sortable {
        void sort(int[] array);
    }
    
    class BubbleSort implements Sortable {
        public void sort(int[] array) {
            int n = array.length;
            for (int i = 0; i < n - 1; i++) {
                for (int j = 0; j < n - i - 1; j++) {
                    if (array[j] > array[j + 1]) {
                        int temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
        }
    }
    
    class SelectionSort implements Sortable {
        public void sort(int[] array) {
            int n = array.length;
            for (int i = 0; i < n - 1; i++) {
                int minIdx = i;
                for (int j = i + 1; j < n; j++) {
                    if (array[j] < array[minIdx]) {
                        minIdx = j;
                    }
                }
                int temp = array[minIdx];
                array[minIdx] = array[i];
                array[i] = temp;
            }
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            int[] array = {5, 2, 9, 1, 5, 6};
    
            Sortable bubbleSort = new BubbleSort();
            bubbleSort.sort(array);
            System.out.println("Sorted using BubbleSort: " + Arrays.toString(array));
    
            int[] array2 = {5, 2, 9, 1, 5, 6};
            Sortable selectionSort = new SelectionSort();
            selectionSort.sort(array2);
            System.out.println("Sorted using SelectionSort: " + Arrays.toString(array2));
        }
    }`
        },
        {
            Problem: `Write a Java program to create an interface Playable with a method play() that takes no arguments and returns void. Create three classes Football, Volleyball, and Basketball that implement the Playable interface and override the play() method to play the respective sports.`,
            Number: 8,
            Solution: `interface Playable {
        void play();
    }
    
    class Football implements Playable {
        public void play() {
            System.out.println("Playing Football");
        }
    }
    
    class Volleyball implements Playable {
        public void play() {
            System.out.println("Playing Volleyball");
        }
    }
    
    class Basketball implements Playable {
        public void play() {
            System.out.println("Playing Basketball");
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            Playable football = new Football();
            Playable volleyball = new Volleyball();
            Playable basketball = new Basketball();
    
            football.play();
            volleyball.play();
            basketball.play();
        }
    }`
        },
        {
            Problem: `Write a Java program to create an interface Searchable with a method search(String keyword) that searches for a given keyword in a text document. Create two classes Document and WebPage that implement the Searchable interface and provide their own implementations of the search() method.`,
            Number: 9,
            Solution: `interface Searchable {
        void search(String keyword);
    }
    
    class Document implements Searchable {
        String content;
    
        Document(String content) {
            this.content = content;
        }
    
        public void search(String keyword) {
            if (content.contains(keyword)) {
                System.out.println("Keyword '" + keyword + "' found in the document.");
            } else {
                System.out.println("Keyword '" + keyword + "' not found in the document.");
            }
        }
    }
    
    class WebPage implements Searchable {
        String content;
    
        WebPage(String content) {
            this.content = content;
        }
    
        public void search(String keyword) {
            if (content.contains(keyword)) {
                System.out.println("Keyword '" + keyword + "' found in the webpage.");
            } else {
                System.out.println("Keyword '" + keyword + "' not found in the webpage.");
            }
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            Searchable document = new Document("This is a sample document with some text.");
            document.search("sample");
    
            Searchable webpage = new WebPage("This is a webpage with text and images.");
            webpage.search("images");
        }
    }`
        },
        {
            Problem: `Write a Java program to create an interface Encryptable with methods encrypt(String data) and decrypt(String encryptedData) that define encryption and decryption operations. Create two classes AES and RSA that implement the Encryptable interface and provide their own encryption and decryption algorithms.`,
            Number: 10,
            Solution: `interface Encryptable {
        String encrypt(String data);
        String decrypt(String encryptedData);
    }
    
    class AES implements Encryptable {
        public String encrypt(String data) {
            return "AES encrypted: " + data;
        }
    
        public String decrypt(String encryptedData) {
            return "AES decrypted: " + encryptedData;
        }
    }
    
    class RSA implements Encryptable {
        public String encrypt(String data) {
            return "RSA encrypted: " + data;
        }
    
        public String decrypt(String encryptedData) {
            return "RSA decrypted: " + encryptedData;
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            Encryptable aes = new AES();
            System.out.println(aes.encrypt("Hello World"));
            System.out.println(aes.decrypt("AES encrypted: Hello World"));
    
            Encryptable rsa = new RSA();
            System.out.println(rsa.encrypt("Secure Data"));
            System.out.println(rsa.decrypt("RSA encrypted: Secure Data"));
        }
    }`
        },
        {
            Problem: `Write a Java program to create an interface Sortable with a method sort(int[] array) that sorts an array of integers in descending order. Create two classes QuickSort and MergeSort that implement the Sortable interface and provide their own implementations of the sort() method.`,
            Number: 11,
            Solution: `interface Sortable {
        void sort(int[] array);
    }
    
    class QuickSort implements Sortable {
        public void sort(int[] array) {
            Arrays.sort(array);
            int[] reversedArray = new int[array.length];
            for (int i = 0; i < array.length; i++) {
                reversedArray[i] = array[array.length - 1 - i];
            }
            System.arraycopy(reversedArray, 0, array, 0, array.length);
        }
    }
    
    class MergeSort implements Sortable {
        public void sort(int[] array) {
            Arrays.sort(array);
            int[] reversedArray = new int[array.length];
            for (int i = 0; i < array.length; i++) {
                reversedArray[i] = array[array.length - 1 - i];
            }
            System.arraycopy(reversedArray, 0, array, 0, array.length);
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            int[] array = {5, 2, 9, 1, 5, 6};
    
            Sortable quickSort = new QuickSort();
            quickSort.sort(array);
            System.out.println("Sorted using QuickSort in descending order: " + Arrays.toString(array));
    
            int[] array2 = {5, 2, 9, 1, 5, 6};
            Sortable mergeSort = new MergeSort();
            mergeSort.sort(array2);
            System.out.println("Sorted using MergeSort in descending order: " + Arrays.toString(array2));
        }
    }`
        },
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
function JDBC() {
    document.querySelector(".Questions ol").innerHTML = ""
    document.querySelector(".Solutions h2").innerHTML = ""
    document.querySelector(".Solutions pre code").innerHTML = ""
    let currentIndex = -1
    let arr1 = [
        {
            Problem: "Create the connection with MySQL Database and manage the driver.",
            Number: 1,
            Solution: `
                import java.sql.Connection;
                import java.sql.DriverManager;
                import java.sql.SQLException;
    
                public class MySQLConnection {
                    public static void main(String[] args) {
                        try {
                            Class.forName("com.mysql.cj.jdbc.Driver");
                            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/yourdatabase", "username", "password");
                            System.out.println("Connection established!");
                        } catch (ClassNotFoundException | SQLException e) {
                            e.printStackTrace();
                        }
                    }
                }
            `
        },
        {
            Problem: "Create the table in the database from Java API.",
            Number: 2,
            Solution: `
                import java.sql.Connection;
                import java.sql.DriverManager;
                import java.sql.Statement;
                import java.sql.SQLException;
    
                public class CreateTable {
                    public static void main(String[] args) {
                        try {
                            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/yourdatabase", "username", "password");
                            Statement statement = connection.createStatement();
                            String createTableSQL = "CREATE TABLE Employees (id INT PRIMARY KEY, name VARCHAR(255), age INT)";
                            statement.executeUpdate(createTableSQL);
                            System.out.println("Table created successfully!");
                        } catch (SQLException e) {
                            e.printStackTrace();
                        }
                    }
                }
            `
        },
        {
            Problem: "Insert the row in the table in the database from Java API.",
            Number: 3,
            Solution: `
                import java.sql.Connection;
                import java.sql.DriverManager;
                import java.sql.PreparedStatement;
                import java.sql.SQLException;
    
                public class InsertRow {
                    public static void main(String[] args) {
                        try {
                            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/yourdatabase", "username", "password");
                            String insertSQL = "INSERT INTO Employees (id, name, age) VALUES (?, ?, ?)";
                            PreparedStatement preparedStatement = connection.prepareStatement(insertSQL);
                            preparedStatement.setInt(1, 1);
                            preparedStatement.setString(2, "John Doe");
                            preparedStatement.setInt(3, 30);
                            preparedStatement.executeUpdate();
                            System.out.println("Row inserted successfully!");
                        } catch (SQLException e) {
                            e.printStackTrace();
                        }
                    }
                }
            `
        },
        {
            Problem: "Update the row in the table in the database from Java API.",
            Number: 4,
            Solution: `
                import java.sql.Connection;
                import java.sql.DriverManager;
                import java.sql.PreparedStatement;
                import java.sql.SQLException;
    
                public class UpdateRow {
                    public static void main(String[] args) {
                        try {
                            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/yourdatabase", "username", "password");
                            String updateSQL = "UPDATE Employees SET name = ?, age = ? WHERE id = ?";
                            PreparedStatement preparedStatement = connection.prepareStatement(updateSQL);
                            preparedStatement.setString(1, "Jane Doe");
                            preparedStatement.setInt(2, 28);
                            preparedStatement.setInt(3, 1);
                            preparedStatement.executeUpdate();
                            System.out.println("Row updated successfully!");
                        } catch (SQLException e) {
                            e.printStackTrace();
                        }
                    }
                }
            `
        },
        {
            Problem: "Delete the row in the table in the database from Java API.",
            Number: 5,
            Solution: `
                import java.sql.Connection;
                import java.sql.DriverManager;
                import java.sql.PreparedStatement;
                import java.sql.SQLException;
    
                public class DeleteRow {
                    public static void main(String[] args) {
                        try {
                            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/yourdatabase", "username", "password");
                            String deleteSQL = "DELETE FROM Employees WHERE id = ?";
                            PreparedStatement preparedStatement = connection.prepareStatement(deleteSQL);
                            preparedStatement.setInt(1, 1);
                            preparedStatement.executeUpdate();
                            System.out.println("Row deleted successfully!");
                        } catch (SQLException e) {
                            e.printStackTrace();
                        }
                    }
                }
            `
        },
        {
            Problem: "Select multiple rows from the database table in Java API and show the result on the screen.",
            Number: 6,
            Solution: `
                import java.sql.Connection;
                import java.sql.DriverManager;
                import java.sql.ResultSet;
                import java.sql.Statement;
                import java.sql.SQLException;
    
                public class SelectRows {
                    public static void main(String[] args) {
                        try {
                            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/yourdatabase", "username", "password");
                            Statement statement = connection.createStatement();
                            String selectSQL = "SELECT * FROM Employees";
                            ResultSet resultSet = statement.executeQuery(selectSQL);
                            while (resultSet.next()) {
                                int id = resultSet.getInt("id");
                                String name = resultSet.getString("name");
                                int age = resultSet.getInt("age");
                                System.out.println("ID: " + id + ", Name: " + name + ", Age: " + age);
                            }
                        } catch (SQLException e) {
                            e.printStackTrace();
                        }
                    }
                }
            `
        },
        {
            Problem: "Create a Scrollable Readonly Resultset and ask the row number from the user and display that row on the screen.",
            Number: 7,
            Solution: `
                import java.sql.*;
                import java.util.Scanner;
    
                public class ScrollableReadonlyResultset {
                    public static void main(String[] args) {
                        try {
                            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/yourdatabase", "username", "password");
                            Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
                            String selectSQL = "SELECT * FROM Employees";
                            ResultSet resultSet = statement.executeQuery(selectSQL);
                            Scanner scanner = new Scanner(System.in);
                            System.out.print("Enter row number: ");
                            int rowNum = scanner.nextInt();
                            resultSet.absolute(rowNum);
                            System.out.println("ID: " + resultSet.getInt("id") + ", Name: " + resultSet.getString("name") + ", Age: " + resultSet.getInt("age"));
                        } catch (SQLException e) {
                            e.printStackTrace();
                        }
                    }
                }
            `
        },
        {
            Problem: "Create a Scrollable Updateable Resultset and insert a new row, update an existing row and delete the row from Resultset and also the changes should be made to the database also.",
            Number: 8,
            Solution: `
                import java.sql.*;
    
                public class ScrollableUpdateableResultset {
                    public static void main(String[] args) {
                        try {
                            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/yourdatabase", "username", "password");
                            Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_UPDATABLE);
                            String selectSQL = "SELECT * FROM Employees";
                            ResultSet resultSet = statement.executeQuery(selectSQL);
                            // Insert a new row
                            resultSet.moveToInsertRow();
                            resultSet.updateInt("id", 4);
                            resultSet.updateString("name", "Mark Smith");
                            resultSet.updateInt("age", 40);
                            resultSet.insertRow();
                            // Update an existing row
                            resultSet.absolute(1);
                            resultSet.updateString("name", "Updated Name");
                            resultSet.updateRow();
                            // Delete a row
                            resultSet.absolute(2);
                            resultSet.deleteRow();
                            System.out.println("Changes made successfully!");
                        } catch (SQLException e) {
                            e.printStackTrace();
                        }
                    }
                }
            `
        },
        {
            Problem: "Create a Java Program to show, insert, update, delete of the table in Java API through PreparedStatement.",
            Number: 9,
            Solution: `
                import java.sql.*;
    
                public class PreparedStatementOperations {
                    public static void main(String[] args) {
                        try {
                            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/yourdatabase", "username", "password");
                            // Insert
                            String insertSQL = "INSERT INTO Employees (id, name, age) VALUES (?, ?, ?)";
                            PreparedStatement insertStmt = connection.prepareStatement(insertSQL);
                            insertStmt.setInt(1, 5);
                            insertStmt.setString(2, "Alice Johnson");
                            insertStmt.setInt(3, 25);
                            insertStmt.executeUpdate();
                            // Update
                            String updateSQL = "UPDATE Employees SET age = ? WHERE id = ?";
                            PreparedStatement updateStmt = connection.prepareStatement(updateSQL);
                            updateStmt.setInt(1, 26);
                            updateStmt.setInt(2, 5);
                            updateStmt.executeUpdate();
                            // Delete
                            String deleteSQL = "DELETE FROM Employees WHERE id = ?";
                            PreparedStatement deleteStmt = connection.prepareStatement(deleteSQL);
                            deleteStmt.setInt(1, 5);
                            deleteStmt.executeUpdate();
                            System.out.println("Operations completed successfully!");
                        } catch (SQLException e) {
                            e.printStackTrace();
                        }
                    }
                }
            `
        }
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
function Multithreading() {
    document.querySelector(".Questions ol").innerHTML = ""
    document.querySelector(".Solutions h2").innerHTML = ""
    document.querySelector(".Solutions pre code").innerHTML = ""
    let currentIndex = -1
    let arr1 = [
        {
            Problem: "Write a Java program to create a basic Java thread that prints 'Hello, World!' when executed.",
            Number: 1,
            Solution: `
                class HelloWorldThread extends Thread {
                    public void run() {
                        System.out.println("Hello, World!");
                    }
                    
                    public static void main(String[] args) {
                        HelloWorldThread thread = new HelloWorldThread();
                        thread.start();
                    }
                }
            `
        },
        {
            Problem: "Write a Java program that creates two threads to find and print even and odd numbers from 1 to 20.",
            Number: 2,
            Solution: `
                class EvenThread extends Thread {
                    public void run() {
                        for (int i = 1; i <= 20; i++) {
                            if (i % 2 == 0) {
                                System.out.println("Even: " + i);
                            }
                        }
                    }
                }
                
                class OddThread extends Thread {
                    public void run() {
                        for (int i = 1; i <= 20; i++) {
                            if (i % 2 != 0) {
                                System.out.println("Odd: " + i);
                            }
                        }
                    }
                }
                
                public class EvenOdd {
                    public static void main(String[] args) {
                        EvenThread evenThread = new EvenThread();
                        OddThread oddThread = new OddThread();
                        evenThread.start();
                        oddThread.start();
                    }
                }
            `
        },
        {
            Problem: "Write a Java program that sorts an array of integers using multiple threads.",
            Number: 3,
            Solution: `
                import java.util.Arrays;
                
                class SortThread extends Thread {
                    int[] array;
                    
                    public SortThread(int[] array) {
                        this.array = array;
                    }
                    
                    public void run() {
                        Arrays.sort(array);
                        System.out.println("Sorted array: " + Arrays.toString(array));
                    }
                }
                
                public class SortArray {
                    public static void main(String[] args) {
                        int[] array = {5, 2, 8, 1, 9, 3};
                        SortThread thread = new SortThread(array);
                        thread.start();
                    }
                }
            `
        },
        {
            Problem: "Write a Java program that performs matrix multiplication using multiple threads.",
            Number: 4,
            Solution: `
                class MatrixMultiplicationThread extends Thread {
                    int[][] matrix1, matrix2, result;
                    int row;
                    
                    public MatrixMultiplicationThread(int[][] matrix1, int[][] matrix2, int[][] result, int row) {
                        this.matrix1 = matrix1;
                        this.matrix2 = matrix2;
                        this.result = result;
                        this.row = row;
                    }
                    
                    public void run() {
                        for (int j = 0; j < matrix2[0].length; j++) {
                            result[row][j] = 0;
                            for (int k = 0; k < matrix1[0].length; k++) {
                                result[row][j] += matrix1[row][k] * matrix2[k][j];
                            }
                        }
                    }
                }
                
                public class MatrixMultiplication {
                    public static void main(String[] args) {
                        int[][] matrix1 = {
                            {1, 2},
                            {3, 4}
                        };
                        int[][] matrix2 = {
                            {5, 6},
                            {7, 8}
                        };
                        int[][] result = new int[2][2];
                        MatrixMultiplicationThread[] threads = new MatrixMultiplicationThread[2];
                        for (int i = 0; i < 2; i++) {
                            threads[i] = new MatrixMultiplicationThread(matrix1, matrix2, result, i);
                            threads[i].start();
                        }
                    }
                }
            `
        },
        {
            Problem: "Write a Java program that calculates the sum of all prime numbers up to a given limit using multiple threads.",
            Number: 5,
            Solution: `
                class PrimeThread extends Thread {
                    int start, end, sum = 0;
                    
                    public PrimeThread(int start, int end) {
                        this.start = start;
                        this.end = end;
                    }
                    
                    public void run() {
                        for (int i = start; i <= end; i++) {
                            if (isPrime(i)) {
                                sum += i;
                            }
                        }
                        System.out.println("Sum of primes between " + start + " and " + end + ": " + sum);
                    }
                    
                    private boolean isPrime(int num) {
                        if (num <= 1) return false;
                        for (int i = 2; i <= Math.sqrt(num); i++) {
                            if (num % i == 0) return false;
                        }
                        return true;
                    }
                }
                
                public class PrimeSum {
                    public static void main(String[] args) {
                        int limit = 100;
                        PrimeThread thread1 = new PrimeThread(1, limit / 2);
                        PrimeThread thread2 = new PrimeThread((limit / 2) + 1, limit);
                        thread1.start();
                        thread2.start();
                    }
                }
            `
        },
        {
            Problem: "Write a Java program to implement a concurrent web crawler that crawls multiple websites simultaneously using threads.",
            Number: 6,
            Solution: `
                import java.io.BufferedReader;
                import java.io.InputStreamReader;
                import java.net.URL;
                import java.util.List;
                import java.util.ArrayList;
                
                class WebCrawlerThread extends Thread {
                    String url;
                    
                    public WebCrawlerThread(String url) {
                        this.url = url;
                    }
                    
                    public void run() {
                        try {
                            URL urlObj = new URL(url);
                            BufferedReader in = new BufferedReader(new InputStreamReader(urlObj.openStream()));
                            String inputLine;
                            while ((inputLine = in.readLine()) != null) {
                                System.out.println(inputLine);
                            }
                            in.close();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                }
                
                public class WebCrawler {
                    public static void main(String[] args) {
                        List<String> websites = new ArrayList<>();
                        websites.add("http://example.com");
                        websites.add("http://example.org");
                        websites.add("http://example.net");
                        
                        for (String website : websites) {
                            new WebCrawlerThread(website).start();
                        }
                    }
                }
            `
        },
        {
            Problem: "Write a Java program that creates a bank account with concurrent deposits and withdrawals using threads.",
            Number: 7,
            Solution: `
                class BankAccount {
                    private int balance = 0;
                    
                    public synchronized void deposit(int amount) {
                        balance += amount;
                    }
                    
                    public synchronized void withdraw(int amount) {
                        if (balance >= amount) {
                            balance -= amount;
                        }
                    }
                    
                    public synchronized int getBalance() {
                        return balance;
                    }
                }
                
                class DepositThread extends Thread {
                    BankAccount account;
                    int amount;
                    
                    public DepositThread(BankAccount account, int amount) {
                        this.account = account;
                        this.amount = amount;
                    }
                    
                    public void run() {
                        account.deposit(amount);
                        System.out.println("Deposited: " + amount + ", Balance: " + account.getBalance());
                    }
                }
                
                class WithdrawThread extends Thread {
                    BankAccount account;
                    int amount;
                    
                    public WithdrawThread(BankAccount account, int amount) {
                        this.account = account;
                        this.amount = amount;
                    }
                    
                    public void run() {
                        account.withdraw(amount);
                        System.out.println("Withdrawn: " + amount + ", Balance: " + account.getBalance());
                    }
                }
                
                public class BankAccountTest {
                    public static void main(String[] args) {
                        BankAccount account = new BankAccount();
                        DepositThread depositThread1 = new DepositThread(account, 100);
                        DepositThread depositThread2 = new DepositThread(account, 200);
                        WithdrawThread withdrawThread = new WithdrawThread(account, 150);
                        depositThread1.start();
                        depositThread2.start();
                        withdrawThread.start();
                    }
                }
            `
        },
        {
            Problem: "Create the program to create multiple threads by using Runnable interface",
            Number: 8,
            Solution: `
                class MyRunnable implements Runnable {
                    public void run() {
                        System.out.println(Thread.currentThread().getId() + " is running");
                    }
                }
                
                public class MultipleThreadsRunnable {
                    public static void main(String[] args) {
                        Runnable runnable = new MyRunnable();
                        Thread thread1 = new Thread(runnable);
                        Thread thread2 = new Thread(runnable);
                        thread1.start();
                        thread2.start();
                    }
                }
            `
        },
        {
            Problem: "Create the program to create multiple threads by using Thread class",
            Number: 9,
            Solution: `
                class MyThread extends Thread {
                    public void run() {
                        System.out.println(Thread.currentThread().getId() + " is running");
                    }
                }
                
                public class MultipleThreads {
                    public static void main(String[] args) {
                        MyThread thread1 = new MyThread();
                        MyThread thread2 = new MyThread();
                        thread1.start();
                        thread2.start();
                    }
                }
            `
        }, {
            Problem: "Create the program to create multiple threads, set its name and its priority.",
            Number: 10,
            Solution: `
                class MyThread extends Thread {
                    public void run() {
                        System.out.println(Thread.currentThread().getName() + " is running with priority " + Thread.currentThread().getPriority());
                    }
                }
                
                public class ThreadPriority {
                    public static void main(String[] args) {
                        MyThread thread1 = new MyThread();
                        thread1.setName("Thread-1");
                        thread1.setPriority(Thread.MAX_PRIORITY);
                        MyThread thread2 = new MyThread();
                        thread2.setName("Thread-2");
                        thread2.setPriority(Thread.MIN_PRIORITY);
                        thread1.start();
                        thread2.start();
                    }
                }
            `
        },
        {
            Problem: "Create the program to create multiple threads, show an example of synchronization keyword.",
            Number: 11,
            Solution: `
                class Counter {
                    private int count = 0;
                    
                    public synchronized void increment() {
                        count++;
                    }
                    
                    public int getCount() {
                        return count;
                    }
                }
                
                class CounterThread extends Thread {
                    Counter counter;
                    
                    public CounterThread(Counter counter) {
                        this.counter = counter;
                    }
                    
                    public void run() {
                        for (int i = 0; i < 1000; i++) {
                            counter.increment();
                        }
                        System.out.println("Final count: " + counter.getCount());
                    }
                }
                
                public class SyncExample {
                    public static void main(String[] args) {
                        Counter counter = new Counter();
                        CounterThread thread1 = new CounterThread(counter);
                        CounterThread thread2 = new CounterThread(counter);
                        thread1.start();
                        thread2.start();
                    }
                }
            `
        },
        {
            Problem: "Create the program to create multiple threads, show an example of notify, notifyAll, wait, resume, sleep methods.",
            Number: 12,
            Solution: `
                class SharedResource {
                    private boolean ready = false;
                    
                    public synchronized void waitForReady() throws InterruptedException {
                        while (!ready) {
                            wait();
                        }
                        System.out.println(Thread.currentThread().getName() + " has been notified");
                    }
                    
                    public synchronized void setReady() {
                        ready = true;
                        notify();
                    }
                    
                    public synchronized void resetReady() {
                        ready = false;
                        notifyAll();
                    }
                }
                
                class WaitingThread extends Thread {
                    SharedResource resource;
                    
                    public WaitingThread(SharedResource resource) {
                        this.resource = resource;
                    }
                    
                    public void run() {
                        try {
                            resource.waitForReady();
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                }
                
                public class NotifyExample {
                    public static void main(String[] args) {
                        SharedResource resource = new SharedResource();
                        WaitingThread thread1 = new WaitingThread(resource);
                        WaitingThread thread2 = new WaitingThread(resource);
                        thread1.start();
                        thread2.start();
                        
                        try {
                            Thread.sleep(1000);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                        
                        resource.setReady();
                    }
                }
            `
        },
        {
            Problem: "Create the program to create multiple threads, show an example of join and yield methods.",
            Number: 13,
            Solution: `
                class MyThread extends Thread {
                    public void run() {
                        System.out.println(Thread.currentThread().getName() + " is running");
                    }
                }
                
                public class JoinYieldExample {
                    public static void main(String[] args) {
                        MyThread thread1 = new MyThread();
                        MyThread thread2 = new MyThread();
                        
                        thread1.start();
                        thread2.start();
                        
                        try {
                            thread1.join();  // Main thread will wait until thread1 finishes
                            thread2.join();  // Main thread will wait until thread2 finishes
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                        
                        System.out.println("Both threads finished. Main thread continues...");
                        
                        thread1.yield();  // Yield to allow other threads to run
                        thread2.yield();  // Yield to allow other threads to run
                    }
                }
            `
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
function OOP() {
    document.querySelector(".Questions ol").innerHTML = ""
    document.querySelector(".Solutions h2").innerHTML = ""
    document.querySelector(".Solutions pre code").innerHTML = ""
    let currentIndex = -1
    let arr1 = [
        {
            Problem: "Write a Java program to create a class called \"Person\" with a name and age attribute. Create two instances of the \"Person\" class, set their attributes using the constructor, and print their name and age.",
            Number: 1,
            Solution: `public class Person {
              String name;
              int age;
    
              Person(String name, int age) {
                  this.name = name;
                  this.age = age;
              }
    
              public static void main(String[] args) {
                  Person person1 = new Person("John", 25);
                  Person person2 = new Person("Alice", 30);
                  System.out.println("Name: " + person1.name + ", Age: " + person1.age);
                  System.out.println("Name: " + person2.name + ", Age: " + person2.age);
              }
          }`
        },
        {
            Problem: "Write a Java program to create a class called \"Dog\" with a name and breed attribute. Create two instances of the \"Dog\" class, set their attributes using the constructor and modify the attributes using the setter methods and print the updated values.",
            Number: 2,
            Solution: `public class Dog {
              String name;
              String breed;
    
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
    
              public static void main(String[] args) {
                  Dog dog1 = new Dog("Buddy", "Golden Retriever");
                  Dog dog2 = new Dog("Max", "Beagle");
                  dog1.setName("Charlie");
                  dog2.setBreed("Labrador");
                  System.out.println("Dog1 Name: " + dog1.name + ", Breed: " + dog1.breed);
                  System.out.println("Dog2 Name: " + dog2.name + ", Breed: " + dog2.breed);
              }
          }`
        },
        {
            Problem: "Write a Java program to create a class called \"Rectangle\" with width and height attributes. Calculate the area and perimeter of the rectangle.",
            Number: 3,
            Solution: `public class Rectangle {
              double width;
              double height;
    
              Rectangle(double width, double height) {
                  this.width = width;
                  this.height = height;
              }
    
              double calculateArea() {
                  return width * height;
              }
    
              double calculatePerimeter() {
                  return 2 * (width + height);
              }
    
              public static void main(String[] args) {
                  Rectangle rectangle = new Rectangle(5, 3);
                  System.out.println("Area: " + rectangle.calculateArea());
                  System.out.println("Perimeter: " + rectangle.calculatePerimeter());
              }
          }`
        },
        {
            Problem: "Write a Java program to create a class called \"Circle\" with a radius attribute. You can access and modify this attribute. Calculate the area and circumference of the circle.",
            Number: 4,
            Solution: `public class Circle {
              double radius;
    
              Circle(double radius) {
                  this.radius = radius;
              }
    
              double calculateArea() {
                  return Math.PI * radius * radius;
              }
    
              double calculateCircumference() {
                  return 2 * Math.PI * radius;
              }
    
              public static void main(String[] args) {
                  Circle circle = new Circle(4);
                  System.out.println("Area: " + circle.calculateArea());
                  System.out.println("Circumference: " + circle.calculateCircumference());
              }
          }`
        },
        {
            Problem: "Write a Java program to create a class called \"Book\" with attributes for title, author, and ISBN, and methods to add and remove books from a collection.",
            Number: 5,
            Solution: `import java.util.ArrayList;
    
          public class Book {
              String title;
              String author;
              String isbn;
    
              Book(String title, String author, String isbn) {
                  this.title = title;
                  this.author = author;
                  this.isbn = isbn;
              }
    
              public static void main(String[] args) {
                  ArrayList<Book> books = new ArrayList<>();
                  Book book1 = new Book("Java Programming", "John Doe", "12345");
                  Book book2 = new Book("Python Basics", "Jane Doe", "67890");
                  books.add(book1);
                  books.add(book2);
    
                  for (Book book : books) {
                      System.out.println("Title: " + book.title + ", Author: " + book.author + ", ISBN: " + book.isbn);
                  }
    
                  books.remove(book1);
    
                  System.out.println("\nAfter removal:");
                  for (Book book : books) {
                      System.out.println("Title: " + book.title + ", Author: " + book.author + ", ISBN: " + book.isbn);
                  }
              }
          }`
        },
        {
            Problem: "Write a Java program to create a class called \"Employee\" with a name, job title, and salary attributes, and methods to calculate and update salary.",
            Number: 6,
            Solution: `public class Employee {
              String name;
              String jobTitle;
              double salary;
    
              Employee(String name, String jobTitle, double salary) {
                  this.name = name;
                  this.jobTitle = jobTitle;
                  this.salary = salary;
              }
    
              void updateSalary(double newSalary) {
                  this.salary = newSalary;
              }
    
              double calculateSalaryAfterTax() {
                  return salary * 0.80;
              }
    
              public static void main(String[] args) {
                  Employee employee = new Employee("Alice", "Software Engineer", 70000);
                  System.out.println("Salary before tax: " + employee.salary);
                  System.out.println("Salary after tax: " + employee.calculateSalaryAfterTax());
    
                  employee.updateSalary(80000);
                  System.out.println("Updated Salary: " + employee.salary);
              }
          }`
        },
        {
            Problem: "Write a Java program to create a class called \"Bank\" with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called \"Account\" to maintain account details of a particular customer.",
            Number: 7,
            Solution: `import java.util.ArrayList;
    
          class Account {
              String accountNumber;
              double balance;
    
              Account(String accountNumber, double balance) {
                  this.accountNumber = accountNumber;
                  this.balance = balance;
              }
    
              void deposit(double amount) {
                  this.balance += amount;
              }
    
              void withdraw(double amount) {
                  if (this.balance >= amount) {
                      this.balance -= amount;
                  } else {
                      System.out.println("Insufficient funds");
                  }
              }
          }
    
          public class Bank {
              ArrayList<Account> accounts = new ArrayList<>();
    
              void addAccount(Account account) {
                  accounts.add(account);
              }
    
              void removeAccount(Account account) {
                  accounts.remove(account);
              }
    
              public static void main(String[] args) {
                  Bank bank = new Bank();
                  Account account1 = new Account("123", 5000);
                  Account account2 = new Account("456", 3000);
    
                  bank.addAccount(account1);
                  bank.addAccount(account2);
    
                  account1.deposit(2000);
                  account2.withdraw(1000);
    
                  System.out.println("Account 1 balance: " + account1.balance);
                  System.out.println("Account 2 balance: " + account2.balance);
              }
          }`
        },
        {
            Problem: "Write a Java program to create class called \"TrafficLight\" with attributes for color and duration, and methods to change the color and check for red or green.",
            Number: 8,
            Solution: `public class TrafficLight {
              String color;
              int duration;
    
              TrafficLight(String color, int duration) {
                  this.color = color;
                  this.duration = duration;
              }
    
              void changeColor(String color) {
                  this.color = color;
              }
    
              boolean isRed() {
                  return color.equals("Red");
              }
    
              boolean isGreen() {
                  return color.equals("Green");
              }
    
              public static void main(String[] args) {
                  TrafficLight trafficLight = new TrafficLight("Red", 30);
                  System.out.println("Is red? " + trafficLight.isRed());
                  trafficLight.changeColor("Green");
                  System.out.println("Is green? " + trafficLight.isGreen());
              }
          }`
        }, {
            Problem: "Write a Java program to create a class called \"Employee\" with a name, salary, and hire date attributes, and a method to calculate years of service.",
            Number: 9,
            Solution: `import java.time.LocalDate;
            import java.time.Period;
      
            public class Employee {
                String name;
                double salary;
                LocalDate hireDate;
      
                Employee(String name, double salary, LocalDate hireDate) {
                    this.name = name;
                    this.salary = salary;
                    this.hireDate = hireDate;
                }
      
                int calculateYearsOfService() {
                    return Period.between(hireDate, LocalDate.now()).getYears();
                }
      
                public static void main(String[] args) {
                    Employee employee = new Employee("John", 50000, LocalDate.of(2015, 5, 15));
                    System.out.println("Years of service: " + employee.calculateYearsOfService());
                }
            }`
        },
        {
            Problem: "Write a Java program to create a class called \"Student\" with a name, grade, and courses attributes, and methods to add and remove courses.",
            Number: 10,
            Solution: `import java.util.ArrayList;
      
            public class Student {
                String name;
                char grade;
                ArrayList<String> courses = new ArrayList<>();
      
                Student(String name, char grade) {
                    this.name = name;
                    this.grade = grade;
                }
      
                void addCourse(String course) {
                    courses.add(course);
                }
      
                void removeCourse(String course) {
                    courses.remove(course);
                }
      
                public static void main(String[] args) {
                    Student student = new Student("Alice", 'A');
                    student.addCourse("Mathematics");
                    student.addCourse("Science");
                    System.out.println("Courses: " + student.courses);
                    student.removeCourse("Mathematics");
                    System.out.println("Courses after removal: " + student.courses);
                }
            }`
        },
        {
            Problem: "Write a Java program to create a class called \"Library\" with a collection of books and methods to add and remove books.",
            Number: 11,
            Solution: `import java.util.ArrayList;
      
            public class Book {
                String title;
                String author;
                String isbn;
      
                Book(String title, String author, String isbn) {
                    this.title = title;
                    this.author = author;
                    this.isbn = isbn;
                }
            }
      
            public class Library {
                ArrayList<Book> books = new ArrayList<>();
      
                void addBook(Book book) {
                    books.add(book);
                }
      
                void removeBook(Book book) {
                    books.remove(book);
                }
      
                public static void main(String[] args) {
                    Library library = new Library();
                    Book book1 = new Book("Java Programming", "John Doe", "12345");
                    library.addBook(book1);
                    library.removeBook(book1);
                }
            }`
        },
        {
            Problem: "Write a Java program to create a class called \"Airplane\" with a flight number, destination, and departure time attributes, and methods to check flight status and delay.",
            Number: 12,
            Solution: `import java.time.LocalTime;
      
            public class Airplane {
                String flightNumber;
                String destination;
                LocalTime departureTime;
      
                Airplane(String flightNumber, String destination, LocalTime departureTime) {
                    this.flightNumber = flightNumber;
                    this.destination = destination;
                    this.departureTime = departureTime;
                }
      
                boolean isDelayed(LocalTime currentTime) {
                    return currentTime.isAfter(departureTime);
                }
      
                public static void main(String[] args) {
                    Airplane airplane = new Airplane("AA123", "New York", LocalTime.of(15, 30));
                    System.out.println("Flight delayed: " + airplane.isDelayed(LocalTime.of(16, 0)));
                }
            }`
        },
        {
            Problem: "Write a Java program to create a class called \"Inventory\" with a collection of products and methods to add and remove products, and to check for low inventory.",
            Number: 13,
            Solution: `import java.util.ArrayList;
      
            class Product {
                String name;
                int stock;
      
                Product(String name, int stock) {
                    this.name = name;
                    this.stock = stock;
                }
      
                void updateStock(int amount) {
                    this.stock += amount;
                }
            }
      
            public class Inventory {
                ArrayList<Product> products = new ArrayList<>();
      
                void addProduct(Product product) {
                    products.add(product);
                }
      
                void removeProduct(Product product) {
                    products.remove(product);
                }
      
                boolean isLowStock(Product product) {
                    return product.stock < 10;
                }
      
                public static void main(String[] args) {
                    Inventory inventory = new Inventory();
                    Product product1 = new Product("Laptop", 15);
                    Product product2 = new Product("Phone", 5);
                    inventory.addProduct(product1);
                    inventory.addProduct(product2);
      
                    System.out.println("Is phone low in stock? " + inventory.isLowStock(product2));
                }
            }`
        },
        {
            Problem: "Write a Java program to create a class called \"School\" with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes.",
            Number: 14,
            Solution: `import java.util.ArrayList;
      
            public class School {
                ArrayList<String> students = new ArrayList<>();
                ArrayList<String> teachers = new ArrayList<>();
                ArrayList<String> classes = new ArrayList<>();
      
                void addStudent(String student) {
                    students.add(student);
                }
      
                void removeStudent(String student) {
                    students.remove(student);
                }
      
                void addTeacher(String teacher) {
                    teachers.add(teacher);
                }
      
                void removeTeacher(String teacher) {
                    teachers.remove(teacher);
                }
      
                void createClass(String className) {
                    classes.add(className);
                }
      
                public static void main(String[] args) {
                    School school = new School();
                    school.addStudent("John");
                    school.addTeacher("Mr. Smith");
                    school.createClass("Math 101");
                    System.out.println("Students: " + school.students);
                    System.out.println("Teachers: " + school.teachers);
                    System.out.println("Classes: " + school.classes);
                }
            }`
        },
        {
            Problem: "Write a Java program to create a class called \"MusicLibrary\" with a collection of songs and methods to add and remove songs, and to play a random song.",
            Number: 15,
            Solution: `import java.util.ArrayList;
            import java.util.Random;
      
            class Song {
                String title;
      
                Song(String title) {
                    this.title = title;
                }
            }
      
            public class MusicLibrary {
                ArrayList<Song> songs = new ArrayList<>();
      
                void addSong(Song song) {
                    songs.add(song);
                }
      
                void removeSong(Song song) {
                    songs.remove(song);
                }
      
                void playRandomSong() {
                    Random rand = new Random();
                    Song song = songs.get(rand.nextInt(songs.size()));
                    System.out.println("Playing: " + song.title);
                }
      
                public static void main(String[] args) {
                    MusicLibrary library = new MusicLibrary();
                    library.addSong(new Song("Song 1"));
                    library.addSong(new Song("Song 2"));
                    library.addSong(new Song("Song 3"));
                    library.playRandomSong();
                }
            }`
        },
        {
            Problem: "Write a Java program to create a class called \"Shape\" with abstract methods for calculating area and perimeter, and subclasses for \"Rectangle\", \"Circle\", and \"Triangle\".",
            Number: 16,
            Solution: `abstract class Shape {
                abstract double calculateArea();
                abstract double calculatePerimeter();
            }
      
            class Rectangle extends Shape {
                double width;
                double height;
      
                Rectangle(double width, double height) {
                    this.width = width;
                    this.height = height;
                }
      
                double calculateArea() {
                    return width * height;
                }
      
                double calculatePerimeter() {
                    return 2 * (width + height);
                }
            }
      
            class Circle extends Shape {
                double radius;
      
                Circle(double radius) {
                    this.radius = radius;
                }
      
                double calculateArea() {
                    return Math.PI * radius * radius;
                }
      
                double calculatePerimeter() {
                    return 2 * Math.PI * radius;
                }
            }
      
            class Triangle extends Shape {
                double side1;
                double side2;
                double side3;
      
                Triangle(double side1, double side2, double side3) {
                    this.side1 = side1;
                    this.side2 = side2;
                    this.side3 = side3;
                }
      
                double calculateArea() {
                    double s = (side1 + side2 + side3) / 2;
                    return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
                }
      
                double calculatePerimeter() {
                    return side1 + side2 + side3;
                }
            }
      
            public class Main {
                public static void main(String[] args) {
                    Rectangle rectangle = new Rectangle(5, 3);
                    Circle circle = new Circle(4);
                    Triangle triangle = new Triangle(3, 4, 5);
      
                    System.out.println("Rectangle area: " + rectangle.calculateArea());
                    System.out.println("Circle area: " + circle.calculateArea());
                    System.out.println("Triangle area: " + triangle.calculateArea());
                }
            }`
        },
        {
            Problem: "Write a Java program to create a class called \"BankAccount\" with balance and methods for deposit, withdraw, and checking balance.",
            Number: 17,
            Solution: `public class BankAccount {
                double balance;
      
                BankAccount(double initialBalance) {
                    balance = initialBalance;
                }
      
                void deposit(double amount) {
                    balance += amount;
                }
      
                void withdraw(double amount) {
                    if(amount <= balance) {
                        balance -= amount;
                    } else {
                        System.out.println("Insufficient funds.");
                    }
                }
      
                double checkBalance() {
                    return balance;
                }
      
                public static void main(String[] args) {
                    BankAccount account = new BankAccount(1000);
                    account.deposit(500);
                    account.withdraw(300);
                    System.out.println("Current balance: " + account.checkBalance());
                }
            }`
        },
        {
            Problem: "Write a Java program to create a class called \"Vehicle\" with attributes for make, model, and year, and methods to display vehicle information.",
            Number: 18,
            Solution: `public class Vehicle {
                String make;
                String model;
                int year;
      
                Vehicle(String make, String model, int year) {
                    this.make = make;
                    this.model = model;
                    this.year = year;
                }
      
                void displayVehicleInfo() {
                    System.out.println("Vehicle: " + year + " " + make + " " + model);
                }
      
                public static void main(String[] args) {
                    Vehicle vehicle = new Vehicle("Toyota", "Corolla", 2020);
                    vehicle.displayVehicleInfo();
                }
            }`
        },
        {
            Problem: "Write a Java program to create a class called \"Person\" with attributes for name, age, and gender, and methods to display and update information.",
            Number: 19,
            Solution: `public class Person {
                String name;
                int age;
                String gender;
      
                Person(String name, int age, String gender) {
                    this.name = name;
                    this.age = age;
                    this.gender = gender;
                }
      
                void displayPersonInfo() {
                    System.out.println("Name: " + name + ", Age: " + age + ", Gender: " + gender);
                }
      
                void updateAge(int newAge) {
                    age = newAge;
                }
      
                public static void main(String[] args) {
                    Person person = new Person("Alice", 30, "Female");
                    person.displayPersonInfo();
                    person.updateAge(31);
                    person.displayPersonInfo();
                }
            }`
        },
        {
            Problem: "Write a Java program to create a class called \"Calculator\" with methods to perform addition, subtraction, multiplication, and division.",
            Number: 20,
            Solution: `public class Calculator {
                double add(double a, double b) {
                    return a + b;
                }
      
                double subtract(double a, double b) {
                    return a - b;
                }
      
                double multiply(double a, double b) {
                    return a * b;
                }
      
                double divide(double a, double b) {
                    if(b != 0) {
                        return a / b;
                    } else {
                        System.out.println("Cannot divide by zero.");
                        return 0;
                    }
                }
      
                public static void main(String[] args) {
                    Calculator calc = new Calculator();
                    System.out.println("Add: " + calc.add(5, 3));
                    System.out.println("Subtract: " + calc.subtract(5, 3));
                    System.out.println("Multiply: " + calc.multiply(5, 3));
                    System.out.println("Divide: " + calc.divide(5, 3));
                }
            }`
        },
        {
            Problem: "Write a Java program to create a class called \"Student\" with methods to store and display grades for multiple subjects.",
            Number: 21,
            Solution: `import java.util.HashMap;
      
            public class Student {
                String name;
                HashMap<String, Integer> grades = new HashMap<>();
      
                Student(String name) {
                    this.name = name;
                }
      
                void addGrade(String subject, int grade) {
                    grades.put(subject, grade);
                }
      
                void displayGrades() {
                    System.out.println("Grades for " + name + ": ");
                    for (String subject : grades.keySet()) {
                        System.out.println(subject + ": " + grades.get(subject));
                    }
                }
      
                public static void main(String[] args) {
                    Student student = new Student("John");
                    student.addGrade("Math", 90);
                    student.addGrade("Science", 85);
                    student.displayGrades();
                }
            }`
        },
        {
            Problem: "Write a Java program to create a class called \"Book\" with attributes for title, author, and ISBN, and methods to display and update information.",
            Number: 22,
            Solution: `public class Book {
                String title;
                String author;
                String isbn;
      
                Book(String title, String author, String isbn) {
                    this.title = title;
                    this.author = author;
                    this.isbn = isbn;
                }
      
                void displayBookInfo() {
                    System.out.println("Book: " + title + " by " + author + ", ISBN: " + isbn);
                }
      
                void updateAuthor(String newAuthor) {
                    author = newAuthor;
                }
      
                public static void main(String[] args) {
                    Book book = new Book("Java Programming", "John Doe", "12345");
                    book.displayBookInfo();
                    book.updateAuthor("Jane Doe");
                    book.displayBookInfo();
                }
            }`
        },
        {
            Problem: "Write a Java program to create a class called \"Employee\" with a name and salary, and a method to calculate the annual salary.",
            Number: 23,
            Solution: `public class Employee {
                String name;
                double salary;
      
                Employee(String name, double salary) {
                    this.name = name;
                    this.salary = salary;
                }
      
                double calculateAnnualSalary() {
                    return salary * 12;
                }
      
                public static void main(String[] args) {
                    Employee employee = new Employee("John", 5000);
                    System.out.println("Annual Salary: " + employee.calculateAnnualSalary());
                }
            }`
        },
        {
            Problem: "Write a Java program to create a class called \"Date\" with attributes for day, month, and year, and methods to display and update the date.",
            Number: 24,
            Solution: `public class Date {
                int day;
                int month;
                int year;
      
                Date(int day, int month, int year) {
                    this.day = day;
                    this.month = month;
                    this.year = year;
                }
      
                void displayDate() {
                    System.out.println("Date: " + day + "/" + month + "/" + year);
                }
      
                void updateDate(int day, int month, int year) {
                    this.day = day;
                    this.month = month;
                    this.year = year;
                }
      
                public static void main(String[] args) {
                    Date date = new Date(12, 5, 2023);
                    date.displayDate();
                    date.updateDate(14, 5, 2023);
                    date.displayDate();
                }
            }`
        },
        {
            Problem: "Write a Java program to create a class called \"Employee\" with a name and department, and a method to display employee details.",
            Number: 25,
            Solution: `public class Employee {
                String name;
                String department;
      
                Employee(String name, String department) {
                    this.name = name;
                    this.department = department;
                }
      
                void displayEmployeeDetails() {
                    System.out.println("Employee: " + name + ", Department: " + department);
                }
      
                public static void main(String[] args) {
                    Employee employee = new Employee("John", "HR");
                    employee.displayEmployeeDetails();
                }
            }`
        },
        {
            Problem: "Write a Java program to create a class called \"Store\" with methods to add products, display products, and calculate total sales.",
            Number: 26,
            Solution: `import java.util.ArrayList;
      
            class Product {
                String name;
                double price;
      
                Product(String name, double price) {
                    this.name = name;
                    this.price = price;
                }
            }
      
            public class Store {
                ArrayList<Product> products = new ArrayList<>();
                
                void addProduct(Product product) {
                    products.add(product);
                }
      
                void displayProducts() {
                    for (Product product : products) {
                        System.out.println("Product: " + product.name + ", Price: " + product.price);
                    }
                }
      
                double calculateTotalSales() {
                    double total = 0;
                    for (Product product : products) {
                        total += product.price;
                    }
                    return total;
                }
      
                public static void main(String[] args) {
                    Store store = new Store();
                    store.addProduct(new Product("Laptop", 800));
                    store.addProduct(new Product("Phone", 600));
                    store.displayProducts();
                    System.out.println("Total Sales: " + store.calculateTotalSales());
                }
            }`
        },{
            Problem: "Write a Java program to create a class called Person with private instance variables name, age, and country. Provide public getter and setter methods to access and modify these variables.",
            Number: 26,
            Solution: `public class Person {
                private String name;
                private int age;
                private String country;
            
                public Person(String name, int age, String country) {
                    this.name = name;
                    this.age = age;
                    this.country = country;
                }
            
                public String getName() {
                    return name;
                }
            
                public void setName(String name) {
                    this.name = name;
                }
            
                public int getAge() {
                    return age;
                }
            
                public void setAge(int age) {
                    this.age = age;
                }
            
                public String getCountry() {
                    return country;
                }
            
                public void setCountry(String country) {
                    this.country = country;
                }
            
                public static void main(String[] args) {
                    Person person = new Person("John", 30, "USA");
                    System.out.println(person.getName() + " " + person.getAge() + " " + person.getCountry());
                }
            }`
          },
          {
            Problem: "Write a Java program to create a class called BankAccount with private instance variables accountNumber and balance. Provide public getter and setter methods to access and modify these variables.",
            Number: 27,
            Solution: `public class BankAccount {
                private int accountNumber;
                private double balance;
            
                public BankAccount(int accountNumber, double balance) {
                    this.accountNumber = accountNumber;
                    this.balance = balance;
                }
            
                public int getAccountNumber() {
                    return accountNumber;
                }
            
                public void setAccountNumber(int accountNumber) {
                    this.accountNumber = accountNumber;
                }
            
                public double getBalance() {
                    return balance;
                }
            
                public void setBalance(double balance) {
                    this.balance = balance;
                }
            
                public static void main(String[] args) {
                    BankAccount account = new BankAccount(12345, 1000.0);
                    System.out.println("Account Number: " + account.getAccountNumber());
                    System.out.println("Balance: " + account.getBalance());
                }
            }`
          },
          {
            Problem: "Write a Java program to create a class called Rectangle with private instance variables length and width. Provide public getter and setter methods to access and modify these variables.",
            Number: 28,
            Solution: `public class Rectangle {
                private double length;
                private double width;
            
                public Rectangle(double length, double width) {
                    this.length = length;
                    this.width = width;
                }
            
                public double getLength() {
                    return length;
                }
            
                public void setLength(double length) {
                    this.length = length;
                }
            
                public double getWidth() {
                    return width;
                }
            
                public void setWidth(double width) {
                    this.width = width;
                }
            
                public double calculateArea() {
                    return length * width;
                }
            
                public double calculatePerimeter() {
                    return 2 * (length + width);
                }
            
                public static void main(String[] args) {
                    Rectangle rectangle = new Rectangle(5, 10);
                    System.out.println("Area: " + rectangle.calculateArea());
                    System.out.println("Perimeter: " + rectangle.calculatePerimeter());
                }
            }`
          },
          {
            Problem: "Write a Java program to create a class called Employee with private instance variables employee_id, employee_name, and employee_salary. Provide public getter and setter methods to access and modify the id and name variables, but provide a getter method for the salary variable that returns a formatted string.",
            Number: 29,
            Solution: `public class Employee {
                private int employee_id;
                private String employee_name;
                private double employee_salary;
            
                public Employee(int employee_id, String employee_name, double employee_salary) {
                    this.employee_id = employee_id;
                    this.employee_name = employee_name;
                    this.employee_salary = employee_salary;
                }
            
                public int getEmployeeId() {
                    return employee_id;
                }
            
                public void setEmployeeId(int employee_id) {
                    this.employee_id = employee_id;
                }
            
                public String getEmployeeName() {
                    return employee_name;
                }
            
                public void setEmployeeName(String employee_name) {
                    this.employee_name = employee_name;
                }
            
                public String getEmployeeSalary() {
                    return String.format("$%.2f", employee_salary);
                }
            
                public static void main(String[] args) {
                    Employee employee = new Employee(1, "Alice", 50000);
                    System.out.println("ID: " + employee.getEmployeeId());
                    System.out.println("Name: " + employee.getEmployeeName());
                    System.out.println("Salary: " + employee.getEmployeeSalary());
                }
            }`
          },
          {
            Problem: "Write a Java program to create a class called Circle with a private instance variable radius. Provide public getter and setter methods to access and modify the radius variable. However, provide two methods called calculateArea() and calculatePerimeter() that return the calculated area and perimeter based on the current radius value.",
            Number: 30,
            Solution: `public class Circle {
                private double radius;
            
                public Circle(double radius) {
                    this.radius = radius;
                }
            
                public double getRadius() {
                    return radius;
                }
            
                public void setRadius(double radius) {
                    this.radius = radius;
                }
            
                public double calculateArea() {
                    return Math.PI * radius * radius;
                }
            
                public double calculatePerimeter() {
                    return 2 * Math.PI * radius;
                }
            
                public static void main(String[] args) {
                    Circle circle = new Circle(5);
                    System.out.println("Area: " + circle.calculateArea());
                    System.out.println("Perimeter: " + circle.calculatePerimeter());
                }
            }`
          },
          {
            Problem: "Write a Java program to create a class called Car with private instance variables company_name, model_name, year, and mileage. Provide public getter and setter methods to access and modify the company_name, model_name, and year variables. However, only provide a getter method for the mileage variable.",
            Number: 31,
            Solution: `public class Car {
                private String company_name;
                private String model_name;
                private int year;
                private double mileage;
            
                public Car(String company_name, String model_name, int year, double mileage) {
                    this.company_name = company_name;
                    this.model_name = model_name;
                    this.year = year;
                    this.mileage = mileage;
                }
            
                public String getCompanyName() {
                    return company_name;
                }
            
                public void setCompanyName(String company_name) {
                    this.company_name = company_name;
                }
            
                public String getModelName() {
                    return model_name;
                }
            
                public void setModelName(String model_name) {
                    this.model_name = model_name;
                }
            
                public int getYear() {
                    return year;
                }
            
                public void setYear(int year) {
                    this.year = year;
                }
            
                public double getMileage() {
                    return mileage;
                }
            
                public static void main(String[] args) {
                    Car car = new Car("Toyota", "Corolla", 2020, 15.5);
                    System.out.println("Company: " + car.getCompanyName());
                    System.out.println("Model: " + car.getModelName());
                    System.out.println("Year: " + car.getYear());
                    System.out.println("Mileage: " + car.getMileage());
                }
            }`
          },
          {
            Problem: "Write a Java program to create a class called Student with private instance variables student_id, student_name, and grades. Provide public getter and setter methods to access and modify the student_id and student_name variables. However, provide a method called addGrade() that allows adding a grade to the grades variable while performing additional validation.",
            Number: 32,
            Solution: `public class Student {
                private int student_id;
                private String student_name;
                private List<Double> grades = new ArrayList<>();
            
                public Student(int student_id, String student_name) {
                    this.student_id = student_id;
                    this.student_name = student_name;
                }
            
                public int getStudentId() {
                    return student_id;
                }
            
                public void setStudentId(int student_id) {
                    this.student_id = student_id;
                }
            
                public String getStudentName() {
                    return student_name;
                }
            
                public void setStudentName(String student_name) {
                    this.student_name = student_name;
                }
            
                public List<Double> getGrades() {
                    return grades;
                }
            
                public void addGrade(double grade) {
                    if (grade >= 0 && grade <= 100) {
                        grades.add(grade);
                    } else {
                        System.out.println("Invalid grade. It should be between 0 and 100.");
                    }
                }
            
                public static void main(String[] args) {
                    Student student = new Student(1, "John");
                    student.addGrade(90);
                    student.addGrade(85);
                    System.out.println("Grades: " + student.getGrades());
                }
            }`
          },
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
function Packages() {
    document.querySelector(".Questions ol").innerHTML = ""
    document.querySelector(".Solutions h2").innerHTML = ""
    document.querySelector(".Solutions pre code").innerHTML = ""
    let currentIndex = -1
    let arr1 = [
        {
            Problem: "Create a Java program to access the java.util.Date class through import keyword and print the current date of the system.",
            Number: 1,
            Solution: `
                import java.util.Date;
    
                public class DateExample {
                    public static void main(String[] args) {
                        Date date = new Date();
                        System.out.println("Current Date: " + date);
                    }
                }
            `
        },
        {
            Problem: "Create a Java program to access the java.util.Date class through qualified way and print the current date of the system.",
            Number: 2,
            Solution: `
                public class DateExample {
                    public static void main(String[] args) {
                        java.util.Date date = new java.util.Date();
                        System.out.println("Current Date: " + date);
                    }
                }
            `
        },
        {
            Problem: "Create a Java program to access the java.util.Date class through import keyword and print the current date of the system but inherit the Date class.",
            Number: 3,
            Solution: `
                import java.util.Date;
    
                class MyDate extends Date {
                    public void displayDate() {
                        System.out.println("Inherited Date: " + this);
                    }
                }
    
                public class DateInheritanceExample {
                    public static void main(String[] args) {
                        MyDate myDate = new MyDate();
                        myDate.displayDate();
                    }
                }
            `
        },
        {
            Problem: "Create a Java program to access the java.util.Date class through qualified way and print the current date of the system but inherit the Date class.",
            Number: 4,
            Solution: `
                public class DateInheritanceExample {
                    class MyDate extends java.util.Date {
                        public void displayDate() {
                            System.out.println("Inherited Date: " + this);
                        }
                    }
                    public static void main(String[] args) {
                        DateInheritanceExample example = new DateInheritanceExample();
                        MyDate myDate = example.new MyDate();
                        myDate.displayDate();
                    }
                }
            `
        },
        {
            Problem: "Create a Java program to create a package with multiple default classes.",
            Number: 5,
            Solution: `
                package mypackage;
    
                class ClassOne {
                    public void display() {
                        System.out.println("This is Class One");
                    }
                }
    
                class ClassTwo {
                    public void display() {
                        System.out.println("This is Class Two");
                    }
                }
    
                class ClassThree {
                    public void display() {
                        System.out.println("This is Class Three");
                    }
                }
    
                class ClassFour {
                    public void display() {
                        System.out.println("This is Class Four");
                    }
                }
    
                public class PackageExample {
                    public static void main(String[] args) {
                        ClassOne one = new ClassOne();
                        one.display();
                        ClassTwo two = new ClassTwo();
                        two.display();
                        ClassThree three = new ClassThree();
                        three.display();
                        ClassFour four = new ClassFour();
                        four.display();
                    }
                }
            `
        },
        {
            Problem: "Create a Java program to create a package with 4 public classes, create the object in another file and call the function created in those classes.",
            Number: 6,
            Solution: `
                // In package mypackage
                package mypackage;
    
                public class ClassOne {
                    public void display() {
                        System.out.println("Class One");
                    }
                }
    
                public class ClassTwo {
                    public void display() {
                        System.out.println("Class Two");
                    }
                }
    
                public class ClassThree {
                    public void display() {
                        System.out.println("Class Three");
                    }
                }
    
                public class ClassFour {
                    public void display() {
                        System.out.println("Class Four");
                    }
                }
    
                // In another file
                import mypackage.*;
    
                public class PackageDemo {
                    public static void main(String[] args) {
                        ClassOne one = new ClassOne();
                        one.display();
                        ClassTwo two = new ClassTwo();
                        two.display();
                        ClassThree three = new ClassThree();
                        three.display();
                        ClassFour four = new ClassFour();
                        four.display();
                    }
                }
            `
        },
        {
            Problem: "Write a Java program to perform employee payroll processing using packages.",
            Number: 7,
            Solution: `
                // In package employee
                package employee;
    
                public class Emp {
                    String name, empid, category;
                    double bpay, hra, da, npay, pf, grosspay, incometax, allowance;
    
                    public void calculatePayroll() {
                        grosspay = bpay + hra + da;
                        npay = grosspay - pf;
                        allowance = grosspay * 0.10;
                        incometax = grosspay * 0.05;
                    }
    
                    public void display() {
                        System.out.println("Employee ID: " + empid);
                        System.out.println("Name: " + name);
                        System.out.println("Category: " + category);
                        System.out.println("Net Pay: " + npay);
                        System.out.println("Allowance: " + allowance);
                        System.out.println("Income Tax: " + incometax);
                    }
                }
    
                // In another file
                import employee.*;
    
                public class Emppay {
                    public static void main(String[] args) {
                        Emp emp = new Emp();
                        emp.name = "John Doe";
                        emp.empid = "E001";
                        emp.category = "Full-time";
                        emp.bpay = 30000;
                        emp.hra = 5000;
                        emp.da = 2000;
                        emp.pf = 2000;
                        emp.calculatePayroll();
                        emp.display();
                    }
                }
            `
        },
        {
            Problem: "Create a Java program to create a package with public class and protected members to be accessed in another class.",
            Number: 8,
            Solution: `
                // In package mypackage
                package mypackage;
    
                public class MyClass {
                    protected String name = "John Doe";
    
                    public void display() {
                        System.out.println("Name: " + name);
                    }
                }
    
                // In another file
                import mypackage.*;
    
                public class AccessProtected {
                    public static void main(String[] args) {
                        MyClass obj = new MyClass();
                        obj.display();
                    }
                }
            `
        },
        {
            Problem: "Create a Java program to create a nested package i.e. c4.sample with public class and protected members to be accessed in another class.",
            Number: 9,
            Solution: `
                // In package c4.sample
                package c4.sample;
    
                public class MyClass {
                    protected String name = "Jane Doe";
    
                    public void display() {
                        System.out.println("Name: " + name);
                    }
                }
    
                // In another file
                import c4.sample.*;
    
                public class AccessNestedPackage {
                    public static void main(String[] args) {
                        MyClass obj = new MyClass();
                        obj.display();
                    }
                }
            `
        },
        {
            Problem: "Create a Java program to create a package with public class and public members to be accessed in another class.",
            Number: 10,
            Solution: `
                // In package mypackage
                package mypackage;
    
                public class MyClass {
                    public String name = "Alice";
    
                    public void display() {
                        System.out.println("Name: " + name);
                    }
                }
    
                // In another file
                import mypackage.*;
    
                public class AccessPublic {
                    public static void main(String[] args) {
                        MyClass obj = new MyClass();
                        obj.display();
                    }
                }
            `
        }
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
function Onedarray() {
    document.querySelector(".Questions ol").innerHTML = ""
    document.querySelector(".Solutions h2").innerHTML = ""
    document.querySelector(".Solutions pre code").innerHTML = ""
    let currentIndex = -1
    let arr1 = [
        {
            Problem: "Program to copy all elements of one array into another array",
            Number: 1,
            Solution: `
                public class ArrayCopyExample {
                    public static void main(String[] args) {
                        int[] source = {1, 2, 3, 4, 5};
                        int[] destination = new int[source.length];
    
                        System.arraycopy(source, 0, destination, 0, source.length);
    
                        System.out.println("Elements in destination array:");
                        for (int i : destination) {
                            System.out.print(i + " ");
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to find the frequency of each element in the array",
            Number: 2,
            Solution: `
                import java.util.HashMap;
    
                public class ArrayFrequency {
                    public static void main(String[] args) {
                        int[] array = {1, 2, 2, 3, 4, 4, 4, 5};
                        HashMap<Integer, Integer> frequencyMap = new HashMap<>();
    
                        for (int num : array) {
                            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
                        }
    
                        System.out.println("Element frequencies:");
                        for (Integer key : frequencyMap.keySet()) {
                            System.out.println(key + ": " + frequencyMap.get(key));
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to left rotate the elements of an array",
            Number: 3,
            Solution: `
                public class ArrayLeftRotate {
                    public static void main(String[] args) {
                        int[] array = {1, 2, 3, 4, 5};
                        int n = 2;
    
                        for (int i = 0; i < n; i++) {
                            int temp = array[0];
                            for (int j = 0; j < array.length - 1; j++) {
                                array[j] = array[j + 1];
                            }
                            array[array.length - 1] = temp;
                        }
    
                        System.out.println("Left rotated array:");
                        for (int num : array) {
                            System.out.print(num + " ");
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to print the duplicate elements of an array",
            Number: 4,
            Solution: `
                import java.util.HashSet;
    
                public class ArrayDuplicates {
                    public static void main(String[] args) {
                        int[] array = {1, 2, 2, 3, 4, 4, 5};
                        HashSet<Integer> set = new HashSet<>();
                        System.out.println("Duplicate elements:");
    
                        for (int num : array) {
                            if (!set.add(num)) {
                                System.out.print(num + " ");
                            }
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to print the elements of an array",
            Number: 5,
            Solution: `
                public class ArrayPrint {
                    public static void main(String[] args) {
                        int[] array = {1, 2, 3, 4, 5};
                        System.out.println("Array elements:");
                        for (int num : array) {
                            System.out.print(num + " ");
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to print the elements of an array in reverse order",
            Number: 6,
            Solution: `
                public class ArrayReverse {
                    public static void main(String[] args) {
                        int[] array = {1, 2, 3, 4, 5};
                        System.out.println("Array elements in reverse order:");
                        for (int i = array.length - 1; i >= 0; i--) {
                            System.out.print(array[i] + " ");
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to print the elements of an array present on even position",
            Number: 7,
            Solution: `
                public class ArrayEvenPosition {
                    public static void main(String[] args) {
                        int[] array = {1, 2, 3, 4, 5};
                        System.out.println("Elements at even positions:");
                        for (int i = 0; i < array.length; i += 2) {
                            System.out.print(array[i] + " ");
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to print the elements of an array present on odd position",
            Number: 8,
            Solution: `
                public class ArrayOddPosition {
                    public static void main(String[] args) {
                        int[] array = {1, 2, 3, 4, 5};
                        System.out.println("Elements at odd positions:");
                        for (int i = 1; i < array.length; i += 2) {
                            System.out.print(array[i] + " ");
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to print the largest element in an array",
            Number: 9,
            Solution: `
                public class ArrayLargest {
                    public static void main(String[] args) {
                        int[] array = {1, 2, 3, 4, 5};
                        int largest = array[0];
    
                        for (int num : array) {
                            if (num > largest) {
                                largest = num;
                            }
                        }
    
                        System.out.println("Largest element: " + largest);
                    }
                }
            `
        },
        {
            Problem: "Program to print the smallest element in an array",
            Number: 10,
            Solution: `
                public class ArraySmallest {
                    public static void main(String[] args) {
                        int[] array = {1, 2, 3, 4, 5};
                        int smallest = array[0];
    
                        for (int num : array) {
                            if (num < smallest) {
                                smallest = num;
                            }
                        }
    
                        System.out.println("Smallest element: " + smallest);
                    }
                }
            `
        },
        {
            Problem: "Program to print the number of elements present in an array",
            Number: 11,
            Solution: `
                public class ArrayCount {
                    public static void main(String[] args) {
                        int[] array = {1, 2, 3, 4, 5};
                        System.out.println("Number of elements in array: " + array.length);
                    }
                }
            `
        },
        {
            Problem: "Program to print the sum of all the items of the array",
            Number: 12,
            Solution: `
                public class ArraySum {
                    public static void main(String[] args) {
                        int[] array = {1, 2, 3, 4, 5};
                        int sum = 0;
    
                        for (int num : array) {
                            sum += num;
                        }
    
                        System.out.println("Sum of array elements: " + sum);
                    }
                }
            `
        },
        {
            Problem: "Program to right rotate the elements of an array",
            Number: 13,
            Solution: `
                public class ArrayRightRotate {
                    public static void main(String[] args) {
                        int[] array = {1, 2, 3, 4, 5};
                        int n = 2;
    
                        for (int i = 0; i < n; i++) {
                            int temp = array[array.length - 1];
                            for (int j = array.length - 1; j > 0; j--) {
                                array[j] = array[j - 1];
                            }
                            array[0] = temp;
                        }
    
                        System.out.println("Right rotated array:");
                        for (int num : array) {
                            System.out.print(num + " ");
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to sort the elements of an array in ascending order",
            Number: 14,
            Solution: `
                import java.util.Arrays;
    
                public class ArraySortAsc {
                    public static void main(String[] args) {
                        int[] array = {5, 3, 8, 1, 2};
                        Arrays.sort(array);
    
                        System.out.println("Sorted array in ascending order:");
                        for (int num : array) {
                            System.out.print(num + " ");
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to sort the elements of an array in descending order",
            Number: 15,
            Solution: `
                import java.util.Arrays;
                import java.util.Collections;
    
                public class ArraySortDesc {
                    public static void main(String[] args) {
                        Integer[] array = {5, 3, 8, 1, 2};
                        Arrays.sort(array, Collections.reverseOrder());
    
                        System.out.println("Sorted array in descending order:");
                        for (int num : array) {
                            System.out.print(num + " ");
                        }
                    }
                }
            `
        }, {
            Problem: "Program to Find 3rd Largest Number in an array",
            Number: 16,
            Solution: `
                import java.util.Arrays;
    
                public class ArrayThirdLargest {
                    public static void main(String[] args) {
                        int[] array = {5, 3, 8, 1, 2};
                        Arrays.sort(array);
                        System.out.println("3rd Largest element: " + array[array.length - 3]);
                    }
                }
            `
        },
        {
            Problem: "Program to Find 2nd Largest Number in an array",
            Number: 17,
            Solution: `
                import java.util.Arrays;
    
                public class ArraySecondLargest {
                    public static void main(String[] args) {
                        int[] array = {5, 3, 8, 1, 2};
                        Arrays.sort(array);
                        System.out.println("2nd Largest element: " + array[array.length - 2]);
                    }
                }
            `
        },
        {
            Problem: "Program to Find Largest Number in an array",
            Number: 18,
            Solution: `
                public class ArrayLargest {
                    public static void main(String[] args) {
                        int[] array = {5, 3, 8, 1, 2};
                        int largest = array[0];
    
                        for (int num : array) {
                            if (num > largest) {
                                largest = num;
                            }
                        }
    
                        System.out.println("Largest element: " + largest);
                    }
                }
            `
        },
        {
            Problem: "Program to Find 2nd Smallest Number in an array",
            Number: 19,
            Solution: `
                import java.util.Arrays;
    
                public class ArraySecondSmallest {
                    public static void main(String[] args) {
                        int[] array = {5, 3, 8, 1, 2};
                        Arrays.sort(array);
                        System.out.println("2nd Smallest element: " + array[1]);
                    }
                }
            `
        },
        {
            Problem: "Program to Find Smallest Number in an array",
            Number: 20,
            Solution: `
                public class ArraySmallest {
                    public static void main(String[] args) {
                        int[] array = {5, 3, 8, 1, 2};
                        int smallest = array[0];
    
                        for (int num : array) {
                            if (num < smallest) {
                                smallest = num;
                            }
                        }
    
                        System.out.println("Smallest element: " + smallest);
                    }
                }
            `
        },
        {
            Problem: "Program to Remove Duplicate Element in an array",
            Number: 21,
            Solution: `
                import java.util.HashSet;
    
                public class ArrayRemoveDuplicates {
                    public static void main(String[] args) {
                        int[] array = {1, 2, 2, 3, 4, 4, 5};
                        HashSet<Integer> set = new HashSet<>();
                        System.out.println("Array with duplicates removed:");
                        for (int num : array) {
                            set.add(num);
                        }
                        System.out.println(set);
                    }
                }
            `
        },
        {
            Problem: "Program to Print Odd and Even Numbers from an array",
            Number: 22,
            Solution: `
                public class ArrayOddEven {
                    public static void main(String[] args) {
                        int[] array = {1, 2, 3, 4, 5};
                        System.out.println("Odd numbers:");
                        for (int num : array) {
                            if (num % 2 != 0) {
                                System.out.print(num + " ");
                            }
                        }
                        System.out.println("\nEven numbers:");
                        for (int num : array) {
                            if (num % 2 == 0) {
                                System.out.print(num + " ");
                            }
                        }
                    }
                }
            `
        },
        {
            Problem: "How to Sort an Array in Java",
            Number: 23,
            Solution: `
                import java.util.Arrays;
    
                public class ArraySort {
                    public static void main(String[] args) {
                        int[] array = {5, 3, 8, 1, 2};
                        Arrays.sort(array);
    
                        System.out.println("Sorted array:");
                        for (int num : array) {
                            System.out.print(num + " ");
                        }
                    }
                }
            `
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
function Strings() {
    document.querySelector(".Questions ol").innerHTML = ""
    document.querySelector(".Solutions h2").innerHTML = ""
    document.querySelector(".Solutions pre code").innerHTML = ""
    let currentIndex = -1
    let arr1 = [
        {
            Problem: "Program to Check if a String contains only digits?",
            Number: 1,
            Solution: `
                public class StringCheckDigits {
                    public static void main(String[] args) {
                        String str = "12345";
                        if (str.matches("[0-9]+")) {
                            System.out.println("The string contains only digits.");
                        } else {
                            System.out.println("The string does not contain only digits.");
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to perform Deep Copy for String?",
            Number: 2,
            Solution: `
                public class StringDeepCopy {
                    public static void main(String[] args) {
                        String str1 = "Hello, World!";
                        String str2 = new String(str1);
                        System.out.println("Original String: " + str1);
                        System.out.println("Copied String: " + str2);
                    }
                }
            `
        },
        {
            Problem: "Program to prove String is immutable programmatically?",
            Number: 3,
            Solution: `
                public class StringImmutable {
                    public static void main(String[] args) {
                        String str = "Hello";
                        str.concat(" World"); 
                        System.out.println("String after concatenation: " + str); 
                    }
                }
            `
        },
        {
            Problem: "Program to remove all occurrences of a given character from input String?",
            Number: 4,
            Solution: `
                public class StringRemoveCharacter {
                    public static void main(String[] args) {
                        String str = "Hello World";
                        char ch = 'o';
                        str = str.replace(String.valueOf(ch), "");
                        System.out.println("String after removal: " + str);
                    }
                }
            `
        },
        {
            Problem: "Program to append the string using StringBuffer class",
            Number: 5,
            Solution: `
                public class StringBufferAppend {
                    public static void main(String[] args) {
                        StringBuffer sb = new StringBuffer("Hello");
                        sb.append(" World");
                        System.out.println("Appended String: " + sb);
                    }
                }
            `
        },
        {
            Problem: "Program to insert the string using StringBuffer class",
            Number: 6,
            Solution: `
                public class StringBufferInsert {
                    public static void main(String[] args) {
                        StringBuffer sb = new StringBuffer("Hello");
                        sb.insert(5, " World");
                        System.out.println("String after insert: " + sb);
                    }
                }
            `
        },
        {
            Problem: "Program to Add Characters to a String",
            Number: 7,
            Solution: `
                public class StringAddCharacters {
                    public static void main(String[] args) {
                        String str = "Hello";
                        str = str + " World";
                        System.out.println("New String: " + str);
                    }
                }
            `
        },
        {
            Problem: "Program to Check Anagram",
            Number: 9,
            Solution: `
                public class StringAnagram {
                    public static void main(String[] args) {
                        String str1 = "listen";
                        String str2 = "silent";
                        char[] arr1 = str1.toCharArray();
                        char[] arr2 = str2.toCharArray();
                        Arrays.sort(arr1);
                        Arrays.sort(arr2);
                        if (Arrays.equals(arr1, arr2)) {
                            System.out.println("The strings are anagrams.");
                        } else {
                            System.out.println("The strings are not anagrams.");
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to check whether a string is a Palindrome",
            Number: 10,
            Solution: `
                public class StringPalindrome {
                    public static void main(String[] args) {
                        String str = "madam";
                        String reversed = new StringBuilder(str).reverse().toString();
                        if (str.equals(reversed)) {
                            System.out.println("The string is a palindrome.");
                        } else {
                            System.out.println("The string is not a palindrome.");
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to Convert Enum to String",
            Number: 11,
            Solution: `
                public class EnumToString {
                    public enum Days { MONDAY, TUESDAY, WEDNESDAY }
                    public static void main(String[] args) {
                        Days day = Days.MONDAY;
                        String dayString = day.toString();
                        System.out.println("Enum to String: " + dayString);
                    }
                }
            `
        },
        {
            Problem: "Program to Convert String to String Array",
            Number: 12,
            Solution: `
                public class StringToArray {
                    public static void main(String[] args) {
                        String str = "Hello World";
                        String[] arr = str.split(" ");
                        System.out.println("Converted Array: " + Arrays.toString(arr));
                    }
                }
            `
        }, {
            Problem: "Program to count number of words in a String?",
            Number: 13,
            Solution: `
                public class StringWordCount {
                    public static void main(String[] args) {
                        String str = "Hello World this is Java";
                        String[] words = str.split(" ");
                        System.out.println("Number of words: " + words.length);
                    }
                }
            `
        },
        {
            Problem: "Program to count the total number of characters in a string",
            Number: 14,
            Solution: `
                public class StringCharCount {
                    public static void main(String[] args) {
                        String str = "Hello World";
                        System.out.println("Total characters: " + str.length());
                    }
                }
            `
        },
        {
            Problem: "Program to count the total number of punctuation characters exists in a String",
            Number: 15,
            Solution: `
                public class StringPunctuationCount {
                    public static void main(String[] args) {
                        String str = "Hello, World! How's it going?";
                        int punctuationCount = 0;
                        for (int i = 0; i < str.length(); i++) {
                            if (str.charAt(i) == ',' || str.charAt(i) == '!' || str.charAt(i) == '?' || 
                                str.charAt(i) == '.' || str.charAt(i) == ';' || str.charAt(i) == ':') {
                                punctuationCount++;
                            }
                        }
                        System.out.println("Number of punctuation characters: " + punctuationCount);
                    }
                }
            `
        },
        {
            Problem: "Program to count the total number of vowels and consonants in a string",
            Number: 16,
            Solution: `
                public class StringVowelConsonantCount {
                    public static void main(String[] args) {
                        String str = "Hello World";
                        int vowels = 0, consonants = 0;
                        str = str.toLowerCase();
                        for (int i = 0; i < str.length(); i++) {
                            char ch = str.charAt(i);
                            if (ch >= 'a' && ch <= 'z') {
                                if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                                    vowels++;
                                } else {
                                    consonants++;
                                }
                            }
                        }
                        System.out.println("Vowels: " + vowels);
                        System.out.println("Consonants: " + consonants);
                    }
                }
            `
        },
        {
            Problem: "Program to determine whether a given string is palindrome",
            Number: 17,
            Solution: `
                public class StringPalindromeCheck {
                    public static void main(String[] args) {
                        String str = "madam";
                        String reversed = new StringBuilder(str).reverse().toString();
                        if (str.equals(reversed)) {
                            System.out.println("The string is a palindrome.");
                        } else {
                            System.out.println("The string is not a palindrome.");
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to determine whether one string is a rotation of another",
            Number: 18,
            Solution: `
                public class StringRotation {
                    public static void main(String[] args) {
                        String str1 = "hello";
                        String str2 = "lohel";
                        if (str1.length() == str2.length() && (str1 + str1).contains(str2)) {
                            System.out.println("The second string is a rotation of the first string.");
                        } else {
                            System.out.println("The second string is not a rotation of the first string.");
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to divide a string in 'N' equal parts.",
            Number: 19,
            Solution: `
                public class StringDivide {
                    public static void main(String[] args) {
                        String str = "abcdefgh";
                        int n = 2;  // number of parts
                        int len = str.length();
                        int partLength = len / n;
                        for (int i = 0; i < n; i++) {
                            String part = str.substring(i * partLength, (i + 1) * partLength);
                            System.out.println("Part " + (i+1) + ": " + part);
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to find all subsets of a string",
            Number: 20,
            Solution: `
                public class StringSubsets {
                    public static void main(String[] args) {
                        String str = "abc";
                        int n = str.length();
                        for (int i = 0; i < (1 << n); i++) {
                            StringBuilder subset = new StringBuilder();
                            for (int j = 0; j < n; j++) {
                                if ((i & (1 << j)) > 0) {
                                    subset.append(str.charAt(j));
                                }
                            }
                            System.out.println(subset);
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to find all the permutations of a string",
            Number: 21,
            Solution: `
                public class StringPermutations {
                    public static void main(String[] args) {
                        String str = "abc";
                        permute(str, 0, str.length() - 1);
                    }
                    
                    private static void permute(String str, int l, int r) {
                        if (l == r) {
                            System.out.println(str);
                        } else {
                            for (int i = l; i <= r; i++) {
                                str = swap(str, l, i);
                                permute(str, l + 1, r);
                                str = swap(str, l, i);
                            }
                        }
                    }
                    
                    private static String swap(String a, int i, int j) {
                        char temp;
                        char[] charArray = a.toCharArray();
                        temp = charArray[i];
                        charArray[i] = charArray[j];
                        charArray[j] = temp;
                        return String.valueOf(charArray);
                    }
                }
            `
        },
        {
            Problem: "Program to find maximum and minimum occurring character in a string",
            Number: 22,
            Solution: `
                public class StringMaxMinChar {
                    public static void main(String[] args) {
                        String str = "hello";
                        int[] count = new int[256];
                        for (int i = 0; i < str.length(); i++) {
                            count[str.charAt(i)]++;
                        }
                        int max = 0, min = Integer.MAX_VALUE;
                        char maxChar = 0, minChar = 0;
                        for (int i = 0; i < 256; i++) {
                            if (count[i] > max) {
                                max = count[i];
                                maxChar = (char) i;
                            }
                            if (count[i] > 0 && count[i] < min) {
                                min = count[i];
                                minChar = (char) i;
                            }
                        }
                        System.out.println("Max occurring character: " + maxChar);
                        System.out.println("Min occurring character: " + minChar);
                    }
                }
            `
        }, {
            Problem: "Program to find Reverse of the string",
            Number: 23,
            Solution: `
                public class StringReverse {
                    public static void main(String[] args) {
                        String str = "Hello World";
                        String reversed = new StringBuilder(str).reverse().toString();
                        System.out.println("Reversed String: " + reversed);
                    }
                }
            `
        },
        {
            Problem: "Program to find the duplicate characters in a string",
            Number: 24,
            Solution: `
                public class StringDuplicateChars {
                    public static void main(String[] args) {
                        String str = "programming";
                        System.out.print("Duplicate characters: ");
                        for (int i = 0; i < str.length(); i++) {
                            for (int j = i + 1; j < str.length(); j++) {
                                if (str.charAt(i) == str.charAt(j)) {
                                    System.out.print(str.charAt(i) + " ");
                                    break;
                                }
                            }
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to find the duplicate words in a string",
            Number: 25,
            Solution: `
                public class StringDuplicateWords {
                    public static void main(String[] args) {
                        String str = "hello hello world world";
                        String[] words = str.split(" ");
                        for (int i = 0; i < words.length; i++) {
                            for (int j = i + 1; j < words.length; j++) {
                                if (words[i].equals(words[j])) {
                                    System.out.println("Duplicate word: " + words[i]);
                                    break;
                                }
                            }
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to find the frequency of characters",
            Number: 26,
            Solution: `
                public class StringCharFrequency {
                    public static void main(String[] args) {
                        String str = "hello";
                        int[] count = new int[256];
                        for (int i = 0; i < str.length(); i++) {
                            count[str.charAt(i)]++;
                        }
                        System.out.println("Character frequency: ");
                        for (int i = 0; i < 256; i++) {
                            if (count[i] > 0) {
                                System.out.println((char) i + ": " + count[i]);
                            }
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to find the largest and smallest word in a string",
            Number: 27,
            Solution: `
                public class StringLargestSmallestWord {
                    public static void main(String[] args) {
                        String str = "hello programming world";
                        String[] words = str.split(" ");
                        String largest = words[0];
                        String smallest = words[0];
                        for (String word : words) {
                            if (word.length() > largest.length()) {
                                largest = word;
                            }
                            if (word.length() < smallest.length()) {
                                smallest = word;
                            }
                        }
                        System.out.println("Largest word: " + largest);
                        System.out.println("Smallest word: " + smallest);
                    }
                }
            `
        },
        {
            Problem: "Program to find the longest repeating sequence in a string",
            Number: 28,
            Solution: `
                public class StringLongestRepeating {
                    public static void main(String[] args) {
                        String str = "abcabcabc";
                        int maxCount = 0;
                        String longestSubstr = "";
                        for (int i = 0; i < str.length(); i++) {
                            for (int j = i + 1; j <= str.length(); j++) {
                                String subStr = str.substring(i, j);
                                if (str.indexOf(subStr, j) > 0 && subStr.length() > maxCount) {
                                    maxCount = subStr.length();
                                    longestSubstr = subStr;
                                }
                            }
                        }
                        System.out.println("Longest repeating sequence: " + longestSubstr);
                    }
                }
            `
        },
        {
            Problem: "Program to find the most repeated word in a text file",
            Number: 29,
            Solution: `
                import java.io.*;
                import java.util.*;
                public class MostRepeatedWord {
                    public static void main(String[] args) throws IOException {
                        BufferedReader reader = new BufferedReader(new FileReader("textfile.txt"));
                        String line;
                        Map<String, Integer> wordCount = new HashMap<>();
                        while ((line = reader.readLine()) != null) {
                            String[] words = line.split(" ");
                            for (String word : words) {
                                wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
                            }
                        }
                        reader.close();
                        String mostRepeatedWord = Collections.max(wordCount.entrySet(), Map.Entry.comparingByValue()).getKey();
                        System.out.println("Most repeated word: " + mostRepeatedWord);
                    }
                }
            `
        },
        {
            Problem: "Program to find the number of the words in the given text file",
            Number: 30,
            Solution: `
                import java.io.*;
                public class WordCountInFile {
                    public static void main(String[] args) throws IOException {
                        BufferedReader reader = new BufferedReader(new FileReader("textfile.txt"));
                        String line;
                        int wordCount = 0;
                        while ((line = reader.readLine()) != null) {
                            String[] words = line.split(" ");
                            wordCount += words.length;
                        }
                        reader.close();
                        System.out.println("Total words in the file: " + wordCount);
                    }
                }
            `
        }, {
            Problem: "Program to Get a Character From the Given String",
            Number: 31,
            Solution: `
                public class GetCharacterFromString {
                    public static void main(String[] args) {
                        String str = "hello";
                        char ch = str.charAt(2);  // Getting character at index 2
                        System.out.println("Character at index 2: " + ch);
                    }
                }
            `
        },
        {
            Problem: "Program to Insert a string into another string",
            Number: 32,
            Solution: `
                public class InsertString {
                    public static void main(String[] args) {
                        String str1 = "hello";
                        String str2 = "world";
                        String result = str1.substring(0, 3) + str2 + str1.substring(3);
                        System.out.println("Result after insertion: " + result);
                    }
                }
            `
        },
        {
            Problem: "Program to Iterate Over Characters in String",
            Number: 33,
            Solution: `
                public class IterateCharacters {
                    public static void main(String[] args) {
                        String str = "hello";
                        for (int i = 0; i < str.length(); i++) {
                            System.out.println("Character at position " + i + ": " + str.charAt(i));
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to Print a New Line in String",
            Number: 34,
            Solution: `
                public class PrintNewLine {
                    public static void main(String[] args) {
                        String str = "Hello World\nJava Programming";
                        System.out.println(str);  // Using "\n" to print a new line
                    }
                }
            `
        },
        {
            Problem: "Program to Print even length words",
            Number: 35,
            Solution: `
                public class PrintEvenLengthWords {
                    public static void main(String[] args) {
                        String str = "hello world java programming";
                        String[] words = str.split(" ");
                        for (String word : words) {
                            if (word.length() % 2 == 0) {
                                System.out.println(word);
                            }
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to print smallest and biggest possible palindrome word in a given string",
            Number: 36,
            Solution: `
                public class PalindromeWords {
                    public static void main(String[] args) {
                        String str = "madam racecar level";
                        String[] words = str.split(" ");
                        String smallest = "", largest = "";
                        for (String word : words) {
                            if (isPalindrome(word)) {
                                if (smallest.isEmpty() || word.length() < smallest.length()) {
                                    smallest = word;
                                }
                                if (largest.isEmpty() || word.length() > largest.length()) {
                                    largest = word;
                                }
                            }
                        }
                        System.out.println("Smallest palindrome word: " + smallest);
                        System.out.println("Largest palindrome word: " + largest);
                    }
                    
                    public static boolean isPalindrome(String word) {
                        String reverse = new StringBuilder(word).reverse().toString();
                        return word.equals(reverse);
                    }
                }
            `
        },
        {
            Problem: "Program to remove all the white spaces from a string",
            Number: 37,
            Solution: `
                public class RemoveWhiteSpaces {
                    public static void main(String[] args) {
                        String str = " hello world ";
                        String result = str.replaceAll("\\s", "");  // Removing all white spaces
                        System.out.println("String after removing whitespaces: " + result);
                    }
                }
            `
        },
        {
            Problem: "Program to replace lower-case characters with upper-case and vice-versa",
            Number: 38,
            Solution: `
                public class ToggleCase {
                    public static void main(String[] args) {
                        String str = "Hello World";
                        StringBuilder result = new StringBuilder();
                        for (int i = 0; i < str.length(); i++) {
                            char ch = str.charAt(i);
                            if (Character.isLowerCase(ch)) {
                                result.append(Character.toUpperCase(ch));
                            } else if (Character.isUpperCase(ch)) {
                                result.append(Character.toLowerCase(ch));
                            } else {
                                result.append(ch);
                            }
                        }
                        System.out.println("Toggled case: " + result.toString());
                    }
                }
            `
        },
        {
            Problem: "Program to replace the spaces of a string with a specific character",
            Number: 39,
            Solution: `
                public class ReplaceSpaces {
                    public static void main(String[] args) {
                        String str = "Hello World";
                        String result = str.replace(" ", "_");  // Replacing spaces with "_"
                        System.out.println("String after replacing spaces: " + result);
                    }
                }
            `
        },
        {
            Problem: "Program to separate the Individual Characters from a String",
            Number: 40,
            Solution: `
                public class SeparateCharacters {
                    public static void main(String[] args) {
                        String str = "hello";
                        for (int i = 0; i < str.length(); i++) {
                            System.out.println(str.charAt(i));
                        }
                    }
                }
            `
        }, {
            Problem: "Program to Splitting into a number of sub-strings",
            Number: 41,
            Solution: `
                public class SplitIntoSubstrings {
                    public static void main(String[] args) {
                        String str = "hello world java";
                        String[] substrings = str.split(" "); // Splitting string by spaces
                        for (String substring : substrings) {
                            System.out.println(substring);
                        }
                    }
                }
            `
        },
        {
            Problem: "Program to swap two string variables without using third or temp variable.",
            Number: 42,
            Solution: `
                public class SwapStrings {
                    public static void main(String[] args) {
                        String str1 = "hello";
                        String str2 = "world";
                        str1 = str1 + str2; // Concatenating the strings
                        str2 = str1.substring(0, str1.length() - str2.length()); // Getting the first part
                        str1 = str1.substring(str2.length()); // Getting the second part
                        System.out.println("Swapped strings: str1 = " + str1 + ", str2 = " + str2);
                    }
                }
            `
        },
        {
            Problem: "Program to Swapping Pair of Characters",
            Number: 43,
            Solution: `
                public class SwapPairOfCharacters {
                    public static void main(String[] args) {
                        String str = "hello";
                        char[] chars = str.toCharArray();
                        char temp = chars[0]; // Swap first and second characters
                        chars[0] = chars[1];
                        chars[1] = temp;
                        System.out.println("After swapping: " + new String(chars));
                    }
                }
            `
        },
        {
            Problem: "Read two String user input and check if first contains second?",
            Number: 44,
            Solution: `
                import java.util.Scanner;
                public class StringContains {
                    public static void main(String[] args) {
                        Scanner scanner = new Scanner(System.in);
                        System.out.print("Enter the first string: ");
                        String str1 = scanner.nextLine();
                        System.out.print("Enter the second string: ");
                        String str2 = scanner.nextLine();
                        if (str1.contains(str2)) {
                            System.out.println("The first string contains the second string.");
                        } else {
                            System.out.println("The first string does not contain the second string.");
                        }
                        scanner.close();
                    }
                }
            `
        },
        {
            Problem: "Reverse String without reverse() function",
            Number: 45,
            Solution: `
                public class ReverseStringWithoutReverse {
                    public static void main(String[] args) {
                        String str = "hello";
                        String reversed = "";
                        for (int i = str.length() - 1; i >= 0; i--) {
                            reversed += str.charAt(i);
                        }
                        System.out.println("Reversed string: " + reversed);
                    }
                }
            `
        },
        {
            Problem: "Reverse String Word by Word",
            Number: 46,
            Solution: `
                public class ReverseWordByWord {
                    public static void main(String[] args) {
                        String str = "hello world";
                        String[] words = str.split(" ");
                        String reversed = "";
                        for (int i = words.length - 1; i >= 0; i--) {
                            reversed += words[i] + " ";
                        }
                        System.out.println("Reversed string by words: " + reversed.trim());
                    }
                }
            `
        },
        {
            Problem: "Write a program to check if two Strings are created with same characters?",
            Number: 47,
            Solution: `
                public class SameCharacters {
                    public static void main(String[] args) {
                        String str1 = "hello";
                        String str2 = "olleh";
                        char[] chars1 = str1.toCharArray();
                        char[] chars2 = str2.toCharArray();
                        java.util.Arrays.sort(chars1);
                        java.util.Arrays.sort(chars2);
                        if (java.util.Arrays.equals(chars1, chars2)) {
                            System.out.println("Both strings have the same characters.");
                        } else {
                            System.out.println("The strings have different characters.");
                        }
                    }
                }
            `
        },
        {
            Problem: "Write a program to find out first non repeated character from input String?",
            Number: 48,
            Solution: `
                public class FirstNonRepeatedCharacter {
                    public static void main(String[] args) {
                        String str = "swiss";
                        char result = ' ';
                        for (int i = 0; i < str.length(); i++) {
                            if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))) {
                                result = str.charAt(i);
                                break;
                            }
                        }
                        System.out.println("First non-repeated character: " + result);
                    }
                }
            `
        },
        {
            Problem: "Create an object StringBuffer class to reverse the string.",
            Number: 49,
            Solution: `
                public class ReverseUsingStringBuffer {
                    public static void main(String[] args) {
                        String str = "hello";
                        StringBuffer sb = new StringBuffer(str);
                        sb.reverse();
                        System.out.println("Reversed string using StringBuffer: " + sb);
                    }
                }
            `
        },
        {
            Problem: "Create an object StringBuffer class to show functionality of insert, append, delete and replace functions.",
            Number: 50,
            Solution: `
                public class StringBufferFunctions {
                    public static void main(String[] args) {
                        StringBuffer sb = new StringBuffer("hello");
                        sb.append(" world");
                        sb.insert(5, " beautiful");
                        sb.delete(5, 15);
                        sb.replace(0, 5, "hi");
                        System.out.println("Modified StringBuffer: " + sb);
                    }
                }
            `
        }
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
