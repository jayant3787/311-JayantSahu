function changeColour(){
    var a = document.getElementsByClassName("price");
    for(ele of a){
        if(ele.innerHTML>10000){
            ele.style = "color:red";
        }
        else{
            ele.style = "color:blue";
        }
    }
}

function changeBorder(){
    var b = document.getElementById("search").value;
    console.log(b);

    // for (ele of a){
    //     if(ele.innerHTML<)
    // }
}