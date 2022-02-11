// import {createStore} from 'redux';
import Immutable from 'immutable';
import initialPlayers from '../data/data';
const playerReducer = (state = initialPlayers, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case "ADD_ONE":
            // let [...newState1] = state;
            // newState1.push({ name: "priya",
            // age: 24,
            // awards: ["State","PadmaShree"]});
            // return newState1;



            //using immutable JS wew can do it in one
            return Immutable.List(state).push({
                name: "priyanka",
                age: 24,
                awards: ["State", "PadmaShree"]
            });

        case "ADD_TWO":
            let [...newState2] = state;
            newState2.push({
                name: "yogesh",
                age: 24,
                awards: ["State", "PadmaShree"]
            });
            newState2.push({
                name: "prakitha",
                age: 24,
                awards: ["State", "PadmaShree"]
            });
            // console.log(newState2);
            return newState2;

        case "REMOVE_LAST":
            let [...newState3] = state;
            newState3.pop();
            return newState3;

        case "REMOVE_NAME":
            let pName = action.playerName;
            let [...newState4] = state;
            newState4 = newState4.filter(item => item.name !== pName);
            return newState4;


        case "REMOVE_BY_AGE":
            // console.log("action"+action.playerAge);
            let pAge = action.playerAge;
            let [...newState5] = state;
            newState5 = newState5.filter(item => item.age != pAge);
            // console.log("latest"+newState5);
            return newState5;


        case "ADD":
            let plName = action.playName;
            let plAge = action.playAge;
            let plAwards = action.playAwards;
            let [...newState6] = state;
            newState6.push({ name: plName, age: plAge, awards: plAwards });
            // console.log(newState6);
            return newState6;




        default:
            return state;

    };
}

export default playerReducer;