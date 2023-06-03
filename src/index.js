import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";

// actions -> increment, decrement
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// reducers -> アクションと前の状態を受け取って新しい状態に更新する
const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

// store
const store = createStore(counterReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
