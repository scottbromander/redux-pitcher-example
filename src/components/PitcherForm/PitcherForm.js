import React, { Component } from "react";
import { connect } from "react-redux";

class PitcherForm extends Component {
  state = {
    newPitcher: "",
  };

  handlePitcherNameChange = (event) => {
    this.setState({
      newPitcher: event.target.value,
    });
  };

  handlePitcherSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "UPDATE_PITCHERS",
      payload: this.state.newPitcher,
    });
    this.setState({
      newPitcher: "",
    });
  };

  render() {
    return (
      <div>
        <h3>All Pitchers</h3>
        <form onSubmit={this.handlePitcherSubmit}>
          <input
            type="text"
            value={this.state.newPitcher}
            onChange={this.handlePitcherNameChange}
            placeholder="New Pitcher Name"
          />
          <button type="submit">Add Pitcher</button>
        </form>
      </div>
    );
  }
}

export default connect()(PitcherForm);
