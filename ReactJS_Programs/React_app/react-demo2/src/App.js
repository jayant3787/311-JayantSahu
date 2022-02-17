
import { Route, Routes } from "react-router";
// import ReduxDemo from './components/ReduxDemo';
import ReduxDemoContainer from "./components/ReduxDemoContainer";
import store from "./store/myStore";
import { Provider } from 'react-redux';


import './App.css';
// import NavBar from "./components/NavBar";
import NewsRenderDemo from "./components/NewsRenderDemo";
import NodeServerDataDemo from "./components/NodeServerDataDemo";
import NewPlayerContainer from "./components/NewPlayerContainer";

function App() {
  return (
    <Provider store={store}>
    <Routes>
    {/* <NavBar /> */}
    <Route path="/news" element={<NewsRenderDemo />} />
    <Route path="/newPlayers" element={<NewPlayerContainer />} />
    <Route path="/nodeApp/players" element={<NodeServerDataDemo />} />
    <Route path="/redux/redux-demo2" element={<ReduxDemoContainer />} />
    <Route path="/" element={<Home />} />
    </Routes>
    </Provider>


    
  );
};

function Home() {
  return (
    // <NavBar />
    <div>
      hello HOME
    </div>

   
  )
}


export default App;
