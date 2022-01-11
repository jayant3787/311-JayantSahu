public interface MyInterface {
   public void display();
}

class Parent{
    void disp(){
        System.out.println("Hello Parent");
    }
}

class MyClass extends Parent implements MyInterface{
    public void display(){
        System.out.println("Hello i am a child class");
    }

}

class Main{
    public static void main(String[] args) {
        MyClass m1 = new MyClass();
        m1.disp();
        m1.display();
    }
}
