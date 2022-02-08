import { Component } from "react";
import Address from "./Address";
import Hobby from "./Hobby";
import Qualification from "./Qualification"

class User extends Component {
  render() {
    return (
      <div>
        <h2>My Name Is {this.props.name}</h2>
        <Address address= {["2943 sangam chowk","101 ashoka ratna ", "102 Laxmi nagar"]} />
        <Hobby hobby={["Music , Cricket "]}/>
        <Qualification qualification={["BCA","MCA"]} />

        You are from 
      </div>
    );
  }
}

export default User;

// normal approach
