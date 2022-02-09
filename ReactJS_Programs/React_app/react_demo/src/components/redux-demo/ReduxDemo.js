import store from "./playerReducer";

const ReduxDemo = () =>{

    var storeData = store.getState();
    console.log("initial data in the store");
    console.log(storeData);


    const addOnePlayer = () =>{
        console.log("dispatching ADD_ONE action");
        store.dispatch( {type:"ADD_ONE"} );
        console.log("Latest Store data is : ");
        console.log(store.getState());

    }

    const addTwoPlayer = () =>{
        store.dispatch( {type:"ADD_TWO"} );
        console.log("Latest Store data is : ");
        console.log(store.getState());

        
    }

    const RemoveLastPlayer = () =>{
        store.dispatch({type:"REMOVE_LAST"});
        console.log("Latest Store data is : ");
        console.log(store.getState());

    }
    return(

        <div>

        <h1>
            !!!!!!!!!!!!Redux Demo!!!!!!!!!!!<br/>
            Initial data from the store is:
            <ul>
                {store.getState().map((item,key) => <li key={key}>{item.name} {item.age} {item.awards.join(",")} </li>
                    
                )}
            </ul>
        </h1>
        <button onClick={addOnePlayer}>Add one player</button><br/><br/>
        <button onClick={addTwoPlayer}>Add two player</button><br/><br/>
        <button onClick={RemoveLastPlayer}>Remove last player</button>


        </div>

    )
}

export default ReduxDemo;