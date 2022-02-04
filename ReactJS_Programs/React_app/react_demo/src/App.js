// import logo from './logo.svg';
import "./App.css";
import Person from "./components/Person";
import User from "./components/User";
import User2 from "./components/User2";

import Address from "./components/Address";
import Hobby from "./components/Hobby";
import Qualification from "./components/Qualification"
import ScoreBoard from "./components/scoreboard/ScoreBoard";
import LifeCycleDemo from "./components/lifecycle_demo/Demo";
import Fruits from "./components/context-demo/Fruit";
import FruitContext from "./components/context-demo/FruitContext";
import Greeting from "./components/functionalComponent_demo/Greeting";
import GreetingES6 from "./components/functionalComponent_demo/GreetingES6";
import PersonComponent from "./components/functionalComponent_demo/PersonComponent";
import ScoreBoardComponent from "./components/functionalComponent_demo/ScoreboardComponent";
// import Player from "./components/Player";

function App() {
  return (
    
    <FruitContext.Provider value={{x:2,y:5}}>
    {/* functional coponent */}
    <Greeting name="Jayant Sahu"/>
    <GreetingES6 name="JAYANT"/>
    <PersonComponent name="Virat Kohli"/>
    <ScoreBoardComponent />

    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        Hello JAYANT
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <br />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to Learn React
        </a>
        <User name="Jayant" />
        <User name="Meghal" />
        <Person
          name="Jayant Sahu"
          popularity={1}
          image="images/logo192.png"
          fName="Santosh"
          mName="Uma"
          email="abc@gmail.com"
        />
        <ScoreBoard  >
          {/* <Player name="Virat" score={60} /> */}
          {/* <Player name="Rohit"  score={80}/> */}
        </ScoreBoard>
        <LifeCycleDemo name="Jay"/>
        <Fruits />

        {/* //user 2 component is coded such a way that it will render all the children component 
            //therefore we can pass any number(even zero) of hobby,qualification,address
            //components as its children  */}
        <User2 name="Uma Sahu">
        <Address address= {["2943 sangam chowk","101 ashoka ratna ", "102 Laxmi nagar"]} />
        <Hobby hobby={["Music , Cricket "]}/>
        <Qualification qualification={["BCA","MCA"]} />

        </User2>

        {/* //inside this user2 we are only passing address, hobby
            // children */}

        <User2 name="Santosh Sahu">
        <Address address= {["2943 sangam chowk","101 ashoka ratna ", "102 Laxmi nagar"]} />
        <Hobby hobby={["Music , Cricket, Netflix"]}/>

        </User2>
      </header>
    </div>
    </FruitContext.Provider>

  );
}

export default App;
