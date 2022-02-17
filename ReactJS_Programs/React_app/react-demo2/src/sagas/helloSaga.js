import { put, takeEvery, takeLatest, all } from "redux-saga/effects";
// we need to code generator function for saga like this

const delay = (milliseconds) =>
  new Promise((res) => setTimeout(res, milliseconds));
//promises are functions that do their jon asynchronously. they display their results after some delay

//another saga we ll use
// lets write one that will call ADD_ONE action

export function* callAddOne() {
  yield delay(1000); // delay by 1 sec
  console.log("Inside callAddone ASYNC !! call action ADD_ONE asynchronously");
  yield put({ type: "ADD_ONE" }); //dispatch this action asynchronously
}

export function* watchAddOneActionHappeningInTheApp() {
  yield takeEvery("ADD_ONE_ASYNC", callAddOne); //dispatch this action asynchronously
}

// watch NEWS saga
function* fetchNews() {
  const json = yield fetch(
    "https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc"
  ).then((response) => response.json());
  yield put({ type: "NEWS_RECEIVED", json: json.articles });
}
function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}

// my node app saga

function* fetchNewApp() {
  const json = yield fetch("http://localhost:8000/players").then((response) =>
    response.json()
  );
  yield put({ type: "NODE_APP_DATA_RECIEVED", json: json });
}
function* actionWatcher1() {
  yield takeLatest("GET_APP_DATA", fetchNewApp);
}

// my new player app

function* addNewPlayer(action) {
  var bodyContent = {
    name: action.player.name,
    age: action.player.age,
  };

  var stringifiedBody = JSON.stringify(bodyContent);

  const serverResponse = yield fetch("http://localhost:8000/players/add", {
    method: "POST",
    body: stringifiedBody,
    headers: {
      "Content-type": "application/json;chartset=UTF-8",
    },
  }).then((res) => res.json());
//   .then((res) => console.log(`data sent successfully to the backed and  ${res.msg}`));
  yield put({ type: "ADD_A_PLAYER_SUCCESSFUL", serverMsg: serverResponse.msg, });


  
  

  // const json = yield fetch('http://localhost:8000/players/add').then(response => response.json(), );
//   yield put({ type: "ADD_A_PLAYER", json: json, });
}

function* actionWatcher2() {
  yield takeLatest("ADD_A_PLAYER_TO_BACKEND", addNewPlayer);
}

// for all the above sagas we need to create root saga
export default function* rootSaga() {
  yield all([
    watchAddOneActionHappeningInTheApp(),
    actionWatcher(),
    actionWatcher1(),
    actionWatcher2(),
  ]);
}
