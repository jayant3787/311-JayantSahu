import { Component } from "react";

class Address extends Component {
  render() {
    // var a = this.props.address

    return (
      <h2>
        {" "}
        ***Address***
        <ul>
          {Array.from(this.props.address).map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </h2>
    );
  }
}

export default Address;
