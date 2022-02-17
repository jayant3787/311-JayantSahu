import NewPlayer from "./NewPlayer";
import { connect } from 'react-redux';

// state is nothing but store that we are passing in the parameter
const mapStateToProps = (store) => {
    return {
        playerData1: store.reducer6


    }
        // we can also write state:state
        

}

const mapDispatchToProps = (dispatch) =>{
    return{
    addPlayer: (newPlayer) => dispatch({type: "ADD_A_PLAYER_TO_BACKEND",player:newPlayer})
       
}
}


// const ReduxDemoContainer = (dispatch) =>{

// }

export default connect(mapStateToProps, mapDispatchToProps)(NewPlayer);