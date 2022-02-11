import Immutable from 'immutable';
import initialPlayers from '../data/data';
const SecondReducer =  (state = initialPlayers, action) => {
    switch (action.type) {

        case "REMOVE_PLAYER_AGE_MORE_THAN_70":
            return Immutable.List(state).filter(item => item.age <= 70);

        
        default:
            return state;
    };

}

export default SecondReducer;
