import { Component } from "react";
const initialState = {
  age: 25,
  phone: 8888888888, // creating here
};

class Person extends Component {
  //State management

  constructor(props) {
    super(props);

    this.state = initialState;
    this.state = { ...this.state, popRating: props.popularity, name: props.name };
  }

changePopularity = () => {
    this.setState((state,props)=>({popRating:this.state.popRating+1}));
  };
  render() {
    return (
      <div style={{border:"5px solid orange"}}>
        <img src={this.props.image} alt="Profile img " />
        <h2>
          My Name Is {this.state.name} and my age is {this.state.age} and phone
          number is {this.state.phone} <br />
          <h2>My Popularity is {this.state.popRating}</h2>
          <button onClick={this.changePopularity}>
            click to increase my popularity
          </button>
          <hr />
          My Father's name {this.props.fName}
          <br />
          My Mother's name {this.props.mName}
          <br /> My email Id is {this.props.email}
        </h2>
      </div>
    );
  }
}

export default Person;
