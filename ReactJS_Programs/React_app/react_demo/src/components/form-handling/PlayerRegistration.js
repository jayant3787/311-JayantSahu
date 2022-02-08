import { useState } from "react";
import NavBar from "../NavBar";

const PlayerRegistration = () => {

    const [state, setState] = useState({ name: null , age: 0, awardOptions:["State Award ", "National Award"],awards:"state level",score:0,roleOptions:["bowler ","keeper ","batsman "], role:[],errorMsg:"Error will be shown here" });


    const handleEvent = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {

        //React batches all the setState statements and executes only once. This means that
        // if we have two or more setState statements, only the last setState will be effected.
        // To avoid this issue, we create a new local state object (newState below). Apply the
        // changes to this local state till the end.
        // Finally set the state with the updated local state.

        e.preventDefault();
        let newState = {...state,errorMsg:""}

        if(state.age<21){
            newState = {...state, errorMsg:"Age cannot be less than 21"};
        }
        if(e.target.name === "role"){
            if(e.target.checked){
            state.role.push(e.target.value);
            }
            // now if i ll uncheck it it will not show
            else if (!e.target.checked){
                state.role = state.role.filter(elem =>  elem !== e.target.value);
            }

            let [...newRole] = state.role;
            newState = {...newState, role:newRole}
        }
        else{
            if(e.target.name === "age" && e.target.value < 21){
                newState = {...newState, errorMsg:"Age cannot be less than 21"};
            }

            newState = { ...newState, [e.target.name]: e.target.value };

        }
    setState({...newState});

}

        return (
            
            <div style={{ border: "10px dashed blue" }}>
            <NavBar />
                <h1>*****************************************Player Registration******************************************</h1><br/>
                <br />
                <form id="frm1" name="form4" action="process.php">
                ERROR : <span style={{color:"red"}}>{state.errorMsg}</span><br/><br></br>
                    
                    PLAYER NAME : {state.name}<br/>
                    PLAYER AGE : {state.age}<br />
                    AWARDS ACHIEVED : {state.awards}<br />
                    TOTAL SCORE IN (Ranji Trophy) : {state.score} Runs<br/>
                    PLAYER ROLE : {state.role}<br/><br/><br/>
                    {/* Your Hobbies are : {state.hobby}<br /> */}

                    {/* text */}
                    Enter Name : <input type="text" name="name" value={state.name} onChange={handleChange} /><br/>
                    Enter Age : <input type="text" name="age" value={state.age} onChange={handleChange} /><br/>
                    {/* radio */}
                    Enter Awards : <input type="radio" name="awards" value={state.awardOptions[0]} onChange={handleChange} />STATE
                    <input type="radio" name="awards" value={state.awardOptions[1]} onChange={handleChange} />NATIONAL<br/>

                    Enter Total Score : <input type="text" name="score" value={state.score} onChange={handleChange} /><br/>

                    {/* checkbox */}
                    Enter Hobby : <input type="checkbox" name="role" value={state.roleOptions[0]} onChange={handleChange} />Bowler
                    <input type="checkbox" name="role" value={state.roleOptions[1]} onChange={handleChange} />Keeper
                    <input type="checkbox" name="role" value={state.roleOptions[2]} onChange={handleChange} />Batsman



                    <button style={{height:"50px", width:"80px"}} type="submit" name="button4" onClick={handleEvent}>Submit</button>
                </form><br />
            </div>

        )
    }

    export default PlayerRegistration;