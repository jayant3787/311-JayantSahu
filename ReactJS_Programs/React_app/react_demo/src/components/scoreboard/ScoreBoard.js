import React, { Component } from "react";
import Player from "../Player";
import Commentary from "./Commentary";
import Message from "./Message";

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
     this.ref1 = React.createRef();
     this.ref2 = React.createRef();
     this.ref3 = React.createRef();
     this.ref4 = React.createRef();


  }

  // demo of showcasing calling child's function from this parent
  changeScores = () => {
    this.ref1.current.f1();
    this.ref2.current.f1();
 
    var score1 = this.ref1.current.state.score;
    var score2 = this.ref2.current.state.score;

    var lastScore1 = this.ref1.current.state.lastScore;
    var lastScore2 = this.ref2.current.state.lastScore;
    this.ref4.current.setState((state,props)=>({commentary:`${this.ref1.current.props.name} scored runs ${lastScore1} and ${this.ref2.current.props.name} scored runs ${lastScore2}`}))


    if(score1>50){
      // alert(score1);
      this.ref3.current.setState((state,props)=>({message:`${this.ref1.current.props.name} is winner`}))
      this.ref4.current.setState((state,props)=>({commentary:`${this.ref1.current.props.name} reaches his half century`}))

    }
    else if(score2>50){
      // alert(score1);
      this.ref3.current.setState((state,props)=>({message:`${this.ref1.current.props.name} is Winner`}))
      this.ref4.current.setState((state,props)=>({commentary:`${this.ref2.current.props.name} reaches his half century`}))


    }


  };

  f2=()=>{
    alert("in scoreboard parent");
  }

  render() {
    return (
      <div style={{ border: "5px solid orange" }}>
        <h1>
          **********SCOREBOARD**********
          <br />
          INDIA</h1>
          <Player name="Virat" ref={this.ref1} score={0} someFunc={this.f2} />
          <Player name="Rohit" ref={this.ref2} score={0} someFunc={this.f2}/>
          <Message ref={this.ref3}/>
          <Commentary ref={this.ref4} />
          {/* {this.props.children} */}
          <button style={{height:"50px",width:"100px"}}onClick={this.changeScores}>
            PLAY
          </button>
        
      </div>
    );
  }
}

export default ScoreBoard;
