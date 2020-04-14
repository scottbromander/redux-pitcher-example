import React, { Component } from "react";
import PitcherForm from "../PitcherForm/PitcherForm";
import PitcherList from "../PitcherList/PitcherList";
import { connect } from "react-redux";

class App extends Component {
  state = {
    currentCatcher: "Elston Howard",
    catcherList: ["Roy Campanella", "Elston Howard", "Kenji Jojima"],
    newCatcher: "",
  };

  handleCatcherNameChange = (event) => {
    this.setState({
      newCatcher: event.target.value,
    });
  };

  handleCatcherSubmit = (event) => {
    event.preventDefault();
    this.setState({
      newCatcher: "",
      catcherList: [...this.state.catcherList, this.state.newCatcher],
    });
  };

  handleCatcherSelectClick = (selectedCatcher) => () => {
    this.setState({
      currentCatcher: selectedCatcher,
    });
  };

  render() {
    return (
      <div>
        <h1>Redux Baseball Pitchers</h1>
        <h2>
          On the Mound: {this.props.reduxState.pitcherReducer.currentPitcher}
        </h2>
        <h2>Behind the Plate: {this.state.currentCatcher}</h2>
        <div>
          Total Pitchers:{" "}
          {this.props.reduxState.pitcherReducer.pitcherList.length}
        </div>
        <div>Total Catchers: {this.state.catcherList.length}</div>
        <h3>All Pitchers</h3>
        <PitcherForm />
        <PitcherList />
        <h3>All Catchers</h3>
        <form onSubmit={this.handleCatcherSubmit}>
          <input
            type="text"
            value={this.state.newCatcher}
            onChange={this.handleCatcherNameChange}
            placeholder="New Catcher Name"
          />
          <button type="submit">Add Catcher</button>
        </form>
        <ul>
          {this.state.catcherList.map((catcher, index) => (
            <li key={index} onClick={this.handleCatcherSelectClick(catcher)}>
              {catcher}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(App);
