// import logo from './logo.svg';
import "./App.css";
import Person from "./components/Person";
import User from "./components/User";
import User2 from "./components/User2";

import Address from "./components/Address";
import Hobby from "./components/Hobby";
import Qualification from "./components/Qualification"
import ScoreBoard from "./components/ScoreBoard";
import Player from "./components/Player";

function App() {
  return (
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
        <ScoreBoard >
          <Player name="virat" score={50} />
          <Player name="Rohit"  score={60}/>
        </ScoreBoard>

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
  );
}

export default App;
