import { Component } from "react";

class LifeCycleDemo extends Component{
  constructor(props){
    super(props);
    this.state={
        name:props.name
      }
      console.log("new name");
  }
  f1 =()=>{
    this.setState({name:this.state.name + Math.floor(Math.random()*10)})
  };

  static getDerivedStateFromProps(props,state){
    console.log("Inside GetDerivedFromProps");

   }
   componentDidMount(){
       console.log("Inside componentDidMount");
   }


   

  
    render(){
        return(
            <div style={{border:"5px solid orange"}}>
                <hr/>
                Life cycle demo component<hr/>
                Hello My Name Is {this.state.name}
                <button onClick={this.f1}>Change name</button>
                <a href="test.html"> click to go test.html</a>

            </div>

        )
    }
    //updating
    shouldComponentUpdate(nextProps, nextState){
        console.log("Inside shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Inside getSnapshotBeforeUpdate");

    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Inside componentDidUpdate");

    }

    componentWillUnmount(){
        console.log("Inside componentWillUnmount");

    }









}

export default LifeCycleDemo;