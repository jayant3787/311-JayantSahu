import Immutable from 'immutable';

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
},
{
    name: "jayant",
    age: 25,
    awards: ["State","National"]
}
];

const PlayerReducer = (state = initialPlayers, action) =>{
    switch(action.type){
        case "ADD_ONE":
            // let [...newState1] = state;
            // newState1.push({ name: "priya",
            // age: 24,
            // awards: ["State","PadmaShree"]});
            // return newState1;



            //using immutable JS wew can do it in one line
            return Immutable.List(state).push({name: "priyanka",
            age: 24,
            awards: ["State","PadmaShree"]});

        case "ADD_TWO":
            // let [...newState2] = state;
            // newState2.push({ name: "yogesh",
            // age: 24,
            // awards: ["State","PadmaShree"]});
            // newState2.push({ name: "prakitha",
            // age: 24,
            // awards: ["State","PadmaShree"]});
            // return newState2;

            return Immutable.List(state).push({name: "Preetha",
            age: 24,
            awards: ["State","PadmaShree"]},{name: "Uma",
            age: 24,
            awards: ["State","PadmaShree"]});

            

        case "REMOVE_LAST":
            // let [...newState3] = state;
            return Immutable.List(state).pop();
            // return newState3

        case "REMOVE_NAME":
            let pName = action.playerName;
            let [...newState4] = state;
            newState4 = newState4.filter(item => item.name !== pName);
            return newState4


            case "REMOVE_BY_AGE":
                // console.log("action"+action.playerAge);
                let pAge = action.playerAge;
                let [...newState5] = state;
                newState5 = newState5.filter(item =>  item.age != pAge);
                // console.log("latest"+newState5);
                return newState5
                
            
            

        default:
            return state;   

    };
}

export default PlayerReducer;