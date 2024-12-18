package MyTestProjects;

import java.util.Scanner;

public class tempCalculator {

    public void tempCalculator() {

        Scanner ducky = new Scanner(System.in);
        double celsius, fahrenheit, kelvin;
        String operation;

        System.out.println("What kind of Operation is it?(ftc, ctf, ktc, ctk, ftk, ktf)");
        operation = ducky.nextLine();

        if (operation.equals("ftc")) {

            System.out.println("What temperature is it in fahrenheit?");
            fahrenheit = ducky.nextDouble();
        
            celsius = (fahrenheit - 32) * 5 / 9;
        
            System.out.println("----------------------------------");
            System.out.println("The temperature in celsius is: " + celsius);

        } else if (operation.equals("ctf")) {

            System.out.println("What temperature is it in celsius?");
            celsius = ducky.nextDouble();

            fahrenheit = celsius * 9/5 + 32;

            System.out.println("----------------------------------");
            System.out.println("The temperature in fahrenheit is: " + fahrenheit);

        } else if (operation.equals("ktc")) {

            System.out.println("What temperature is it in Kelvin?");
            kelvin = ducky.nextDouble();

            celsius = kelvin - 273.15;

            System.out.println("----------------------------------");
            System.out.println("The temperature in celsius is: " + celsius);

        } else if (operation.equals("ctk")) {

            System.out.println("What temperature is it in Celsius?");
            celsius = ducky.nextDouble();

            kelvin = celsius + 273.15;

            System.out.println("----------------------------------");
            System.out.println("The temperature in Kelvin is: " + kelvin);

        } else if (operation.equals("ftk")) {

            System.out.println("What temperature is it in Fahrenheit?");
            fahrenheit = ducky.nextDouble();

            kelvin = (fahrenheit + 459.67) * 5/9;

            System.out.println("----------------------------------");
            System.out.println("The temperature in Kelvin is: " + kelvin);

        } else if (operation.equals("ktf")) {

            System.out.println("What temperature is it in Kelvin?");
            kelvin = ducky.nextDouble();

            fahrenheit = kelvin * 9/5 - 459.67;

            System.out.println("----------------------------------");
            System.out.println("The temperature in Fahrenheit is: " + fahrenheit);

        } else {

            System.out.println("Invalid method!");
            celsius = 0;
            fahrenheit = 0;

        }

    }
    
}
