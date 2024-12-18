package MyTestProjects;

import java.util.Scanner;

public class calculator {
    
    public void calculator() {

        Scanner calculator = new Scanner(System.in);

        char operation;
        double fnum, snum, answer;

        System.out.println("What kind of problem is it?(Types: +, -, *, /): ");
        operation = calculator.next().charAt(0);
        System.out.println("Operation locked in as: " + operation);
        
        System.out.println("----------------------------------");

        System.out.println("What is the first number?");
        fnum = calculator.nextDouble();
        System.out.println("First number locked in as: " + fnum);
        
        System.out.println("----------------------------------");
        
        System.out.println("What is the second number?");
        snum = calculator.nextDouble();
        System.out.println("Second number locked in as: " + snum);
        
        System.out.println("----------------------------------");

        switch (operation) {
            case '+':
                answer = fnum + snum;
                System.out.println("The answer is: " + answer);
                break;
            case '-':
                answer = fnum - snum;
                System.out.println("The answer is: " + answer);
                break;
            case '*':
                answer = fnum * snum;
                System.out.println("The answer is: " + answer);
                break;
            case '/':
                answer = fnum / snum;
                System.out.println("The answer is: " + answer);
                break;
            default:
                answer = 0;
                System.out.println("Invaild operator!");
                break;

        } 

    }

}
