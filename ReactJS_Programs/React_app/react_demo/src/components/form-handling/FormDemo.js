import { useRef } from "react";

const FormDemo = () =>{

    const refAge = useRef();
 
    const handleEvent = (e) =>{
        e.preventDefault();
        alert("age : "+refAge.current.value);
           }

    return(
        <div style={{border:"3px solid red"}}><br/>
            <form id="frm1" name="form4" action="process.php">
                <input type="text" name="age" ref={refAge}/>
                <button type="submit" name="button4" onClick={handleEvent}>submit</button>
            </form><br/>
        </div>

    )
}

export default FormDemo;