import React from "react";
import ReactDOM from "react-dom";
import store from "./frontend/store/store";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root");
  ReactDOM.render(<Root></Root>, root);
});

const Root = () => (
  <div>Components Go Here</div>
)

window.store = store;