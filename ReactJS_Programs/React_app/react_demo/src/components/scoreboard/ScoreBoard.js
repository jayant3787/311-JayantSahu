import React, { Component } from "react";
import Player from "../Player";
import Message from "./Message";

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
     this.ref1 = React.createRef();
     this.ref2 = React.createRef();
     this.ref3 = React.createRef();

  }

  // demo of showcasing calling child's function from this parent
  changeScores = () => {
    this.ref1.current.f1();
    this.ref2.current.f1();
    // alert(this.ref1.current.state.score);
    // alert(this.ref2.current.state.score);
    var score1 = this.ref1.current.state.score;
    var score2 = this.ref2.current.state.score;
    if(score1>50){
      // alert(score1);
      this.ref3.current.setState((state,props)=>({message:"Winner is Virat"}))
    }
    else if(score2>50){
      // alert(score1);
      this.ref3.current.setState((state,props)=>({message:"Winner is Rohit"}))

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
          {/* {this.props.children} */}
          <button onClick={this.changeScores}>
            CLICK HERE TO CHANGE THE SCORES RANDOMLY
          </button>
        
      </div>
    );
  }
}

export default ScoreBoard;
