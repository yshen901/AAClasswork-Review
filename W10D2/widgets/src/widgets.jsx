import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./clock";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  ReactDOM.render(<Clock/>, root);
});