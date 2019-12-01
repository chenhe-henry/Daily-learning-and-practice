import React from "react";
import "./App.css";

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="tweet">
        <h3>{this.props.name}</h3>
        <p>{this.props.message}</p>
        <h3>Number of likes</h3>
      </div>
    );
  }
}

export default Tweet;
