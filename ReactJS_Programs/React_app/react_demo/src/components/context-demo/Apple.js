import { Component } from "react";
import {fruitContext} from './Fruit'
import Seed from "./Seed";


class Apple extends Component{
    static contextType = fruitContext;

    render(){
        return(
            <h3>Apple: {this.props.name}<br/>
            Origin coordinates: {this.context.x} and {this.context.y}<br/><br/>
            SEED INFO: <Seed name="seed apple" />
            </h3>
        )
    }
}

export default Apple;