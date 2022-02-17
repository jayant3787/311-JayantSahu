// import initialPlayers from '../data/data';
const newPlayerReducer = (state = {}, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case "ADD_A_PLAYER_SUCCESSFUL":
            let newState = {...state};
            newState.addPlayerSuccess = "SUCCESSFULLY ADDED THE PLAYER";
            return newState;


        

        default:
            return state;

    };
}

export default newPlayerReducer;