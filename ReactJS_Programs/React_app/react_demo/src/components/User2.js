import { Component } from "react";


class User2 extends Component {
  render() {
    return (
      <div>
        <h2>My Name Is {this.props.name}
        {this.props.children}
        </h2>
        
      </div>
    );
  }
}

export default User2;

// Children approach