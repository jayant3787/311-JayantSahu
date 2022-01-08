class UserException extends Exception{
    public UserException(String s)
    {
        super(s);
    }

}

 class Example1{
    void productCheck(int product_count) throws UserException{
        if(product_count<100){
            throw new UserException("product is not Transportable");
        }
       }



public static void main(String args[])
{
    Example1 obj = new Example1();
    try
    {
        obj.productCheck(60);
    }
    catch (UserException e)
    {
        System.out.println("Caught the exception");
        System.out.println(e.getMessage());
    }
}
}


