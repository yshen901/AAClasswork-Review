import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root");
  ReactDOM.render(<Root></Root>, root);
});

const Root = () => (
  <div>Components Go Here</div>
)