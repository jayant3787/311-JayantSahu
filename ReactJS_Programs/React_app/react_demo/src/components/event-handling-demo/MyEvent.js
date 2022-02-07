import { useState } from "react";
const MyEvent = () => {

    function handleSubmit(e) {
        e.preventDefault();
        alert('type of event = '+e.type);
        alert('target of event = '+e.target.name);



        //check is in the form
        let age = document.forms[0].age.value;
        console.log('You clicked submit.');

        if (age > 60) {
            console.log("if age is > 60 submit the form");
            document.forms[0].submit();
        };
    }

    const handleEvent2 = (e, param2) =>{
        e.preventDefault();
        alert('handleEvent2 type of event : '+e.type);
        alert('handleEvent2 target of event : '+e.target.name);
        alert("handleEvent2 target of event : "+param2)


    }
    const [age,setAge] = useState(5);

    const handleEvent3 = (e) => {
        // e.preventDefault();
        setAge(25);
    }

    return (
        <div style={{border: "4px solid blue"}}>
        age : {age}
            <form name="form1" onSubmit={handleSubmit} action="backend.php">
                <p>Events Demo</p>
                <input type="text" name="age" />
                <button id="btn1" type="submit" name="button1">Submit</button><br />

                <button type="submit" name="button2" 
                onClick={(e) => handleEvent2(e,'extra.info')}>Submit button 2
                </button><br/>
               
            </form>
            <button id="btn3" type="submit" name="button3" 
                onClick={handleEvent3}>Submit button 3
                </button><br/><br/>
        </div>

    );

}
export default MyEvent;