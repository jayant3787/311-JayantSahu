class employeeDetails{
    constructor(empId, empName, pNumber, cName, empSalary){
        this.empId = empId;
        this.empName = empName;
        this.pNumber = pNumber;
        this.cName = cName;
        this.empSalary  = empSalary;
    }
    display = () =>{
        var disp = `<div style="float:left"><p> Employee ID: ${this.empId}</p>Employee Name: ${this.empName}<p> Contact Number: ${this.pNumber}</p><p>Company Name: ${this.cName}</p><p>Salary: ${this.empSalary}</p></div>`;
        document.write(disp);
        document.write("<br><br>");


    }
};

var e1 = new employeeDetails(1001,"Jayant Sahu",8982320993,"Amazon",650000);
var e2 = new employeeDetails(1002,"Meghal Chhabria",9039033333,"Nokia",900000);
var e3 = new employeeDetails(1003,"Shashank S",8985623514,"Lekha Wireless",700000);
var e4 = new employeeDetails(1004,"Rakesh Chahar",2325248795,"Microsoft",950000);
var e5 = new employeeDetails(1005,"Ujjwal Hangal",8982324569,"Wipro",550000);
e1.display();
e2.display();
e3.display();
e4.display();
e5.display();