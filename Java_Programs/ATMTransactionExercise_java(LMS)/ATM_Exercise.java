import java.util.*;
import java.util.Scanner;

class Person {
    int acc_no;
    String name;
    double balance;

    Person(int acc_no, String name, Double balance) {
        this.acc_no = acc_no;
        this.name = name;
        this.balance = balance;
    }
}

class ATM_Exercise {

    public static void main(String[] args) {
        double withdraw = 0.00, deposit = 0.00;
        System.out.println("*************************Welcome To XYZ ATM*************************\n");
        System.out.println("Account Details: \n");
        Person p1 = new Person(1001, "Jayant Sahu", 20000.00);

        ArrayList<Person> details = new ArrayList<Person>();
        details.add(p1);

        details.get(0);
        System.out.println("Account Number = " + details.get(0).acc_no + "\n" + "Account Holder Name = "
                + details.get(0).name + "\n" + "Account Balance = " + details.get(0).balance + "\n\n");

        Scanner s = new Scanner(System.in);
        while (true) {

            System.out.println("Enter 1 for Withdrawal");
            System.out.println("Enter 2 for Deposit");
            System.out.println("Enter 3 for EXIT");
            System.out.print("PLEASE SELECT YOUR CHOICE : ");
            try {
                String str = s.nextLine();
                int select = Integer.parseInt(str);
                switch (select) {
                    case 1:
                        System.out.print("Enter money to be withdrawn:");
                        try {
                        withdraw = s.nextInt();
                        if (withdraw == 0) {
                            System.out.println("\nPlease enter the amount more than 1 to withdraw\n");
                            break;
                        }
                        if (details.get(0).balance >= withdraw) {
                            details.get(0).balance = details.get(0).balance - withdraw;
                            System.out.println("\nMoney withdrawn!!!!!" + " " + withdraw);
                            System.out.println("Available balance is " + details.get(0).balance);
                        } 
                        else if (details.get(0).balance == 0){
                                System.out.println("\nInsufficient Fund\n");
                                break;
                            }
                        else {
                            System.out.println("Withdrawal amount should be less than Available balance");
                        }
                        

                        } catch (InputMismatchException e1) {
                        System.out.println("You didn't enter a valid input");
                        }
                        System.out.println("");
                        break;

                    case 2:
                        System.out.print("\nEnter the amount to deposit:");
                        try {
                        deposit = s.nextInt();
                        if (deposit == 0) {
                            System.out.println("\nPlease enter the amount more than 0 to deposit\n");
                            break;
                        }
                        details.get(0).balance = details.get(0).balance + deposit;
                        System.out.println("\nYour Money has been successfully deposited");
                        System.out.println("Available balance is " + details.get(0).balance);
                        System.out.println("");
                        } catch (InputMismatchException e2) {
                        System.out.println("Not a legal no.");
                        }
                        break;

                    case 3:
                        System.exit(0);
                    default:
                        System.out.println("\nSELECT A NUMBER BETWEEN 1 TO 3\n");
                }
            } catch (NumberFormatException e3) {
                System.out.println("Not a valid input");
            }
        }
    }
}
