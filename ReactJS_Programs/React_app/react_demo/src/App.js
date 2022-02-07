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
import HelloWorld from "./PureComp-demo"
import MyEvent from "./components/event-handling-demo/MyEvent";
import FormDemo from "./components/form-handling/FormDemo";
import ControlledComponentFormDemo from "./components/form-handling/ControlledComponentFormDemo";
import ControlledComponentFormDemoWithMoreFormElements from "./components/form-handling/ControlledComponentFormDemoWithMoreFormElements";
import PlayerRegistration from "./components/form-handling/PlayerRegistration";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
// import Player from "./components/Player";


function App() {
  return(
  <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/apps" element={<App1 />}/>
      <Route path="/form-demos" element={<PlayerRegistration />}/>
      <Route path="/form-demos1" element={<ControlledComponentFormDemo />}/>
      <Route path="/form-demos2" element={<ControlledComponentFormDemoWithMoreFormElements />}/>
      <Route path="/form-demos3" element={<FormDemo />}/>
    </Routes>
  )
};

function Home(){
  return(
    <div>
      <Link style={{margin:"20px"}} to="/">Home</Link>
      <Link style={{margin:"20px"}} to="/apps">App1</Link>
      <Link style={{margin:"20px"}} to="/form-demos">PlayerRegistration</Link>
      <Link style={{margin:"20px"}} to="/form-demos1">ControlledFormDemo</Link>
      <Link style={{margin:"20px"}} to="/form-demos2">ControlledFormDemoWithMore</Link>
      <Link style={{margin:"20px"}} to="/form-demos3">FormDemo</Link>

      


    </div>
  )
}

function App1() {
  return (
    
    <FruitContext.Provider value={{x:2,y:5}}>

    {/* router demo */}
    

    {/* event handling */}

    <MyEvent />
    <FormDemo />
    <ControlledComponentFormDemo />
    <ControlledComponentFormDemoWithMoreFormElements />
    <PlayerRegistration />



    {/* functional coponent */}
    <Greeting name="Jayant Sahu"/>
    <GreetingES6 name="JAYANT"/>
    <PersonComponent name="Virat Kohli"/>
    <ScoreBoardComponent />
    <HelloWorld />

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
        ><h4>Click here to Learn React</h4><br />
        <h4>HOLA</h4>
        <h2 id="myH2">HI</h2>

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
