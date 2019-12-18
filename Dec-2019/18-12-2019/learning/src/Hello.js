import React from "react";
import PropTypes from "prop-types";
export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "World" };
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
    console.log(e.target.value);
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <input type="text" onChange={e => this.handleChange(e)} />
        <br />
      </div>
    );
  }
}
