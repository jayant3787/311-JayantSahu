class A1Hotel {
    public static void main(String[] args) {
        Customer  c1 = new Customer( "jayant", 12345);
        Customer  c2 = new Customer("JAYANT",44444);
        // c1.login("Jayant",12345);
        System.out.println(c1.login("jayant",12345));
        System.out.println(c2.login("jayant",55555));
    }
    
}
