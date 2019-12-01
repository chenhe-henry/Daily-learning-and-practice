import React from "react";
import Tweet from "./Tweet";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      mins: 0,
      isRed: false,
      search: ""
    };
  }
  updateSearch(event) {
    this.setState({ search: event.target.value });
  }
  handleValueAdded() {
    this.setState(state => {
      return {
        count: state.count + 1,
        mins: state.mins - 1,
        isRed: !state.isRed
      };
    });
  }
  render() {
    let filteredContacts = this.props.contacts;
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <ul>
          {filteredContacts.map(contact => {
            return <Contact contact={contact} key={contact.id} />;
          })}
        </ul>
        <h1 className={this.state.isRed ? "red" : ""}>Hello World</h1>
        <Tweet name="Dev Ed" message="Hello world" />
        <Tweet name="John" message="hi" />
        <h1>{this.state.count}</h1>
        <h1>{this.state.mins}</h1>
        <button onClick={() => this.handleValueAdded()}>Increment</button>
      </div>
    );
  }
}

export default App;
