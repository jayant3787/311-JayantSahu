
import { Route, Routes } from "react-router";
import ReduxDemo from './components/ReduxDemo';
import store from "./store/myStore";
import { Provider } from 'react-redux';


import './App.css';
import NavBar from "./components/NavBar";

function App() {
  return (
    <Provider store={store}>
    <Routes>
    <Route path="/redux/redux-demo2" element={<ReduxDemo />} />
    <Route path="/" element={<Home />} />
    </Routes>
    </Provider>


    
  );
};

function Home() {
  return (
    <NavBar />
   
  )
}


export default App;
