import { PureComponent } from "react";
import { Link } from "react-router-dom";

// pure component : it is not having any state and it renders very fast
class NoPageFound extends PureComponent{
    render(){
        return(
            <div style={{color:"red"}}>
            <p>
                Sorry, the page u r looking for doesn't exist!! please contact the "ADMIN"!!!
            </p>
           Or go back to home page <Link to={"/"} >Home</Link>

            </div>
        );
    }
}
export default NoPageFound;