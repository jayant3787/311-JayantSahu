// import Immutable from 'immutable';
import initialPlayers from '../data/data';
const ThirdReducer =  (state = initialPlayers, action) => {
    switch (action.type) {

        case "SET_ALL_PLAYERS_AGE_TO_50":
            // return Immutable.List(state).map(item => return{...item, age : 50});
            let [...newState] = state;
            newState.forEach(item => item.age = 50);
            return newState;

        
        default:
            return state;
    };

}

export default ThirdReducer;
