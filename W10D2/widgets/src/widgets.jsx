import React from 'react';
import ReactDOM from 'react-dom';

import Clock from "./clock";
import Tab from "./tab";
import Weather from "./weather";

const tabSeeds = [
  {title: "Tab1", content: "This is tab1"},
  {title: "Tab2", content: "This is tab2"},
  {title: "Tab3", content: "This is tab3"},
]

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  ReactDOM.render(<Root/>, root);
});

const Root = () => <div>
  <Clock></Clock>
  <Tab tabs={tabSeeds}></Tab>
  <Weather></Weather>
</div>