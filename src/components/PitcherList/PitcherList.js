import React, { Component } from "react";
import { connect } from "react-redux";

class PitcherList extends Component {
  state = {
    currentPitcher: "Maud Nelson",
    newPitcher: "",
  };

  handlePitcherSelectClick = (selectedPitcher) => () => {
    this.props.dispatch({ type: "CURRENT_PITCHER", payload: selectedPitcher });
  };

  render() {
    console.log(this.props.reduxState);
    const pitcherArray = this.props.reduxState.pitcherReducer.pitcherList.map(
      (pitcher, index) => (
        <li key={index} onClick={this.handlePitcherSelectClick(pitcher)}>
          {pitcher}
        </li>
      )
    );

    return <ul>{pitcherArray}</ul>;
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(PitcherList);
