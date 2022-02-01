import { Component } from "react";
class Player extends Component{
    render(){
        return(
<div style={{border:"5px solid orange"}}>
        <h2>
          Player Name: {this.props.name}<br />
        </h2>
        <h3>Score: {this.props.score} <br /></h3>
      </div>
        )
    }



}

export default Player;