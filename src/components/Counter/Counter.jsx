import React from "react";
import Clock from "../Clock/Clock";
// import CounterDisplay from "../CounterDisplay/CounterDisplay";

class Counter extends React.Component {
  state = {
    counter: 0,
    showCount: true
  };

  incrementHandler = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  toggleShowCountHandler = () => {
    this.setState((prevState) => ({ showCount: !prevState.showCount }));
  };

  render() {
    return (
      <div className="col-sm-8 offset-sm-2">
        <div className="card mt-4">
          <div className="card-body text-center">
            <h5 className="card-title mb-4">Counter</h5>
            {/* {this.state.showCount && (
              <CounterDisplay counter={this.state.counter} />
            )} */}
            <button
              className="btn btn-secondary mt-3 mr-3"
              onClick={this.incrementHandler}
            >
              Increment
            </button>
            <button
              className="btn btn-warning mt-3"
              onClick={this.toggleShowCountHandler}
            >
              {this.state.showCount ? "Hide " : "Show "} Count
            </button>
             { this.state.showCount && <Clock /> }
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
