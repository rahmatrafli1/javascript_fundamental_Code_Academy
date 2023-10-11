import { Component } from "react";

class Home extends Component {
  state = { counter: 0 };
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </>
    );
  }
}

export default Home;
