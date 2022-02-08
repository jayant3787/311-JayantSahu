import { useParams } from "react-router";

const HelloWorldFunc = (props) =>{
    const {city,country} = useParams();
    // const name === {props.name};
    
    return(
        
        <div>
        <p>I am from {city} which is in {country? country : ""}</p>
        <h1>{props.name}</h1>
        </div>

    )
}

export default HelloWorldFunc;