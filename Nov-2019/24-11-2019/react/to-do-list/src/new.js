import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container } from "react-bootstrap";
import "./Search.css";
import { BACKEND_URL } from "../config";

class Search extends React.Component {
  state = {
    flightList: [],
    flightFrom: "",
    flightTo: "",
    filteredFlights: [],
    isSearching: false
  };

  componentDidMount() {
    let self = this;

    fetch(BACKEND_URL + "/flights.json") // this needs to go to /flights/:id/info.json
      .then(response => response.json())
      .then(json => {
        self.setState(state => {
          console.log("json :", json);

          return {
            ...state,
            flightList: [...json]
          };
        });
      });
  }
  updateSearch(data) {}

  handleFlightFromEntered(event) {
    const newFlightFrom = event.target.value.toUpperCase();
    this.setState({ flightFrom: newFlightFrom });
  }
  handleFlightToEntered(event) {
    const newFlightTo = event.target.value.toUpperCase();
    this.setState({ flightTo: newFlightTo });
  }

  handleSearchFlight() {
    const flightSearchString = this.state.flightFrom + this.state.flightTo;
    console.log("flightSearchString :", flightSearchString);
    const filteredFlights = this.state.flightList.filter(flight => {
      const thisFlightsString =
        flight.origin.toUpperCase() + flight.destination.toUpperCase();
      return thisFlightsString === flightSearchString;
    });

    // this.setState({ filteredFlights: filteredFlights });
    this.setState({
      filteredFlights: filteredFlights,
      isSearching: true
    });
  }
  handleCancelSearch() {
    this.setState({
      isSearching: false
    });
  }

  render() {
    const flightElements = this.state.filteredFlights.map(flightList => {
      return (
        <Fragment>
          <tbody id="myTable" key={flightList.id}>
            <tr>
              <td>{flightList.date}</td>
              <td>
                <a href={"/flights/" + flightList.id}>
                  {flightList.flight_number}
                </a>
              </td>
              <td>{flightList.origin}</td>
              <td>{flightList.destination}</td>
              <td>{flightList.airplane_id}</td>
              <td>{flightList.flightSeats}</td>
            </tr>
          </tbody>
        </Fragment>
      );
    });

    return (
      <div id="searchBackground">
        <label id="From">
          From
          <input
            type="text"
            onChange={event => this.handleFlightFromEntered(event)}
          />
        </label>
        <label id="To">
          To
          <input
            type="text"
            onChange={event => this.handleFlightToEntered(event)}
          />
        </label>
        <button onClick={() => this.handleSearchFlight()}>Find Flights</button>
        <button onClick={() => this.handleCancelSearch()}>Cancel</button>
        <div>
          {this.state.isSearching && (
            <Container>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Flight</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Plane</th>
                    <th>Seats</th>
                  </tr>
                </thead>
                {flightElements}
              </Table>
            </Container>
          )}
          {!this.state.isSearching && (
            <div>
              <h3>Begin your search</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Search;

export const BACKEND_URL = "http://localhost:3005";
