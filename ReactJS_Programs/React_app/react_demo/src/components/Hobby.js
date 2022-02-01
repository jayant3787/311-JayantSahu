import { Component } from "react";

class Hobby extends Component {
  render() {
    return (
      <h2>
        {" "}
        ***Hobbies***
        <ul>
          {Array.from(this.props.hobby).map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </h2>
    );
  }
}

export default Hobby;
