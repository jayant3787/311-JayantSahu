import { Component } from "react";
import fruitContext from "./FruitContext";

class Seed extends Component{
    static contextType = fruitContext;

    constructor(props){
        super(props);
        this.state={
            myX:0,
            myY:0
        }
    }
    changeContext = () =>{
        this.context.x = this.context.x + 1;
        this.context.y = this.context.y + 1;
        this.setState=({
            myX:this.context.x, myY:this.context.y
        });



    }
    render(){
        return(
            <h3>Seed: {this.props.name}<br/>
            Origin Coordinates: {this.state.myX} and {this.state.myY}<br/>
            <button onClick={this.changeContext}>Click</button>


            </h3>
            

        )
    }
}
export default Seed;
