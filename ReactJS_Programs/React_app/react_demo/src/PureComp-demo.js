import { PureComponent } from "react";

// pure component : it is not having any state and it renders very fast
class HelloWorld extends PureComponent{
    render(){
        return(
            <p>
                Aloha
            </p>
        );
    }
}
export default HelloWorld;