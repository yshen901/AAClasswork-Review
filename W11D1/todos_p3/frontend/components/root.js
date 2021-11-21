import React from "react";
import { Provider } from "react-redux";
import App from "./app";

const Root = ({store}) => (
  <Provider store={store}>
    <App></App>
  </Provider>
)
export default Root;