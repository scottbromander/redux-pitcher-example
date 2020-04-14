import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const pitcherInitialState = {
  pitcherList: ["Maud Nelson", "Ila Borders", "Don Newcombe", "CC Sabathia"],
  currentPitcher: "Maud Nelson",
};

const pitcherReducer = (state = pitcherInitialState, action) => {
  if (action.type === "UPDATE_PITCHERS") {
    return {
      ...state,
      pitcherList: [...state.pitcherList, action.payload],
    };
  }

  if (action.type === "CURRENT_PITCHER") {
    return {
      ...state,
      currentPitcher: action.payload,
    };
  }

  return state;
};

const storeInstance = createStore(
  combineReducers({
    pitcherReducer,
  })
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
