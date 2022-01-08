class Product{
    constructor(proNo, ProPri, ProId, proName, mfdyear, image){
        this.proNo = proNo;
        this.ProPri = ProPri;
        this.ProId = ProId;
        this.proName = proName;
        this.mfdyear = mfdyear;
        this.image = image;    
    }
    display(){

        // Usage of string literal using `${this.variable}`

        var disp = `<br> <img src=${this.image} width=150px height=150px> <br> product number is: ${this.proNo} product price is: ${this.ProPri} <br> product ID is: ${this.ProId} <br> product Name is: ${this.proName} <br> product year is: ${this.mfdyear}`;
        document.write(disp);

        // Print one by one

        // document.write("<br> <img src="+this.image+  " width=100px height=100px> ");
        // document.write("<br> product number is: "+this.proNo);
        // document.write("<br> product price is: "+this.ProPri);
        // document.write("<br> product ID is: "+this.ProId);
        // document.write("<br> product Name is: "+this.proName);
        // document.write("<br> product year is: "+this.mfdyear);
        document.write("<br><br>");
    }
};
var p1 = new Product(1,15000,1001,"washingMachine",2019,"./images/machine.jpg");
var p2 = new Product(2,150,1002,"Heatingpad",2020,"./images/heating.jpg" );
var p3 = new Product(3,45000,1003,"laptop",2021,"./images/lapi.jpg");
var p4 = new Product(4,1500,1004,"saree",2018,"./images/saree.jpg");
var p5 = new Product(5,200,1005,"bottle",2019,"./images/bottle.jpg");

p1.display();
p2.display();
p3.display();
p4.display();
p5.display();

