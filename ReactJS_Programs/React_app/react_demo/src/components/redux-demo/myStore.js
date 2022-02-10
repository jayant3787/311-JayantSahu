import {createStore} from 'redux';
import playerReducer from './playerReducer';
// import PlayerReducer from './PlayerReducerUsingImmutableJSV2';
const store = createStore(
    // PlayerReducer,
    playerReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
