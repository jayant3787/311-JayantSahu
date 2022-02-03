import { Component } from "react";
import fruitContext from "./FruitContext";
import Apple from "./Apple";
import Mango from "./Mango";



class Fruits extends Component{
    render(){
        return(
            <div style={{border: "2px solid yellow"}}>
            
            <fruitContext.Provider value={{x:0,y:5}}>
            <Apple name="Kashmir Apple"/>
            <Mango name="Baganfalli mango"/>
            </fruitContext.Provider>
            </div>
        )
    }
}

export default Fruits;
export{fruitContext};