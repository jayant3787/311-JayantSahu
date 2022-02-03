import { Component } from "react";
import {fruitContext} from './Fruit'

class Mango extends Component{
    static contextType = fruitContext;
    render(){
        return(
            <h3>Mango: {this.props.name}<br/>
            Origin Coordinates: {this.context.x} and {this.context.y}
            </h3>
        )
    }
}

export default Mango;