import { Component } from "react";

class Qualification extends Component {
  render() {
    return (
      <h2>
        {" "}
        ***Qualifications***{" "}
        <ul>
          {Array.from(this.props.qualification).map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </h2>
    );
  }
}

export default Qualification;
