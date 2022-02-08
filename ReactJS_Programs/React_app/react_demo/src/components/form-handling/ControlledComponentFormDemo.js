import { useState } from "react";
import NavBar from "../NavBar";

const ControlledComponentFormDemo = () => {

    const [state, setState] = useState({ age: 0, qualification: null });


    const handleEvent = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        e.preventDefault();
        setState({ ...state, [e.target.name]: e.target.value })
    }

        return (
            <div style={{ border: "3px solid red" }}>
            <NavBar />
                Contolled Form Demo:
                <br />
                <form id="frm1" name="form4" action="process.php">
                    Your age : {state.age}<br />
                    Your qualification : {state.qualification}<br />
                    Enter Age : <input type="text" name="age" value={state.age} onChange={handleChange} />


                    Enter Qualification : <input type="text" name="qualification" value={state.qualification} onChange={handleChange} />
                    <button type="submit" name="button4" onClick={handleEvent}>Submit</button>
                </form><br />
            </div>

        )
    }

    export default ControlledComponentFormDemo;