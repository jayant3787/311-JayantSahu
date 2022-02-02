import { Component } from "react";
// import Message from "./scoreboard/Message";
class Player extends Component{
  constructor(props){
    super(props);

    this.state={
      lastScore:0,
      score:props.score
    }
  }


  f1 =()=>{
    let tempScore = Math.floor(Math.random()*10)
    this.setState({score:this.state.score+tempScore,lastScore:tempScore})

  };
    render(){
        return(
<div style={{border:"5px solid orange"}}>
        <h2>
          Player Name: {this.props.name}<br />
          <button onClick={this.props.someFunc}>Click here to go to the parent</button>
        </h2>
        <h3>Score: {this.state.score} <br /></h3>
        {/* <Message /> */}
      </div>
        )
    }



}

export default Player;