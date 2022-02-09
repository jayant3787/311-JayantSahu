import {createStore} from 'redux';

var initialPlayers = [{
    name: "jay",
    age: 25,
    awards: ["State","National"]
},
{
    name: "poo",
    age: 26,
    awards: ["State","National"]
},
{
    name: "sagar",
    age: 27,
    awards: ["State","National"]
}];

const playerReducer = (state = initialPlayers, action) =>{
    switch(action.type){
        case "ADD_ONE":
            let [...newState1] = state;
            newState1.push({ name: "priya",
            age: 24,
            awards: ["State","PadmaShree"]});
            return newState1;

        case "ADD_TWO":
            let [...newState2] = state;
            newState2.push({ name: "yogesh",
            age: 24,
            awards: ["State","PadmaShree"]});
            newState2.push({ name: "prakitha",
            age: 24,
            awards: ["State","PadmaShree"]});
            return newState2;

        case "REMOVE_LAST":
            let [...newState3] = state;
            newState3.pop();
            return newState3

        default:
            return state;   

    };
}
    const store = createStore(playerReducer);
    


export default store;