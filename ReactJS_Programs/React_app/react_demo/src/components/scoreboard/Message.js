import { Component } from "react";
class Message extends Component{
    constructor(props){
        super(props);
    
        this.state={
          message:""
        }
      }

    render(){
        return(

            <p>{this.state.message}</p>

        );
    }

}
export default Message;