import { Component } from "react";

class ScoreBoard extends Component {

    changeScores = () =>{
        
    }


 
  render() {
    return (
      <div style={{border:"5px solid orange"}}>
        {/* <img src={this.props.image} alt="Profile img " /> */}
        <h1>
         **********SCOREBOARD**********
         {this.props.children}

         <button onClick={this.changeScores}>
            click to increase the scores
          </button>
        </h1>
      </div>
    );
  }
}

export default ScoreBoard;
