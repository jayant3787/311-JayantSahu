import ReduxDemo from "./ReduxDemo";
import { connect } from 'react-redux';

// state is nothing but store that we are passing in the parameter
const mapStateToProps = (store) => {
    return {
        playerData: store.reducer1


    }
        // we can also write state:state
        

}

const mapDispatchToProps = (dispatch) =>{
    return{
    addOnePlayer: () => dispatch({type:"ADD_ONE"}),
    addTwoPlayer: () => dispatch({type:"ADD_TWO"}),
    RemoveLastPlayer: () => dispatch({type:"REMOVE_LAST"}),
    removeAge: (plyrAge) => dispatch({type:"REMOVE_BY_AGE", playerAge: plyrAge }),
    removePlayer: (plyrName) => dispatch({type:"REMOVE_NAME", playerName: plyrName }),
    addPlayer: (playerName, playerAge, playerAwards) => dispatch(
        { type: "ADD", playName: playerName, playAge: playerAge, playAwards:playerAwards }
        ),

    removeAge70: () => dispatch({type:"REMOVE_PLAYER_AGE_MORE_THAN_70"}),

    updateAge50: () => dispatch({type:"SET_ALL_PLAYERS_AGE_TO_50"}),
    callMyAsync: () => dispatch({type:"ADD_ONE_ASYNC"})
       
}
}


// const ReduxDemoContainer = (dispatch) =>{

// }

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo);