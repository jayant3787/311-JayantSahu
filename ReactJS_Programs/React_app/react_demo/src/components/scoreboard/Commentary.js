import { Component } from "react";

class Commentary extends Component{
    constructor(props){
        super(props);
    
        this.state={
          commentary:""
        }
      }
    render(){
        return(
            <p>{this.state.commentary}</p>

        );
    }
}

export default Commentary;