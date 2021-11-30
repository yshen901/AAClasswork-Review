import React from "react";

export default class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { name, happiness, price } = this.props.item;
    return (
      <ul>
        <li>
          <h3>{ name }</h3>
        </li>
        <li>
          Happiness: { happiness }
        </li>
        <li>
          Price: ${ price }
        </li>
      </ul>
    );
  }
}