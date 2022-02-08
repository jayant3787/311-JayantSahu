import { useRef } from "react";
import NavBar from "../NavBar";


// Uncontrolled component form demo
const FormDemo = () =>{

    const refAge = useRef();
 
    const handleEvent = (e) =>{
        e.preventDefault();
        alert("age : "+refAge.current.value);
           }

    return(
        <div style={{border:"3px solid red"}}>
        <NavBar />
            UnControlled Form Demo: 
        <br/>
            <form id="frm1" name="form4" action="process.php">
                Enter Age : <input type="text" name="age" ref={refAge}/>
                <button type="submit" name="button4" onClick={handleEvent}>submit</button>
            </form><br/>
        </div>

    )
}

export default FormDemo;
