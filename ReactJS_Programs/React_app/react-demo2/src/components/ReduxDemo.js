import { useState } from "react";
// import store from "./playerReducer";
import store from "../store/myStore";
import NavBar from "./NavBar";

const ReduxDemo = (props) => {

    // var storeData = store.getState();
    // console.log("initial data in the store");
    // console.log(storeData);


    const addOnePlayer = () => {
        // console.log("dispatching ADD_ONE action");
        store.dispatch({ type: "ADD_ONE" });
        // console.log("Latest Store data is : ");
        // console.log(store.getState());

    }

    const addTwoPlayer = () => {
        store.dispatch({ type: "ADD_TWO" });
        // console.log("Latest Store data is : ");
        // console.log(store.getState());


    }

    const RemoveLastPlayer = () => {
        store.dispatch({ type: "REMOVE_LAST" });
        // console.log("Latest Store data is : ");
        // console.log(store.getState());

    }


    const removeAge = (e) => {
        e.preventDefault();
        // console.log("dispatching remove by age");
        store.dispatch({ type: "REMOVE_BY_AGE", playerAge: localState1.ageToRemove });
        // console.log("latest store data is :");
        // console.log(store.getState());
    }


    const [localState1, setLocalState1] = useState({ ageToRemove: 0 });

    const handleChange1 = (e) => {
        e.preventDefault();
        setLocalState1({ ...localState1, ageToRemove: e.target.value });
    }



    const removePlayer = () => {
        store.dispatch({ type: "REMOVE_NAME", playerName: localState.playerToRemove });
        // console.log("latest store data is :");
        // console.log(store.getState());
    }


    const [localState, setLocalState] = useState({ playerToRemove: "" });

    const handleChange = (e) => {
        e.preventDefault();
        setLocalState({ ...localState, playerToRemove: e.target.value });

    };


    const [localState2, setLocalState2] = useState({ nAdd: "", aAdd: "", awAdd: [] })

    const handleChange2 = (e) => {
        e.preventDefault();
        // setLocalState2({...localState2,nAdd:e.target.value, aAdd:e.target.value, awAdd:e.target.value});
        setLocalState2({ ...localState2, [e.target.name]: e.target.value });
    };

    const addPlayer = (e) => {
        e.preventDefault();
        store.dispatch({ type: "ADD", playName: localState2.nAdd, playAge: localState2.aAdd, playAwards: localState2.awAdd })
    }

    return (

        <div>
        <NavBar />

            <h1>
                !!!!!!!!!!!!Redux Demo!!!!!!!!!!!<br />
                Initial data from the store is:
                <ul>
                    {playerData.map((item, key) => <li key={key}>{item.name} {item.age} {item.awards.join(",")} </li>

                    )}
                </ul>
            </h1>
            <button onClick={addOnePlayer}>Add one player</button><br /><br />
            <button onClick={addTwoPlayer}>Add two player</button><br /><br />
            <button onClick={RemoveLastPlayer}>Remove last player</button><br /><br />





            Enter Player Name : <input type="text" name="name" value={localState.playerToRemove} onChange={handleChange} /><br />
            <button onClick={removePlayer}>Remove the given player</button><br /><br />

            <form>REMOVE PLAYER BY AGE DEMO<br />
                Enter Player Age : <input type="text" name="age" value={localState1.ageToRemove} onChange={handleChange1} /><br />
                <button onClick={(e) => { removeAge(e) }}>Remove the given player</button>
            </form><hr />



            <form>ADD PLAYER DEMO<br />
                Enter Player Name : <input type="text" name="nAdd" value={localState2.nAdd} onChange={handleChange2} /><br />
                Enter Player Age : <input type="text" name="aAdd" value={localState2.aAdd} onChange={handleChange2} /><br />
                <button onClick={(e) => { addPlayer(e) }}>ADD the given player</button>
            </form>









        </div>


    )
}

export default ReduxDemo;