import { useState } from "react";
import NavBar from "../NavBar";

const ControlledComponentFormDemoWithMoreFormElements = () => {

    const [state, setState] = useState({ age: 0, qualification: null, genderOptions:["MALE", "FEMALE"],hobbiesOption:["singing ","reading ","cricket "], hobby:[] });


    const handleEvent = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        e.preventDefault();
        if(e.target.name === "hobby"){
            state.hobby.push(e.target.value);
            let [...newHobbies] = state.hobby;
            setState({...state, hobby: newHobbies})


        }
        else{
            setState({ ...state, [e.target.name]: e.target.value })

        }
    }

        return (
            <div style={{ border: "3px solid orange" }}>
            <NavBar />
                Contolled Form Demo with some more form elements:
                <br />
                <form id="frm1" name="form4" action="process.php">
                    Your age : {state.age}<br />
                    Your qualification : {state.qualification}<br />
                    Your gender : {state.gender}<br />
                    Your Hobbies are : {state.hobby}<br />

                    {/* text */}
                    Enter Age : <input type="text" name="age" value={state.age} onChange={handleChange} />


                    Enter Qualification : <input type="text" name="qualification" value={state.qualification} onChange={handleChange} />
                    {/* radio */}
                    Enter Gender : <input type="radio" name="gender" value={state.genderOptions[0]} onChange={handleChange} />Male
                    <input type="radio" name="gender" value={state.genderOptions[1]} onChange={handleChange} />Female
                    {/* checkbox */}
                    Enter Hobby : <input type="checkbox" name="hobby" value={state.hobbiesOption[0]} onChange={handleChange} />singing
                    <input type="checkbox" name="hobby" value={state.hobbiesOption[1]} onChange={handleChange} />reading
                    <input type="checkbox" name="hobby" value={state.hobbiesOption[2]} onChange={handleChange} />cricket



                    <button type="submit" name="button4" onClick={handleEvent}>Submit</button>
                </form><br />
            </div>

        )
    }

    export default ControlledComponentFormDemoWithMoreFormElements;