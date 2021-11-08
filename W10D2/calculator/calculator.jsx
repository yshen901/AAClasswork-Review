import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { num1: '', num2: '', value: '' }

    this.setNum = this.setNum.bind(this);
    this.clear = this.clear.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  setNum(e) {
    this.setState({
      [e.target.id]: parseInt(e.target.value) // Use brackets for dynamic keys
    });
  }

  // Set to null to clear the field
  clear() {
    this.setState({
      num1: '',
      num2: ''
    });
  }

  // NaN for when one is null
  calculate(e) {
    let value;
    let { num1, num2 } = this.state;
    let op = e.target.innerText;

    debugger;

    if (this.state.num1 === '' || this.state.num2 === '')
      value = "NaN";
    else if (op === "+")
      value = num1 + num2;
    else if (op === "-")
      value = num1 - num2;
    else if (op === "*")
      value = num1 * num2;
    else if (op === "/") {
      if (num2 === 0)
        value = Infinity;
      else
        value = num1 / num2;
    }

    this.setState({ value: value });
  }

  render() {
    return (
      <div>
        <div>{ this.state.value }</div>
        <div>
          <input type="text" id="num1" onChange={ this.setNum } value={ this.state.num1 }/>
          <input type="text" id="num2" onChange={ this.setNum } value={ this.state.num2 }/>
          <button onClick={ this.clear }>Clear Values</button>
        </div>
        <div>
          <button onClick={ this.calculate }>+</button>
          <button onClick={ this.calculate }>-</button>
          <button onClick={ this.calculate }>*</button>
          <button onClick={ this.calculate }>/</button>
        </div>
      </div>
    );
  }
}

export default Calculator;