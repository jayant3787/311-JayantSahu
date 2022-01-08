class Employee{
    int disp(){
        System.out.println("Hello i am Employee");
        return 0;
    }
}

class E1 extends Employee{
    int disp(){
        return 5000;
    }
}

class E2 extends Employee{
    int disp(){
        return 10000;
    }
}

class E3 extends Employee{
    int disp(){
        return 15000;
    }
}

class Main{
    public static void main(String[] args) {

        Employee a1 = new E1();
        Employee a2 = new E2();
        Employee a3 = new E3();
        

        System.out.println("I am E1 "+a1.disp());
        System.out.println("I am E2 "+a2.disp());
        System.out.println("I am E3 "+a3.disp());
    }
}