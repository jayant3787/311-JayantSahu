import { useState } from "react";
const NewPlayer = (props) =>{

    const [localState, setLocalState] = useState({ name: "", age: 0 });

    const handleChange = (e) => {
        e.preventDefault();
        setLocalState({ ...localState, [e.target.name]: e.target.value });

    };

    const addPlayer = (e) => {
        e.preventDefault();
        // store.dispatch({ type: "ADD", playName: localState2.nAdd, playAge: localState2.aAdd, playAwards: localState2.awAdd })
        props.addPlayer(localState);
    }

    return(
        <div>
            <h1>My New player</h1>
           <b> Server Message :</b> 
            {props.playerData1.addPlayerSuccess}<br/>

            <form>

                NAME : <input type="text" name="name" value={localState.playerName} onChange={handleChange}  /><br/><br/>
                AGE : <input type="text" name="age" value={localState.playerAge} onChange={handleChange} /><br/><br/>
                <button onClick={addPlayer}>Add a new player</button>
            </form>
        </div>

    )
} 

export default NewPlayer;