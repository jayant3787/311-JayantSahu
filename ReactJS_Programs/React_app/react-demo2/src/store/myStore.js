import {createStore, combineReducers, applyMiddleware} from 'redux';
import playerReducer from '../reducers/playerReducer';
import SecondReducer from '../reducers/SecondReducer';
import ThirdReducer from '../reducers/ThirdReducer';
import rootSaga from '../sagas/helloSaga';
import NewsReducer from '../reducers/NewsReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

// import PlayerReducer from './PlayerReducerUsingImmutableJSV2';


// lest import the required middleware library
//first lets install npm install redux-saga
import createSagaMiddleware from 'redux-saga';
import NewNodeReducer from '../reducers/NewNodeReducer';
import newPlayerReducer from '../reducers/newPlayerReducer';
// saga is not the only middleware. there is another called Redux Thunk and a few others.
// but saga is good for big projects coz it use promises
// Redux Thunk has drawbacks-callback hell!

const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers({
    reducer1:playerReducer,
    reducer2: SecondReducer,
    reducer3: ThirdReducer,
    reducer4: NewsReducer,
    reducer5: NewNodeReducer,
    reducer6: newPlayerReducer
});
const store = createStore(
    // PlayerReducer,
    rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware))// we are introducing middleware here
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;

// middleware config is done! lets create a saga file and use it 
// run the saga middleware
sagaMiddleware.run(rootSaga);
//once the middleware runs, it will call our helloSaga.
//whenever any action is dispatched to any reducer

//lets see the action here itself
// i am going to dispatch any action. say "ADD_ONE"action
store.dispatch({type:"ADD_A_PLAYER"});
